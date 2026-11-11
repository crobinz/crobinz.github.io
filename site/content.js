/*
 * 这是主页的内容文件。以后修改个人信息、动态、论文和随笔，主要编辑这里即可。
 * 每条内容通常包含 en（英文）和 zh（中文）两个版本。
 */
window.SITE_CONTENT = {
  profile: {
    name: "Robin Cai",
    initials: "RC",
    role: { en: "Ph.D. Student in Wearable Robotics", zh: "穿戴式机器人方向博士研究生" },
    affiliation: { en: "Northeastern University, China", zh: "中国东北大学" },
    location: { en: "Shenyang, China", zh: "中国 · 沈阳" },
    email: "Email to be added",
    links: [
      // 填好网址后，把 url 后面的空字符串替换为真实链接，例如：https://github.com/robin-stu
      { label: "Google Scholar", url: "" },
      { label: "GitHub", url: "https://github.com/crobinz" },
      { label: "CV", url: "" }
    ]
  },

  about: {
    en: [
      "I am <strong>Robin Cai</strong>, a Ph.D. student at <strong>Northeastern University, China</strong>. My research focuses on <strong>data augmentation for wearable robotics</strong>. I am currently studying <strong>hip-assist exoskeleton robots</strong>, with an interest in turning limited human-motion data into reliable knowledge for learning, evaluation, and personalized assistance.",
      "My broader goal is to help wearable robots understand differences across people, activities, and movement patterns, and ultimately provide assistance that is both effective and human-centered."
    ],
    zh: [
      "我是 <strong>Robin Cai</strong>，现为<strong>东北大学</strong>博士研究生，主要研究<strong>穿戴式机器人数据增强</strong>。目前围绕<strong>髋关节助力外骨骼机器人</strong>开展研究，关注如何将有限的人体运动数据转化为可用于学习、评估与个性化助力的可靠知识。",
      "我的长期目标是帮助穿戴式机器人理解不同个体、活动和运动模式之间的差异，进而提供有效且以人为中心的助力。"
    ],
    collaboration: {
      en: "I am interested in research discussions and collaboration around wearable robotics, exoskeletons, human-motion data, and intelligent assistive systems.",
      zh: "欢迎围绕穿戴式机器人、外骨骼、人体运动数据和智能助力系统进行科研交流与合作。"
    }
  },

  news: [
    { date: { en: "Current", zh: "当前" }, text: { en: "Researching data augmentation methods for hip-assist exoskeleton robots.", zh: "正在研究面向髋关节助力外骨骼机器人的数据增强方法。" } },
    { date: { en: "Current", zh: "当前" }, text: { en: "Building a research loop connecting human-motion data, learning methods, and physical wearable systems.", zh: "逐步建立连接人体运动数据、学习方法与真实穿戴式系统的研究闭环。" } },
    { date: { en: "2026.11", zh: "2026.11" }, text: { en: "Redesigned this academic homepage to document ongoing work and future publications.", zh: "重新设计个人学术主页，用于持续记录在研工作与后续论文。" } }
  ],

  education: [
    { mark: "NEU", range: { en: "Ph.D. · Present", zh: "博士 · 在读" }, school: { en: "Northeastern University", zh: "东北大学" }, detail: { en: "Wearable Robotics · Data Augmentation", zh: "穿戴式机器人 · 数据增强" } },
    { mark: "NEU", range: { en: "Master’s", zh: "硕士" }, school: { en: "Northeastern University", zh: "东北大学" }, detail: { en: "Graduate Study and Research", zh: "硕士阶段学习与研究" } },
    { mark: "QLU", range: { en: "Bachelor’s", zh: "本科" }, school: { en: "Qilu University of Technology", zh: "齐鲁工业大学" }, detail: { en: "Undergraduate Education", zh: "本科阶段学习" } }
  ],

  interests: [
    { icon: "DA", title: { en: "Data Augmentation", zh: "数据增强" }, description: { en: "Generating diverse and useful training data while preserving the physical meaning of human motion.", zh: "在保留人体运动物理意义的前提下，生成更具多样性与可用性的训练数据。" }, tags: ["Time Series", "Human Motion", "Learning"] },
    { icon: "EXO", title: { en: "Hip-assist Exoskeletons", zh: "髋关节助力外骨骼" }, description: { en: "Studying a physical wearable platform for human movement sensing, assistance, and experimental validation.", zh: "面向人体运动感知、助力与实验验证，研究真实的穿戴式机器人平台。" }, tags: ["Wearable Robots", "Hip Assistance", "Experiments"] },
    { icon: "HRI", title: { en: "Human-centered Assistance", zh: "以人为中心的助力" }, description: { en: "Exploring assistance that adapts to different people, activities, and movement patterns.", zh: "探索能够适应不同个体、活动与运动模式的智能助力方法。" }, tags: ["Personalization", "Biomechanics", "HRI"] }
  ],

  publications: [
    // 示例：删除下一行开头的 //，再按需修改即可添加论文。
    // { year: "2026", title: "Paper title", authors: "Robin Cai, Coauthor", venue: "Journal or Conference", url: "https://doi.org/...", code: "https://github.com/..." }
  ],

  notes: [
    { title: { en: "What makes augmented motion data physically meaningful?", zh: "什么样的运动增强数据才具有物理意义？" }, status: { en: "Draft", zh: "草稿" }, url: "" },
    { title: { en: "From gait data to hip-assistance experiments", zh: "从步态数据到髋关节助力实验" }, status: { en: "Draft", zh: "草稿" }, url: "" },
    { title: { en: "Connecting data, models, and exoskeleton hardware", zh: "连接数据、模型与外骨骼硬件" }, status: { en: "Draft", zh: "草稿" }, url: "" }
  ]
};

