import { Question } from '../types';

export const questions: Question[] = [
  // 社交倾向 (3题)
  {
    id: 1,
    text: '在周末，你更愿意：',
    dimension: 'social',
    direction: 'right',
    options: [
      { text: '参加朋友聚会或社交活动', value: 5 },
      { text: '和几个亲密朋友小聚', value: 4 },
      { text: '一个人安静地待着', value: 2 },
      { text: '在家看书或看电影', value: 1 },
    ],
  },
  {
    id: 2,
    text: '在陌生场合，你通常会：',
    dimension: 'social',
    direction: 'right',
    options: [
      { text: '主动与陌生人交谈', value: 5 },
      { text: '等待别人来打招呼', value: 3 },
      { text: '观察一会儿再决定', value: 2 },
      { text: '尽量避免社交', value: 1 },
    ],
  },
  {
    id: 3,
    text: '获得能量的方式主要是：',
    dimension: 'social',
    direction: 'right',
    options: [
      { text: '与他人交流互动', value: 5 },
      { text: '偶尔的社交活动', value: 3 },
      { text: '安静的个人时间', value: 2 },
      { text: '完全独处', value: 1 },
    ],
  },
  // 信息获取 (3题)
  {
    id: 4,
    text: '阅读新闻时，你更关注：',
    dimension: 'information',
    direction: 'right',
    options: [
      { text: '未来趋势和创新想法', value: 5 },
      { text: '数据分析和技术细节', value: 4 },
      { text: '实际发生的事件', value: 2 },
      { text: '具体的数字和事实', value: 1 },
    ],
  },
  {
    id: 5,
    text: '处理问题时，你倾向于：',
    dimension: 'information',
    direction: 'right',
    options: [
      { text: '寻找全新的解决方案', value: 5 },
      { text: '结合多种已有方法', value: 3 },
      { text: '使用经过验证的方法', value: 2 },
      { text: '严格按照既定流程', value: 1 },
    ],
  },
  {
    id: 6,
    text: '你看重一个人的：',
    dimension: 'information',
    direction: 'right',
    options: [
      { text: '想象力和潜力', value: 5 },
      { text: '实际操作能力', value: 2 },
      { text: '过往经验和成绩', value: 1 },
      { text: '扎实的专业技能', value: 1 },
    ],
  },
  // 决策方式 (3题)
  {
    id: 7,
    text: '做重要决定时，你更看重：',
    dimension: 'decision',
    direction: 'right',
    options: [
      { text: '是否符合自己的价值观', value: 5 },
      { text: '对他人的影响', value: 4 },
      { text: '利弊分析', value: 2 },
      { text: '逻辑和数据支持', value: 1 },
    ],
  },
  {
    id: 8,
    text: '当朋友遇到困难时，你会：',
    dimension: 'decision',
    direction: 'right',
    options: [
      { text: '给予情感支持和安慰', value: 5 },
      { text: '帮忙分析问题原因', value: 2 },
      { text: '提供实际的解决方案', value: 1 },
      { text: '给他空间自己处理', value: 1 },
    ],
  },
  {
    id: 9,
    text: '你评价一份工作好不好，主要看：',
    dimension: 'decision',
    direction: 'right',
    options: [
      { text: '团队氛围和同事关系', value: 5 },
      { text: '对社会的贡献', value: 4 },
      { text: '个人成长空间', value: 3 },
      { text: '薪资待遇和发展前景', value: 1 },
    ],
  },
  // 生活方式 (3题)
  {
    id: 10,
    text: '你更喜欢：',
    dimension: 'lifestyle',
    direction: 'right',
    options: [
      { text: '保持灵活，随机应变', value: 5 },
      { text: '有计划但可调整', value: 3 },
      { text: '提前做好详细计划', value: 2 },
      { text: '严格按照计划执行', value: 1 },
    ],
  },
  {
    id: 11,
    text: '面对截止日期，你通常会：',
    dimension: 'lifestyle',
    direction: 'right',
    options: [
      { text: '最后时刻高效完成', value: 5 },
      { text: '偶尔拖延但能完成', value: 3 },
      { text: '有条不紊地推进', value: 2 },
      { text: '提前完成以免意外', value: 1 },
    ],
  },
  {
    id: 12,
    text: '你更欣赏的品质是：',
    dimension: 'lifestyle',
    direction: 'right',
    options: [
      { text: '适应性和灵活性', value: 5 },
      { text: '好奇心和开放性', value: 4 },
      { text: '可靠性和自律性', value: 1 },
      { text: '组织能力和条理性', value: 1 },
    ],
  },
  // 领导力 (3题)
  {
    id: 13,
    text: '在团队项目中，你更希望：',
    dimension: 'leadership',
    direction: 'right',
    options: [
      { text: '担任领导者角色', value: 5 },
      { text: '作为核心成员贡献想法', value: 3 },
      { text: '在自己擅长的领域负责', value: 2 },
      { text: '配合团队完成分配的任务', value: 1 },
    ],
  },
  {
    id: 14,
    text: '当意见产生分歧时，你通常会：',
    dimension: 'leadership',
    direction: 'right',
    options: [
      { text: '坚持自己的想法说服他人', value: 5 },
      { text: '寻求妥协方案', value: 3 },
      { text: '尊重多数人的决定', value: 2 },
      { text: '配合主导者的意见', value: 1 },
    ],
  },
  {
    id: 15,
    text: '你更享受：',
    dimension: 'leadership',
    direction: 'right',
    options: [
      { text: '指挥和协调他人', value: 5 },
      { text: '与他人合作完成任务', value: 3 },
      { text: '独立完成工作', value: 2 },
      { text: '在指导下工作', value: 1 },
    ],
  },
  // 创意性 (3题)
  {
    id: 16,
    text: '你更喜欢的工作方式是：',
    dimension: 'creativity',
    direction: 'right',
    options: [
      { text: '自由发挥，不受限制', value: 5 },
      { text: '适度创新，有一定框架', value: 3 },
      { text: '遵循既定流程', value: 2 },
      { text: '严格按照标准操作', value: 1 },
    ],
  },
  {
    id: 17,
    text: '你对于规则的看法是：',
    dimension: 'creativity',
    direction: 'right',
    options: [
      { text: '规则是用来打破的', value: 5 },
      { text: '可以适度挑战', value: 3 },
      { text: '有必要但可以优化', value: 2 },
      { text: '应当严格遵守', value: 1 },
    ],
  },
  {
    id: 18,
    text: '你更喜欢：',
    dimension: 'creativity',
    direction: 'right',
    options: [
      { text: '探索未知的可能性', value: 5 },
      { text: '改进现有的事物', value: 3 },
      { text: '维持稳定的状态', value: 2 },
      { text: '传承经典的方法', value: 1 },
    ],
  },
  // 独立性 (3题)
  {
    id: 19,
    text: '面对复杂任务时，你倾向于：',
    dimension: 'independence',
    direction: 'right',
    options: [
      { text: '独自研究解决方案', value: 5 },
      { text: '先自己思考再请教他人', value: 3 },
      { text: '寻求他人的建议和帮助', value: 2 },
      { text: '希望有人全程指导', value: 1 },
    ],
  },
  {
    id: 20,
    text: '你更喜欢的工作环境是：',
    dimension: 'independence',
    direction: 'right',
    options: [
      { text: '高度自主独立完成', value: 5 },
      { text: '以自己为主，适当协作', value: 3 },
      { text: '团队协作为主', value: 2 },
      { text: '需要密切配合的工作', value: 1 },
    ],
  },
  {
    id: 21,
    text: '在学习新技能时，你：',
    dimension: 'independence',
    direction: 'right',
    options: [
      { text: '喜欢自己探索钻研', value: 5 },
      { text: '先自学再找人讨论', value: 3 },
      { text: '喜欢有人手把手教', value: 2 },
      { text: '需要系统的培训课程', value: 1 },
    ],
  },
  // 压力承受 (3题)
  {
    id: 22,
    text: '面对高压工作环境，你通常：',
    dimension: 'stress',
    direction: 'right',
    options: [
      { text: '享受挑战，越挫越勇', value: 5 },
      { text: '能较好地应对压力', value: 3 },
      { text: '需要适当减压', value: 2 },
      { text: '容易感到焦虑紧张', value: 1 },
    ],
  },
  {
    id: 23,
    text: '意外情况发生时，你会：',
    dimension: 'stress',
    direction: 'right',
    options: [
      { text: '迅速调整适应新情况', value: 5 },
      { text: '尝试寻找解决方案', value: 3 },
      { text: '感到不安，需要时间', value: 2 },
      { text: '希望恢复到原来状态', value: 1 },
    ],
  },
  {
    id: 24,
    text: '你喜欢的工作节奏是：',
    dimension: 'stress',
    direction: 'right',
    options: [
      { text: '快节奏多任务', value: 5 },
      { text: '适度紧张有挑战', value: 3 },
      { text: '稳定可预期的', value: 2 },
      { text: '缓慢平和的', value: 1 },
    ],
  },
  // 执行力 (3题)
  {
    id: 25,
    text: '完成任务时，你更注重：',
    dimension: 'execution',
    direction: 'right',
    options: [
      { text: '随机应变，灵活处理', value: 5 },
      { text: '关注结果，完成目标', value: 3 },
      { text: '按步骤执行，确保质量', value: 2 },
      { text: '严格遵循计划流程', value: 1 },
    ],
  },
  {
    id: 26,
    text: '你更擅长：',
    dimension: 'execution',
    direction: 'right',
    options: [
      { text: '同时处理多个任务', value: 5 },
      { text: '快速解决突发问题', value: 4 },
      { text: '专注完成一件事', value: 2 },
      { text: '系统性规划执行', value: 1 },
    ],
  },
  {
    id: 27,
    text: '你对deadline的态度是：',
    dimension: 'execution',
    direction: 'right',
    options: [
      { text: '可以灵活调整', value: 5 },
      { text: '尽量在期限内完成', value: 3 },
      { text: '严格按照时间节点', value: 2 },
      { text: '必须提前完成', value: 1 },
    ],
  },
  // 沟通风格 (3题)
  {
    id: 28,
    text: '表达观点时，你更倾向于：',
    dimension: 'communication',
    direction: 'right',
    options: [
      { text: '直接明了，一针见血', value: 5 },
      { text: '清晰但不尖锐', value: 3 },
      { text: '委婉含蓄地表达', value: 2 },
      { text: '考虑对方感受，委婉措辞', value: 1 },
    ],
  },
  {
    id: 29,
    text: '当你不同意别人的看法时：',
    dimension: 'communication',
    direction: 'right',
    options: [
      { text: '直接指出问题所在', value: 5 },
      { text: '温和但明确地表达', value: 3 },
      { text: '委婉地提出建议', value: 2 },
      { text: '选择不表达或沉默', value: 1 },
    ],
  },
  {
    id: 30,
    text: '你喜欢的工作反馈方式是：',
    dimension: 'communication',
    direction: 'right',
    options: [
      { text: '直接给出评价和建议', value: 5 },
      { text: '客观地分析优缺点', value: 3 },
      { text: '先肯定再提建议', value: 2 },
      { text: '私下单独沟通', value: 1 },
    ],
  },
];
