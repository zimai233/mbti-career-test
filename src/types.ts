export type DimensionKey = 
  | 'social'        // 社交倾向 (内向/外向)
  | 'information'   // 信息获取 (实感/直觉)
  | 'decision'      // 决策方式 (思考/情感)
  | 'lifestyle'     // 生活方式 (判断/知觉)
  | 'leadership'    // 领导力 (主导/协作)
  | 'creativity'    // 创意性 (传统/创新)
  | 'independence'  // 独立性 (自主/依赖)
  | 'stress'        // 压力承受 (稳定/弹性)
  | 'execution'     // 执行力 (计划/灵活)
  | 'communication'; // 沟通风格 (直接/含蓄)

export interface Dimension {
  key: DimensionKey;
  name: string;
  leftLabel: string;
  rightLabel: string;
  description: string;
  weight: number;
}

export interface Question {
  id: number;
  text: string;
  dimension: DimensionKey;
  direction: 'left' | 'right';
  options: {
    text: string;
    value: number;
  }[];
}

export interface Answer {
  questionId: number;
  value: number;
}

export interface UserProfile {
  scores: Record<DimensionKey, number>;
}

export interface Career {
  id: string;
  name: string;
  icon: string;
  description: string;
  traits: string[];
  suitableEnvironments: string[];
  developmentTips: string[];
  idealProfile: Record<DimensionKey, number>;
  jobs: string[];
}

export interface CareerMatch {
  career: Career;
  matchPercentage: number;
  analysis: string;
}

export type AppPhase = 'welcome' | 'testing' | 'analyzing' | 'result';
