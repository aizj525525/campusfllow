/* ==================== CONFIG ==================== */
const KEYS = {
  user: 'CF_user',
  courses: 'CF_courses',
  tasks: 'CF_tasks',
  plans: 'CF_plans',
  focus: 'CF_focus',
  seeded: 'CF_seeded',
  courseWeeks: 'CF_courseWeeks',
  cet: 'CF_cet',
  contests: 'CF_contests',
  customContests: 'CF_customContests'
};

const CATEGORIES = [
  { key: 'homework', label: '作业', icon: '📝' },
  { key: 'exam', label: '考试', icon: '📖' },
  { key: 'contest', label: '竞赛', icon: '🏆' },
  { key: 'club', label: '社团', icon: '🎭' },
  { key: 'life', label: '生活', icon: '🏠' },
  { key: 'other', label: '其他', icon: '📌' }
];

const PRIORITIES = [
  { key: 'high', label: '高', color: '#FF6B6B' },
  { key: 'mid', label: '中', color: '#FF9F43' },
  { key: 'low', label: '低', color: '#C5D3DE' }
];

const COURSE_COLORS = ['#5B9FE3', '#6FCF97', '#F2994A', '#BB6BD9', '#56CCF2', '#EB5757', '#F2C94C'];

const SECTION_TIMES = {
  1: ['08:00', '08:45'], 2: ['08:55', '09:40'],
  3: ['10:00', '10:45'], 4: ['10:55', '11:40'],
  5: ['13:30', '14:15'], 6: ['14:25', '15:10'],
  7: ['15:30', '16:15'], 8: ['16:25', '17:10'],
  9: ['18:30', '19:15'], 10: ['19:25', '20:10'],
  11: ['20:20', '21:05'], 12: ['21:15', '22:00']
};

/* ==================== 大学四年规划 ==================== */
// ★ 后续填内容：在对应阶段的 items 数组里加内容即可；
//   - 字符串 → 渲染为普通一行（plan-item）
//   - 对象 { h:'小节标题', sub:'小副标题', rows:['...','...'] } → 渲染为可点击展开的小模块，收起时只显示标题与副标题
//   各阶段的 title（阶段主题）/ sub（副标题）/ tag（年份标签）/ icon / lead（核心理念一句话）也可以直接改
const PLAN_STAGES = [
  {
    key: 'y1', tag: '大一', icon: '🌱',
    title: '认知觉醒与基础奠基',
    sub: '不计代价，抢占高地',
    lead: '大一的核心只有一个：不计一切代价抢占认知和资源的最高点。你在这里的每一步，都在为你未来到底有多少选择权下注。',
    items: [
      { h: '🎯 进入大一前，先问自己 6 个问题', sub: '规则 · 选择权 · 时间 · 能力 · 人脉 · 成果', rows: [
        '1. 你对大学的「游戏规则」了解多少？绩点、转专业、保研、奖学金、竞赛、实习、学生组织，各自的时间节点和评价标准是什么？',
        '2. 你未来想保留哪些选择权？保研、考研、留学、就业、考公、创业——现在不必定死，但必须知道大一哪些底线不能丢。',
        '3. 你每周的时间到底花在哪里？哪些事情有复利，哪些只是消耗？你是否愿意砍掉低价值社交和低价值娱乐？',
        '4. 你现有能力中，哪一项最可能先为你带来收入或作品？你愿意为它投入多少小时？',
        '5. 你身边谁掌握信息或资源？你能为对方提供什么价值？你准备如何靠近班长、学委、学长学姐、老师或校级组织？',
        '6. 你希望大一结束时，简历上多出哪三样东西？是绩点排名、竞赛经历、学生组织经历、作品集、第一笔收入，还是高质量人脉？'
      ]},
      { h: '📚 学业：成绩是你的第一张「通行证」', sub: '保持顶尖梯队，守住转专业 / 保研 / 奖学金的选择权', rows: [
        '目标：永远保持成绩在顶尖梯队。不是为了当学霸，而是为了保住你未来转专业、保研、拿奖学金的「选择权」。',
        '摸清规则：开学第一周，尽快找齐所有专业课的历年真题（找学长学姐要）。别管看不看得懂，先感受一遍考试难度，心里有个底；同时圈出培养计划里学分高的公共课，重点关照。',
        '弯道超车：别指望所有老师都讲得好。主动跟紧 B 站、慕课上播放量高、口碑好的优质网课，提前自学——好资源能让你轻松超越课堂进度。',
        '精力分配：上一周课后，你基本就能分清哪些是「水课」。把这些时间毫不犹豫地投入到自学、竞赛或者学生工作上。',
        '抢占位置：主动和班长、学委搞好关系，他们是信息的核心节点；同时至少面试通过一个校级组织（校学生会、校艺术团等），别只停留在院级——越早进入核心圈子，评奖评优和项目机会就越早知道。',
        '政策研究：把学校的抢课机制、优质公选课名单、各类奖学金的评定计算公式都研究透。这些就是游戏规则，你不懂，就只能当陪跑。'
      ]},
      { h: '🧰 技能：打造你的「万能工具箱」', sub: '编程 · AI · 设计 · 盈利 · 阅读', rows: [
        '编程能力：就算你是文科生，也要学 Python 或 AI 编程（如 Cursor）。目标不是成为程序员，而是能用它解决实际问题。路径：先找项目或问题 → 带着问题去找课 → 解决问题，让你在小组作业和竞赛中降维打击。',
        'AI 应用：把 AI 工具用到极致，让它帮你处理低价值的作业、搜集资料、润色文案，把省下来的时间用来做更有价值的事。',
        '设计美学：自学 PPT 和基本的设计理念。大学里无数的展示和汇报，一个漂亮的 PPT 就是你的脸面和武器；主动承接小组里的 PPT 任务，把它做成你的招牌。',
        '盈利能力：大一必须拥有一项能持续盈利的能力或项目，目标是每月稳定赚到 1000 元以上。这不只是钱的问题，更是验证你能力、建立自信的最快方式。',
        '坚持阅读：每月至少读一本书（可以从知识库书单里挑），构建你的认知体系。'
      ]},
      { h: '🚀 实践：用行动打破信息壁垒', sub: '人脉 · 社团 · 朋友圈 · 贵人 · 竞赛', rows: [
        '人脉扩张：从班级到院级再到校级，全力拓宽你的人脉版图。见到任何人，都思考一下：「他有什么价值？我能为他提供什么价值？」',
        '社团选择：只加入两类社团——一个技术类，学硬核技能；一个商业类，接触有赚钱能力的人。',
        '运营朋友圈：精心设计你的朋友圈，它就是你的个人品牌。晒成果（如「这个月靠 AI 绘画又赚了 1000 块，小开心！」）、晒认知（分享对行业事件的深度思考）、晒链接（和老师学长吃饭的合影、高端分享会照片，低调地发）。',
        '链接「贵人」：一个学期内，至少链接到一个掌握学校高级资源的学长或老师。怎么链接？一次深度的交谈、一顿真诚的饭，或一个走心的礼物（比如家乡特产），比任何空话都有用。',
        '参与竞赛：找一个看起来最牛的竞赛队伍，申请加入。目标不是拿奖——大一拿奖，名额也轮不到你——而是进去「当牛马」学技能，看学长如何操盘整个队伍、如何分工、如何跟老师沟通，这经验千金不换。',
        '竞赛「潜规则」：一个队伍 13 个人，证书上真正能加分的可能只有前 6 位。大一拿了奖也没用，不如把心态放平，等大二自己当队长；那些带你拿奖的学长学姐，毕业前记得买份礼物感谢一下，这人脉就稳了。'
      ]},
      { h: '🔄 大一结束时，用 5 个问题复盘', sub: '绩点 · 工具 · 收入 · 圈子 · 经历', rows: [
        '1. 我的绩点是否进入了一个安全区，能否保留转专业、保研、奖学金等选择权？',
        '2. 我是否掌握了一项可以解决实际问题的工具能力，比如编程、AI、PPT、设计？',
        '3. 我是否有了第一笔靠能力赚到的钱，或者第一个可展示的作品？',
        '4. 我是否进入了一个校级组织或核心信息圈，认识了至少一个掌握高级资源的学长、老师？',
        '5. 我是否参加过一次竞赛或项目，哪怕只是学习别人如何操盘？'
      ]}
    ]
  },
  {
    key: 'y2', tag: '大二', icon: '🌿',
    title: '深度聚焦与能力进阶',
    sub: '打造长板，形成壁垒',
    lead: '大二的重点不是继续铺摊子，而是深度聚焦，打造长板，形成壁垒。大一你可以广泛试错，大二你必须开始收敛：找到一两个高价值方向，狠狠扎下去。',
    items: [
      { h: '🎯 进入大二前，先问自己几个问题', sub: '长板 · 目标行业 · 取舍 · 验证 · 进度 · 职场', rows: [
        '1. 你的长板是什么？别人遇到什么问题时会第一个想到你？你是「什么都会一点」，还是已经有一项明显强于同龄人的能力？',
        '2. 你未来可能进入的目标行业或岗位，需要哪些硬技能、证书、作品和实习证据？你现在缺哪一块？',
        '3. 大一哪些尝试是有效的？哪些只是热闹？大二你准备砍掉什么、加码什么？',
        '4. 你准备用哪一个竞赛、项目或实习来验证自己的方向？你能否从「参与者」升级为「带队者」或「独立交付者」？',
        '5. 你的四六级、雅思托福、计算机工具、作品集进度如何？这些是否足以支撑你未来选择更宽的路？',
        '6. 你是否开始接触真实职场？你知道那些拿到好 offer 的人，到底具备哪些学校里不教的稀缺能力吗？'
      ]},
      { h: '📚 专业深耕 & 技能拓展', sub: '语言分数 · 核心课 · 假期辅修 · 带队拿奖', rows: [
        '刷高语言分数：四六级是基础，有余力就把雅思或托福也刷一个不错的分数，这决定了你未来出路选择的宽度。',
        '冲刺核心课：经过大一的历练，专业核心课对你来说已经没那么难了，全力冲刺高分。',
        '利用假期：暑假、寒假别闲着，集中火力去辅修一个高薪技能，比如数据分析、产品经理课程，要直接和未来的实习挂钩。',
        '带队拿奖：大二，是你全力冲刺奖项的时候了。选择一个大赛，比如「互联网+」、数学建模等，利用你大一「偷师」来的经验，自己带队，目标就是拿一个国家级或省级的大奖。'
      ]},
      { h: '🚀 职业探索 & 实习验证', sub: '偷听面试 · 投递实习 · 贴靠学长 · 积累履历', rows: [
        '探索高价值能力：大二的寒暑假，多去参加一些大厂的春招、秋招线下面试会。不是为了面试，而是去「偷听」，看看那些拿到 offer 的人都具备哪些学校里不教的稀缺能力。',
        '勇敢投递实习：大胆去投递那些大厂的线上实习项目，比如腾讯的「灯塔计划」、阿里的「青训营」。',
        '被刷下来怎么办：这才是你真正的机会！在项目群里找到那些成功入选的学长学姐，尤其是那些比你大一两届的，主动去「贴靠」：「学长你好！我是XX大学大二的XX，这次阿里青训营我被刷下来了，看到您成功入选，真的太厉害了！能不能请您喝杯咖啡，占用您一点点时间，请教一下您是怎么准备的？有哪些大学不教的关键技能需要我去学的？我特别想跟您学习！」记住，你年龄小，你是「下位者」，这种姿态会让对方放下防备，愿意拉你一把。',
        '积累实习履历：如果进不了大厂，就去找那些不看重专业背景，但极度看重实际能力的实习岗位，比如互联网新媒体相关的一切。这些经历能帮你赚钱，更能帮你攒下一份好看的履历，让你大三大四能去面试更好的岗位。'
      ]},
      { h: '🔄 大二结束时，用这几个问题复盘', sub: '长板 · 角色 · 实践 · 成型 · 前辈人脉', rows: [
        '1. 我是否已经有一项明显长板，能拿得出手、讲得清楚、做出成果？',
        '2. 我是否参加过一次正式竞赛或项目，并承担了明确角色？',
        '3. 我是否有过一次实习、线上项目或真实商业实践？',
        '4. 我的语言成绩、技能证书、作品集是否开始成型？',
        '5. 我是否认识了至少一位在目标行业里比我走得更前的人，并保持了有效联系？'
      ]}
    ]
  },
  {
    key: 'y3', tag: '大三', icon: '🌳',
    title: '实战冲刺与资源整合',
    sub: '全力冲刺，完成背书',
    lead: '大三的关键词是实战冲刺与资源整合。你不能再只做「学生式努力」，而要开始完成背书：用证书、奖项、论文、实习、人脉，把你的简历武器库填满。',
    items: [
      { h: '🎯 进入大三前，先问自己几个问题', sub: '主路径 · 简历背书 · 核心业务 · 人脉升级', rows: [
        '1. 你的主路径是什么？就业、保研、考研、留学、考公，还是其他？你的备选路径是什么？',
        '2. 你的简历现在最缺哪一块背书？是高含金量证书、国家级奖项、论文、核心实习，还是内推渠道？',
        '3. 你目标行业和目标岗位的核心业务是什么？你认识谁能够为你提供信息、内推或背书？',
        '4. 你找实习的目标是「攒履历」还是「争取转正」？你准备如何从边缘任务进入核心业务？',
        '5. 你的目标城市、目标行业、目标公司清单是否明确？你是否开始链接那个城市或行业里的校友？',
        '6. 你前两年链接的人脉，是否开始从「认识」走向「可合作、可咨询、可内推」？'
      ]},
      { h: '🏅 核心背书：打造你的「简历武器库」', sub: '职业证书 · 国家级项目 · 学术成果', rows: [
        '高含金量证书：根据你的职业方向，考取 1—2 个最有分量的职业证书，比如 CFA、FRM、PMP 等，这是你专业能力的硬核证明。',
        '国家级奖项/项目：把你大二的竞赛成果进行深化，或申请一项国家级大学生创新创业训练计划，也就是「大创」，目标是结题优秀。',
        '学术成果：如果你想读研，大三是发表论文的最佳时机。紧抱一个教授的大腿，争取作为第二或第三作者发表一篇学术论文。'
      ]},
      { h: '💼 高价值实习：从「入门」到「核心」', sub: '头部公司 · 核心业务 · 争取转正', rows: [
        '目标导向：这时候找实习，目标必须是你未来想去的行业里的头部公司。利用你前两年积累的履历和技能，全力争取一个能接触到核心业务的岗位。',
        '争取转正：在实习期间，表现出极强的 owner 意识和学习能力。你的目标不仅仅是完成任务，而是争取获得转正 offer，也就是 return offer，这会让你在秋招中占据绝对优势。'
      ]},
      { h: '🤝 人脉变现：从「链接」到「内推」', sub: '激活人脉 · 城市目标 · 校友落地', rows: [
        '激活人脉网络：把你前两年链接的所有学长学姐、老师、企业导师的资源盘活。在找实习和工作时，主动寻求他们的内部推荐。',
        '城市目标：确定你未来想发展的目标城市，并开始有意识地链接在那个城市工作的校友，为毕业后的落地做准备。'
      ]},
      { h: '🔄 大三结束时，用这几个问题复盘', sub: '主路径 · 硬背书 · 高价值实习 · 人脉激活', rows: [
        '1. 我的主路径是否已经确定，并有可执行的备选方案？',
        '2. 我的简历是否已经具备至少两到三项硬背书：证书、奖项、论文、核心实习、项目成果？',
        '3. 我是否有一段能讲清楚业务逻辑和个人贡献的高价值实习？',
        '4. 我是否已经激活人脉，获得过内推、深度建议或行业信息？',
        '5. 我是否明确目标城市、目标行业和目标公司清单，并知道下一步怎么投、找谁问？'
      ]}
    ]
  },
  {
    key: 'y4', tag: '大四', icon: '🎓',
    title: '决策落地与身份转型',
    sub: '从容上岸，开启新章',
    lead: '大四，是你收获的季节。所有的子弹都已上膛，现在要做的就是瞄准目标，扣动扳机。但扣扳机之前，你仍然需要清楚：你的目标是什么，你的底线是什么，你的备选是什么。',
    items: [
      { h: '🎯 进入大四前，先问自己几个问题', sub: '决策标准 · 三套方案 · 身份转型', rows: [
        '1. 你的决策标准是什么？比较 offer 时，你看重城市、行业、薪资、成长、稳定性、转正机会，还是长期天花板？',
        '2. 你的冲刺方案、保底方案和风险方案分别是什么？如果主路径失败，你的 Plan B 是否可执行？',
        '3. 你的毕业设计最低合格线是什么？你准备投入多少时间，如何保证它不挤占求职、升学或实习的关键节点？',
        '4. 你从学生心态转向职场人心态，还缺哪些软技能？沟通、汇报、向上管理、协作、复盘，你最短板的是哪一项？',
        '5. 入职或升学前三个月，你需要补齐什么？是行业知识、工具技能、英语能力、学术写作，还是职场礼仪？',
        '6. 如果结果暂时不理想，你是否有可执行的调整方案，而不是陷入情绪内耗？'
      ]},
      { h: '💼 就业党：精准打击，拿下 Offer', sub: '秋招冲刺 · 毕业设计 · 心态调整', rows: [
        '秋招冲刺：利用你的高价值实习经历、竞赛奖项和硬核技能，全身心投入秋季招聘，目标是拿下 2—3 个高质量的 offer 作为保底。',
        '毕业设计：不要在毕业设计上浪费太多时间，选择一个工作量适中、能轻松通过的题目即可。你的重心是找工作。',
        '心态调整：从学生心态彻底转变为职场人心态，开始学习职场沟通、向上管理等软技能。'
      ]},
      { h: '🎓 升学党：最后一跃，奔赴前程', sub: '保研 · 考研 · 留学', rows: [
        '保研：如果你的绩点和成果足够，大三下学期到大四上学期是保研的关键时期，夏令营、九推，全力以赴。',
        '考研：如果选择考研，大三暑假是你最后、最完整的复习时间。大四上学期，心无旁骛，全力冲刺。',
        '留学：递交申请材料，准备面试。同时，利用毕业前的空闲时间，强化语言能力和学术写作能力，为海外学习生活做准备。'
      ]},
      { h: '🔄 大四结束时，用这几个问题复盘', sub: '决策结果 · 保底方案 · 身份转换', rows: [
        '1. 我是否拿到了符合自己决策标准的 offer、录取或上岸结果？',
        '2. 我是否至少有一个保底方案，并知道如果出现意外该如何调整？',
        '3. 我是否完成了从学生到职场人 / 研究生的身份转换准备？',
        '4. 我是否把大学四年积累的能力、作品、人脉和背书，转化成了下一步的起点？',
        '5. 我是否清楚自己接下来一年要继续补什么，而不是把大学结束当成学习的结束？'
      ]}
    ]
  }
];

// 规划条目数字序号色板（按序号循环取色）
const PLAN_NUM_COLORS = ['#5B9FE3', '#6FCF97', '#F2994A', '#BB6BD9', '#56CCF2', '#EB5757', '#F2C94C'];

// 规划关键词（统一主色高亮，长词优先替换避免短语截断长词）
const PLAN_KEYWORDS = [
  { cls: 'kw-main', words: [
    '绩点排名', '绩点', '转专业', '保研', '考研', '考公', '留学', '就业', '创业', '奖学金', '竞赛经历', '竞赛', '实习', '评奖评优', '历年真题', '培养计划', '公选课', '抢课机制', '校级组织', '学生组织', '学生工作', '公共课', '水课', '游戏规则', '通行证', '面试',
    'Python', 'Cursor', 'AI 编程', 'AI 工具', 'AI 绘画', 'AI', 'PPT', '编程', '设计', '网课', '慕课', 'B 站', '自学', '认知体系', '工具能力', '盈利能力', '设计美学', '阅读',
    '人脉', '贵人', '朋友圈', '社团', '队长', '班长', '学委', '学长学姐', '学长', '学姐', '老师', '信息壁垒', '核心圈子', '核心信息圈', '个人品牌', '校学生会', '校艺术团', '技术类', '商业类',
    '选择权', '认知', '复利', '降维打击', '当牛马', '操盘', '第一笔收入', '作品集', '简历', '底线', '自信', '潜规则', '安全区', '复盘',
    '长板', '壁垒', '带队', '大厂', '四六级', '雅思', '托福', '辅修', '春招', '秋招', 'offer', '稀缺能力', '高薪技能', '国家级', '省级', '青训营', '灯塔计划', '贴靠', '履历',
    'return offer', 'Plan B', '背书', '内推', '主路径', '备选', 'CFA', 'FRM', 'PMP', '大创', '结题优秀', '学术论文', '论文', '头部公司', '核心业务', '转正', '夏令营', '九推', '毕业设计', '软技能', '向上管理', '职场沟通', '职场人', '职场礼仪', '保底', '武器库', '上岸', '天花板', '学生式努力', '决策标准', '企业导师', '校友', '学术写作', '行业知识', '英语能力'
  ] }
];
// 长词优先替换，避免短语截断长词
PLAN_KEYWORDS.forEach(function (g) { g.words.sort(function (a, b) { return b.length - a.length; }); });

// 仅在 HTML 标签、已有标记与关键词胶囊之外替换关键词
function markOutside(str, word, cls) {
  return str.split(/(<mark[^>]*>[\s\S]*?<\/mark>|<span class="kw-chip"[^>]*>[\s\S]*?<\/span>|<[^>]*>)/g).map(function (part) {
    if (!part || part.charAt(0) === '<') return part;
    return part.indexOf(word) >= 0 ? part.split(word).join('<mark class="' + cls + '">' + word + '</mark>') : part;
  }).join('');
}
function markKeywords(esc) {
  PLAN_KEYWORDS.forEach(function (grp) {
    grp.words.forEach(function (w) { esc = markOutside(esc, w, grp.cls); });
  });
  return esc;
}

/* ==================== 四六级 / 雅思 / 托福 ==================== */
// 官方时间来源：中国教育考试网（cet.neea.edu.cn）
// 2026 下半年笔试 12月12日：四级 09:00-11:20，六级 15:00-17:25；口试 11月21-22日
// flexible 项（雅思/托福）考位动态、全年多场，备考后显示考试信息 + 官网入口，不做固定日期倒计时
const CET_EXAMS = [
  {
    id: 'cet4',
    badge: '四级',
    name: '英语四级 CET-4',
    date: '2026-12-12',
    start: '2026-12-12T09:00:00',
    end: '2026-12-12T11:20:00',
    session: '12月12日（周六）上午 09:00-11:20 · 笔试',
    oral: '口试 11月21日',
    taskTitle: '英语四级考试',
    durationMin: 140
  },
  {
    id: 'cet6',
    badge: '六级',
    name: '英语六级 CET-6',
    date: '2026-12-12',
    start: '2026-12-12T15:00:00',
    end: '2026-12-12T17:25:00',
    session: '12月12日（周六）下午 15:00-17:25 · 笔试',
    oral: '口试 11月22日',
    taskTitle: '英语六级考试',
    durationMin: 145
  },
  {
    id: 'toefl',
    badge: '托福',
    name: '托福 TOEFL',
    flexible: true,
    meta: '全年多场次 · 考位动态更新 · 建议尽早报名',
    info: ['2026 全年 47 个考试日期 · 共 67 场', '1月21日起启用新版自适应模式', '9-12 月部分日期（如10月17日、31日）新增下午场'],
    sites: [
      { label: 'toefl.neea.cn（公网报名）', url: 'https://toefl.neea.cn/' },
      { label: 'toefl.neea.edu.cn（教育网）', url: 'https://toefl.neea.edu.cn/' }
    ]
  },
  {
    id: 'ielts',
    badge: '雅思',
    name: '雅思 IELTS',
    flexible: true,
    meta: '全年约 260+ 个考试日期 · 每月约 22-26 场',
    info: ['纸笔考试通常在周六 · 部分在周四', '机考灵活：一周多天、多时段（上午/下午/晚间）', '考位动态更新 · 建议尽早登录官网查询报名'],
    sites: [
      { label: 'ielts.neea.cn（主报名入口）', url: 'https://ielts.neea.cn/' },
      { label: 'ielts.neea.edu.cn（UKVI 专用）', url: 'https://ielts.neea.edu.cn/' },
      { label: 'chinaielts.org（中文信息站）', url: 'https://www.chinaielts.org/' },
      { label: 'ielts.org（全球官网）', url: 'https://www.ielts.org/' }
    ]
  }
];

/* ==================== STORE ==================== */
/* 账户体系：用户注册表与会话是全局的；每个人的应用数据打包在 CF_u_<用户名> 下，完全隔离 */
const AUTH = {
  users: 'CF_users',
  session: 'CF_session',
  migrated: 'CF_migrated',
  packPrefix: 'CF_u_',
  SESSION_MS: 24 * 60 * 60 * 1000 // 24 小时免验证
};

let currentUser = null; // 当前登录用户名
let userData = null;    // 当前用户数据包（内存镜像，写操作同步持久化）

function userPackKey(name) { return AUTH.packPrefix + name; }

// 用户数据包内读写（key 沿用 KEYS.*）
function udLoad(key, def) {
  if (!userData || !(key in userData)) return def;
  const val = userData[key];
  return val === null || val === undefined ? def : val;
}
function udSave(key, val) {
  if (!userData || !currentUser) return;
  userData[key] = val;
  save(userPackKey(currentUser), userData);
}

function load(key, def) {
  try {
    const val = JSON.parse(localStorage.getItem(key));
    return val === null || val === undefined ? def : val;
  } catch (e) { return def; }
}
function save(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

const store = {
  getUser() {
    return udLoad(KEYS.user, {
      name: currentUser || '同学', school: '', grade: '', avatar: '🦊',
      college: '', major: '', cls: '',
      semesterStart: '2026-09-07', dailyGoal: 3
    });
  },
  setUser(u) { udSave(KEYS.user, u); },
  getCourses() { return udLoad(KEYS.courses, []); },
  setCourses(v) { udSave(KEYS.courses, v); },
  getTasks() { return udLoad(KEYS.tasks, []); },
  setTasks(v) { udSave(KEYS.tasks, v); },
  getPlans() { return udLoad(KEYS.plans, []); },
  setPlans(v) { udSave(KEYS.plans, v); },
  getFocus() { return udLoad(KEYS.focus, []); },
  setFocus(v) { udSave(KEYS.focus, v); },
  getCet() { return udLoad(KEYS.cet, { cet4: false, cet6: false }); },
  setCet(v) { udSave(KEYS.cet, v); },
  getContests() { return udLoad(KEYS.contests, {}); },
  setContests(v) { udSave(KEYS.contests, v); },
  getCustomContests() { return udLoad(KEYS.customContests, []); },
  setCustomContests(v) { udSave(KEYS.customContests, v); }
};

function seed() {
  if (udLoad(KEYS.seeded, false)) return;
  const d = n => addDays(todayStr(), n);

  udSave(KEYS.user, {
    name: currentUser || '同学', school: '', grade: '', avatar: '🦊',
    college: '', major: '', cls: '',
    semesterStart: addDays(todayStr(), -14), dailyGoal: 3
  });

  udSave(KEYS.courses, []);

  const tasks = [
    { title: '完成高数第三章习题', category: 'homework', due: d(0) + 'T23:59', priority: 'high', estimateMin: 60 },
    { title: '背诵英语 Unit 5 单词', category: 'homework', due: d(1) + 'T20:00', priority: 'mid', estimateMin: 30 },
    { title: '数据结构实验报告', category: 'homework', due: d(3) + 'T23:59', priority: 'high', estimateMin: 120 },
    { title: '英语四级考试', category: 'exam', due: d(12) + 'T09:00', priority: 'high', estimateMin: 120 },
    { title: 'AI 创新大赛报名', category: 'contest', due: d(4) + 'T23:59', priority: 'high', estimateMin: 45 },
    { title: '社团例会', category: 'club', due: d(2) + 'T19:00', priority: 'low', estimateMin: 60 },
    { title: '取快递', category: 'life', due: d(-1) + 'T18:00', priority: 'low', estimateMin: 15 }
  ].map(t => Object.assign({ id: uid(), courseId: null, status: 'todo', note: '', createdAt: Date.now(), doneAt: null }, t));

  udSave(KEYS.tasks, tasks);
  udSave(KEYS.focus, [{ date: todayStr(), doneCount: 1, focusMin: 45 }]);
  udSave(KEYS.seeded, true);
}

/* ==================== UTILS ==================== */
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

function pad(n) { return String(n).padStart(2, '0'); }

function fmtDate(d) {
  return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
}

function todayStr() { return fmtDate(new Date()); }

function addDays(dateStr, n) {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + n);
  return fmtDate(d);
}

function fmtMD(iso) {
  const d = new Date(iso);
  return pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
}

function fmtWeekday(n) {
  return ['周一', '周二', '周三', '周四', '周五', '周六', '周日'][n - 1];
}

function fmtHM(min) {
  return pad(Math.floor(min / 60) % 24) + ':' + pad(min % 60);
}

function toMin(hhmm) {
  const arr = hhmm.split(':');
  return Number(arr[0]) * 60 + Number(arr[1]);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
  });
}

function getWeekNumber(semesterStart) {
  const start = new Date(semesterStart + 'T00:00:00');
  const now = new Date();
  const today0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((today0 - start) / 604800000) + 1;
}

function getMonday(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = d.getDay() === 0 ? 7 : d.getDay();
  d.setDate(d.getDate() - (day - 1));
  return d;
}

function getNextCourse(courses, now) {
  now = now || new Date();
  const day = now.getDay() === 0 ? 7 : now.getDay();
  const hhmm = now.getHours() * 60 + now.getMinutes();
  return courses
    .filter(c => c.day === day)
    .map(c => Object.assign({}, c, { startMin: toMin(SECTION_TIMES[c.startSection][0]) }))
    .filter(c => c.startMin > hhmm)
    .sort((a, b) => a.startMin - b.startMin)[0] || null;
}

function isOverdue(t) { return t.status !== 'done' && new Date(t.due) < new Date(); }
function isDueToday(t) { return t.due.slice(0, 10) === todayStr(); }

function daysUntil(iso) {
  const target = new Date(iso);
  const t0 = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  const now = new Date();
  const n0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((t0 - n0) / 86400000);
}

function nearestTask(tasks, category) {
  const list = tasks
    .filter(t => t.status === 'todo' && t.category === category && daysUntil(t.due) >= 0)
    .sort((a, b) => new Date(a.due) - new Date(b.due));
  if (!list.length) return null;
  return { task: list[0], days: daysUntil(list[0].due) };
}

function getStreak(focus) {
  const set = new Set(focus.filter(f => f.doneCount > 0).map(f => f.date));
  const d = new Date();
  if (!set.has(todayStr())) d.setDate(d.getDate() - 1);
  let n = 0;
  while (set.has(fmtDate(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

function bumpFocus(deltaMin, deltaCount) {
  const focus = store.getFocus();
  const key = todayStr();
  let rec = focus.find(f => f.date === key);
  if (!rec) { rec = { date: key, doneCount: 0, focusMin: 0 }; focus.push(rec); }
  rec.doneCount = Math.max(0, rec.doneCount + deltaCount);
  rec.focusMin = Math.max(0, rec.focusMin + deltaMin);
  store.setFocus(focus);
}

/* ==================== 交互基础 ==================== */
let currentTab = 'home';
let weekOffset = 0;
let taskFilter = 'all';
let expandedTask = null;
let atState = { category: 'homework', priority: 'mid', estimate: 60, custom: false };
let toastTimer = null;
let splashHidden = false;
let flashOverdueAt = 0; // 从首页逾期入口进入任务页的时间戳（6 秒内逾期任务闪红边）
let calYear = new Date().getFullYear();
let importDetected = [];
let importWeek = 9;
let importMonday = '2026-10-26';
let importEditing = -1;
let planView = { stage: null, sec: null }; // 规划页三级导航：stage=年级 key，sec=小模块下标
let contestView = { cat: null }; // 竞赛页两级导航：cat=类别 key
let hwModalCourse = null; // 当前打开作业面板的课程 id（打勾后刷新面板用）
let contestHighlight = null; // 从首页推荐跳入时高亮的赛事 id

function switchTab(name) {
  currentTab = name;
  document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.id === 'page-' + name));
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  document.getElementById('fab').classList.toggle('show', name === 'tasks');

  if (name === 'home') renderHome();
  else if (name === 'schedule') renderSchedule();
  else if (name === 'tasks') renderTasks();
  else if (name === 'contest') renderContest();
  else if (name === 'plan') renderPlan();
  else if (name === 'profile') renderProfile();

  window.scrollTo(0, 0);
}

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1600);
}

function openOverlay(id) {
  document.getElementById(id).classList.add('open');
  document.body.classList.add('no-scroll');
}
function closeOverlay(id) {
  document.getElementById(id).classList.remove('open');
  document.body.classList.remove('no-scroll');
}

function openModal(html) {
  document.getElementById('modal-sheet').innerHTML = html;
  document.getElementById('modal').classList.add('open');
  document.body.classList.add('no-scroll');
}
function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.classList.remove('no-scroll');
  hwModalCourse = null;
}

function confirmDialog(msg, onOk) {
  openModal(
    '<div class="sheet-title">确认操作</div>' +
    '<div class="sub" style="margin-bottom:16px">' + escapeHtml(msg) + '</div>' +
    '<div class="btn-row"><button class="btn ghost" id="dlg-cancel">取消</button><button class="btn danger" id="dlg-ok">确定</button></div>'
  );
  document.getElementById('dlg-cancel').onclick = closeModal;
  document.getElementById('dlg-ok').onclick = function () { closeModal(); if (onOk) onOk(); };
}

function completeTask(id, done) {
  const tasks = store.getTasks();
  const t = tasks.find(x => x.id === id);
  if (!t) return;
  let justCompleted = false;
  if (done && t.status !== 'done') {
    t.status = 'done';
    t.doneAt = Date.now();
    bumpFocus(t.estimateMin || 0, 1);
    justCompleted = true;
  } else if (!done && t.status === 'done') {
    t.status = 'todo';
    t.doneAt = null;
    bumpFocus(-(t.estimateMin || 0), -1);
  }
  store.setTasks(tasks);
  renderHome();
  renderTasks();
  renderProfile();
  if (justCompleted) openRating(id);
}

const RATING_TEXT = {
  1: { emoji: '🐣', text: '先完成再完美，今天你已经勇敢迈出一步了' },
  2: { emoji: '🙂', text: '完成就值得肯定，下次再专注一点点' },
  3: { emoji: '🌱', text: '稳步推进，保持这个节奏就很好' },
  4: { emoji: '✨', text: '做得很棒，离满分只差一点点' },
  5: { emoji: '🏆', text: '满星！今天的你状态拉满，继续保持' }
};

function openRating(id) {
  const task = store.getTasks().find(x => x.id === id);
  if (!task) return;
  let score = task.rating || 0;

  openModal(
    '<div class="sheet-title">任务完成 🎉</div>' +
    '<div class="sub" style="text-align:center">' + escapeHtml(task.title) + '</div>' +
    '<div class="rating-emoji" id="rating-emoji">🙂</div>' +
    '<div class="hearts" id="rating-hearts">' +
      [1, 2, 3, 4, 5].map(i =>
        '<span class="heart ' + (i <= score ? 'on' : '') + '" data-star="' + i + '">♥</span>'
      ).join('') +
    '</div>' +
    '<div class="rating-msg" id="rating-msg">给自己这次完成打个分吧，记录一下感觉</div>' +
    '<div class="btn-row">' +
      '<button class="btn ghost" id="rating-skip">先不看</button>' +
      '<button class="btn primary" id="rating-save">保存评价</button>' +
    '</div>'
  );

  function paint() {
    document.querySelectorAll('#rating-hearts .heart').forEach(function (h) {
      h.classList.toggle('on', Number(h.dataset.star) <= score);
    });
    const conf = RATING_TEXT[score];
    document.getElementById('rating-emoji').textContent = conf ? conf.emoji : '🙂';
    document.getElementById('rating-msg').textContent = conf ? conf.text : '给自己这次完成打个分吧，记录一下感觉';
  }

  document.getElementById('rating-hearts').addEventListener('click', function (e) {
    const heart = e.target.closest('.heart');
    if (!heart) return;
    score = Number(heart.dataset.star);
    paint();
  });

  document.getElementById('rating-skip').onclick = closeModal;
  document.getElementById('rating-save').onclick = function () {
    if (!score) { toast('先选一个星级吧'); return; }
    const list = store.getTasks();
    const item = list.find(x => x.id === id);
    if (item) {
      item.rating = score;
      item.ratedAt = Date.now();
      store.setTasks(list);
    }
    closeModal();
    renderTasks();
    toast('评价已记录 ✓');
  };
  paint();
}

/* ==================== 首页 ==================== */
// 今日课程卡：显示全天课程，已上的变浅 +「已结束」标签；当天课上完（或无课）自动显示明日课表
function todayCoursesCardHTML() {
  const now = new Date();
  const week = getWeekNumber(store.getUser().semesterStart);
  const dayNum = now.getDay() === 0 ? 7 : now.getDay();
  const nowMin = now.getHours() * 60 + now.getMinutes();

  let list = store.getCourses()
    .filter(c => c.week === week && c.day === dayNum)
    .sort((a, b) => a.startSection - b.startSection);

  const allDone = list.length > 0 && list.every(c => toMin(SECTION_TIMES[c.endSection][1]) <= nowMin);

  let title, sub, isTomorrow = false;
  if (!list.length || allDone) {
    // 显示明天：周日 → 下周一（周数 +1），其余为本周下一天
    isTomorrow = true;
    const nextDay = dayNum === 7 ? 1 : dayNum + 1;
    const nextWeek = dayNum === 7 ? week + 1 : week;
    list = store.getCourses()
      .filter(c => c.week === nextWeek && c.day === nextDay)
      .sort((a, b) => a.startSection - b.startSection);
    title = allDone ? '📚 明日课程' : '📚 明日课程';
    sub = allDone ? '今日课程已全部结束' : '今日无课';
  } else {
    const doneCount = list.filter(c => toMin(SECTION_TIMES[c.endSection][1]) <= nowMin).length;
    title = '📚 今日课程';
    sub = list.length + ' 门' + (doneCount ? ' · ' + doneCount + ' 门已结束' : '');
  }

  const rows = list.map(c => {
    const ended = !isTomorrow && toMin(SECTION_TIMES[c.endSection][1]) <= nowMin;
    return '<div class="tc-row' + (ended ? ' done' : '') + '">' +
      '<span class="tc-time">' + c.startSection + '-' + c.endSection + '节 ' + SECTION_TIMES[c.startSection][0] + '</span>' +
      '<span class="tc-name">' + escapeHtml(c.name) + '</span>' +
      hwBadgeHTML(courseHwInfo(c.id), c.id) +
      '<span class="tc-room">' + escapeHtml(c.location || '') + '</span>' +
      (ended ? '<span class="tc-flag">已结束</span>' : '') +
    '</div>';
  }).join('');

  return '<div class="card today-course-card" data-nav="schedule">' +
    '<div class="card-head"><span class="card-title">' + title + '</span>' +
      '<span class="sub">' + sub + ' · 点击进课表 ›</span></div>' +
    (rows || '<div class="sub" style="padding:4px 0">明天没有排课，好好休息 🎉</div>') +
  '</div>';
}

function renderHome() {
  const el = document.getElementById('home-content');
  const user = store.getUser();
  const now = new Date();
  const h = now.getHours();
  const greet = h < 5 ? '夜深了' : h < 11 ? '早上好' : h < 18 ? '下午好' : '晚上好';
  const wdNum = now.getDay() === 0 ? 7 : now.getDay();
  const week = getWeekNumber(user.semesterStart);
  const courses = store.getCourses().filter(c => c.week === week);
  const tasks = store.getTasks();
  const coursesToday = courses.filter(c => c.day === wdNum).sort((a, b) => a.startSection - b.startSection);
  const todo = tasks.filter(t => t.status === 'todo');
  const overdue = todo.filter(isOverdue);
  const todayList = todo
    .filter(t => isOverdue(t) || isDueToday(t))
    .sort((a, b) => (isOverdue(a) ? 0 : 1) - (isOverdue(b) ? 0 : 1) || new Date(a.due) - new Date(b.due));

  const mini = todayList.slice(0, 3).map(t => {
    const overdueItem = isOverdue(t);
    return '' +
      '<div class="task-mini">' +
      '<div class="check" data-id="' + t.id + '"></div>' +
      '<div class="task-mini-title">' + escapeHtml(t.title) + '</div>' +
      '<div class="task-mini-time ' + (overdueItem ? 'danger' : '') + '">' +
      (overdueItem ? '⚠️ 已逾期' : fmtMD(t.due)) + '</div>' +
      '</div>';
  }).join('');

  const emptyTasks = '<div class="sub" style="padding:8px 0">今天没有待办，休息一下也不错 🎉</div>';

  // 临期提醒：2 小时内即将截止，或存在逾期任务
  const nowMs = Date.now();
  const upcoming = todo
    .map(t => ({ t: t, min: Math.round((new Date(t.due) - nowMs) / 60000) }))
    .filter(x => x.min > 0 && x.min <= 120)
    .sort((a, b) => a.min - b.min)[0];
  let reminderHTML = '';
  if (upcoming) {
    reminderHTML = '<div class="reminder" data-nav="tasks">' +
      '<span class="reminder-icon">⏰</span>' +
      '<div class="reminder-text">「' + escapeHtml(upcoming.t.title) + '」还有 ' + upcoming.min + ' 分钟截止，现在开始刚好</div>' +
      '<span class="arrow">›</span></div>';
  } else if (overdue.length) {
    reminderHTML = '<div class="reminder danger" data-nav="tasks" data-flash="overdue">' +
      '<span class="reminder-icon">⚠️</span>' +
      '<div class="reminder-text">有 ' + overdue.length + ' 项任务已逾期，去任务中心完成或补交</div>' +
      '<span class="arrow">›</span></div>';
  }

  el.innerHTML = '' +
    '<div class="card hello">' +
      '<div class="hello-title">' + greet + '，' + escapeHtml(user.name) + ' 🌤</div>' +
      '<div class="sub">' + (now.getMonth() + 1) + '月' + now.getDate() + '日 · 第 ' + week + ' 周 · ' + fmtWeekday(wdNum) +
      ' · ' + (coursesToday.length ? '今日 ' + coursesToday.length + ' 门课' : '今日无课') + '</div>' +
    '</div>' +

    reminderHTML +

    todayCoursesCardHTML() +

    '<div class="card today-task-card">' +
      '<div class="card-head"><span class="card-title">今日任务</span><span class="sub">' + todayList.length + ' 条待办</span></div>' +
      (mini || emptyTasks) +
      '<div class="link center" data-nav="tasks">查看全部 ›</div>' +
      '<div class="sub mt8">🔥 连续打卡 <span class="streak-link" data-act="open-calendar">' +
        getStreak(store.getFocus()) + ' 天 ›</span></div>' +
    '</div>' +

    cetCardHTML() +

    contestCardHTML() +

    '<div class="card plan-home">' +
      '<div class="card-head"><span class="card-title">🧭 四年规划</span><span class="link" data-nav="plan">全部 ›</span></div>' +
      '<div class="plan-quick">' + PLAN_STAGES.map(st =>
        '<div class="plan-quick-item" data-nav="plan">' +
          '<div class="pq-icon">' + st.icon + '</div>' +
          '<div class="pq-info">' +
            '<div class="pq-name">' + st.tag + ' · ' + escapeHtml(st.title) + '</div>' +
            '<div class="pq-sub">' + escapeHtml(st.sub) + '</div>' +
          '</div>' +
        '</div>').join('') + '</div>' +
    '</div>';

  updateCetCountdown();
}

/* ==================== 语言考试备考卡片（四六级 / 雅思 / 托福） ==================== */
function cetCardHTML() {
  const cet = store.getCet();
  const tasks = store.getTasks();

  const rows = CET_EXAMS.map(function (ex) {
    const opted = !!cet[ex.id];

    /* 雅思 / 托福：全年多场次，备考后显示考试信息 + 官网入口 */
    if (ex.flexible) {
      let body = '';
      if (opted) {
        body = '<div class="cet-cd ct-cd">' +
          '<div class="ct-cd-row ct-cd-only"><span class="ct-cd-label">📅 ' + ex.info.join('｜') + '</span></div>' +
          '<div class="ct-site-row">🌐 报名官网：' +
            ex.sites.map(function (s) {
              return '<a href="' + s.url + '" target="_blank" rel="noopener" class="ct-site">' + escapeHtml(s.label) + '</a>';
            }).join(' · ') +
          '</div>' +
        '</div>';
      }
      return '<div class="cet-item">' +
        '<div class="cet-row">' +
          '<div class="cet-badge ' + ex.id + '">' + ex.badge + '</div>' +
          '<div class="cet-info">' +
            '<div class="cet-name">' + escapeHtml(ex.name) + '</div>' +
            '<div class="cet-meta">' + escapeHtml(ex.meta) + '</div>' +
          '</div>' +
          '<button class="cet-btn ' + (opted ? 'on' : '') + '" data-cet-toggle="' + ex.id + '">' +
            (opted ? '已备考 ✓' : '＋ 备考') + '</button>' +
        '</div>' + body +
      '</div>';
    }

    /* 四六级：固定日期倒计时 + 任务提醒 */
    const hasTask = tasks.some(t => t.cetId === ex.id);
    let cd = '';
    if (opted) {
      cd = '<div class="cet-cd">' +
        '<div class="cet-cd-head">' +
          '<span class="cet-cd-title">⏳ 距' + ex.badge + '开考</span>' +
          (hasTask ? '<span class="sub">已在任务中心提醒 ✓</span>'
                   : '<span class="link" data-cet-task="' + ex.id + '">加入任务提醒 ›</span>') +
        '</div>' +
        '<div class="cet-cd-time" data-cet-time="' + ex.id + '">' +
          '<b class="cd-d">--</b><span class="unit">天</span>' +
          '<b class="cd-h">--</b><span class="unit">时</span>' +
          '<b class="cd-m">--</b><span class="unit">分</span>' +
          '<b class="cd-s">--</b><span class="unit">秒</span>' +
        '</div>' +
      '</div>';
    }

    return '<div class="cet-item">' +
      '<div class="cet-row">' +
        '<div class="cet-badge ' + ex.id + '">' + ex.badge + '</div>' +
        '<div class="cet-info">' +
          '<div class="cet-name">' + escapeHtml(ex.name) + '</div>' +
          '<div class="cet-meta">' + ex.session + '｜' + ex.oral + '</div>' +
        '</div>' +
        '<button class="cet-btn ' + (opted ? 'on' : '') + '" data-cet-toggle="' + ex.id + '">' +
          (opted ? '已备考 ✓' : '＋ 备考') + '</button>' +
      '</div>' + cd +
    '</div>';
  }).join('');

  return '<div class="card cet-card">' +
    '<div class="card-head"><span class="card-title">📝 语言考试</span>' +
      '<span class="sub">四六级 · 雅思 · 托福</span></div>' +
    rows +
    '<div class="sub cet-note">选择备考开启提醒，可随时取消 · 考试时间以各官网为准</div>' +
  '</div>';
}

function updateCetCountdown() {
  CET_EXAMS.forEach(function (ex) {
    const el = document.querySelector('[data-cet-time="' + ex.id + '"]');
    if (!el) return;

    const start = new Date(ex.start);
    const end = new Date(ex.end);
    const now = new Date();

    if (now >= end) {
      el.innerHTML = '<span class="cd-done">本场考试已结束</span>';
      return;
    }
    if (now >= start) {
      el.innerHTML = '<span class="cd-live">考试进行中 ✏️</span>';
      return;
    }

    let ms = start - now;
    const d = Math.floor(ms / 86400000); ms -= d * 86400000;
    const h = Math.floor(ms / 3600000); ms -= h * 3600000;
    const m = Math.floor(ms / 60000); ms -= m * 60000;
    const sec = Math.floor(ms / 1000);

    const dd = el.querySelector('.cd-d');
    if (!dd) return;
    dd.textContent = d;
    el.querySelector('.cd-h').textContent = pad(h);
    el.querySelector('.cd-m').textContent = pad(m);
    el.querySelector('.cd-s').textContent = pad(sec);
  });
}

function toggleCet(id) {
  const ex = CET_EXAMS.find(x => x.id === id);
  if (!ex) return;
  const cet = store.getCet();
  const opted = !cet[id];
  cet[id] = opted;
  store.setCet(cet);
  renderHome();
  toast(opted
    ? '已开启' + ex.badge + '备考' + (ex.flexible ? ' ✓（官网查询考位）' : '倒计时 ✓')
    : '已取消' + ex.badge + '备考');
}

function addCetTask(id) {
  const ex = CET_EXAMS.find(x => x.id === id);
  if (!ex) return;
  const tasks = store.getTasks();
  if (tasks.some(t => t.cetId === id)) { toast('任务中心已有提醒'); return; }

  tasks.push({
    id: uid(),
    title: ex.taskTitle,
    category: 'exam',
    courseId: null,
    due: ex.start.slice(0, 16),
    priority: 'high',
    status: 'todo',
    estimateMin: ex.durationMin,
    note: '四六级备考 · 从首页四六级卡片加入',
    cetId: id,
    createdAt: Date.now(),
    doneAt: null
  });
  store.setTasks(tasks);
  renderHome();
  renderTasks();
  renderProfile();
  toast('已加入任务中心提醒 ✓');
}

/* ==================== 竞赛专区 ==================== */
// 7 大类 · 18 项赛事；regEnd/submitEnd 为 'MM-DD'（每年循环），null 表示两年一届以官网通知为准
const CONTEST_CATS = [
  {
    key: 'saikr', icon: '🌐', color: '#8B5CF6', name: '通用赛网（备用）',
    platform: '赛氪 Saikr', url: 'https://www.saikr.com/',
    desc: '全品类通用一站式平台',
    contests: []
  },
  {
    key: 'innovate', icon: '💡', color: '#5B9FE3', name: '科创创新创业类',
    platform: '全国大学生创业服务网', url: 'https://cy.ncss.cn',
    contests: [
      { id: 'iplus', name: '中国国际大学生创新大赛（原"互联网+"）', stars: 5, regEnd: '09-20', submitEnd: '09-30', note: '教育部主办最大规模双创赛事，校赛→省赛→国赛', site: 'https://cy.ncss.cn', siteLabel: 'cy.ncss.cn' },
      { id: 'tz_d', name: '"挑战杯"课外学术科技作品竞赛（大挑）', stars: 5, regEnd: '04-15', submitEnd: '05-31', note: '奇数年国赛 · 自然科学 / 哲社 / 科技发明三类作品', site: 'https://www.tiaozhanbei.net', siteLabel: 'www.tiaozhanbei.net' },
      { id: 'tz_x', name: '"挑战杯"大学生创业计划竞赛（小挑）', stars: 5, regEnd: '04-15', submitEnd: '05-31', note: '偶数年国赛 · 创业计划书 + 路演答辩', site: 'https://www.tiaozhanbei.net', siteLabel: 'www.tiaozhanbei.net' },
      { id: 'gic', name: '全球大学生创新创业竞赛', stars: 4, regEnd: '07-15', submitEnd: '07-15', note: '报名每年 4–7 月 · 7 月中旬提交项目申报书', site: 'https://www.giccontest.com/', siteLabel: 'giccontest.com' },
      { id: 'sthb', name: '全国大学生环境生态科技创新大赛', stars: 4, regEnd: '05-31', submitEnd: '05-31', note: '报名每年 2–5 月 · 5 月提交研究报告与作品', site: 'https://www.sthb.org.cn/', siteLabel: 'sthb.org.cn' },
      { id: 'fwwb', name: '中国大学生服务外包创新创业大赛', stars: 4, regEnd: '07-31', submitEnd: '07-31', note: '报名每年 4–7 月 · 7 月底提交项目材料', site: 'https://www.fwwb.org.cn/', siteLabel: 'fwwb.org.cn' },
      { id: 'silu', name: '丝路杯青年创新创业大赛', stars: 3, regEnd: '08-31', submitEnd: '08-31', note: '报名每年 5–8 月 · 8 月提交商业方案', site: 'https://silucup.org/', siteLabel: 'silucup.org' },
      { id: 'nongjian', name: '全国大学生农业建筑环境与能源工程创新竞赛', stars: 3, regEnd: '06-30', submitEnd: '06-30', note: '报名每年 3–6 月 · 6 月提交设计作品', site: 'https://www.nygcsai.com/', siteLabel: 'nygcsai.com' }
    ]
  },
  {
    key: 'math', icon: '📐', color: '#6FCF97', name: '数学 & 数模类',
    platform: '全国大学生数学建模竞赛', url: 'https://www.cmathc.org.cn',
    contests: [
      { id: 'cmmc', name: '全国大学生数学建模竞赛（国赛）', stars: 5, regEnd: '09-07', submitEnd: '09-14', note: '三人一队 · 72 小时提交论文 · 每年 9 月第二个周末开赛', site: 'https://www.cmathc.org.cn', siteLabel: 'www.cmathc.org.cn' },
      { id: 'mcm', name: '美国大学生数学建模竞赛 MCM/ICM', stars: 5, regEnd: '02-05', submitEnd: '02-15', note: '每年 2 月初 · 96 小时全英文论文 · 三人一队', site: 'https://www.comap.com', siteLabel: 'www.comap.com' },
      { id: 'cmath', name: '全国大学生数学竞赛 CMC', stars: 4, regEnd: '10-20', submitEnd: null, note: '数学类 / 非数学类 · 初赛 11 月 · 决赛次年 3-4 月', site: 'https://www.cmathc.com', siteLabel: 'www.cmathc.com' },
      { id: 'apmcm', name: '亚太地区大学生数学建模竞赛 APMCM', stars: 4, regEnd: '12-15', submitEnd: null, note: '报名每年 11–12 月 · 12 月开赛 · 赛后提交论文', site: 'https://www.apmcm.org/', siteLabel: 'apmcm.org' },
      { id: 'diangongbei', name: '电工杯全国大学生数学建模竞赛', stars: 4, regEnd: '05-15', submitEnd: null, note: '报名每年 4–5 月 · 5 月比赛 · 赛后交论文', site: 'https://www.diangongbei.com/', siteLabel: 'diangongbei.com' },
      { id: 'huashu', name: '华数杯全国大学生数学建模竞赛', stars: 3, regEnd: '08-15', submitEnd: null, note: '每年 7–8 月、1–2 月两期 · 赛后提交论文', site: 'https://www.huashucup.com/', siteLabel: 'huashucup.com' },
      { id: 'zhongqing', name: '中青杯全国大学生数学建模竞赛', stars: 3, regEnd: '09-30', submitEnd: null, note: '报名每年 5 月、9 月 · 分两赛季', site: 'https://www.zqcup.cn/', siteLabel: 'zqcup.cn' },
      { id: 'tongji', name: '全国大学生统计建模大赛', stars: 4, regEnd: '08-31', submitEnd: '08-31', note: '报名每年 5–8 月 · 8 月提交统计建模论文', site: 'https://www.tjmodeling.org.cn/', siteLabel: 'tjmodeling.org.cn' }
    ]
  },
  {
    key: 'coding', icon: '💻', color: '#BB6BD9', name: '计算机 / 程序设计类',
    platform: '中国大学生程序设计竞赛', url: 'https://ccpc.io',
    contests: [
      { id: 'ccpc', name: 'CCPC 中国大学生程序设计竞赛', stars: 5, regEnd: '11-01', submitEnd: null, note: '三人一队现场赛 · 分站赛 + 总决赛', site: 'https://ccpc.io', siteLabel: 'ccpc.io' },
      { id: 'lanqiao', name: '蓝桥杯软件和信息技术专业人才大赛', stars: 4, regEnd: '12-18', submitEnd: '04-26', note: '个人赛 · 省赛 4 月 · 全国总决赛 6 月', site: 'https://www.lanqiao.cn', siteLabel: 'www.lanqiao.cn' },
      { id: 'jsjsj', name: '中国大学生计算机设计大赛', stars: 4, regEnd: '03-15', submitEnd: '05-30', note: '软件开发 / 微课 / 数媒等大类 · 校级→省级→国赛', site: 'http://jsjds.blcu.edu.cn', siteLabel: 'jsjds.blcu.edu.cn' },
      { id: 'wangluo', name: '中国高校计算机大赛-网络技术挑战赛', stars: 4, regEnd: '06-30', submitEnd: '06-30', note: '报名每年 3–6 月 · 6 月提交开发作品、录屏材料', site: 'https://c4.secon.cn/', siteLabel: 'c4.secon.cn' },
      { id: 'cisc', name: '全国大学生信息安全竞赛 CISC', stars: 4, regEnd: '05-31', submitEnd: null, note: '报名每年 3–5 月 · 5 月初赛线上答题', site: 'https://www.cisc.org.cn/', siteLabel: 'cisc.org.cn' },
      { id: 'aiinnov', name: '全国大学生人工智能创新大赛', stars: 4, regEnd: '07-31', submitEnd: '07-31', note: '报名每年 4–7 月 · 7 月提交 AI 原型、演示视频', site: 'https://www.ai-contest.cn/', siteLabel: 'ai-contest.cn' },
      { id: 'appchal', name: '中国高校计算机大赛-移动应用创新赛', stars: 4, regEnd: '07-31', submitEnd: '07-31', note: '报名每年 4–7 月 · 7 月提交 APP / 小程序作品', site: 'https://appchallenge.secon.cn/', siteLabel: 'appchallenge.secon.cn' },
      { id: 'astar', name: '百度之星程序设计大赛', stars: 4, regEnd: '08-31', submitEnd: null, note: '报名每年 5–8 月 · 多轮线上算法赛', site: 'https://astar.baidu.com/', siteLabel: 'astar.baidu.com' }
    ]
  },
  {
    key: 'foreign', icon: '🌏', color: '#F2994A', name: '外语语言类',
    platform: '外研社·国才杯', url: 'https://uchallenge.unipus.cn',
    contests: [
      { id: 'waiyanshe', name: '"外研社·国才杯"英语系列大赛', stars: 5, regEnd: '09-15', submitEnd: '09-30', note: '演讲 / 写作 / 阅读三大赛项 · 校级→省级→全国决赛', site: 'https://uchallenge.unipus.cn', siteLabel: 'uchallenge.unipus.cn' },
      { id: 'neccs', name: '全国大学生英语竞赛 NECCS', stars: 4, regEnd: '03-15', submitEnd: null, note: 'A/B/C/D 四类 · 初赛 4 月 · 决赛 5 月', site: 'http://www.ceec.cn', siteLabel: 'www.ceec.cn' },
      { id: 'g21st', name: '"21世纪杯"全国英语演讲比赛', stars: 4, regEnd: '04-15', submitEnd: '04-30', note: '定题演讲视频初选 → 地区复赛 → 全国总决赛', site: 'https://contest.i21st.cn', siteLabel: 'contest.i21st.cn' },
      { id: 'swyy', name: '全国大学生商务英语竞赛', stars: 4, regEnd: '04-30', submitEnd: null, note: '报名每年 2–4 月 · 4 月线上统一考核', site: 'https://www.beccontest.com/', siteLabel: 'beccontest.com' },
      { id: 'yiyan', name: '"译研杯"全国大学生翻译大赛', stars: 3, regEnd: '12-31', submitEnd: '12-31', note: '报名每年 10–12 月 · 线上提交译文稿件', site: 'https://www.yiyancontest.com/', siteLabel: 'yiyancontest.com' },
      { id: 'rihan', name: '全国大学生日语 / 韩语能力竞赛', stars: 3, regEnd: '05-31', submitEnd: null, note: '报名每年 3–5 月 · 5 月线上答题', site: 'https://uchallenge.unipus.cn/', siteLabel: 'uchallenge.unipus.cn' },
      { id: 'etic', name: '国际人才英语考试 ETIC 赛事营赛项', stars: 3, regEnd: null, submitEnd: null, cycle: '全年多批次', note: '全年多批次 · 赛前 1 个月开放报名', site: 'https://etic.unipus.cn/', siteLabel: 'etic.unipus.cn' },
      { id: 'vocab', name: '全国大学生英语词汇挑战赛', stars: 3, regEnd: '11-30', submitEnd: null, note: '报名每年 9–11 月 · 线上答题，门槛低', site: 'https://vocabcontest.com/', siteLabel: 'vocabcontest.com' }
    ]
  },
  {
    key: 'business', icon: '📈', color: '#F2C94C', name: '经管商科类',
    platform: '全国大学生电子商务三创赛', url: 'https://www.3chuang.net',
    contests: [
      { id: 'sanchuang', name: '电子商务"三创赛"（创新·创意·创业）', stars: 5, regEnd: '01-20', submitEnd: '06-15', note: '校级→省级选拔（3-5 月）→全国总决赛（7-8 月）', site: 'https://www.3chuang.net', siteLabel: 'www.3chuang.net' },
      { id: 'shichang', name: '全国大学生市场调查与分析大赛', stars: 4, regEnd: '12-15', submitEnd: '03-31', note: '知识赛 + 企业命题实践赛 · 调研报告与答辩', site: 'http://www.chinadass.org.cn', siteLabel: 'www.chinadass.org.cn' },
      { id: 'shangye', name: '全国高校商业精英挑战赛', stars: 4, regEnd: '08-31', submitEnd: '09-15', note: '国际贸易 / 会计 / 营销等多项设置', site: 'http://www.ccpitedu.org', siteLabel: 'www.ccpitedu.org' },
      { id: 'zhengquan', name: '全国大学生证券投资模拟大赛', stars: 4, regEnd: '06-30', submitEnd: null, note: '报名每年 3–6 月 · 线上模拟操盘 · 定期提交报告', site: 'https://www.stockcontest.org.cn/', siteLabel: 'stockcontest.org.cn' },
      { id: 'gongying', name: '全国大学生供应链管理大赛', stars: 4, regEnd: '07-31', submitEnd: '07-31', note: '报名每年 4–7 月 · 提交供应链方案、沙盘答辩', site: 'https://www.scmcontest.com/', siteLabel: 'scmcontest.com' },
      { id: 'caihui', name: '全国大学生财会创新大赛', stars: 3, regEnd: '08-31', submitEnd: '08-31', note: '报名每年 5–8 月 · 提交财会案例作品', site: 'https://www.caihuisai.cn/', siteLabel: 'caihuisai.cn' },
      { id: 'xiangzhen', name: '全国大学生乡村振兴策划大赛', stars: 4, regEnd: '06-30', submitEnd: '06-30', note: '报名每年 3–6 月 · 提交乡村发展策划书', site: 'https://www.ruralplan.cn/', siteLabel: 'ruralplan.cn' },
      { id: 'baoxian', name: '全国大学生保险创新创意大赛', stars: 3, regEnd: '09-30', submitEnd: '09-30', note: '报名每年 4–9 月 · 提交创新方案', site: 'https://bxchuangyi.org.cn/', siteLabel: 'bxchuangyi.org.cn' }
    ]
  },
  {
    key: 'design', icon: '🎨', color: '#D45B7A', name: '设计艺术类',
    platform: '全国大学生广告艺术大赛', url: 'https://www.sun-ada.net',
    contests: [
      { id: 'daguang', name: '全国大学生广告艺术大赛（大广赛）', stars: 5, regEnd: '06-12', submitEnd: '06-12', note: '命题创作 · 校级初评→省级分赛区→全国总评', site: 'https://www.sun-ada.net', siteLabel: 'www.sun-ada.net' },
      { id: 'ncda', name: 'NCDA 全国高校数字艺术设计大赛', stars: 4, regEnd: '06-20', submitEnd: '06-20', note: '视觉 / 交互 / 数字影像等类别 · 未来设计师杯', site: 'https://www.ncda.org.cn', siteLabel: 'www.ncda.org.cn' },
      { id: 'huacan', name: '华灿奖（两岸新锐设计竞赛）', stars: 4, regEnd: '12-15', submitEnd: '12-15', note: '常规赛道作品提交每年 10–12 月', site: 'https://www.huacanzuopin.com', siteLabel: 'www.huacanzuopin.com' },
      { id: 'gongye', name: '全国大学生工业设计大赛', stars: 4, regEnd: '07-31', submitEnd: '07-31', note: '报名每年 4–7 月 · 7 月提交产品设计图纸、效果图', site: 'https://www.cidc.org.cn/', siteLabel: 'cidc.org.cn' },
      { id: 'baozhuang', name: '中国包装创意设计大赛', stars: 4, regEnd: '06-30', submitEnd: '06-30', note: '报名每年 3–6 月 · 6 月截止上传包装设计作品', site: 'https://www.cndesign-package.com/', siteLabel: 'cndesign-package.com' },
      { id: 'yazhou', name: '亚洲青年创新设计大赛', stars: 3, regEnd: '09-30', submitEnd: '09-30', note: '报名每年 6–9 月 · 提交视觉、文创类作品', site: 'https://ayidcontest.com/', siteLabel: 'ayidcontest.com' },
      { id: 'huanjing', name: '全国大学生环境设计大赛', stars: 3, regEnd: '08-31', submitEnd: '08-31', note: '报名每年 4–8 月 · 提交空间设计方案', site: 'https://hjdesign.org.cn/', siteLabel: 'hjdesign.org.cn' },
      { id: 'chahua', name: '全国大学生插画设计大赛', stars: 3, regEnd: '07-31', submitEnd: '07-31', note: '报名每年 5–7 月 · 插画、绘本类投稿', site: 'https://chahuasai.com/', siteLabel: 'chahuasai.com' }
    ]
  },
  {
    key: 'engineer', icon: '⚙️', color: '#56CCF2', name: '机械 / 工程综合类',
    platform: '中国大学生工程实践与创新能力大赛', url: 'http://www.gcxl.edu.cn/new/index.html',
    contests: [
      { id: 'gongcheng', name: '中国大学生工程实践与创新能力大赛', stars: 5, regEnd: null, submitEnd: null, note: '两年一届 · 智能制造 / 新能源 / 信息技术等赛道', site: 'https://gcxl.edu.cn', siteLabel: 'gcxl.edu.cn' },
      { id: 'dianzi', name: '全国大学生电子设计竞赛', stars: 5, regEnd: null, submitEnd: null, cycle: '两年一届（单数年）', note: '单数年国赛 · 暑期 4 天 3 夜现场综合测评', site: 'https://nuedc.xjtu.edu.cn', siteLabel: 'nuedc.xjtu.edu.cn' },
      { id: 'jixie', name: '全国大学生机械创新设计大赛', stars: 4, regEnd: null, submitEnd: null, note: '两年一届 · 围绕主题命题 · 先省赛后国赛', site: 'https://jxds.cmetc.cn', siteLabel: 'jxds.cmetc.cn' },
      { id: 'robomaster', name: '全国大学生机器人竞赛 RoboMaster 机甲大师赛', stars: 4, regEnd: '12-31', submitEnd: null, note: '报名每年 9–12 月 · 次年 3 月开赛', site: 'https://www.robomaster.com/', siteLabel: 'robomaster.com' },
      { id: 'zidonghua', name: '全国大学生自动化大赛', stars: 4, regEnd: '06-30', submitEnd: '06-30', note: '报名每年 3–6 月 · 6 月提交控制方案、实物演示视频', site: 'https://zdhsai.org.cn/', siteLabel: 'zdhsai.org.cn' },
      { id: 'qiaoliang', name: '全国大学生桥梁设计大赛', stars: 4, regEnd: '07-31', submitEnd: '07-31', note: '报名每年 4–7 月 · 提交桥梁模型方案、图纸', site: 'https://bridgesai.cn/', siteLabel: 'bridgesai.cn' },
      { id: 'shuili', name: '全国大学生水利创新设计大赛', stars: 3, regEnd: null, submitEnd: null, cycle: '两年一届', note: '两年一届 · 报名每年 2–5 月 · 提交水利创新作品', site: 'https://slcx.org.cn/', siteLabel: 'slcx.org.cn' },
      { id: 'nengdong', name: '全国大学生能源动力创新竞赛', stars: 4, regEnd: '06-30', submitEnd: '06-30', note: '报名每年 3–6 月 · 提交能源系统创新方案', site: 'https://nengdongcontest.com/', siteLabel: 'nengdongcontest.com' }
    ]
  },
  {
    key: 'fresh', icon: '🌱', color: '#FF9F43', name: '大一萌新区',
    platform: '按 6 大类精选 · 新手友好', url: 'https://www.saikr.com/',
    groups: [
      { title: '1. 语言外语类', platform: '外研社 Unipus 大赛平台', url: 'https://uchallenge.unipus.cn/', contests: [
        { id: 'neccs', name: '全国大学生英语竞赛（大英赛 NECCS）', stars: 5, regEnd: '03-15', submitEnd: null, note: '报名：前一年 12 月—当年 3 月中旬截止 · 4 月统一笔试，无作品提交', site: 'https://www.neccs.cn/', siteLabel: 'www.neccs.cn' },
        { id: 'waiyanshe', name: '"外研社·国才杯"全国大学生外语能力大赛', stars: 4, regEnd: '09-15', submitEnd: '09-30', note: '报名：每年 6–9 月，9 月中旬截止 · 校赛材料 9 月提交', site: 'https://uchallenge.unipus.cn/', siteLabel: 'uchallenge.unipus.cn' },
        { id: 'g21st', name: '"21世纪杯"全国英语演讲比赛', stars: 4, regEnd: '04-15', submitEnd: '04-30', note: '校园选拔赛报名：每年 1–4 月 · 校内演讲稿、视频材料 4 月提交', site: 'https://www.21stcentury.com.cn/', siteLabel: 'www.21stcentury.com.cn' }
      ]},
      { title: '2. 计算机 & 数字作品类', platform: 'CCPC 中国大学生程序设计竞赛官网', url: 'https://ccpc.io/', contests: [
        { id: 'lanqiao', name: '蓝桥杯全国软件和信息技术专业人才大赛', stars: 5, regEnd: '12-18', submitEnd: '04-26', note: '省赛报名：10 月–12 月 18 日 · 省赛次年 4 月开赛线上答题 · 作品赛道次年 4 月 26 日提交作品', site: 'https://dasai.lanqiao.cn/', siteLabel: 'dasai.lanqiao.cn' },
        { id: 'jsjsj', name: '中国大学生计算机设计大赛', stars: 4, regEnd: '03-15', submitEnd: '05-30', note: '校级报名：每年 1–3 月 · 省级作品提交 4–5 月 · 国赛材料提交截止 5 月 30 日', site: 'https://www.jsjds.org/', siteLabel: 'www.jsjds.org' },
        { id: 'ncccu', name: '全国高校计算机能力挑战赛', stars: 4, regEnd: '11-25', submitEnd: null, note: '报名：每年 9–11 月，11 月下旬截止 · 在线上机答题（Office/AI 多个赛道）', site: 'http://www.ncccu.org.cn/', siteLabel: 'www.ncccu.org.cn' }
      ]},
      { title: '3. 商科调研综合类（不限专业，组队友好）', platform: '全国大学生电子商务三创赛官网', url: 'http://www.3chuang.net/', contests: [
        { id: 'shichang', name: '正大杯·全国大学生市场调查与分析大赛', stars: 5, regEnd: '12-15', submitEnd: '03-31', note: '报名：每年 10–12 月 · 调研报告次年 3 月提交', site: 'https://www.chinamsr.com/', siteLabel: 'www.chinamsr.com' },
        { id: 'sanchuang', name: '全国大学生电子商务三创挑战赛', stars: 4, regEnd: '01-20', submitEnd: '06-15', note: '报名：上一年 10 月—次年 1 月 20 日 · 校级 3–4 月、省级 4–6 月提交项目计划书', site: 'http://www.3chuang.net/', siteLabel: 'www.3chuang.net' },
        { id: 'zhiye', name: '全国大学生职业规划大赛', stars: 4, regEnd: '01-15', submitEnd: null, note: '报名：每年 10 月—次年 1 月 · 提交生涯规划书、PPT 展示', site: 'https://zgs.chsi.com.cn', siteLabel: 'zgs.chsi.com.cn' }
      ]},
      { title: '4. 科创创新实践类（适合组队，大一可做轻量化项目）', platform: '全国大学生创业服务网', url: 'https://cy.ncss.cn/', contests: [
        { id: 'ican', name: 'iCAN 全国大学生创新创业大赛', stars: 4, regEnd: '06-30', submitEnd: '06-30', note: '报名：每年 3–6 月 · 6 月提交创新作品、方案', site: 'https://www.ican-contest.org/', siteLabel: 'www.ican-contest.org' },
        { id: 'iplus', name: '中国国际大学生创新大赛（互联网+）', stars: 5, regEnd: '09-20', submitEnd: '09-30', note: '报名：每年 8–9 月，9 月下旬截止 · 项目材料提交同步至 9 月底', site: 'https://cy.ncss.cn/', siteLabel: 'cy.ncss.cn' },
        { id: 'jieneng', name: '全国大学生节能减排社会实践与科技竞赛', stars: 4, regEnd: '03-15', submitEnd: '03-31', note: '报名：每年 12 月–次年 3 月 · 3 月提交申报材料', site: 'https://www.jienengjianpai.org/', siteLabel: 'www.jienengjianpai.org' }
      ]},
      { title: '5. 数学建模类（大一可跟学长组队体验）', platform: '大学生数学竞赛网', url: 'https://www.cmathc.org.cn/', contests: [
        { id: 'cmmc', name: '全国大学生数学建模竞赛（国赛·高教社杯）', stars: 5, regEnd: '09-07', submitEnd: '09-14', note: '报名：每年 6–9 月初，9 月 7 日前后截止 · 作品提交：9 月 13 日 20:30–14 日 14:00', site: 'https://cumcm.cnki.net', siteLabel: 'cumcm.cnki.net' },
        { id: 'mathorcup', name: 'MathorCup 高校数学建模挑战赛', stars: 4, regEnd: '04-15', submitEnd: null, note: '报名：每年 1–4 月，4 月开赛 · 赛后提交论文', site: 'https://www.mathorcup.org/', siteLabel: 'www.mathorcup.org' },
        { id: 'cmath', name: '全国大学生数学竞赛（非数学类）', stars: 4, regEnd: '10-20', submitEnd: null, note: '报名：每年 9–10 月，10 月中下旬截止 · 现场笔试，无线上作品提交', site: 'https://www.cmathc.org.cn/', siteLabel: 'www.cmathc.org.cn' }
      ]},
      { title: '6. 设计文创类（不限专业，海报 / 小程序 / 文创均可）', platform: '全国大学生广告艺术大赛（大广赛）官网', url: 'http://www.sun-ada.net/', contests: [
        { id: 'daguang', name: '全国大学生广告艺术大赛（大广赛）', stars: 5, regEnd: '06-12', submitEnd: '06-12', note: '报名+作品线上提交：每年 5.10–6.12 16:00 截止', site: 'http://www.sun-ada.net/', siteLabel: 'www.sun-ada.net' },
        { id: 'ncda', name: '未来设计师·全国高校数字艺术设计大赛（NCDA）', stars: 4, regEnd: '06-20', submitEnd: '06-20', note: '报名投稿：每年 3–6 月 · 6 月 20 日作品提交截止', site: 'https://www.ncda.org.cn/', siteLabel: 'www.ncda.org.cn' },
        { id: 'haochuangyi', name: '中国好创意暨全国数字艺术设计大赛', stars: 4, regEnd: '06-30', submitEnd: '06-30', note: '报名：每年 3–6 月 · 6 月底截止作品上传', site: 'https://www.chinahaochuangyi.com/', siteLabel: 'www.chinahaochuangyi.com' }
      ]}
    ],
    get contests() {
      return this.groups.reduce(function (acc, g) { return acc.concat(g.contests); }, []);
    }
  }
];

// 用户自定义比赛（通过类别详情「＋ 添加」录入，持久化存储）
function customContestsOf(catKey) {
  return store.getCustomContests().filter(function (c) { return c.catKey === catKey; });
}

// 某类别的全部比赛 = 内置 + 自定义
function mergedContestsOf(cat) {
  return cat.contests.concat(customContestsOf(cat.key));
}

function findContest(id) {
  for (let i = 0; i < CONTEST_CATS.length; i++) {
    const ct = mergedContestsOf(CONTEST_CATS[i]).find(function (c) { return c.id === id; });
    if (ct) return { cat: CONTEST_CATS[i], ct: ct };
  }
  return null;
}

// 赛事总数（按唯一 id 去重：萌新区精选与原类别同款赛事只计一次）
function totalContestCount() {
  const seen = {};
  let n = 0;
  CONTEST_CATS.forEach(function (cat) {
    mergedContestsOf(cat).forEach(function (ct) { if (!seen[ct.id]) { seen[ct.id] = true; n++; } });
  });
  return n;
}

// 'MM-DD' 每年循环取下一次日期：今年未过用今年，已过用明年
function nextDateMD(md) {
  const y = new Date().getFullYear();
  const thisY = y + '-' + md;
  return thisY >= todayStr() ? thisY : (y + 1) + '-' + md;
}

function daysToDate(dateStr) {
  return Math.round((new Date(dateStr + 'T00:00:00') - new Date(todayStr() + 'T00:00:00')) / 86400000);
}

// 单条赛事倒计时块：报名截止 / 提交截止 + 官网
function contestCdHTML(ct) {
  let rows = '';
  if (ct.regEnd) {
    const d = nextDateMD(ct.regEnd);
    const n = daysToDate(d);
    rows += '<div class="ct-cd-row">' +
      '<span class="ct-cd-label">📝 距报名截止</span>' +
      '<b class="ct-cd-days' + (n <= 15 ? ' urgent' : '') + '">' + n + '</b><span class="ct-cd-unit">天</span>' +
      '<span class="ct-cd-date">' + d + '</span></div>';
  }
  if (ct.submitEnd) {
    const d = nextDateMD(ct.submitEnd);
    const n = daysToDate(d);
    rows += '<div class="ct-cd-row">' +
      '<span class="ct-cd-label">📤 距提交截止</span>' +
      '<b class="ct-cd-days' + (n <= 15 ? ' urgent' : '') + '">' + n + '</b><span class="ct-cd-unit">天</span>' +
      '<span class="ct-cd-date">' + d + '</span></div>';
  }
  if (!ct.regEnd && !ct.submitEnd) {
    rows += '<div class="ct-cd-row ct-cd-only"><span class="ct-cd-label">📅 ' + escapeHtml(ct.cycle || '两年一届') + ' · 具体时间以官网通知为准</span></div>';
  }
  return rows +
    (ct.site
      ? '<div class="ct-site-row">🌐 报名官网：<a href="' + ct.site + '" target="_blank" rel="noopener" class="ct-site">' + escapeHtml(ct.siteLabel || ct.site) + '</a></div>'
      : '<div class="ct-site-row">🌐 官网暂未填写 · 以官方通知为准</div>');
}

// 竞赛专区：类别卡（对称网格，撑满首屏）→ 类别详情（比赛卡片，备赛可切换）
// 单张比赛卡（详情页用）：难度星 + 备赛按钮 + 倒计时（自定义比赛带删除小键）
function contestItemHTML(ct) {
  const opted = !!store.getContests()[ct.id];
  const hl = contestHighlight === ct.id ? ' ct-flash' : '';
  return '<div class="cet-item ct-item' + hl + (ct.custom ? ' ct-mine' : '') + '">' +
    '<div class="cet-row">' +
      '<div class="cet-info">' +
        '<div class="cet-name">' + escapeHtml(ct.name) + (ct.custom ? '<span class="ct-mine-tag">自定义</span>' : '') + '</div>' +
        '<div class="cet-meta">' + escapeHtml(ct.note) + '</div>' +
        '<div class="ct-diff">项目难度：<span class="s-on">' + '★'.repeat(ct.stars) + '</span><span class="s-off">' + '☆'.repeat(5 - ct.stars) + '</span></div>' +
      '</div>' +
      (ct.custom ? '<button class="ct-custom-del" data-custom-del="' + ct.id + '" title="删除">✕</button>' : '') +
      '<button class="cet-btn ' + (opted ? 'on' : '') + '" data-contest-toggle="' + ct.id + '">' +
        (opted ? '已备赛 ✓' : '＋ 备赛') + '</button>' +
    '</div>' +
    (opted ? '<div class="cet-cd ct-cd">' + contestCdHTML(ct) + '</div>' : '') +
  '</div>';
}

function renderContest() {
  const el = document.getElementById('contest-list');
  if (!el) return;
  const headEl = document.getElementById('contest-page-head');
  if (headEl) headEl.style.display = contestView.cat ? 'none' : '';

  /* 顶级：类别卡片，只有大标题，对称网格 */
  if (!contestView.cat) {
    el.innerHTML = '<div class="contest-grid">' + CONTEST_CATS.map(function (cat) {
      const cnt = mergedContestsOf(cat).length;
      const sub = cnt
        ? (cat.groups ? cat.groups.length + ' 大类 · ' + cnt + ' 项精选 · ' + escapeHtml(cat.platform) : cnt + ' 项赛事 · ' + escapeHtml(cat.platform))
        : escapeHtml(cat.desc || cat.platform);
      return '<div class="contest-cat" data-cat="' + cat.key + '">' +
        '<div class="cc-top"><span class="cat-dot" style="background:' + cat.color + '"></span></div>' +
        '<div class="cc-icon">' + cat.icon + '</div>' +
        '<div class="cc-name">' + escapeHtml(cat.name) + '</div>' +
        '<div class="cc-sub">' + sub + '</div>' +
        '<span class="plan-sec-arrow">›</span>' +
      '</div>';
    }).join('') + '</div>';
    return;
  }

  const cat = CONTEST_CATS.find(function (c) { return c.key === contestView.cat; });
  if (!cat) { contestView.cat = null; renderContest(); return; }

  /* 类别详情：返回 + 聚合平台 + 比赛卡片（备赛切换 + 倒计时 + 官网）+ 添加自己的比赛 */
  const customs = customContestsOf(cat.key);
  const merged = mergedContestsOf(cat);
  const addBtn = '<button class="ct-add-btn" data-add-contest="' + cat.key + '">＋ 添加自己的比赛</button>';
  let listHTML = '';
  if (cat.groups) {
    /* 大一萌新区：按子分组渲染（含「我的比赛」组），每组带小标题 + 组内聚合平台 */
    const groups = cat.groups.concat(customs.length
      ? [{ title: '＋ 我的比赛', platform: '自己添加 · 可删除', url: '', contests: customs }]
      : []);
    listHTML = groups.map(function (g) {
      return '<div class="ct-group">' +
        '<div class="ct-group-head">' +
          '<div class="ct-group-title">' + escapeHtml(g.title) + '</div>' +
          (g.url
            ? '<a class="ct-group-plat" href="' + g.url + '" target="_blank" rel="noopener">聚合：' + escapeHtml(g.platform) + ' ›</a>'
            : '<span class="ct-group-plat is-plain">' + escapeHtml(g.platform) + '</span>') +
        '</div>' +
        '<div class="ct-list">' + g.contests.map(contestItemHTML).join('') + '</div>' +
      '</div>';
    }).join('') + addBtn;
  } else if (merged.length) {
    listHTML = '<div class="ct-list">' + merged.map(contestItemHTML).join('') + '</div>' + addBtn;
  } else {
    /* 通用赛网：无具体赛事，展示平台说明 */
    listHTML = '<div class="empty ct-empty">' +
      '<div class="empty-emoji">🌐</div>' +
      '<div>全品类赛事聚合平台，覆盖理 / 工 / 文 / 商 / 艺各赛道</div>' +
      '<div class="sub">报名 · 组队 · 真题资料一站式查找，点击上方平台卡直达</div>' +
    '</div>' + addBtn;
  }

  el.innerHTML =
    '<div class="pv-head">' +
      '<button class="pv-back" data-cv="back" aria-label="返回">‹ 返回</button>' +
      '<div class="pv-head-txt"><div class="pv-title">' + cat.icon + ' ' + escapeHtml(cat.name) + '</div></div>' +
      '<span class="cat-tag" style="background:' + cat.color + '">' + (merged.length ? merged.length + ' 项' : '平台') + '</span>' +
    '</div>' +
    '<a class="ct-platform" href="' + cat.url + '" target="_blank" rel="noopener">' +
      '<span class="ctp-icon">🌐</span>' +
      '<div class="ctp-info">' +
        '<div class="ctp-name">' + escapeHtml(cat.platform) + '</div>' +
        '<div class="ctp-sub">官方聚合平台 · 点击直达</div>' +
      '</div>' +
      '<span class="plan-sec-arrow">›</span>' +
    '</a>' +
    listHTML +
    '<div class="sub ct-note">点击备赛开启倒计时并同步到首页 · 时间每年循环，以各赛事官网为准</div>';

  // 高亮目标赛事滚动到可视区，一次性消费
  contestHighlight = null;
  const hlEl = el.querySelector('.ct-flash');
  if (hlEl && typeof hlEl.scrollIntoView === 'function') {
    setTimeout(function () { hlEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 60);
  }
}

function toggleContest(id) {
  const found = findContest(id);
  if (!found) return;
  const state = store.getContests();
  state[id] = !state[id];
  store.setContests(state);
  if (currentTab === 'contest') renderContest();
  renderHome();
  toast(state[id] ? '已开始备赛：' + found.ct.name + ' ✓' : '已取消备赛：' + found.ct.name);
}

// 添加自己的比赛（弹窗表单）：名称 + 难度星 + 报名/提交截止 + 说明 + 官网
function openContestForm(catKey) {
  openModal(
    '<div class="sheet-title">＋ 添加自己的比赛</div>' +
    '<div class="form compact">' +
      '<label class="field"><span class="field-label">比赛名称 *</span>' +
        '<input id="ccf-name" class="input" placeholder="例如：XX 省大学生 XX 大赛"></label>' +
      '<div class="field"><span class="field-label">项目难度</span><div class="chips" id="ccf-stars">' +
        [1, 2, 3, 4, 5].map(s =>
          '<span class="chip ' + (s === 3 ? 'active' : '') + '" data-star="' + s + '">' + '★'.repeat(s) + '</span>'
        ).join('') + '</div></div>' +
      '<div class="row">' +
        '<label class="field"><span class="field-label">报名截止（可选）</span>' +
          '<input id="ccf-reg" type="date" class="input"></label>' +
        '<label class="field"><span class="field-label">提交截止（可选）</span>' +
          '<input id="ccf-submit" type="date" class="input"></label>' +
      '</div>' +
      '<label class="field"><span class="field-label">时间 / 说明</span>' +
        '<input id="ccf-note" class="input" placeholder="例如：报名 3–6 月 · 6 月提交作品"></label>' +
      '<label class="field"><span class="field-label">报名官网（可选）</span>' +
        '<input id="ccf-site" class="input" placeholder="https://..."></label>' +
    '</div>' +
    '<div class="btn-row"><button class="btn ghost" id="ccf-cancel">取消</button><button class="btn primary" id="ccf-save">添加</button></div>'
  );

  let stars = 3;
  document.getElementById('ccf-stars').addEventListener('click', function (e) {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    stars = Number(chip.dataset.star);
    document.querySelectorAll('#ccf-stars .chip').forEach(x => x.classList.toggle('active', x === chip));
  });

  document.getElementById('ccf-cancel').onclick = closeModal;

  document.getElementById('ccf-save').onclick = function () {
    const name = document.getElementById('ccf-name').value.trim();
    if (!name) { toast('请输入比赛名称'); return; }
    const note = document.getElementById('ccf-note').value.trim() || '自定义比赛 · 时间以官网通知为准';

    let site = document.getElementById('ccf-site').value.trim();
    let siteLabel = '';
    if (site) {
      if (!/^https?:\/\//i.test(site)) site = 'https://' + site;
      try { siteLabel = new URL(site).hostname.replace(/^www\./, ''); } catch (err) { siteLabel = site; }
    }

    const reg = document.getElementById('ccf-reg').value;   // yyyy-MM-dd
    const sub = document.getElementById('ccf-submit').value;
    const item = {
      id: 'my_' + uid(),
      catKey: catKey,
      name: name,
      stars: stars,
      regEnd: reg ? reg.slice(5) : null,        // MM-DD 每年循环
      submitEnd: sub ? sub.slice(5) : null,
      note: note,
      site: site,
      siteLabel: siteLabel,
      custom: true
    };

    const list = store.getCustomContests();
    list.push(item);
    store.setCustomContests(list);
    closeModal();
    renderContest();
    renderHome();
    toast('已添加：' + name + ' ✓');
  };
}

// 删除自定义比赛（连带清理备赛状态）
function deleteCustomContest(id) {
  const list = store.getCustomContests().filter(function (c) { return c.id !== id; });
  store.setCustomContests(list);
  const state = store.getContests();
  if (state[id]) { delete state[id]; store.setContests(state); }
  renderContest();
  renderHome();
  toast('已删除该自定义比赛');
}

// 首页竞赛区：单一模块内部分区（备赛倒计时 + 推荐比赛），整卡点击进入
function contestCardHTML() {
  const state = store.getContests();
  const ids = Object.keys(state).filter(function (k) { return state[k]; });

  /* 分区一：备赛倒计时（有备赛项时显示） */
  let cdZone = '';
  if (ids.length) {
    const rows = ids.map(function (id) {
      const found = findContest(id);
      if (!found) return '';
      return '<div class="ct-home-item">' +
        '<div class="ct-home-name"><i style="background:' + found.cat.color + '"></i>' + escapeHtml(found.ct.name) +
          '<button class="ct-cancel-btn" data-contest-toggle="' + id + '">取消备赛</button>' +
        '</div>' +
        contestCdHTML(found.ct) +
      '</div>';
    }).join('');
    cdZone = '<div class="ct-zone">' +
      '<div class="ct-zone-title">⏳ 备赛倒计时</div>' +
      rows +
    '</div>';
  }

  /* 分区二：推荐比赛（常显 3 项最近截止；已备赛行显示取消备赛） */
  const recs = recommendContests(3);
  const recRows = recs.map(function (found) {
    const ct = found.ct;
    const opted = !!state[ct.id];
    let meta = '';
    if (ct.regEnd) meta += '报名截止 ' + nextDateMD(ct.regEnd).slice(5);
    if (ct.submitEnd) meta += (meta ? ' · ' : '') + '提交 ' + nextDateMD(ct.submitEnd).slice(5);
    if (!meta) meta = ct.cycle || '两年一届 · 以官网通知为准';
    return '<div class="ct-rec-row" data-rec-cat="' + found.cat.key + '" data-rec-id="' + ct.id + '">' +
      '<div class="ct-rec-info">' +
        '<div class="ct-rec-name"><i style="background:' + found.cat.color + '"></i>' + escapeHtml(ct.name) + '</div>' +
        '<div class="ct-rec-meta">' + escapeHtml(meta) +
          (ct.site ? ' · <a href="' + ct.site + '" target="_blank" rel="noopener" class="ct-site">' + escapeHtml(ct.siteLabel || ct.site) + '</a>' : '') + '</div>' +
      '</div>' +
      (opted
        ? '<button class="ct-cancel-btn" data-contest-toggle="' + ct.id + '">取消备赛</button>'
        : '<button class="cet-btn" data-contest-toggle="' + ct.id + '">＋ 备赛</button>') +
    '</div>';
  }).join('');
  const recZone = '<div class="ct-zone">' +
    '<div class="ct-zone-title">🔥 推荐比赛</div>' +
    recRows +
  '</div>';

  return '<div class="card contest-master" data-nav="contest">' +
    '<div class="card-head contest-home-head">' +
      '<span class="card-title">🏆 竞赛专区</span>' +
      '<div class="chh-right">' +
        '<span class="sub">' + (ids.length ? '已备赛 ' + ids.length + ' 项' : totalContestCount() + ' 项赛事') + '</span>' +
        '<span class="ct-enter-btn">进入 ›</span>' +
      '</div>' +
    '</div>' +
    '<div class="ct-zones">' + cdZone + recZone + '</div>' +
    '<div class="sub ct-note">按报名截止时间推荐 · 更多赛事点击进入竞赛专区</div>' +
  '</div>';
}

// 推荐比赛：基础取最近截止 n 项（已备赛的保留显示取消按键），
// 若其中有已备赛占掉名额，则继续补充未备赛的新推荐，保证始终约 n 项可新增备赛
function recommendContests(n) {
  const state = store.getContests();
  const all = [];
  const seen = {};
  CONTEST_CATS.forEach(function (cat) {
    mergedContestsOf(cat).forEach(function (ct) {
      if (seen[ct.id]) return; // 同一赛事在多个类别出现（如萌新区精选）只取一次
      seen[ct.id] = true;
      all.push({ cat: cat, ct: ct });
    });
  });
  all.sort(function (a, b) {
    const da = a.ct.regEnd ? daysToDate(nextDateMD(a.ct.regEnd)) : 99999;
    const db = b.ct.regEnd ? daysToDate(nextDateMD(b.ct.regEnd)) : 99999;
    return da - db;
  });
  const chosen = all.slice(0, n);
  for (let i = n; i < all.length; i++) {
    const fresh = chosen.filter(function (x) { return !state[x.ct.id]; }).length;
    if (fresh >= n) break;
    if (!state[all[i].ct.id]) chosen.push(all[i]);
  }
  return chosen;
}

/* ==================== 课程表 ==================== */
function currentShownWeek() {
  return getWeekNumber(store.getUser().semesterStart) + weekOffset;
}

/* ==================== 课程作业（课表内） ==================== */
// 某门课的作业：关联该课程且类别为「作业」的任务
function courseHwInfo(courseId) {
  const hws = store.getTasks().filter(t => t.courseId === courseId && t.category === 'homework');
  const done = hws.filter(t => t.status === 'done').length;
  return { list: hws, total: hws.length, done: done, all: hws.length > 0 && done === hws.length };
}

// 课程块内的作业状态徽标：无作业→添加 / 未完成→去完成 / 全完成→已完成
// data-hw-open 绑定课程 id，点击打开该课作业面板
function hwBadgeHTML(info, courseId) {
  if (!info.total) return '<span class="g-hw none" data-hw-open="' + courseId + '">＋ 添加作业</span>';
  if (info.all) return '<span class="g-hw done" data-hw-open="' + courseId + '">✓ 作业已完成</span>';
  return '<span class="g-hw todo" data-hw-open="' + courseId + '">未完成 · 去完成</span>';
}

// 课程作业面板：列表（打勾 + 编辑）＋ 底部快速添加（回车或按钮，连续录入）
// 课程作业面板：已有作业列表（打勾/编辑）＋ 预置 3 条空白行直接填写，不够可继续添加
let hwExtraRows = 0; // 「继续添加」追加的空白行数（面板打开时重置）
let hwDrafts = {};   // 空白行草稿（行号→已输入内容），面板刷新不丢失

function openCourseHomework(courseId, isRefresh) {
  const course = store.getCourses().find(c => c.id === courseId);
  if (!course) return;
  hwModalCourse = courseId;
  if (!isRefresh) { hwExtraRows = 0; hwDrafts = {}; }
  const info = courseHwInfo(courseId);

  const rows = info.list.map(function (t) {
    const done = t.status === 'done';
    return '<div class="hw-item' + (done ? ' is-done' : '') + '">' +
      '<button class="hw-check' + (done ? ' on' : '') + '" data-hw-toggle="' + t.id + '" aria-label="完成">' + (done ? '✓' : '') + '</button>' +
      '<div class="hw-info">' +
        '<div class="hw-title">' + escapeHtml(t.title) + '</div>' +
        '<div class="hw-meta">' + (done ? '已完成 ✓' : '截止 ' + fmtMD(t.due)) + (t.estimateMin ? ' · 约 ' + t.estimateMin + ' 分钟' : '') + '</div>' +
      '</div>' +
      '<button class="hw-edit" data-hw-edit="' + t.id + '" aria-label="编辑">✎</button>' +
    '</div>';
  }).join('');

  // 预置空白行（默认 3 条，可追加），草稿自动回填
  const emptyCount = 3 + hwExtraRows;
  let emptyHTML = '';
  for (let i = 0; i < emptyCount; i++) {
    emptyHTML += '<div class="hw-empty-row">' +
      '<span class="hw-empty-num">' + (info.list.length + i + 1) + '</span>' +
      '<input id="hw-input-' + i + '" class="input hw-empty-input" placeholder="输入作业名称，回车即保存" autocomplete="off">' +
      '<button class="hw-row-add" data-hw-save="' + i + '" aria-label="添加这条作业">＋</button>' +
    '</div>';
  }

  openModal(
    '<div class="sheet-title">📚 ' + escapeHtml(course.name) + ' · 作业</div>' +
    '<div class="hw-list">' +
      (rows || '<div class="empty"><div class="empty-emoji">📝</div><div>还没有已保存的作业，下方空白行直接输入</div></div>') +
    '</div>' +
    '<div class="hw-empty-zone">' + emptyHTML +
      '<button class="hw-more-btn" data-hw-more="1">＋ 继续添加空白行</button>' +
    '</div>' +
    '<div class="sub" style="text-align:center;margin-top:10px">已列 ' + info.list.length + ' 项 · 空白行回车保存 · 点 ○ 打勾 · 点 ✎ 修改 · 同步任务中心</div>'
  );

  for (let i = 0; i < emptyCount; i++) {
    const input = document.getElementById('hw-input-' + i);
    if (!input) continue;
    input.value = hwDrafts[i] || '';
    (function (idx, el) {
      el.oninput = function () { hwDrafts[idx] = el.value; };
      el.onkeydown = function (e) {
        if (e.key === 'Enter') { e.preventDefault(); addCourseHw(courseId, null, idx); }
      };
    })(i, input);
  }
  const first = document.getElementById('hw-input-0');
  if (first) first.focus();
}

// 添加课程作业：优先取指定空白行的输入；默认今天 23:59 截止，同步任务中心
function addCourseHw(courseId, titleStr, rowIdx) {
  let title;
  if (titleStr != null) title = String(titleStr).trim();
  else {
    const input = document.getElementById('hw-input-' + rowIdx);
    title = (input ? input.value : '').trim();
  }
  if (!title) { toast('请输入作业名称'); return; }
  if (rowIdx != null) delete hwDrafts[rowIdx];
  const task = {
    id: uid(),
    title: title,
    category: 'homework',
    courseId: courseId,
    due: todayStr() + 'T23:59',
    priority: 'mid',
    status: 'todo',
    estimateMin: 30,
    note: '',
    createdAt: Date.now(),
    doneAt: null
  };
  store.setTasks(store.getTasks().concat([task]));
  toast('已添加作业：' + title + ' ✓');
  renderSchedule();
  renderHome();
  renderTasks();
  openCourseHomework(courseId, true); // 刷新面板，草稿与追加行保留
}

// 编辑作业：名称 / 截止日期时间 / 预计时长，可删除
function openHwEdit(id) {
  const t = store.getTasks().find(x => x.id === id);
  if (!t) return;
  const course = store.getCourses().find(c => c.id === t.courseId);
  const dueDate = (t.due || '').slice(0, 10) || todayStr();
  const dueTime = (t.due || '').slice(11, 16) || '23:59';

  openModal(
    '<div class="sheet-title">✏️ 编辑作业</div>' +
    '<div class="form compact">' +
      '<div class="sub" style="margin-bottom:10px">课程：' + escapeHtml(course ? course.name : '未关联') + '</div>' +
      '<label class="field"><span class="field-label">作业名称 *</span>' +
        '<input id="hwe-title" class="input" value="' + escapeHtml(t.title) + '"></label>' +
      '<div class="row">' +
        '<label class="field"><span class="field-label">截止日期</span>' +
          '<input id="hwe-date" type="date" class="input" value="' + dueDate + '"></label>' +
        '<label class="field"><span class="field-label">截止时间</span>' +
          '<input id="hwe-time" type="time" class="input" value="' + dueTime + '"></label>' +
      '</div>' +
      '<label class="field"><span class="field-label">预计时长（分钟）</span>' +
        '<input id="hwe-min" type="number" class="input" value="' + (t.estimateMin || 30) + '" min="5" max="600"></label>' +
    '</div>' +
    '<div class="btn-row"><button class="btn danger" id="hwe-del">删除</button>' +
      '<button class="btn ghost" id="hwe-cancel">取消</button>' +
      '<button class="btn primary" id="hwe-save">保存</button></div>'
  );

  document.getElementById('hwe-title').focus();
  document.getElementById('hwe-cancel').onclick = function () {
    closeModal();
    if (hwModalCourse) openCourseHomework(hwModalCourse);
  };

  document.getElementById('hwe-save').onclick = function () {
    const title = document.getElementById('hwe-title').value.trim();
    if (!title) { toast('请输入作业名称'); return; }
    const date = document.getElementById('hwe-date').value || todayStr();
    const time = document.getElementById('hwe-time').value || '23:59';
    let min = Number(document.getElementById('hwe-min').value) || t.estimateMin || 30;
    if (min < 5) min = 5;
    if (min > 600) min = 600;

    const tasks = store.getTasks();
    const target = tasks.find(x => x.id === id);
    if (!target) return;
    target.title = title;
    target.due = date + 'T' + time;
    target.estimateMin = min;
    store.setTasks(tasks);
    toast('已保存修改 ✓');
    renderSchedule();
    renderHome();
    renderTasks();
    if (hwModalCourse) openCourseHomework(hwModalCourse);
    else closeModal();
  };

  document.getElementById('hwe-del').onclick = function () {
    const backTo = hwModalCourse; // confirmDialog 的确定会先 closeModal 清空，先记住
    confirmDialog('删除这条作业？', function () {
      store.setTasks(store.getTasks().filter(x => x.id !== id));
      toast('已删除作业');
      renderSchedule();
      renderHome();
      renderTasks();
      renderProfile();
      if (backTo) openCourseHomework(backTo);
    });
  };
}

// 打勾切换作业完成状态（不弹评分，便于连续勾选）
function toggleCourseHw(id) {
  const tasks = store.getTasks();
  const t = tasks.find(x => x.id === id);
  if (!t) return;
  if (t.status === 'done') {
    t.status = 'todo'; t.doneAt = null;
    bumpFocus(-(t.estimateMin || 0), -1);
  } else {
    t.status = 'done'; t.doneAt = Date.now();
    bumpFocus(t.estimateMin || 0, 1);
  }
  store.setTasks(tasks);
  renderSchedule();
  renderHome();
  renderTasks();
  renderProfile();
  if (hwModalCourse) openCourseHomework(hwModalCourse);
}

function renderSchedule() {
  const monday = getMonday(new Date());
  monday.setDate(monday.getDate() + weekOffset * 7);
  const week = currentShownWeek();

  document.getElementById('schedule-week').textContent = '第 ' + week + ' 周';

  const grid = document.getElementById('schedule-grid');
  grid.innerHTML = '';
  const today = todayStr();

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const el = document.createElement('div');
    el.className = 'g-head';
    if (weekOffset === 0 && fmtDate(d) === today) el.classList.add('today');
    el.style.gridColumn = String(i + 2);
    el.style.gridRow = '1';
    el.innerHTML = '<span>' + fmtWeekday(i + 1) + '</span><span class="g-date">' + (d.getMonth() + 1) + '/' + d.getDate() + '</span>';
    grid.appendChild(el);
  }

  for (let s = 1; s <= 12; s++) {
    const el = document.createElement('div');
    el.className = 'g-sec';
    el.innerHTML = '<span>' + s + '</span><span class="g-sec-time">' + SECTION_TIMES[s][0] + '</span>';
    el.style.gridColumn = '1';
    el.style.gridRow = String(s + 1);
    grid.appendChild(el);
  }

  for (let s = 1; s <= 12; s++) {
    for (let d = 1; d <= 7; d++) {
      const el = document.createElement('div');
      el.className = 'g-cell';
      el.style.gridColumn = String(d + 1);
      el.style.gridRow = String(s + 1);
      el.addEventListener('click', function () { openCourseForm(null, { day: d, section: s }); });
      grid.appendChild(el);
    }
  }

  const courses = store.getCourses().filter(c => c.week === week);
  courses.forEach(c => {
    const el = document.createElement('div');
    el.className = 'g-course';
    el.style.gridColumn = String(c.day + 1);
    el.style.gridRow = (c.startSection + 1) + ' / ' + (c.endSection + 2);
    el.style.backgroundColor = c.color + '1A';
    el.style.borderLeft = '3px solid ' + c.color;
    el.innerHTML = '<span class="g-course-name">' + escapeHtml(c.name) + '</span>' +
      '<span class="g-course-room">' + escapeHtml(c.location || '') + '</span>' +
      hwBadgeHTML(courseHwInfo(c.id), c.id);
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      // 作业徽标区：打开作业面板（添加 / 去完成 / 查看）
      const hwBtn = e.target && e.target.closest && e.target.closest('[data-hw-open]');
      if (hwBtn) { openCourseHomework(hwBtn.dataset.hwOpen); return; }
      openCourseDetail(c.id);
    });
    grid.appendChild(el);
  });

  if (!courses.length) {
    const empty = document.createElement('div');
    empty.className = 'schedule-empty';
    empty.innerHTML = '<div class="se-icon">📅</div>' +
      '<div class="se-text">还没有导入课程表哦</div>' +
      '<button class="mini-btn" id="empty-import">📷 导入课表</button>';
    grid.appendChild(empty);
    document.getElementById('empty-import').onclick = openImport;
  }
}

function sectionOptions(selected) {
  let html = '';
  for (let i = 1; i <= 12; i++) {
    html += '<option value="' + i + '"' + (i === selected ? ' selected' : '') + '>第 ' + i + ' 节</option>';
  }
  return html;
}

function openCourseForm(id, defaults) {
  defaults = defaults || {};
  const courses = store.getCourses();
  const editing = id ? courses.find(c => c.id === id) : null;
  const data = editing || {
    name: '', teacher: '', location: '',
    day: defaults.day || 1,
    startSection: defaults.section || 1,
    endSection: defaults.section || 1,
    color: COURSE_COLORS[courses.length % COURSE_COLORS.length]
  };

  openModal(
    '<div class="sheet-title">' + (editing ? '编辑课程' : '添加课程') + '</div>' +
    '<div class="form compact">' +
      '<label class="field"><span class="field-label">课程名称 *</span>' +
        '<input id="cf-name" class="input" value="' + escapeHtml(data.name) + '" placeholder="例如：高等数学"></label>' +
      '<div class="row">' +
        '<label class="field"><span class="field-label">教师</span>' +
          '<input id="cf-teacher" class="input" value="' + escapeHtml(data.teacher || '') + '"></label>' +
        '<label class="field"><span class="field-label">地点</span>' +
          '<input id="cf-location" class="input" value="' + escapeHtml(data.location || '') + '"></label>' +
      '</div>' +
      '<div class="field"><span class="field-label">星期</span><div class="chips" id="cf-days">' +
        [1, 2, 3, 4, 5, 6, 7].map(d =>
          '<span class="chip ' + (d === data.day ? 'active' : '') + '" data-day="' + d + '">' + fmtWeekday(d) + '</span>'
        ).join('') + '</div></div>' +
      '<div class="row">' +
        '<label class="field"><span class="field-label">开始节</span>' +
          '<select id="cf-start" class="input">' + sectionOptions(data.startSection) + '</select></label>' +
        '<label class="field"><span class="field-label">结束节</span>' +
          '<select id="cf-end" class="input">' + sectionOptions(data.endSection) + '</select></label>' +
      '</div>' +
      '<div class="field"><span class="field-label">颜色</span><div class="color-dots" id="cf-colors">' +
        COURSE_COLORS.map(c =>
          '<span class="dot ' + (c === data.color ? 'active' : '') + '" data-color="' + c + '" style="background:' + c + '"></span>'
        ).join('') + '</div></div>' +
    '</div>' +
    '<div class="btn-row"><button class="btn ghost" id="cf-cancel">取消</button><button class="btn primary" id="cf-save">保存</button></div>'
  );

  let day = data.day;
  let color = data.color;

  document.getElementById('cf-days').addEventListener('click', function (e) {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    day = Number(chip.dataset.day);
    document.querySelectorAll('#cf-days .chip').forEach(x => x.classList.toggle('active', x === chip));
  });

  document.getElementById('cf-colors').addEventListener('click', function (e) {
    const dot = e.target.closest('.dot');
    if (!dot) return;
    color = dot.dataset.color;
    document.querySelectorAll('#cf-colors .dot').forEach(x => x.classList.toggle('active', x === dot));
  });

  document.getElementById('cf-cancel').onclick = closeModal;

  document.getElementById('cf-save').onclick = function () {
    const name = document.getElementById('cf-name').value.trim();
    if (!name) { toast('请输入课程名称'); return; }
    const start = Number(document.getElementById('cf-start').value);
    const end = Number(document.getElementById('cf-end').value);
    if (end < start) { toast('结束节不能早于开始节'); return; }

    const targetWeek = editing && typeof editing.week === 'number' ? editing.week : currentShownWeek();
    const conflict = store.getCourses().some(c =>
      c.week === targetWeek && c.day === day && (!editing || c.id !== editing.id) &&
      start <= c.endSection && end >= c.startSection
    );

    const payload = {
      id: editing ? editing.id : uid(),
      name: name,
      teacher: document.getElementById('cf-teacher').value.trim(),
      location: document.getElementById('cf-location').value.trim(),
      day: day,
      startSection: start,
      endSection: end,
      color: color,
      week: targetWeek
    };

    const list = store.getCourses();
    if (editing) {
      const i = list.findIndex(c => c.id === editing.id);
      list[i] = payload;
    } else {
      list.push(payload);
    }
    store.setCourses(list);
    closeModal();
    renderSchedule();
    renderHome();
    toast(conflict ? '该时段已有课程' : (editing ? '已更新 ✓' : '已添加 ✓'));
  };
}

function openCourseDetail(id) {
  const c = store.getCourses().find(x => x.id === id);
  if (!c) return;
  openModal(
    '<div class="sheet-title">课程详情</div>' +
    '<div class="course-info">' +
      '<div><b>' + escapeHtml(c.name) + '</b></div>' +
      '<div>教师：' + escapeHtml(c.teacher || '未填写') + '</div>' +
      '<div>地点：' + escapeHtml(c.location || '未填写') + '</div>' +
      '<div>时间：' + fmtWeekday(c.day) + ' 第 ' + c.startSection + '-' + c.endSection + ' 节 ' +
        SECTION_TIMES[c.startSection][0] + '-' + SECTION_TIMES[c.endSection][1] + '</div>' +
    '</div>' +
    '<div class="btn-row">' +
      '<button class="btn ghost" id="cd-edit">编辑</button>' +
      '<button class="btn danger" id="cd-del">删除</button>' +
    '</div>'
  );
  document.getElementById('cd-edit').onclick = function () {
    closeModal();
    openCourseForm(c.id);
  };
  document.getElementById('cd-del').onclick = function () {
    closeModal();
    confirmDialog('确定删除《' + c.name + '》吗？', function () {
      store.setCourses(store.getCourses().filter(x => x.id !== c.id));
      renderSchedule();
      renderHome();
      toast('已删除');
    });
  };
}

/* ==================== 任务中心 ==================== */
function renderTaskFilters() {
  const el = document.getElementById('task-filters');
  const items = [{ key: 'all', label: '全部', icon: '' }].concat(CATEGORIES);
  el.innerHTML = items.map(i =>
    '<span class="chip ' + (taskFilter === i.key ? 'active' : '') + '" data-filter="' + i.key + '">' +
    (i.icon ? i.icon + ' ' : '') + i.label + '</span>'
  ).join('');
}

function renderTasks() {
  renderTaskFilters();
  const all = store.getTasks();
  const filtered = taskFilter === 'all' ? all : all.filter(t => t.category === taskFilter);
  const todo = filtered.filter(t => t.status === 'todo').sort((a, b) =>
    (isOverdue(a) ? 0 : 1) - (isOverdue(b) ? 0 : 1) || new Date(a.due) - new Date(b.due)
  );
  const done = filtered.filter(t => t.status === 'done').sort((a, b) => (b.doneAt || 0) - (a.doneAt || 0));
  const el = document.getElementById('task-list');

  let html = '<div class="group-head"><span>进行中</span><span>' + todo.length + ' 项</span></div>';
  html += todo.length ? todo.map(taskCardHTML).join('')
    : '<div class="empty"><div class="empty-emoji">📭</div><div>这个分类还没有任务</div>' +
      '<button class="btn primary" id="empty-add">去添加</button></div>';

  html += '<div class="group-head"><span>已完成</span><span>' + done.length + ' 项</span></div>';
  html += done.length ? done.map(taskCardHTML).join('')
    : '<div class="empty"><div class="empty-emoji">🙂</div><div>还没有已完成的任务</div></div>';
  el.innerHTML = html;

  const addBtn = document.getElementById('empty-add');
  if (addBtn) addBtn.onclick = function () { openAddTask(); };
}

function taskCardHTML(t) {
  const cat = CATEGORIES.find(c => c.key === t.category) || CATEGORIES[CATEGORIES.length - 1];
  const pri = PRIORITIES.find(p => p.key === t.priority) || PRIORITIES[1];
  const course = t.courseId ? store.getCourses().find(c => c.id === t.courseId) : null;
  const overdue = isOverdue(t);
  const expanded = expandedTask === t.id;
  // 首页逾期入口进入后 6 秒内：逾期任务闪烁红边提醒
  const flash = overdue && (Date.now() - flashOverdueAt < 6000);

  return '<div class="task-card ' + (t.status === 'done' ? 'is-done' : '') + (expanded ? ' expanded' : '') + (flash ? ' flash-overdue' : '') +
    '" data-id="' + t.id + '" style="border-left-color:' + pri.color + '">' +
    '<div class="task-main">' +
      '<div class="check ' + (t.status === 'done' ? 'checked' : '') + '" data-act="toggle">' + (t.status === 'done' ? '✓' : '') + '</div>' +
      '<div class="task-info">' +
        '<div class="task-title">' + escapeHtml(t.title) + '</div>' +
        '<div class="task-tags">' +
          '<span class="tag">' + cat.icon + ' ' + cat.label + '</span>' +
          '<span class="tag ' + (overdue ? 'danger' : '') + '">' + (overdue ? '⚠️ 已逾期' : '⏰ ' + fmtMD(t.due)) + '</span>' +
          (t.resubmitted ? '<span class="tag submitted">📮 已补交</span>' : '') +
          (t.rating ? '<span class="tag">' + '♥'.repeat(t.rating) + '</span>' : '') +
          (course ? '<span class="tag">' + escapeHtml(course.name) + '</span>' : '') +
        '</div>' +
      '</div>' +
    '</div>' +
    (expanded ? '<div class="task-detail">' +
      (t.note ? '<div class="note">' + escapeHtml(t.note) + '</div>' : '') +
      '<div class="meta">预计 ' + t.estimateMin + ' 分钟' + (t.originalDue ? ' · 原截止 ' + fmtMD(t.originalDue) : '') + '</div>' +
      '<div class="btn-row">' +
        '<button class="btn primary" data-act="toggle">' + (t.status === 'done' ? '撤销完成' : '✓ 标记完成') + '</button>' +
        (overdue ? '<button class="btn ghost" data-act="resubmit">📮 补交</button>' : '') +
        '<button class="btn danger" data-act="del">🗑 删除</button>' +
      '</div>' +
    '</div>' : '') +
  '</div>';
}

/* ==================== 大学四年规划 ==================== */
// 填内容方式见顶部 PLAN_STAGES 注释
// 三级导航：年级卡片(只有标题) → 年级详情(lead + 小模块卡片) → 小模块详情(条目 + 返回/下一页)

// 规划条目渲染：数字序号彩色徽章 + 行首关键词统一胶囊 + 关键词/数字单位 强调
function planRowHtml(text) {
  const m = text.match(/^(\d{1,2})[\.、]\s*([\s\S]*)$/);
  const badge = m
    ? '<span class="num-badge" style="background:' + PLAN_NUM_COLORS[(Number(m[1]) - 1) % PLAN_NUM_COLORS.length] + '">' + Number(m[1]) + '</span>'
    : '';
  const body = m ? m[2] : text;
  let esc = escapeHtml(body);
  esc = esc.replace(/^([^：:]{1,10})：/, '<span class="kw-chip">$1</span>：');
  esc = markKeywords(esc);
  esc = esc.replace(/(\d+(?:\.\d+)?\s*(?:元|块|位|名|天|个月|分钟|小时|本书|门|条|年))/g, '<b class="row-hl">$1</b>');
  return '<div class="plan-row">' + badge + '<div class="plan-row-body">' + esc + '</div></div>';
}

function renderPlan() {
  const el = document.getElementById('plan-list');
  if (!el) return;
  const headEl = document.getElementById('plan-page-head');
  if (headEl) headEl.style.display = planView.stage ? 'none' : '';

  /* 顶级：四个年级卡片，只有大标题，对称网格 */
  if (!planView.stage) {
    el.innerHTML = '<div class="plan-grid">' + PLAN_STAGES.map(function (st) {
      return '<div class="plan-grade" data-stage="' + st.key + '">' +
        '<div class="pg-top">' +
          '<span class="plan-stage ' + st.key + '">' + escapeHtml(st.tag) + '</span>' +
          '<span class="plan-sec-arrow">›</span>' +
        '</div>' +
        '<div class="pg-icon">' + st.icon + '</div>' +
        '<div class="pg-name">' + escapeHtml(st.title) + '</div>' +
        '<div class="pg-sub">' + escapeHtml(st.sub) + '</div>' +
      '</div>';
    }).join('') + '</div>';
    return;
  }

  const st = PLAN_STAGES.find(s => s.key === planView.stage);
  if (!st) { planView = { stage: null, sec: null }; renderPlan(); return; }

  /* 年级详情：返回 + 核心理念 + 小模块卡片（只有小标题 + 小副标题） */
  if (planView.sec === null) {
    const secs = st.items.length
      ? '<div class="pv-secs">' + st.items.map(function (it, idx) {
          if (typeof it === 'string') {
            return '<div class="plan-sec-card" data-sec="' + idx + '">' +
              '<div class="psc-main"><div class="psc-name">' + escapeHtml(it) + '</div></div>' +
              '<span class="plan-sec-arrow">›</span>' +
            '</div>';
          }
          return '<div class="plan-sec-card" data-sec="' + idx + '">' +
            '<div class="psc-main">' +
              '<div class="psc-name">' + escapeHtml(it.h) + '</div>' +
              (it.sub ? '<div class="psc-sub">' + escapeHtml(it.sub) + '</div>' : '') +
            '</div>' +
            '<span class="plan-sec-arrow">›</span>' +
          '</div>';
        }).join('') + '</div>'
      : '<div class="plan-empty">📝 内容待补充 · 后续在此填入' + escapeHtml(st.tag) + '规划要点</div>';
    el.innerHTML =
      '<div class="pv-head">' +
        '<button class="pv-back" data-pv="back-grade" aria-label="返回">‹ 返回</button>' +
        '<div class="pv-head-txt"><div class="pv-title">' + st.icon + ' ' + escapeHtml(st.title) + '</div></div>' +
        '<span class="plan-stage ' + st.key + '">' + escapeHtml(st.tag) + '</span>' +
      '</div>' +
      (st.lead ? '<div class="plan-lead">' + escapeHtml(st.lead) + '</div>' : '') +
      secs;
    return;
  }

  /* 小模块详情：返回 + 全部条目 + 右下角下一页（标注下一页标题） */
  const idx = planView.sec;
  const it = st.items[idx];
  if (!it) { planView.sec = null; renderPlan(); return; }
  const itName = typeof it === 'string' ? it : it.h;
  const next = st.items[idx + 1];
  const nextName = next ? (typeof next === 'string' ? next : next.h) : '';
  const rows = '<div class="pv-reading">' +
    (typeof it === 'string' ? planRowHtml(it) : it.rows.map(planRowHtml).join('')) +
  '</div>';
  el.innerHTML =
    '<div class="pv-head">' +
      '<button class="pv-back" data-pv="back-sec" aria-label="返回">‹ 返回</button>' +
      '<div class="pv-head-txt">' +
        '<div class="pv-title">' + escapeHtml(itName) + '</div>' +
        (typeof it !== 'string' && it.sub ? '<div class="pv-sub">' + escapeHtml(it.sub) + '</div>' : '') +
      '</div>' +
      '<span class="plan-stage ' + st.key + '">' + escapeHtml(st.tag) + '</span>' +
    '</div>' +
    rows +
    (next ? '<button class="pv-next" data-pv="next">' +
      '<span class="pv-next-label">下一页</span>' +
      '<span class="pv-next-name">' + escapeHtml(nextName) + '</span>' +
      '<span class="plan-sec-arrow">›</span>' +
    '</button>' : '');
}

function bindCloseButtons() {
  document.querySelectorAll('#modal-sheet [data-close]').forEach(btn => {
    btn.onclick = closeModal;
  });
}

/* ==================== 个人数据面板 ==================== */
function renderProfile() {
  const el = document.getElementById('profile-content');
  const user = store.getUser();
  const tasks = store.getTasks();
  const focus = store.getFocus();
  const done = tasks.filter(t => t.status === 'done');
  const total = tasks.length;
  const rate = total ? Math.round(done.length / total * 100) : 0;
  const streak = getStreak(focus);
  const hours = (done.reduce((s, t) => s + (t.estimateMin || 0), 0) / 60).toFixed(1);
  const mon = getMonday(new Date());
  const weekDone = done.filter(t => t.doneAt && new Date(t.doneAt) >= mon).length;
  const todayRec = focus.find(f => f.date === todayStr()) || { doneCount: 0 };
  const goal = user.dailyGoal || 3;
  const exam = nearestTask(tasks, 'exam');
  const contestTasks = tasks.filter(t => t.category === 'contest');
  const contestDone = contestTasks.filter(t => t.status === 'done').length;
  const contestPct = contestTasks.length ? Math.round(contestDone / contestTasks.length * 100) : 0;

  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const ds = fmtDate(d);
    const rec = focus.find(f => f.date === ds);
    days.push({
      date: ds,
      label: ['日', '一', '二', '三', '四', '五', '六'][d.getDay()],
      val: rec ? rec.doneCount : 0
    });
  }
  const max = Math.max.apply(null, days.map(d => d.val));
  const weekTotal = days.reduce((s, d) => s + d.val, 0);

  const chart = days.map(d => {
    const pct = max === 0 ? 30 : (d.val === 0 ? 0 : Math.max(8, Math.round(d.val / max * 100)));
    return '<div class="bar-col" data-day="' + d.date + '" title="查看当天完成情况">' +
      '<div class="bar-val">' + (d.val || '') + '</div>' +
      '<div class="bar-area"><div class="bar-fill ' + (d.date === todayStr() ? 'today' : '') + '" style="height:' + pct + '%"></div></div>' +
      '<div class="bar-label">' + d.label + '</div>' +
    '</div>';
  }).join('');

  const goalPct = Math.min(100, Math.round(todayRec.doneCount / goal * 100));

  const schoolLine = user.school || user.grade
    ? escapeHtml(user.school || '未填学校') + ' · ' + escapeHtml(user.grade || '未填年级')
    : '点击完善信息';
  const classLine = [user.college, user.major, user.cls].filter(Boolean).map(escapeHtml).join(' · ');
  const contest = nearestTask(tasks, 'contest');
  const account = load(AUTH.users, {})[currentUser] || {};
  const accountSub = account.createdAt
    ? '注册于 ' + new Date(account.createdAt).toISOString().slice(0, 10)
    : '独立数据空间';

  el.innerHTML = '' +
    '<div class="card user-card" id="btn-user">' +
      '<div class="avatar">' + user.avatar + '</div>' +
      '<div style="flex:1">' +
        '<div class="user-name">' + escapeHtml(user.name) + '</div>' +
        '<div class="sub">' + schoolLine + '</div>' +
        '<div class="sub">' + (classLine || '学院 · 专业 · 班级 待完善') + '</div>' +
      '</div>' +
      '<span class="arrow">›</span>' +
    '</div>' +

    '<div class="stats">' +
      '<div class="stat-card"><div class="stat-value">' + weekDone + '</div><div class="stat-label">本周完成</div></div>' +
      '<div class="stat-card"><div class="stat-value">' + hours + '<span style="font-size:13px"> 小时</span></div><div class="stat-label">学习时长</div></div>' +
      '<div class="stat-card" data-act="open-calendar" style="cursor:pointer"><div class="stat-value">' + streak + '<span style="font-size:13px"> 天</span></div><div class="stat-label">连续打卡 ›</div></div>' +
      '<div class="stat-card"><div class="stat-value">' + rate + '%</div><div class="stat-label">任务完成率</div></div>' +
    '</div>' +

    '<div class="card">' +
      '<div class="card-head"><span class="card-title">近 7 天完成</span><span class="sub">共 ' + weekTotal + ' 项 · 点击柱子看详情</span></div>' +
      '<div class="chart">' + chart + '</div>' +
    '</div>' +

    '<div class="card">' +
      '<div class="card-head"><span class="card-title">考试与竞赛</span></div>' +
      '<div class="info-line clickable" data-act="exam-list"><span>最近考试</span><span class="v">' +
        (exam ? escapeHtml(exam.task.title) + ' · ' + exam.days + ' 天' : '暂无考试') + ' ›</span></div>' +
      '<div class="info-line clickable" data-act="contest-list"><span>最近竞赛</span><span class="v">' +
        (contest ? escapeHtml(contest.task.title) + ' · ' + contest.days + ' 天' : '暂无竞赛') + ' ›</span></div>' +
      '<div class="info-line"><span>竞赛任务进度</span><span class="v">' + contestDone + ' / ' + contestTasks.length + '</span></div>' +
      '<div class="bar"><i style="width:' + contestPct + '%"></i></div>' +
    '</div>' +

    '<div class="card">' +
      '<div class="card-head"><span class="card-title">今日目标</span><span class="sub">' + todayRec.doneCount + ' / ' + goal + '</span></div>' +
      '<div class="bar ' + (todayRec.doneCount >= goal ? 'green' : '') + '"><i style="width:' + goalPct + '%"></i></div>' +
      '<div class="sub">' + (todayRec.doneCount >= goal ? '今日目标已达成 🎉' : '再完成 ' + (goal - todayRec.doneCount) + ' 项就达标啦') + '</div>' +
    '</div>' +

    '<div class="card">' +
      '<div class="card-head"><span class="card-title">设置</span></div>' +
      '<div class="setting-row"><span>当前账户</span><span class="v">' + escapeHtml(currentUser || '未登录') + ' · ' + accountSub + '</span></div>' +
      '<div class="setting-row" id="btn-logout"><span>退出登录</span><span class="sub">24 小时后需重新验证 ›</span></div>' +
      '<div class="setting-row danger" id="btn-clear"><span>清除全部数据</span><span>›</span></div>' +
      '<div class="setting-row" id="btn-about"><span>关于 CampusFlow</span><span class="sub">v1.0 ›</span></div>' +
    '</div>';
}

function openUserForm() {
  const u = store.getUser();
  const avatars = ['🦊', '🐼', '🐱', '🦁', '🐣'];
  openModal(
    '<div class="sheet-title">编辑个人信息</div>' +
    '<div class="form compact">' +
      '<label class="field"><span class="field-label">昵称</span>' +
        '<input id="uf-name" class="input" value="' + escapeHtml(u.name) + '"></label>' +
      '<div class="row">' +
        '<label class="field"><span class="field-label">学校</span>' +
          '<input id="uf-school" class="input" value="' + escapeHtml(u.school || '') + '"></label>' +
        '<label class="field"><span class="field-label">学院</span>' +
          '<input id="uf-college" class="input" value="' + escapeHtml(u.college || '') + '" placeholder="如 计算机学院"></label>' +
      '</div>' +
      '<div class="row">' +
        '<label class="field"><span class="field-label">专业</span>' +
          '<input id="uf-major" class="input" value="' + escapeHtml(u.major || '') + '" placeholder="如 软件工程"></label>' +
        '<label class="field"><span class="field-label">班级</span>' +
          '<input id="uf-cls" class="input" value="' + escapeHtml(u.cls || '') + '" placeholder="如 2024-1 班"></label>' +
      '</div>' +
      '<label class="field"><span class="field-label">年级</span>' +
        '<input id="uf-grade" class="input" value="' + escapeHtml(u.grade || '') + '" placeholder="如 大一"></label>' +
      '<div class="field"><span class="field-label">头像</span><div class="chips" id="uf-avatars">' +
        avatars.map(a => '<span class="chip ' + (a === u.avatar ? 'active' : '') + '" data-avatar="' + a + '" style="font-size:16px">' + a + '</span>').join('') +
      '</div></div>' +
    '</div>' +
    '<div class="btn-row"><button class="btn ghost" data-close>取消</button><button class="btn primary" id="uf-save">保存</button></div>'
  );

  let avatar = u.avatar;
  document.getElementById('uf-avatars').addEventListener('click', function (e) {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    avatar = chip.dataset.avatar;
    document.querySelectorAll('#uf-avatars .chip').forEach(x => x.classList.toggle('active', x === chip));
  });

  document.getElementById('uf-save').onclick = function () {
    store.setUser(Object.assign({}, u, {
      name: document.getElementById('uf-name').value.trim() || '同学',
      school: document.getElementById('uf-school').value.trim(),
      college: document.getElementById('uf-college').value.trim(),
      major: document.getElementById('uf-major').value.trim(),
      cls: document.getElementById('uf-cls').value.trim(),
      grade: document.getElementById('uf-grade').value.trim(),
      avatar: avatar
    }));
    closeModal();
    renderProfile();
    renderHome();
    toast('已保存 ✓');
  };
  bindCloseButtons();
}

// 某天详情浮窗：近 7 天柱形图与打卡日历共用（定义在 openCalendar 后，见下方统一版）

// 考试浮窗：已报名 / 已参加的考试详情列表
function openExamList() {
  const exams = store.getTasks()
    .filter(t => t.category === 'exam')
    .sort((a, b) => new Date(a.due) - new Date(b.due));

  const rows = exams.map(function (t) {
    const done = t.status === 'done';
    const d = daysUntil(t.due);
    const status = done ? '已参加 ✓' : (d >= 0 ? '还有 ' + d + ' 天' : '已过期');
    return '<div class="hw-item' + (done ? ' is-done' : '') + '">' +
      '<button class="hw-check' + (done ? ' on' : '') + '" aria-label="状态">' + (done ? '✓' : '📖') + '</button>' +
      '<div class="hw-info">' +
        '<div class="hw-title">' + escapeHtml(t.title) + '</div>' +
        '<div class="hw-meta">' + fmtMD(t.due) + ' · ' + status + '</div>' +
      '</div>' +
      '<span class="xl-tag ' + (done ? 'done' : 'todo') + '">' + (done ? '已参加' : '已报名') + '</span>' +
    '</div>';
  }).join('');

  openModal(
    '<div class="sheet-title">📖 考试列表</div>' +
    '<div class="dd-summary">已报名 / 已参加共 <b>' + exams.length + '</b> 场' +
      (exams.length ? ' · 点击任务页可管理' : '') + '</div>' +
    '<div class="hw-list">' +
      (rows || '<div class="empty"><div class="empty-emoji">📖</div><div>暂无考试安排</div><div class="sub">在任务页添加「考试」类任务后展示</div></div>') +
    '</div>'
  );
  bindCloseButtons();
}

// 竞赛浮窗：备赛中的竞赛（含自定义，findContest 已合并）+ 已报名的竞赛任务
function openContestList() {
  const opted = store.getContests();
  const items = [];

  // 竞赛专区里点过「备赛」的赛事（findContest 已合并自定义比赛）
  Object.keys(opted).forEach(function (id) {
    if (!opted[id]) return;
    const found = findContest(id);
    if (!found) return;
    const ct = found.ct;
    const regDays = ct.regEnd ? daysToDate(nextDateMD(ct.regEnd)) : null;
    items.push({
      name: ct.name,
      meta: (ct.regEnd ? '报名截止还有 ' + regDays + ' 天 · ' : '') + found.cat.name,
      tag: '备赛中', done: false, time: ct.regEnd || ''
    });
  });

  // 任务中心里「竞赛」类任务
  store.getTasks().filter(t => t.category === 'contest').forEach(function (t) {
    const done = t.status === 'done';
    const d = daysUntil(t.due);
    items.push({
      name: t.title,
      meta: fmtMD(t.due) + ' · ' + (done ? '已完成 ✓' : (d >= 0 ? '还有 ' + d + ' 天' : '已过期')),
      tag: done ? '已完成' : '已报名', done: done, time: t.due
    });
  });

  items.sort(function (a, b) { return a.time < b.time ? -1 : 1; });

  const rows = items.map(function (it) {
    return '<div class="hw-item' + (it.done ? ' is-done' : '') + '">' +
      '<button class="hw-check' + (it.done ? ' on' : '') + '" aria-label="状态">' + (it.done ? '✓' : '🏆') + '</button>' +
      '<div class="hw-info">' +
        '<div class="hw-title">' + escapeHtml(it.name) + '</div>' +
        '<div class="hw-meta">' + escapeHtml(it.meta) + '</div>' +
      '</div>' +
      '<span class="xl-tag ' + (it.done ? 'done' : 'todo') + '">' + it.tag + '</span>' +
    '</div>';
  }).join('');

  openModal(
    '<div class="sheet-title">🏆 竞赛列表</div>' +
    '<div class="dd-summary">备赛 / 报名共 <b>' + items.length + '</b> 项' +
      (items.length ? ' · 点击竞赛专区可管理' : '') + '</div>' +
    '<div class="hw-list">' +
      (rows || '<div class="empty"><div class="empty-emoji">🏆</div><div>暂无备赛或报名的竞赛</div><div class="sub">在竞赛专区点「备赛」或任务页添加竞赛任务后展示</div></div>') +
    '</div>'
  );
  bindCloseButtons();
}

function openAbout() {
  openModal(
    '<div class="sheet-title">关于 CampusFlow</div>' +
    '<div class="course-info">' +
      '<div><b>CampusFlow</b> · v1.1</div>' +
      '<div>让大学生的学习生活，更有秩序一点。</div>' +
      '<div>课程表 · 任务 · 四年规划 · 竞赛专区 · 成长数据</div>' +
      '<div>数据仅保存在本机浏览器，不会上传。</div>' +
    '</div>' +
    '<div class="btn-row"><button class="btn ghost" data-close>关闭</button></div>'
  );
  bindCloseButtons();
}

/* ==================== 补交 ==================== */
function openResubmit(id) {
  const t = store.getTasks().find(x => x.id === id);
  if (!t) return;
  openModal(
    '<div class="sheet-title">补交任务</div>' +
    '<div class="sub" style="margin-bottom:10px">' + escapeHtml(t.title) + ' · 原截止 ' + fmtMD(t.due) + '</div>' +
    '<div class="row">' +
      '<label class="field" style="flex:1"><span class="field-label">新的截止日期</span>' +
        '<input id="rs-date" type="date" class="input" value="' + todayStr() + '"></label>' +
      '<label class="field" style="flex:1"><span class="field-label">时间</span>' +
        '<input id="rs-time" type="time" class="input" value="23:59"></label>' +
    '</div>' +
    '<div class="btn-row"><button class="btn ghost" data-close>取消</button>' +
      '<button class="btn primary" id="rs-save">确认补交</button></div>'
  );
  bindCloseButtons();

  document.getElementById('rs-save').onclick = function () {
    const date = document.getElementById('rs-date').value || todayStr();
    const time = document.getElementById('rs-time').value || '23:59';
    const list = store.getTasks();
    const item = list.find(x => x.id === id);
    if (item) {
      item.originalDue = item.originalDue || item.due;
      item.due = date + 'T' + time;
      item.resubmitted = true;
      item.extendCount = (item.extendCount || 0) + 1;
      store.setTasks(list);
    }
    closeModal();
    renderHome();
    renderTasks();
    renderProfile();
    toast('已补交，新截止 ' + fmtMD(date + 'T' + time));
  };
}

/* ==================== 成长日历 ==================== */
function openCalendar() {
  calYear = new Date().getFullYear();
  renderCalendar();
  openOverlay('overlay-calendar');
}

function renderCalendar() {
  document.getElementById('cal-year-label').textContent = calYear + ' 年';

  const focus = store.getFocus();
  const tasks = store.getTasks();
  const goal = store.getUser().dailyGoal || 3;
  const today = todayStr();
  const countByDate = {};
  const doneByDate = {};
  const taskDates = {};

  focus.forEach(f => {
    if (f.doneCount > 0) countByDate[f.date] = Math.max(countByDate[f.date] || 0, f.doneCount);
  });
  tasks.forEach(t => {
    if (t.due) taskDates[t.due.slice(0, 10)] = true;
    if (t.doneAt) {
      const ds = fmtDate(new Date(t.doneAt));
      doneByDate[ds] = (doneByDate[ds] || 0) + 1;
      taskDates[ds] = true;
    }
  });
  Object.keys(doneByDate).forEach(ds => {
    countByDate[ds] = Math.max(countByDate[ds] || 0, doneByDate[ds]);
  });

  const monthNames = ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月'];
  let html = '';

  for (let m = 0; m < 12; m++) {
    const first = new Date(calYear, m, 1);
    const startWd = first.getDay() === 0 ? 7 : first.getDay();
    const daysInMonth = new Date(calYear, m + 1, 0).getDate();
    let cells = '';

    for (let i = 1; i < startWd; i++) cells += '<span class="cal-day empty"></span>';

    for (let d = 1; d <= daysInMonth; d++) {
      const ds = calYear + '-' + pad(m + 1) + '-' + pad(d);
      const n = countByDate[ds] || 0;
      const clickable = n > 0 || taskDates[ds];
      let cls = 'cal-day';
      if (n > 0) cls += ' has lv' + (n >= goal ? 3 : n >= 2 ? 2 : 1);
      if (ds === today) cls += ' today';
      if (ds > today) cls += ' future';
      cells += '<span class="' + cls + '"' + (clickable ? ' data-date="' + ds + '"' : '') + '>' + d + '</span>';
    }

    html += '<div class="cal-month">' +
      '<div class="cal-month-title">' + monthNames[m] + '</div>' +
      '<div class="cal-week"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div>' +
      '<div class="cal-grid">' + cells + '</div>' +
    '</div>';
  }

  document.getElementById('cal-months').innerHTML = html;
}

// 某天详情浮窗：近 7 天柱形图 / 打卡日历共用——当天完成 + 截止当天的任务
function openDayDetail(ds) {
  const tasks = store.getTasks().filter(t => {
    const dueDate = t.due ? t.due.slice(0, 10) : '';
    const doneDate = t.doneAt ? fmtDate(new Date(t.doneAt)) : '';
    return dueDate === ds || doneDate === ds;
  }).sort((a, b) => new Date(a.due) - new Date(b.due));

  const rec = store.getFocus().find(f => f.date === ds);
  const doneThatDay = tasks.filter(t => t.doneAt && fmtDate(new Date(t.doneAt)) === ds).length;
  const weekday = '周' + ['日', '一', '二', '三', '四', '五', '六'][new Date(ds).getDay()];
  const isToday = ds === todayStr();

  const rows = tasks.map(t => {
    const done = t.status === 'done';
    const finishedToday = t.doneAt && fmtDate(new Date(t.doneAt)) === ds;
    return '<div class="hw-item' + (done ? ' is-done' : '') + '">' +
      '<button class="hw-check' + (done ? ' on' : '') + '" aria-label="状态">' + (done ? '✓' : '⭕️') + '</button>' +
      '<div class="hw-info">' +
        '<div class="hw-title">' + escapeHtml(t.title) + '</div>' +
        '<div class="hw-meta">' + (finishedToday ? '当天完成' : '截止 ' + fmtMD(t.due)) +
          (t.resubmitted ? ' · 已补交' : '') + '</div>' +
      '</div>' +
      (t.rating ? '<span class="stars">' + '♥'.repeat(t.rating) + '</span>' : '') +
    '</div>';
  }).join('');

  openModal(
    '<div class="sheet-title">📅 ' + ds + ' · ' + weekday + (isToday ? ' · 今天' : '') + '</div>' +
    '<div class="dd-summary">当天完成 <b>' + doneThatDay + '</b> 项 · 记录学习 <b>' + (rec ? rec.focusMin : 0) + '</b> 分钟</div>' +
    '<div class="hw-list">' +
      (rows || '<div class="empty"><div class="empty-emoji">📭</div><div>这天还没有任务</div></div>') +
    '</div>' +
    '<div class="btn-row"><button class="btn ghost" data-close>关闭</button></div>'
  );
  bindCloseButtons();
}

/* ==================== 导入课表（整图识别 · 模板） ==================== */
// 以用户提供的教务系统课表截图为标准：第 9 周，周一为 2026-10-26
const IMPORT_ANCHOR = { week: 9, monday: '2026-10-26' };
const IMPORT_PROFILE = [
  { name: '计算思维与人工智能', location: '机房', day: 1, startSection: 1, endSection: 2 },
  { name: '工程化学A', location: '主A楼3-08', day: 2, startSection: 1, endSection: 2 },
  { name: '思想道德与法治', location: '讲堂群1-02', day: 3, startSection: 1, endSection: 2 },
  { name: '工程化学A', location: '主A楼3-08', day: 4, startSection: 1, endSection: 2 },
  { name: '计算思维与人工智能', location: '三江楼-0405', day: 5, startSection: 1, endSection: 2 },
  { name: '新能源汽车工程专业导论', location: '主A楼3', day: 1, startSection: 3, endSection: 4 },
  { name: '计算思维与人工智能', location: '三江楼-0405', day: 2, startSection: 3, endSection: 4 },
  { name: '高等数学A(I)', location: '三江楼-0409', day: 3, startSection: 3, endSection: 4 },
  { name: '工程制图基础', location: '主A楼3-07', day: 4, startSection: 3, endSection: 4 },
  { name: '高等数学A(I)', location: '三江楼-0509', day: 5, startSection: 3, endSection: 4 },
  { name: '高等数学A(I)', location: '三江楼-0509', day: 1, startSection: 5, endSection: 6 },
  { name: '工程制图基础', location: '三山楼1-10', day: 1, startSection: 7, endSection: 8 },
  { name: '军事理论', location: '三江楼-0203', day: 2, startSection: 7, endSection: 8 },
  { name: '大学英语(I)', location: '三江楼附楼402', day: 3, startSection: 7, endSection: 8 },
  { name: '大学生心理健康教育', location: '三江楼-0405', day: 3, startSection: 9, endSection: 10 }
];

// 由“第 N 周 + 该周周一”反推学期第 1 周周一，用于校准整个学期日期
function anchorMonday(week, monday) {
  const d = new Date(monday + 'T00:00:00');
  d.setDate(d.getDate() - (week - 1) * 7);
  return fmtDate(d);
}

function weekToOneMonday(week) {
  const d = new Date(anchorMonday(IMPORT_ANCHOR.week, IMPORT_ANCHOR.monday) + 'T00:00:00');
  d.setDate(d.getDate() + (week - 1) * 7);
  return fmtDate(d);
}

function mondayToWeek(monday) {
  const base = new Date(anchorMonday(IMPORT_ANCHOR.week, IMPORT_ANCHOR.monday) + 'T00:00:00');
  const target = new Date(monday + 'T00:00:00');
  return Math.round((target - base) / 604800000) + 1;
}

function weekRangeText(monday) {
  const d = new Date(monday + 'T00:00:00');
  const sun = new Date(d);
  sun.setDate(sun.getDate() + 6);
  return (d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ~ ' + (sun.getMonth() + 1) + '-' + pad(sun.getDate());
}

function openImport() {
  importWeek = IMPORT_ANCHOR.week;
  importMonday = IMPORT_ANCHOR.monday;
  importDetected = [];
  importEditing = -1;

  openModal(
    '<div class="sheet-title">导入课表</div>' +
    '<div class="sub" style="margin-bottom:10px">上传校园课表截图，整图识别课程、星期、节次与周次日期。导入后覆盖当前课表，未识别时段保持空白。</div>' +
    '<label class="upload-box" id="upload-box">' +
      '<div style="font-size:28px">📷</div>' +
      '<div>点击选择课表截图</div>' +
      '<div class="sub">支持 JPG / PNG</div>' +
      '<input type="file" id="import-file" accept="image/*" hidden>' +
    '</label>' +
    '<div id="import-result"></div>' +
    '<div class="btn-row"><button class="btn ghost" data-close>取消</button>' +
      '<button class="btn primary" id="import-save" disabled>导入所选</button></div>'
  );
  bindCloseButtons();

  document.getElementById('import-result').addEventListener('click', function (e) {
    const editBtn = e.target.closest('[data-edit]');
    if (editBtn) {
      importEditing = Number(editBtn.dataset.edit);
      renderImportResult();
      return;
    }
    const cancelBtn = e.target.closest('[data-cancel-edit]');
    if (cancelBtn) {
      importEditing = -1;
      renderImportResult();
      return;
    }
    const saveBtn = e.target.closest('[data-save-edit]');
    if (saveBtn) {
      saveImportEdit();
      return;
    }
    const item = e.target.closest('.detect-item[data-idx]');
    if (!item) return;
    if (importEditing === Number(item.dataset.idx)) return;
    const idx = Number(item.dataset.idx);
    importDetected[idx].picked = !importDetected[idx].picked;
    renderImportResult();
  });
  document.getElementById('import-save').onclick = importCourses;

  const file = document.getElementById('import-file');
  file.onchange = function () {
    const f = file.files && file.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
      const box = document.getElementById('upload-box');
      box.classList.add('filled');
      box.innerHTML = '<img class="preview-img" src="' + ev.target.result + '" alt="课表截图">';
      document.getElementById('import-result').innerHTML =
        '<div class="sub" style="padding:10px 0">🔍 正在扫描整张图片：识别课程块与表头日期…</div>' +
        '<div class="bar"><i id="scan-bar" style="width:8%"></i></div>';
      setTimeout(function () {
        const b = document.getElementById('scan-bar');
        if (b) b.style.width = '70%';
      }, 350);
      setTimeout(showImportResult, 1000);
    };
    reader.readAsDataURL(f);
  };
}

function showImportResult() {
  importDetected = IMPORT_PROFILE.map((c, i) => Object.assign({}, c, {
    teacher: '',
    color: COURSE_COLORS[i % COURSE_COLORS.length],
    picked: true
  }));

  renderImportResult();
  document.getElementById('import-save').disabled = false;
}

function renderImportResult() {
  const el = document.getElementById('import-result');
  if (!el) return;
  const pickedCount = importDetected.filter(c => c.picked).length;

  el.innerHTML =
    '<div class="card" style="box-shadow:none;background:#F7FBFE;padding:12px;margin-bottom:8px">' +
      '<div class="sub" style="margin-bottom:6px">识别到的周次与日期（可校正，导入后自动推算整个学期）</div>' +
      '<div class="row">' +
        '<label class="field" style="flex:1"><span class="field-label">第几周</span>' +
          '<input id="import-week" class="input" type="number" min="1" max="30" value="' + importWeek + '"></label>' +
        '<label class="field" style="flex:1"><span class="field-label">该周周一</span>' +
          '<input id="import-monday" class="input" type="date" value="' + importMonday + '"></label>' +
      '</div>' +
      '<div class="sub">日期范围 <span id="import-range">' + weekRangeText(importMonday) + '</span></div>' +
    '</div>' +
    '<div class="sub" style="margin:6px 0 4px">已扫描整张图片：识别到 ' + importDetected.length +
      ' 个课程块，已选 ' + pickedCount + ' 个 · 空白时段保持空白，点 ✎ 可修正识别结果</div>' +
    importDetected.map((c, i) => {
      if (i === importEditing) {
        return '<div class="detect-item editing" data-idx="' + i + '">' +
          '<div class="dt">' +
            '<input class="input" id="ie-name" value="' + escapeHtml(c.name) + '" placeholder="课程名称">' +
            '<input class="input" id="ie-loc" value="' + escapeHtml(c.location || '') + '" placeholder="上课地点">' +
            '<div class="row">' +
              '<select class="input" id="ie-day">' + importDayOptions(c.day) + '</select>' +
              '<select class="input" id="ie-start">' + importSecOptions(c.startSection) + '</select>' +
              '<select class="input" id="ie-end">' + importSecOptions(c.endSection) + '</select>' +
            '</div>' +
            '<div class="btn-row"><button class="mini-btn ghost" data-cancel-edit>取消</button>' +
              '<button class="mini-btn" data-save-edit>保存</button></div>' +
          '</div></div>';
      }
      return '<div class="detect-item" data-idx="' + i + '">' +
        '<span class="ck ' + (c.picked ? 'on' : '') + '">' + (c.picked ? '✓' : '') + '</span>' +
        '<div class="dt"><div>' + escapeHtml(c.name) + '</div>' +
          '<div class="ds">' + fmtWeekday(c.day) + ' 第 ' + c.startSection + '-' + c.endSection + ' 节 · ' +
            escapeHtml(c.location || '') + ' · ' + SECTION_TIMES[c.startSection][0] + '-' + SECTION_TIMES[c.endSection][1] + '</div>' +
        '</div>' +
        '<button class="dt-edit" data-edit="' + i + '">✎</button>' +
      '</div>';
    }).join('');

  const weekInput = document.getElementById('import-week');
  const mondayInput = document.getElementById('import-monday');

  weekInput.onchange = function () {
    const w = Number(weekInput.value);
    if (!w || w < 1 || w > 30) { toast('周次需在 1–30 之间'); return; }
    importWeek = w;
    importMonday = weekToOneMonday(w);
    mondayInput.value = importMonday;
    document.getElementById('import-range').textContent = weekRangeText(importMonday);
  };

  mondayInput.onchange = function () {
    const m = mondayInput.value;
    if (!m) return;
    const w = mondayToWeek(m);
    if (w < 1 || w > 30) { toast('该日期超出学期范围，请检查'); return; }
    importMonday = m;
    importWeek = w;
    weekInput.value = w;
    document.getElementById('import-range').textContent = weekRangeText(m);
  };
}

function importDayOptions(sel) {
  let s = '';
  for (let d = 1; d <= 7; d++) {
    s += '<option value="' + d + '"' + (d === sel ? ' selected' : '') + '>' + fmtWeekday(d) + '</option>';
  }
  return s;
}

function importSecOptions(sel) {
  let s = '';
  for (let n = 1; n <= 12; n++) {
    s += '<option value="' + n + '"' + (n === sel ? ' selected' : '') + '>第 ' + n + ' 节</option>';
  }
  return s;
}

function saveImportEdit() {
  const i = importEditing;
  if (i < 0 || !importDetected[i]) return;
  const name = document.getElementById('ie-name').value.trim();
  const location = document.getElementById('ie-loc').value.trim();
  const day = Number(document.getElementById('ie-day').value);
  const startSection = Number(document.getElementById('ie-start').value);
  const endSection = Number(document.getElementById('ie-end').value);
  if (!name) { toast('课程名不能为空'); return; }
  if (endSection < startSection) { toast('结束节次不能小于开始节次'); return; }

  Object.assign(importDetected[i], {
    name: name,
    location: location,
    day: day,
    startSection: startSection,
    endSection: endSection,
    picked: true
  });
  importEditing = -1;
  renderImportResult();
  toast('已修正识别结果，记得点「导入所选」');
}

function importCourses() {
  const picked = importDetected.filter(c => c.picked);
  if (!picked.length) { toast('先勾选要导入的课程'); return; }

  const week = Number(document.getElementById('import-week').value);
  const monday = document.getElementById('import-monday').value;
  if (!week || week < 1 || week > 30) { toast('请输入正确的周次'); return; }
  if (!monday) { toast('请选择该周的周一日期'); return; }
  if (new Date(monday + 'T00:00:00').getDay() !== 1) { toast('请选择周一日期'); return; }

  // 用图片中的周次与周一日期反推学期起始日，修正整个课表的周与日期
  store.setUser(Object.assign({}, store.getUser(), {
    semesterStart: anchorMonday(week, monday),
    lastImportWeek: week
  }));

  // 只覆盖这一周的课表，其他周已导入的课程保持不变
  const kept = store.getCourses().filter(c => c.week !== week);
  const courses = picked.map((c, i) => ({
    id: uid(),
    name: c.name,
    teacher: c.teacher || '',
    location: c.location || '',
    day: c.day,
    startSection: c.startSection,
    endSection: c.endSection,
    color: COURSE_COLORS[i % COURSE_COLORS.length],
    week: week
  }));
  store.setCourses(kept.concat(courses));

  // 导入后直接定位到图片对应的那一周
  const importedMonday = new Date(monday + 'T00:00:00');
  weekOffset = Math.round((importedMonday - getMonday(new Date())) / 604800000);

  closeModal();
  switchTab('schedule');
  renderSchedule();
  toast('已导入第 ' + week + ' 周 · ' + courses.length + ' 门课程');
}

/* ==================== 添加任务 ==================== */
function renderAddChips() {
  document.getElementById('at-category').innerHTML = CATEGORIES.map(c =>
    '<span class="chip ' + (atState.category === c.key ? 'active' : '') + '" data-key="' + c.key + '">' + c.icon + ' ' + c.label + '</span>'
  ).join('');

  document.getElementById('at-priority').innerHTML = PRIORITIES.map(p =>
    '<span class="chip ' + (atState.priority === p.key ? 'active' : '') + '" data-pri="' + p.key + '">' +
    '<span style="color:' + p.color + '">●</span> ' + p.label + '</span>'
  ).join('');

  document.getElementById('at-estimate').innerHTML = [30, 60, 90, 120].map(m =>
    '<span class="chip ' + (!atState.custom && atState.estimate === m ? 'active' : '') + '" data-min="' + m + '">' + m + ' 分钟</span>'
  ).join('') +
    '<span class="chip ' + (atState.custom ? 'active' : '') + '" data-min="custom">自定义</span>';

  document.getElementById('at-custom-wrap').style.display = atState.custom ? 'flex' : 'none';
}

function openAddTask(prefill) {
  prefill = prefill || {};
  atState = { category: prefill.category || 'homework', priority: prefill.priority || 'mid', estimate: prefill.estimate || 60, custom: false };
  renderAddChips();

  document.getElementById('at-custom-min').value = prefill.estimate || 45;

  document.getElementById('at-title').value = prefill.title || '';
  document.getElementById('at-date').value = todayStr();
  document.getElementById('at-time').value = '23:59';
  document.getElementById('at-note').value = prefill.note || '';

  const select = document.getElementById('at-course');
  const courseWeek = getWeekNumber(store.getUser().semesterStart);
  select.innerHTML = '<option value="">不关联</option>' +
    store.getCourses().filter(c => c.week === courseWeek)
      .map(c => '<option value="' + c.id + '">' + escapeHtml(c.name) + '</option>').join('');

  updateSaveState();
  openOverlay('overlay-addtask');
}

function updateSaveState() {
  const empty = !document.getElementById('at-title').value.trim();
  document.getElementById('addtask-save').disabled = empty;
}

function saveNewTask() {
  const title = document.getElementById('at-title').value.trim();
  if (!title) { toast('请输入任务标题'); return; }
  const date = document.getElementById('at-date').value || todayStr();
  const time = document.getElementById('at-time').value || '23:59';
  const courseId = document.getElementById('at-course').value || null;

  let estimateMin = atState.estimate;
  if (atState.custom) {
    estimateMin = Number(document.getElementById('at-custom-min').value);
    if (!estimateMin || estimateMin < 5 || estimateMin > 600) {
      toast('自定义时长需在 5–600 分钟之间');
      return;
    }
  }

  const task = {
    id: uid(),
    title: title,
    category: atState.category,
    courseId: courseId,
    due: date + 'T' + time,
    priority: atState.priority,
    status: 'todo',
    estimateMin: estimateMin,
    note: document.getElementById('at-note').value.trim(),
    createdAt: Date.now(),
    doneAt: null
  };

  store.setTasks(store.getTasks().concat([task]));
  closeOverlay('overlay-addtask');
  toast('已添加 ✓');
  renderHome();
  renderTasks();
  renderProfile();
}

/* ==================== 初始化 ==================== */
function hideSplash() {
  if (splashHidden) return;
  splashHidden = true;
  document.getElementById('splash').classList.add('hide');
}

function bindEvents() {
  // 底部 Tab
  document.querySelector('.tabbar').addEventListener('click', function (e) {
    const tab = e.target.closest('.tab');
    if (tab) switchTab(tab.dataset.tab);
  });

  document.getElementById('fab').onclick = function () { openAddTask(); };
  document.getElementById('splash').addEventListener('click', hideSplash);

  // 首页（事件委托）
  document.getElementById('home-content').addEventListener('click', function (e) {
    const check = e.target.closest('.check[data-id]');
    if (check) { completeTask(check.dataset.id, true); return; }

    if (e.target.closest('[data-act="open-calendar"]')) { openCalendar(); return; }

    const cetToggle = e.target.closest('[data-cet-toggle]');
    if (cetToggle) { toggleCet(cetToggle.dataset.cetToggle); return; }

    const cetTask = e.target.closest('[data-cet-task]');
    if (cetTask) { addCetTask(cetTask.dataset.cetTask); return; }

    const contestToggle = e.target.closest('[data-contest-toggle]');
    if (contestToggle) { toggleContest(contestToggle.dataset.contestToggle); return; }

    // 逾期入口：进入任务页并让对应逾期任务闪烁红边
    const flash = e.target.closest('[data-flash="overdue"]');
    if (flash) { flashOverdueAt = Date.now(); switchTab('tasks'); return; }

    // 推荐比赛：直接跳到该赛事的类别详情页（非分类网格）
    const rec = e.target.closest('[data-rec-cat]');
    if (rec && !e.target.closest('a, button')) {
      contestView.cat = rec.dataset.recCat;
      contestHighlight = rec.dataset.recId || null;
      switchTab('contest');
      return;
    }

    // 今日课程行的作业徽标：打开该课作业面板（不进课表）
    const hwOpen = e.target.closest('[data-hw-open]');
    if (hwOpen) { openCourseHomework(hwOpen.dataset.hwOpen); return; }

    const nav = e.target.closest('[data-nav]');
    // 卡内官网等 <a> 链接走默认行为，不切换页面
    if (nav && !e.target.closest('a')) switchTab(nav.dataset.nav);
  });

  // 课表周切换
  document.getElementById('week-prev').onclick = function () { weekOffset--; renderSchedule(); };
  document.getElementById('week-next').onclick = function () { weekOffset++; renderSchedule(); };
  document.getElementById('import-course').onclick = openImport;

  // 成长日历
  document.getElementById('cal-back').onclick = function () { closeOverlay('overlay-calendar'); };
  document.getElementById('cal-prev').onclick = function () { calYear--; renderCalendar(); };
  document.getElementById('cal-next').onclick = function () { calYear++; renderCalendar(); };
  document.getElementById('cal-months').addEventListener('click', function (e) {
    const day = e.target.closest('[data-date]');
    if (day) openDayDetail(day.dataset.date);
  });

  // 四年规划：年级 → 小模块 → 详情 三级导航（事件委托）
  document.getElementById('plan-list').addEventListener('click', function (e) {
    const pv = e.target.closest('[data-pv]');
    if (pv) {
      if (pv.dataset.pv === 'back-grade') planView = { stage: null, sec: null };
      else if (pv.dataset.pv === 'back-sec') planView.sec = null;
      else if (pv.dataset.pv === 'next') planView.sec += 1;
      renderPlan();
      window.scrollTo(0, 0);
      return;
    }
    const grade = e.target.closest('.plan-grade[data-stage]');
    if (grade) { planView = { stage: grade.dataset.stage, sec: null }; renderPlan(); window.scrollTo(0, 0); return; }
    const sec = e.target.closest('.plan-sec-card[data-sec]');
    if (sec) { planView.sec = Number(sec.dataset.sec); renderPlan(); window.scrollTo(0, 0); }
  });

  // 任务筛选
  document.getElementById('task-filters').addEventListener('click', function (e) {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    taskFilter = chip.dataset.filter;
    renderTasks();
  });

  // 任务列表
  document.getElementById('task-list').addEventListener('click', function (e) {
    const card = e.target.closest('.task-card');
    if (!card) return;
    const id = card.dataset.id;
    const act = e.target.closest('[data-act]');

    if (act) {
      if (act.dataset.act === 'toggle') {
        const t = store.getTasks().find(x => x.id === id);
        if (t) completeTask(id, t.status !== 'done');
      } else if (act.dataset.act === 'resubmit') {
        openResubmit(id);
      } else if (act.dataset.act === 'del') {
        confirmDialog('确定删除这条任务吗？', function () {
          store.setTasks(store.getTasks().filter(x => x.id !== id));
          renderTasks();
          renderHome();
          renderProfile();
          toast('已删除');
        });
      }
      return;
    }

    expandedTask = expandedTask === id ? null : id;
    renderTasks();
  });

  // 作业面板：打勾 / 编辑 / 空白行保存 / 继续添加（事件委托，modal 内容每次重建）
  document.getElementById('modal-sheet').addEventListener('click', function (e) {
    const chk = e.target.closest('[data-hw-toggle]');
    if (chk) { toggleCourseHw(chk.dataset.hwToggle); return; }
    const edit = e.target.closest('[data-hw-edit]');
    if (edit) { openHwEdit(edit.dataset.hwEdit); return; }
    const saver = e.target.closest('[data-hw-save]');
    if (saver && hwModalCourse) { addCourseHw(hwModalCourse, null, Number(saver.dataset.hwSave)); return; }
    const more = e.target.closest('[data-hw-more]');
    if (more && hwModalCourse) { hwExtraRows++; openCourseHomework(hwModalCourse, true); }
  });

  // 竞赛专区：类别 → 比赛列表 两级导航（事件委托）+ 自定义比赛增删
  document.getElementById('contest-list').addEventListener('click', function (e) {
    const del = e.target.closest('[data-custom-del]');
    if (del) { deleteCustomContest(del.dataset.customDel); return; }

    const add = e.target.closest('[data-add-contest]');
    if (add) { openContestForm(add.dataset.addContest); return; }

    const cv = e.target.closest('[data-cv]');
    if (cv) {
      if (cv.dataset.cv === 'back') contestView.cat = null;
      renderContest();
      window.scrollTo(0, 0);
      return;
    }
    const cat = e.target.closest('[data-cat]');
    if (cat) { contestView.cat = cat.dataset.cat; renderContest(); window.scrollTo(0, 0); }
  });

  // 个人面板
  document.getElementById('profile-content').addEventListener('click', function (e) {
    if (e.target.closest('#btn-user')) openUserForm();
    else if (e.target.closest('[data-act="open-calendar"]')) openCalendar();
    else if (e.target.closest('[data-act="exam-list"]')) openExamList();
    else if (e.target.closest('[data-act="contest-list"]')) openContestList();
    else if (e.target.closest('[data-day]')) openDayDetail(e.target.closest('[data-day]').dataset.day);
    else if (e.target.closest('#btn-logout')) {
      confirmDialog('退出当前账户？（数据已保留，24 小时后需重新验证密码）', function () {
        logout();
      });
    }
    else if (e.target.closest('#btn-about')) openAbout();
    else if (e.target.closest('#btn-clear')) {
      confirmDialog('清除所有数据？将恢复为示例数据。', function () {
        // 仅清除当前账户的数据包并重置为示例（不动账户注册表）
        userData = {};
        save(userPackKey(currentUser), userData);
        seed();
        location.reload();
      });
    }
  });

  // 添加任务
  document.getElementById('at-title').addEventListener('input', updateSaveState);
  document.getElementById('addtask-back').onclick = function () { closeOverlay('overlay-addtask'); };
  document.getElementById('addtask-save').onclick = saveNewTask;

  document.getElementById('at-category').addEventListener('click', function (e) {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    atState.category = chip.dataset.key;
    renderAddChips();
  });
  document.getElementById('at-priority').addEventListener('click', function (e) {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    atState.priority = chip.dataset.pri;
    renderAddChips();
  });
  document.getElementById('at-estimate').addEventListener('click', function (e) {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    if (chip.dataset.min === 'custom') {
      atState.custom = true;
    } else {
      atState.custom = false;
      atState.estimate = Number(chip.dataset.min);
    }
    renderAddChips();
    if (atState.custom) document.getElementById('at-custom-min').focus();
  });

  // 弹窗背景关闭
  document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target.id === 'modal') closeModal();
  });
}

// 旧版本课程没有 week 字段，统一归到导入基准周，避免所有周重复显示
function migrateCourseWeeks() {
  if (udLoad(KEYS.courseWeeks, false)) return;
  const list = store.getCourses();
  if (list.length) {
    store.setCourses(list.map(c => Object.assign({}, c, {
      week: typeof c.week === 'number' ? c.week : IMPORT_ANCHOR.week
    })));
  }
  udSave(KEYS.courseWeeks, true);
}

/* ==================== 登录 / 账户体系 ==================== */
// 简单同步哈希（本地单机应用，防止明文密码即可）
function hashPass(pass, salt) {
  const s = salt + '|' + pass;
  let h1 = 5381, h2 = 52711;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    h1 = (h1 * 33 ^ c) >>> 0;
    h2 = (h2 * 31 ^ c) >>> 0;
  }
  return h1.toString(36) + '-' + h2.toString(36);
}

// 会话是否在 24 小时免验证期内
function sessionValid(sess) {
  return !!(sess && sess.user && typeof sess.loginAt === 'number' &&
    Date.now() - sess.loginAt < AUTH.SESSION_MS);
}

// 旧版数据迁移：首个注册的用户可继承无账户时代的本地数据，之后不再迁移
function migrateLegacyPack() {
  if (load(AUTH.migrated, false)) return null;
  const legacyKeys = Object.keys(KEYS);
  const hasLegacy = legacyKeys.some(k => localStorage.getItem(KEYS[k]) !== null);
  if (!hasLegacy) return null;
  const pack = {};
  legacyKeys.forEach(k => {
    const raw = localStorage.getItem(KEYS[k]);
    if (raw !== null) { try { pack[KEYS[k]] = JSON.parse(raw); } catch (e) {} }
  });
  pack[KEYS.seeded] = true; // 已使用过的数据不再被示例覆盖
  save(AUTH.migrated, true);
  return pack;
}

function showLogin(prefillName) {
  const screen = document.getElementById('login-screen');
  if (!screen) return;
  screen.style.display = 'flex';
  const nameEl = document.getElementById('login-name');
  if (nameEl && prefillName) nameEl.value = prefillName;
  const hint = document.getElementById('login-hint');
  if (hint) hint.textContent = prefillName
    ? '欢迎回来 ' + prefillName + ' · 距上次验证已超过 24 小时，请重新输入密码'
    : '新用户名将自动创建账户 · 每个账户拥有独立数据空间';
  const passEl = document.getElementById('login-pass');
  if (passEl) passEl.value = '';
  const pass2El = document.getElementById('login-pass2');
  if (pass2El) pass2El.value = '';
  setTimeout(hideSplash, 2000);
  setTimeout(function () {
    if (prefillName && passEl) passEl.focus();
    else if (nameEl) nameEl.focus();
  }, 60);
}

function hideLogin() {
  const screen = document.getElementById('login-screen');
  if (screen) screen.style.display = 'none';
}

function loginHint(msg, isError) {
  const hint = document.getElementById('login-hint');
  if (!hint) return;
  hint.textContent = msg;
  hint.classList.toggle('error', !!isError);
}

// 登录 / 注册：用户名不存在 → 注册（需两次密码一致，全新数据空间）；
// 已存在 → 验证密码后进入自己的数据空间
function doLogin() {
  const name = (document.getElementById('login-name').value || '').trim();
  const pass = document.getElementById('login-pass').value || '';
  const pass2 = (document.getElementById('login-pass2').value || '').trim();

  if (!name) { loginHint('请输入用户名', true); return; }
  if (name.length > 12) { loginHint('用户名过长（最多 12 个字符）', true); return; }
  if (!pass) { loginHint('请输入密码', true); return; }

  const users = load(AUTH.users, {});

  if (users[name]) {
    // 老用户：验证密码
    if (hashPass(pass, users[name].salt) !== users[name].hash) {
      loginHint('密码错误，请重新输入', true);
      return;
    }
    users[name].lastLoginAt = Date.now();
    save(AUTH.users, users);
    startSession(name);
    toast('欢迎回来，' + name + ' 👋');
  } else {
    // 新用户注册
    if (pass.length < 4) { loginHint('密码至少 4 位', true); return; }
    if (pass !== pass2) { loginHint('两次输入的密码不一致', true); return; }
    const salt = uid();
    users[name] = { hash: hashPass(pass, salt), salt: salt, createdAt: Date.now(), lastLoginAt: Date.now() };
    save(AUTH.users, users);

    // 全新数据空间；若是首个账户且存在旧版本地数据，则继承
    currentUser = name;
    userData = migrateLegacyPack() || {};
    save(userPackKey(name), userData);
    seed(); // 新用户填充示例数据，帮助上手

    // 登录名同步为默认昵称，主页问候语与「我的」页直接可用
    const u = store.getUser();
    if (!u.name || u.name === '同学') store.setUser(Object.assign({}, u, { name: name }));

    save(AUTH.session, { user: name, loginAt: Date.now() });
    hideLogin();
    startApp();
    toast('账户创建成功，欢迎 ' + name + ' 🎉');
  }
}

function startSession(name) {
  currentUser = name;
  userData = load(userPackKey(name), {});
  if (!userData || typeof userData !== 'object') userData = {};
  // 每次成功验证都续期 24 小时免登录窗口
  save(AUTH.session, { user: name, loginAt: Date.now() });
  hideLogin();
  startApp();
}

function logout() {
  localStorage.removeItem(AUTH.session);
  location.reload();
}

/* ==================== 启动 ==================== */
function startApp() {
  seed();
  migrateCourseWeeks();
  const user = store.getUser();
  if (typeof user.lastImportWeek === 'number') {
    weekOffset = user.lastImportWeek - getWeekNumber(user.semesterStart);
  }
  bindEvents();
  renderAddChips();
  switchTab('home');
  setInterval(function () {
    if (currentTab === 'home') updateCetCountdown();
  }, 1000);
  setTimeout(hideSplash, 2000);
}

function init() {
  const sess = load(AUTH.session, null);
  if (sessionValid(sess)) {
    // 24 小时内：免验证直接进入自己的数据空间
    currentUser = sess.user;
    userData = load(userPackKey(sess.user), {});
    if (!userData || typeof userData !== 'object') userData = {};
    save(AUTH.session, { user: sess.user, loginAt: Date.now() }); // 续期
    startApp();
  } else {
    // 首次使用 / 会话过期：显示登录界面
    localStorage.removeItem(AUTH.session);
    bindLoginEvents();
    showLogin(sess && sess.user ? sess.user : null);
  }
}

function bindLoginEvents() {
  const btn = document.getElementById('login-btn');
  if (!btn || btn.dataset.bound === '1') return;
  btn.dataset.bound = '1';
  btn.addEventListener('click', doLogin);
  ['login-name', 'login-pass', 'login-pass2'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') doLogin();
    });
  });
}

init();
