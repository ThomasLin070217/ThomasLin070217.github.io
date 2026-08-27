import { useEffect, useState } from 'react';

type Language = 'en' | 'zh';
type Copy = { en: string; zh: string };
type Category = 'education' | 'work' | 'community' | 'projects';
type ArchiveItem = {
  id: string; category: Category; title: string; role: Copy; period: Copy;
  summary: Copy; details: Copy[]; image?: string; imageAlt?: Copy;
  link?: string; linkLabel?: Copy; stat?: Copy;
};

const copy = {
  en: {
    nav: ['About', 'Education', 'Work', 'Community', 'Projects', 'Contact'], status: 'Shanghai ↔ Hong Kong · Building now',
    heroRole: 'Student · Builder · Community Founder',
    heroLine: 'I build at the intersection of AI, products, and entrepreneurship.', explore: 'Explore the archive',
    aboutLabel: '01 / About', aboutTitle: 'Most of what I learn happens through building.',
    about: [
      "I'm Yunian Lin — I also go by Thomas. I'm a student, builder, and community founder working at the intersection of AI, products, and entrepreneurship.",
      'I study AI and Data Science at the University of Hong Kong, but most of what I learn happens through building. From experimenting with multimodal AI at SenseTime, to co-founding an early-stage AI startup, to building InnoAI and Aurora into communities for young builders and founders, I enjoy turning ambiguous ideas into things that can actually be tested, used, and scaled.',
      "I'm especially interested in how AI changes the way we build products, organize teams, and start companies — and I try to stay close to that change by building alongside it.",
    ],
    now: 'Currently', nowValue: 'SenseTime · InnoAI · Aurora · HKU', archiveLabel: '02 / Archive',
    archiveTitle: 'A record of how I learn and build', archiveNote: 'Education, work, communities and projects—kept distinct, connected by building.',
    categories: {
      education: ['Education', 'Where I learned across different systems and cultures.'],
      work: ['Work', 'Industry, internships and an early venture.'],
      community: ['Community', 'Networks and rooms designed to help people build together.'],
      projects: ['Projects', 'Products and experiments with something concrete to show.'],
    },
    detail: 'View details', visit: 'Visit project', close: 'Close', evidence: 'What this shows',
    photosLabel: '03 / In the room', photosTitle: 'Communities become real when people show up.', photosNote: 'Selected moments from InnoAI and builder gatherings.',
    contactLabel: '04 / Contact', contactTitle: "Let's build something useful.",
    contactBody: 'Reach out if you are building at the intersection of AI, product and entrepreneurship—or want to explore a thoughtful collaboration.',
    back: 'Back to top',
  },
  zh: {
    nav: ['关于', '教育', '工作', '社区', '项目', '联系'], status: '上海 ↔ 香港 · 持续构建中',
    heroRole: '学生 · Builder · 社区创始人', heroLine: '我在人工智能、产品与创业的交叉地带持续构建。', explore: '查看经历档案',
    aboutLabel: '01 / 关于', aboutTitle: '真正塑造我的学习，大多发生在持续构建的过程中。',
    about: [
      '我是林昱年（Yunian Lin），也可以叫我 Thomas。我是一名学生、Builder 和社区创始人，长期探索人工智能、产品与创业的交叉地带。',
      '我在香港大学学习人工智能与数据科学，但真正塑造我的学习，大多发生在持续构建的过程中。从在商汤探索多模态 AI，到参与共同创办早期 AI 创业项目，再到把 InnoAI 和 Aurora 建设成年轻 Builder 与创业者的社区，我喜欢把模糊的想法变成能够被测试、使用并进一步放大的东西。',
      '我尤其关注 AI 如何改变产品构建、团队组织与公司创立的方式。我希望通过持续参与和亲手构建，始终贴近这种变化。',
    ],
    now: '目前', nowValue: '商汤 · InnoAI · Aurora · 香港大学', archiveLabel: '02 / 经历档案',
    archiveTitle: '我如何学习，又如何构建', archiveNote: '教育、工作、社区与项目彼此独立，又通过持续构建相互连接。',
    categories: {
      education: ['教育', '在不同教育体系与文化中学习。'], work: ['工作', '产业实习、产品研究与一次早期创业实践。'],
      community: ['社区', '让年轻 Builder 与创业者真正连接并一起行动。'], projects: ['项目', '有实际内容可展示的产品与实验。'],
    },
    detail: '查看详情', visit: '访问项目', close: '关闭', evidence: '这段经历说明了什么',
    photosLabel: '03 / 现场', photosTitle: '社区真正成立，是在人们愿意到场之后。', photosNote: '来自 InnoAI 与 Builder 活动的部分现场。',
    contactLabel: '04 / 联系', contactTitle: '一起做点真正有用的事。',
    contactBody: '如果你也在探索 AI、产品与创业的交叉地带，或者想讨论一次认真、有价值的合作，欢迎联系我。', back: '回到顶部',
  },
};

const items: ArchiveItem[] = [
  { id: 'hku', category: 'education', title: 'The University of Hong Kong',
    role: { en: 'AI & Data Science', zh: '人工智能与数据科学' }, period: { en: '2025—Now · Hong Kong', zh: '2025—至今 · 香港' },
    summary: { en: 'Studying AI and Data Science while building products and communities beyond the classroom.', zh: '学习人工智能与数据科学，同时把课堂之外的时间用于产品、社区与真实项目。' },
    details: [{ en: 'Combining technical study with hands-on work across AI products, early ventures and builder communities.', zh: '把技术学习与 AI 产品、早期创业和 Builder 社区的实际工作连接起来。' }],
    image: '/images/journey-hku.jpg', imageAlt: { en: 'The University of Hong Kong', zh: '香港大学' } },
  { id: 'education-journey', category: 'education', title: 'An International Education Path',
    role: { en: 'Weihai · Wodonga · Shenzhen', zh: '威海 · Wodonga · 深圳' }, period: { en: 'Before 2025', zh: '2025 年以前' },
    summary: { en: 'Moving through different cities and education systems shaped how I adapt, communicate and work across cultures.', zh: '在不同城市与教育体系中的学习经历，塑造了我适应环境、跨文化沟通和协作的方式。' },
    details: [
      { en: 'My earlier education began in Weihai, continued at Wodonga Senior Secondary College in Australia, and returned to Shenzhen at Zunli before HKU.', zh: '我的早期教育从威海开始，随后在澳大利亚 Wodonga Senior Secondary College 学习，并在进入港大前回到深圳的 Zunli。' },
      { en: 'Presented as one formative journey so the portfolio keeps its emphasis on current work, communities and products.', zh: '这些经历被整理为一段完整的成长路径，让作品集把主要注意力留给当下的工作、社区与产品。' }],
    image: '/images/journey-wodonga.jpg', imageAlt: { en: 'Yunian during his education in Wodonga', zh: '昱年在 Wodonga 学习期间' } },
  { id: 'sensetime', category: 'work', title: 'SenseTime',
    role: { en: 'Embedded Software Development Intern', zh: '嵌入式软件开发实习生' }, period: { en: 'Aug 2026—Now · Shanghai', zh: '2026.08—至今 · 上海' },
    summary: { en: 'Working on local model deployment and automating AI-generated data workflows for intelligent vehicle scenarios.', zh: '参与本地模型部署，并推动智能汽车场景中的 AI 生产数据流程自动化。' },
    details: [
      { en: 'Hands-on exposure to deploying local AI models in production-oriented environments.', zh: '在面向实际交付的环境中参与本地 AI 模型部署。' },
      { en: 'Building workflow automation around AI-generated data rather than isolated demos.', zh: '围绕 AI 生产数据搭建自动化流程，而不只是完成孤立 Demo。' }],
    image: '/images/sensetime-shanghai.jpg', imageAlt: { en: 'SenseTime Shanghai office', zh: '商汤上海办公空间' } },
  { id: 'dinq', category: 'work', title: 'DINQ',
    role: { en: 'Product Research Intern', zh: '产品研究实习生' }, period: { en: 'Mar 2026', zh: '2026.03' },
    summary: { en: 'Improved product experience and produced product research for a dynamic professional identity platform.', zh: '围绕动态职业身份产品优化体验，并完成产品调研与分析文档。' },
    details: [
      { en: 'Analyzed product positioning and user experience with actionable recommendations.', zh: '分析产品定位与用户体验，并输出可执行的优化建议。' },
      { en: 'A product research contribution—not represented as a company I founded.', zh: '这是一段产品研究型实习经历，并非由我创办的项目。' }] },
  { id: 'colorblock', category: 'work', title: 'ColorBlock Network',
    role: { en: 'Co-founder · Past venture', zh: '联合创始人 · 过往创业项目' }, period: { en: 'Nov 2025—Feb 2026', zh: '2025.11—2026.02' },
    summary: { en: 'Explored professional identity and community infrastructure through early product and company building.', zh: '围绕职业身份与社区基础设施，完成一段早期产品与公司建设实践。' },
    details: [
      { en: 'Worked across product definition, early technology, business development and company building.', zh: '参与产品定义、早期技术、商务拓展与公司建设。' },
      { en: 'The venture concluded in February 2026; it remains part of the record, not an ongoing claim.', zh: '项目已于 2026 年 2 月结束；保留为真实经历，不再包装为进行中项目。' }] },
  { id: 'innoai', category: 'community', title: 'InnoAI',
    role: { en: 'Founder · AI Builder Community', zh: '创始人 · AI Builder 社区' }, period: { en: '1 Apr 2026—Now', zh: '2026.04.01—至今' },
    summary: { en: 'A practice-driven AI community where students, researchers and early founders turn ideas into real participation and projects.', zh: '一个强调实践的 AI 社区，让学生、研究者与早期创业者把想法转化为真实参与和项目。' },
    details: [
      { en: 'I lead positioning, organizational design, division of responsibilities, management and early member review.', zh: '我负责组织定位、组织建设、分工、管理，以及早期成员审核等工作。' },
      { en: 'AIx Origin is an InnoAI-hosted flagship event that brought together 100 high-quality builders.', zh: 'AIx Origin 是由 InnoAI 主办的旗舰活动，聚集了 100 位高质量 Builder。' }],
    image: '/images/innoai-shenzhen-event.jpg', imageAlt: { en: 'InnoAI members after an event in Shenzhen', zh: 'InnoAI 深圳活动合照' },
    link: 'https://aixorigin.innoai.org.cn/', linkLabel: { en: 'AIx Origin website', zh: 'AIx Origin 官网' },
    stat: { en: '100 builders at AIx Origin', zh: 'AIx Origin · 100 位 Builder' } },
  { id: 'aurora', category: 'community', title: 'Aurora Club',
    role: { en: 'Founder & Chair · Founder Network', zh: '创始人兼主席 · 青年创业者网络' }, period: { en: 'Apr 2025—Now', zh: '2025.04—至今' },
    summary: { en: 'A 200+ member network connecting young founders, developers, investors, students and builders across cities.', zh: '连接青年创始人、开发者、投资人、学生与 Builder 的 200+ 成员网络。' },
    details: [
      { en: 'Organized five activities across Beijing, Shanghai, Hangzhou, Shenzhen and Hong Kong.', zh: '已在北京、上海、杭州、深圳和香港举办 5 场活动。' },
      { en: 'Built around cross-city relationships and repeated participation, not only online audience numbers.', zh: '重点在跨城关系与持续参与，而不只是线上关注人数。' }],
    image: '/images/aurora-club-official.jpg', imageAlt: { en: 'Aurora Club official emblem', zh: 'Aurora Club 官方标志' },
    stat: { en: '200+ members · 5 cities', zh: '200+ 成员 · 5 座城市' } },
  { id: 'token-roi', category: 'projects', title: 'Token ROI',
    role: { en: 'AI Economics · Agent ROI', zh: 'AI 经济性 · Agent 投资回报' }, period: { en: '2026—Now', zh: '2026—至今' },
    summary: { en: 'A framework for measuring the value created by AI agents, applied to a real cabin video QC agent and a controlled image-generation experiment.', zh: '一套衡量 AI Agent 实际价值的框架，并落地到真实的车舱视频质检 Agent 与一次受控的图片生成对比实验。' },
    details: [
      { en: 'Built an Agent ROI framework that treats completion of real tasks—not single calls—as the unit of value, folding in model, infrastructure, human and risk cost.', zh: '搭建一套以“完成任务”而非“单次调用”为价值单位的 Agent ROI 框架，把模型、基建、人工与风险成本都纳入计算。' },
      { en: 'Cabin QC case: cut human review from ~16 min to ~5m40s per batch, with full ROI ~47.5% on a 152-video batch.', zh: '车舱质检案例：单批次人工核对从约 16 分钟降到约 5 分 40 秒；152 条视频的完整 ROI 约 47.5%。' },
      { en: 'FLUX.2 case: ran a controlled generation experiment proving the model could not meet hard spatial/physical constraints, so the team stopped stacking prompts and pivoted the pipeline.', zh: 'FLUX.2 案例：用受控生成实验证明模型无法稳定满足精确坐标与安装物理门槛，最终停止堆 Prompt，转向可控合成管线。' }],
    stat: { en: '47.5% ROI measured', zh: '实测 ROI 47.5%' } },
  { id: 'ai-training-suit', category: 'projects', title: 'AI Training Suit',
    role: { en: 'Wearable AI · Concept + pitch deck', zh: '可穿戴 AI · 概念与融资材料' }, period: { en: '2026 · Concept', zh: '2026 · 概念阶段' },
    summary: { en: 'A motion-guidance system that puts a coach on you: body sensing, AI motion recognition and real-time voice & haptic correction.', zh: '一套把教练“穿在身上”的动作指导系统：身体传感 + AI 动作识别 + 实时语音与震动纠正。' },
    details: [
      { en: 'Shaped product, market and funnel into a 15-page pitch deck, plus a VC scorecard and a 4-week traction plan.', zh: '用一版 15 页 Pitch Deck + VC 记分卡 + 4 周 Traction 计划，把产品、市场与增长入口想清楚。' },
      { en: 'Positioned as real-time in-motion guidance, starting from a lightweight wearable and optional sensor set.', zh: '定位为“实时进入动作过程”的指导，第一代从轻量可穿戴与可选传感器组合切入。' }],
    image: '/images/ai-training-suit.jpg', imageAlt: { en: 'AI Training Suit concept', zh: 'AI Training Suit 概念图' } },
  { id: 'tos', category: 'projects', title: 'TOS',
    role: { en: 'Personal operating system · Working product', zh: '个人操作系统 · 可运行产品' }, period: { en: 'Apr 2026—Now', zh: '2026.04—至今' },
    summary: { en: 'A local-first system for weekly strategy, Today Big 3, time tracking, opportunity cooling and review.', zh: '一个本地优先的个人系统，覆盖周策略、Today Big 3、时间记录、机会冷却与复盘。' },
    details: [
      { en: 'Built as a working tool for my own planning and decision system, not a static interface concept.', zh: '这是服务于我个人规划与决策系统的可运行工具，而非静态界面概念。' },
      { en: 'Connects priorities, capacity and review into one repeatable workflow.', zh: '把优先级、个人容量与复盘连接成可重复的工作流。' }],
    image: '/images/tos-focus.jpg', imageAlt: { en: 'TOS focus interface', zh: 'TOS 专注界面' } },
  { id: 'trade-review', category: 'projects', title: 'Trade Review',
    role: { en: 'Decision tool · Working product', zh: '决策工具 · 可运行产品' }, period: { en: 'Apr 2026—Now', zh: '2026.04—至今' },
    summary: { en: 'A read-only trading journal that turns activity into behavior patterns, checks and review prompts.', zh: '一个只读交易日志，把交易活动转化为行为模式、检查项与复盘提示。' },
    details: [
      { en: 'Uses read-only data synchronization and pre-trade checks to support more consistent decisions.', zh: '通过只读数据同步与交易前检查，帮助形成更一致的决策过程。' },
      { en: 'Focuses on behavior and review rather than trade signals.', zh: '重点是行为与复盘，而不是提供交易信号。' }],
    image: '/images/trade-review-pretrade.jpg', imageAlt: { en: 'Trade Review pre-trade interface', zh: 'Trade Review 交易前检查界面' },
    link: 'https://github.com/ThomasLin070217/Trade-Review', linkLabel: { en: 'GitHub', zh: 'GitHub' } },
  { id: 'hejia', category: 'projects', title: 'Hejia CoolDown',
    role: { en: 'Project mentor · Young builders', zh: '项目导师 · 青少年 Builder' }, period: { en: '2026', zh: '2026' },
    summary: { en: 'Mentored a team averaging 12 years old to build an AI assistant for difficult family conversations.', zh: '指导一群平均年龄 12 岁的孩子，共同完成面向家庭沟通难题的 AI 助手。' },
    details: [
      { en: 'Guided the team from problem framing to a presentable product concept and interface.', zh: '带领团队从问题定义走到可展示的产品概念与界面。' },
      { en: 'The value is both the prototype and helping very young builders experience a complete project cycle.', zh: '价值不仅在原型，也在于让低龄 Builder 经历一次完整的项目周期。' }],
    image: '/images/hejia-cooldown-ui.png', imageAlt: { en: 'Hejia CoolDown interface', zh: 'Hejia CoolDown 产品界面' } },
];

const categoryOrder: Category[] = ['education', 'work', 'community', 'projects'];
const projectOrder = ['token-roi', 'trade-review', 'tos', 'hejia', 'ai-training-suit'];
const photoMoments = [
  { src: '/images/innoai-shenzhen-event.jpg', en: 'InnoAI · Shenzhen', zh: 'InnoAI · 深圳', altEn: 'InnoAI community members after an event in Shenzhen', altZh: 'InnoAI 深圳活动后的社区成员合照' },
  { src: '/images/event-room.jpg', en: 'Builders in the room', zh: 'Builder 活动现场', altEn: 'A full room during a community builder event', altZh: '坐满参与者的社区活动现场' },
  { src: '/images/event-founder-sharing.jpg', en: 'Project sharing', zh: '项目分享', altEn: 'A founder sharing a project', altZh: '活动中的项目分享' },
];

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.title = language === 'en' ? 'Yunian Lin — Builder & Community Founder' : '林昱年 Yunian Lin — Builder 与社区创始人';
  }, [language]);
  useEffect(() => {
    if (!selectedItem) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelectedItem(null); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedItem]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Yunian Lin, home">YL<span>.</span></a>
        <div className="header-actions">
          <nav aria-label={language === 'en' ? 'Primary navigation' : '主导航'}>
            <a href="#about">{t.nav[0]}</a><a href="#education">{t.nav[1]}</a><a href="#work">{t.nav[2]}</a><a href="#community">{t.nav[3]}</a><a href="#projects">{t.nav[4]}</a><a href="#contact">{t.nav[5]}</a>
          </nav>
          <button className="language-toggle" type="button" onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')} aria-label={language === 'en' ? '切换为中文' : 'Switch to English'}>
            <span className={language === 'en' ? 'active' : ''}>EN</span><i /><span className={language === 'zh' ? 'active' : ''}>中</span>
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> {t.status}</div><h1>Yunian Lin</h1>
        <div className="hero-bottom"><p className="hero-role">{t.heroRole}</p><div className="hero-intro"><p>{t.heroLine}</p><a className="text-link" href="#archive">{t.explore} <span aria-hidden="true">↘</span></a></div></div>
      </section>

      <section className="about section" id="about">
        <div className="about-heading"><p className="section-label">{t.aboutLabel}</p><h2>{t.aboutTitle}</h2></div>
        <div className="about-grid">
          <figure className="portrait"><div className="portrait-frame"><img src="/images/thomas-portrait.jpg" alt={language === 'en' ? 'Portrait of Yunian Lin' : '林昱年个人照片'} width="1200" height="1600" /></div><figcaption>Yunian Lin · 林昱年 <span>Also Thomas</span></figcaption></figure>
          <div className="about-copy">{t.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
        <div className="current-strip"><span>{t.now}</span><strong>{t.nowValue}</strong><span>Shanghai / Hong Kong</span></div>
      </section>

      <section className="section archive" id="archive">
        <div className="section-heading"><div><p className="section-label">{t.archiveLabel}</p><h2>{t.archiveTitle}</h2></div><p>{t.archiveNote}</p></div>
        {categoryOrder.map((category, categoryIndex) => {
          const categoryCopy = t.categories[category];
          return <section className="category-block" id={category} key={category}>
            <header className="category-heading"><span>0{categoryIndex + 1}</span><h3>{categoryCopy[0]}</h3><p>{categoryCopy[1]}</p></header>
            <div className="archive-list">{items.filter((item) => item.category === category).sort((a, b) => category === 'projects' ? projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id) : 0).map((item) =>
              <article className="archive-row" key={item.id}>
                <time>{item.period[language]}</time>
                <div className="archive-identity"><h4>{item.title}</h4><p>{item.role[language]}</p>{item.stat && <strong>{item.stat[language]}</strong>}</div>
                <p className="archive-summary">{item.summary[language]}</p>
                {item.image ? <img src={item.image} alt={item.imageAlt?.[language] ?? ''} loading="lazy" /> : <div className="archive-monogram" aria-hidden="true">{item.title.slice(0, 2)}</div>}
                <button type="button" className="detail-button" onClick={() => setSelectedItem(item)} aria-label={`${t.detail}: ${item.title}`}>{t.detail} <span aria-hidden="true">↗</span></button>
              </article>)}</div>
          </section>;
        })}
      </section>

      <section className="section moments">
        <div className="section-heading"><div><p className="section-label">{t.photosLabel}</p><h2>{t.photosTitle}</h2></div><p>{t.photosNote}</p></div>
        <div className="moments-grid">{photoMoments.map((moment, index) => <figure className={index === 0 ? 'moment moment-main' : 'moment'} key={moment.src}><img src={moment.src} alt={language === 'en' ? moment.altEn : moment.altZh} loading="lazy" /><figcaption><span>0{index + 1}</span>{language === 'en' ? moment.en : moment.zh}</figcaption></figure>)}</div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p>{t.contactBody}</p>
        <div className="contact-links"><a href="mailto:thomaslin070217@gmail.com">Email ↗</a><a href="https://github.com/ThomasLin070217" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://hk.linkedin.com/in/yunianlin" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>小红书 · 2546938708</span></div>
      </section>
      <footer><p>Yunian Lin · 林昱年 · 2026</p><a href="#top">{t.back} ↑</a></footer>

      {selectedItem && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedItem(null); }}>
        <section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title">
          <button className="modal-close" type="button" onClick={() => setSelectedItem(null)} aria-label={t.close}>×</button>
          <div className="modal-meta"><span>{t.categories[selectedItem.category][0]}</span><time>{selectedItem.period[language]}</time></div>
          {selectedItem.image && <img className="modal-image" src={selectedItem.image} alt={selectedItem.imageAlt?.[language] ?? ''} />}
          <p className="modal-role">{selectedItem.role[language]}</p><h2 id="detail-title">{selectedItem.title}</h2><p className="modal-summary">{selectedItem.summary[language]}</p>
          <div className="modal-evidence"><p className="section-label">{t.evidence}</p><ul>{selectedItem.details.map((detail) => <li key={detail[language]}>{detail[language]}</li>)}</ul></div>
          {selectedItem.link && <a className="modal-link" href={selectedItem.link} target="_blank" rel="noreferrer">{selectedItem.linkLabel?.[language] ?? t.visit} ↗</a>}
        </section>
      </div>}
    </main>
  );
}
