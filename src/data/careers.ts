import { Career, DimensionKey } from '../types';

type IdealProfile = Record<DimensionKey, number>;

const createIdealProfile = (overrides: Partial<IdealProfile>): IdealProfile => ({
  social: 3,
  information: 3,
  decision: 3,
  lifestyle: 3,
  leadership: 3,
  creativity: 3,
  independence: 3,
  stress: 3,
  execution: 3,
  communication: 3,
  ...overrides,
});

export const careers: Career[] = [
  {
    id: 'leader',
    name: '领袖型',
    icon: '👑',
    description: '你天生具有领导气质，善于激励团队、制定战略、做出决策。你在压力下保持冷静，能够带领团队克服困难，实现目标。',
    traits: ['自信果断', '有号召力', '战略思维', '敢于担当', '目标导向'],
    suitableEnvironments: ['创业公司', '管理层', '项目管理', '战略规划'],
    developmentTips: ['培养倾听能力', '注重团队培养', '学习情绪管理', '保持谦逊心态'],
    idealProfile: createIdealProfile({
      social: 5, leadership: 5, stress: 4, decision: 4, communication: 4
    }),
    jobs: ['CEO/创始人', '项目总监', '部门经理', '创业者', '政治家'],
  },
  {
    id: 'creative',
    name: '创意型',
    icon: '🎨',
    description: '你拥有丰富的想象力和创新思维，讨厌被规则束缚。你善于从不同角度思考问题，创造出独特的作品和解决方案。',
    traits: ['想象力丰富', '思维跳脱', '追求独特', '美感敏锐', '敢于尝试'],
    suitableEnvironments: ['创意agency', '设计工作室', '自媒体', '艺术创作'],
    developmentTips: ['学会将创意落地', '培养时间管理', '寻找创作反馈', '平衡理想与现实'],
    idealProfile: createIdealProfile({
      creativity: 5, information: 4, independence: 4, lifestyle: 4, social: 2
    }),
    jobs: ['平面设计师', '品牌策划', '广告创意', 'UI/UX设计师', '内容创作者'],
  },
  {
    id: 'tech',
    name: '技术型',
    icon: '💻',
    description: '你对技术有强烈的兴趣和天赋，善于逻辑思考和问题分析。你喜欢钻研技术细节，追求解决方案的准确性和效率。',
    traits: ['逻辑性强', '分析能力', '专注细节', '自学能力强', '追求完美'],
    suitableEnvironments: ['科技公司', '研发中心', '互联网企业', '数据部门'],
    developmentTips: ['培养沟通能力', '关注业务价值', '提升协作意识', '保持技术好奇'],
    idealProfile: createIdealProfile({
      information: 1, independence: 4, execution: 4, creativity: 3, social: 2
    }),
    jobs: ['软件工程师', '数据分析师', '算法工程师', '系统架构师', '技术支持'],
  },
  {
    id: 'analyst',
    name: '分析型',
    icon: '🔍',
    description: '你善于收集信息、分析数据、发现规律。你具备批判性思维，能够从复杂情况中提取关键信息，提供有价值的洞察。',
    traits: ['逻辑严密', '客观理性', '洞察力强', '善于研究', '数据敏感'],
    suitableEnvironments: ['咨询公司', '研究机构', '金融分析', '战略部门'],
    developmentTips: ['提升表达说服力', '关注趋势变化', '培养商业敏感', '学会讲故事'],
    idealProfile: createIdealProfile({
      information: 1, decision: 1, independence: 4, stress: 2, communication: 2
    }),
    jobs: ['管理咨询师', '商业分析师', '策略研究员', '市场研究员', '投资分析师'],
  },
  {
    id: 'service',
    name: '服务型',
    icon: '🤝',
    description: '你关心他人的需求和感受，善于倾听和沟通。你在人际交往中展现出真诚和耐心，能够帮助他人成长和解决问题。',
    traits: ['同理心强', '善于倾听', '耐心温和', '善于引导', '人际和谐'],
    suitableEnvironments: ['教育培训', '人力资源', '心理咨询', '医疗服务'],
    developmentTips: ['设立个人边界', '提升专业能力', '学会说不', '保持情绪抽离'],
    idealProfile: createIdealProfile({
      social: 4, decision: 5, communication: 4, stress: 3, independence: 2
    }),
    jobs: ['教师/培训师', '心理咨询师', '人力资源专员', '社工', '职业顾问'],
  },
  {
    id: 'artistic',
    name: '艺术型',
    icon: '✒️',
    description: '你拥有独特的审美和表达能力，追求自由和自我表达。你对艺术有深刻的理解和热情，善于用作品传达情感和思想。',
    traits: ['审美独特', '情感丰富', '追求自由', '敏感细腻', '善于表达'],
    suitableEnvironments: ['艺术创作', '媒体传播', '文化机构', '自由职业'],
    developmentTips: ['建立稳定收入', '培养商业思维', '持续创作输出', '寻找艺术社群'],
    idealProfile: createIdealProfile({
      creativity: 5, independence: 5, social: 2, lifestyle: 4, execution: 1
    }),
    jobs: ['作家/编剧', '艺术家', '音乐制作人', '摄影师', '策展人'],
  },
  {
    id: 'business',
    name: '商业型',
    icon: '📈',
    description: '你对商业机会有敏锐的嗅觉，善于谈判和说服。你充满活力和野心，追求成就和认可，能够在竞争中脱颖而出。',
    traits: ['目标导向', '善于交际', '抗压能力强', '商业敏锐', '行动力强'],
    suitableEnvironments: ['销售商务', '创业投资', '市场营销', '国际贸易'],
    developmentTips: ['提升专业深度', '培养长期思维', '注重诚信经营', '学会授权'],
    idealProfile: createIdealProfile({
      social: 5, communication: 5, stress: 4, decision: 2, lifestyle: 4
    }),
    jobs: ['销售总监', '市场营销经理', '创业者', '投资顾问', '商务拓展'],
  },
  {
    id: 'executive',
    name: '执行型',
    icon: '⚙️',
    description: '你注重细节和准确性，善于组织和规划。你在处理日常事务和流程管理方面表现出色，能够确保工作高效运转。',
    traits: ['细心严谨', '组织能力强', '责任心强', '守规矩', '执行力强'],
    suitableEnvironments: ['行政管理', '财务管理', '运营部门', '政府机构'],
    developmentTips: ['培养创新能力', '提升战略思维', '学会授权', '拥抱变化'],
    idealProfile: createIdealProfile({
      execution: 1, lifestyle: 1, stress: 1, information: 1, independence: 2
    }),
    jobs: ['行政主管', '财务专员', '运营经理', '项目经理', '政府公务员'],
  },
  {
    id: 'researcher',
    name: '研究型',
    icon: '🔬',
    description: '你对知识和真理有强烈的渴望，享受深入探究的过程。你具备严谨的治学态度，能够在专业领域持续深耕。',
    traits: ['求知欲强', '专注深入', '逻辑严谨', '耐心持久', '追求真理'],
    suitableEnvironments: ['科研机构', '高等教育', '医疗机构', '技术研发'],
    developmentTips: ['培养跨学科视野', '提升表达能力', '加强团队合作', '注重成果转化'],
    idealProfile: createIdealProfile({
      independence: 5, information: 1, stress: 2, creativity: 3, social: 1
    }),
    jobs: ['科学家', '医学研究员', '大学教授', '高级工程师', '技术专家'],
  },
  {
    id: 'social',
    name: '社交型',
    icon: '🎭',
    description: '你天生善于社交，能够轻松与不同类型的人建立联系。你善于表达和协调，在公共关系和对外联络方面有天然优势。',
    traits: ['外向开朗', '善于交际', '表达能力强', '应变灵活', '人脉广泛'],
    suitableEnvironments: ['公关媒体', '外交往来', '活动策划', '客户服务'],
    developmentTips: ['深化专业能力', '培养深度关系', '提升内容质量', '保持真诚'],
    idealProfile: createIdealProfile({
      social: 5, communication: 5, lifestyle: 4, stress: 4, creativity: 3
    }),
    jobs: ['公关经理', '活动策划', '外交人员', '主持人', '客户经理'],
  },
  {
    id: 'operator',
    name: '操作型',
    icon: '🔧',
    description: '你擅长动手操作和技术实践，享受将想法变成现实的过程。你对技术有热情，能够解决实际的 technical 问题。',
    traits: ['动手能力强', '务实可靠', '技术兴趣', '解决问题', '注重实效'],
    suitableEnvironments: ['工程技术', '制造生产', '技术支持', '技术销售'],
    developmentTips: ['拓展技术视野', '提升管理能力', '学习理论知识', '培养创新思维'],
    idealProfile: createIdealProfile({
      information: 1, independence: 3, execution: 3, stress: 3, creativity: 2
    }),
    jobs: ['机械工程师', '电气工程师', '技术支持工程师', '技术销售', '质量检测'],
  },
  {
    id: 'manager',
    name: '管理型',
    icon: '📋',
    description: '你具备全面的管理能力，能够平衡各方需求，协调资源配置。你既有战略眼光，又注重执行落地，是团队的中坚力量。',
    traits: ['统筹能力强', '平衡各方', '执行有力', '责任担当', '成熟稳重'],
    suitableEnvironments: ['企业管理层', '政府部门', '非营利组织', '综合管理'],
    developmentTips: ['持续学习提升', '培养接班人', '关注行业趋势', '保持工作生活平衡'],
    idealProfile: createIdealProfile({
      leadership: 4, decision: 3, communication: 3, social: 4, stress: 3
    }),
    jobs: ['企业高管', '部门总监', '运营总监', '总经理助理', '项目管理办公室'],
  },
];
