import { Answer, DimensionKey, UserProfile, Career, CareerMatch } from '../types';
import { questions } from '../data/questions';
import { careers } from '../data/careers';
import { dimensions } from '../data/dimensions';

export function calculateProfile(answers: Answer[]): UserProfile {
  const scores: Record<DimensionKey, number[]> = {
    social: [],
    information: [],
    decision: [],
    lifestyle: [],
    leadership: [],
    creativity: [],
    independence: [],
    stress: [],
    execution: [],
    communication: [],
  };

  answers.forEach((answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    if (question) {
      scores[question.dimension].push(answer.value);
    }
  });

  const avgScores: Record<DimensionKey, number> = {} as Record<DimensionKey, number>;
  
  (Object.keys(scores) as DimensionKey[]).forEach((key) => {
    const dimensionScores = scores[key];
    if (dimensionScores.length > 0) {
      const avg = dimensionScores.reduce((a, b) => a + b, 0) / dimensionScores.length;
      avgScores[key] = Math.round(avg * 10) / 10;
    } else {
      avgScores[key] = 3;
    }
  });

  return { scores: avgScores };
}

function calculateDimensionSimilarity(
  userScore: number,
  careerScore: number,
  dimension: DimensionKey
): number {
  const dimensionInfo = dimensions.find((d) => d.key === dimension);
  const weight = dimensionInfo?.weight || 1;
  
  const maxDiff = 4;
  const diff = Math.abs(userScore - careerScore);
  const similarity = 1 - diff / maxDiff;
  
  return similarity * weight;
}

export function calculateCareerMatches(profile: UserProfile): CareerMatch[] {
  const matches: CareerMatch[] = careers.map((career) => {
    let totalWeight = 0;
    let weightedSimilarity = 0;

    (Object.keys(profile.scores) as DimensionKey[]).forEach((key) => {
      const dimension = dimensions.find((d) => d.key === key);
      if (dimension) {
        const similarity = calculateDimensionSimilarity(
          profile.scores[key],
          career.idealProfile[key],
          key
        );
        weightedSimilarity += similarity * dimension.weight;
        totalWeight += dimension.weight;
      }
    });

    const matchPercentage = Math.round((weightedSimilarity / totalWeight) * 100);
    
    const analysis = generateAnalysis(profile, career);

    return {
      career,
      matchPercentage,
      analysis,
    };
  });

  return matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
}

function generateAnalysis(profile: UserProfile, career: Career): string {
  const matches: string[] = [];
  const gaps: string[] = [];

  (Object.keys(profile.scores) as DimensionKey[]).forEach((key) => {
    const dimension = dimensions.find((d) => d.key === key);
    if (!dimension) return;

    const diff = profile.scores[key] - career.idealProfile[key];
    const absDiff = Math.abs(diff);

    if (absDiff <= 0.5) {
      matches.push(dimension.name);
    } else if (absDiff >= 1.5) {
      gaps.push(dimension.name);
    }
  });

  if (matches.length >= 3) {
    return `你在${matches.slice(0, 3).join('、')}方面与该职业高度契合，这是你的天然优势所在。`;
  }
  
  if (gaps.length > 0) {
    return `该职业需要你在${gaps.slice(0, 2).join('和')}方面有所提升，通过学习和实践可以弥补这些差距。`;
  }
  
  return '你具备该职业所需的基本素质，进一步发展将帮助你更好地胜任这个角色。';
}

export function getMBTIType(profile: UserProfile): string {
  const { social, information, decision, lifestyle } = profile.scores;
  
  const e_i = social >= 3 ? 'E' : 'I';
  const s_n = information >= 3 ? 'N' : 'S';
  const t_f = decision >= 3 ? 'F' : 'T';
  const j_p = lifestyle >= 3 ? 'P' : 'J';
  
  return e_i + s_n + t_f + j_p;
}

export function getMBTIDescription(mbtiType: string): string {
  const descriptions: Record<string, string> = {
    'INTJ': '建筑大师 - 富有想象力和战略性，自主独立，追求知识和理解',
    'INTP': '逻辑学家 - 喜欢理论框架，追求精确，善于分析',
    'ENTJ': '指挥官 - 自信果断，天生的领导者，善于制定战略',
    'ENTP': '辩论家 - 思维敏捷，富有创意，喜欢智识挑战',
    'INFJ': '提倡者 - 理想主义，有洞察力，专注于帮助他人',
    'INFP': '调停者 - 忠诚理想主义者，富有同理心，追求意义',
    'ENFJ': '主人公 - 魅力四射，天生的领导者，关心他人成长',
    'ENFP': '竞选者 - 热情洋溢，富有想象力，善于激励他人',
    'ISTJ': '物流师 - 务实可靠，注重责任，有条不紊',
    'ISFJ': '守护者 - 忠诚体贴，默默奉献，注重细节',
    'ESTJ': '总经理 - 务实高效，注重秩序，善于管理',
    'ESFJ': '执政官 - 热情友好，注重社交，善于照顾他人',
    'ISTP': '鉴赏家 - 务实灵活，动手能力强，善于解决具体问题',
    'ISFP': '探险家 - 灵活敏捷，注重审美，享受当下',
    'ESTP': '企业家 - 灵活务实，喜欢冒险，享受刺激',
    'ESFP': '表演者 - 热情活泼，善于社交，享受关注',
  };
  
  return descriptions[mbtiType] || '独特的性格组合';
}
