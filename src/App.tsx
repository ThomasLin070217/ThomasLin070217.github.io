import { useState } from 'react';

const featuredWork = [
  {
    number: '01',
    title: 'InnoAI',
    meta: 'Founder · AI Builder Community',
    description:
      'Founded in April 2026, InnoAI is a learning and practice community for people turning AI ideas into real projects.',
    detail: 'Founded 1 Apr 2026 · Strategy · Organization · Operations',
    tone: 'green',
    image: '/images/innoai-logo.jpg',
    alt: 'InnoAI x HKU community mark',
    wideImage: false,
  },
  {
    number: '02',
    title: 'AIx Origin Summit',
    meta: 'Organizer · AI Builder Event',
    description:
      'A Hong Kong × Shenzhen builder summit moving ideas toward prototypes that can be seen, tested and continued after Demo Day.',
    detail: '31 Aug—6 Sep 2026 · Online + HKU campus',
    tone: 'ink',
    image: '/images/aix-origin-cover.png',
    alt: 'AIx Origin Summit visual identity',
    wideImage: true,
  },
  {
    number: '03',
    title: 'Aurora Club',
    meta: 'Founder & Chair · Founder Network',
    description:
      'Building a 200+ member network connecting young founders, developers, investors, students and builders across cities.',
    detail: 'Shenzhen · Hong Kong · Shanghai · Hangzhou · Beijing · Beyond',
    tone: 'sand',
    image: '/images/aurora-club-official.jpg',
    alt: 'Aurora Club official emblem',
    wideImage: false,
  },
];

const projects = [
  {
    title: 'ColorBlock Network',
    label: 'Past venture · Co-founder',
    text: 'Previously explored professional identity and community infrastructure through ColorTap and ColorCommunityDB.',
    image: null,
  },
  {
    title: 'AI Training Suit',
    label: 'Wearable AI · In planning',
    text: 'An early-stage idea for movement guidance combining body sensors, AI motion recognition and real-time voice or haptic correction.',
    image: '/images/ai-training-suit.jpg',
  },
  {
    title: 'TOS',
    label: 'Personal system · Local-first',
    text: 'A personal operating system for weekly strategy, Today Big 3, time tracking, opportunity cooling and review.',
    image: '/images/tos-focus.jpg',
  },
  {
    title: 'Trade Review',
    label: 'Fintech tool · Prototype',
    text: 'A read-only trading journal that turns activity into behavioral patterns, review prompts and more consistent rules.',
    image: '/images/trade-review-pretrade.jpg',
  },
  {
    title: 'DINQ',
    label: 'Past internship · Product research',
    text: 'Contributed product-experience improvements and research for a dynamic professional identity built around verifiable evidence of work.',
    image: null,
  },
  {
    title: 'Hejia CoolDown',
    label: 'Project mentor · Young builders',
    text: 'Mentored a team of young builders, averaging 12 years old, to create an AI assistant for difficult family conversations.',
    image: '/images/hejia-cooldown-ui.png',
  },
];

const journey = [
  {
    place: 'Weihai No. 1 School',
    location: 'Weihai · China',
    image: '/images/journey-weihai.jpg',
    alt: 'An evening street scene from Thomas’s years in Weihai',
  },
  {
    place: 'Wodonga Senior Secondary College',
    location: 'Victoria · Australia · 2023—2024',
    image: '/images/journey-wodonga.jpg',
    alt: 'Thomas with friends during his time in Wodonga, Australia',
  },
  {
    place: 'Zunli',
    location: 'Shenzhen · China',
    image: '/images/journey-zunli.jpg',
    alt: 'Thomas with classmates during his time at Zunli',
  },
  {
    place: 'The University of Hong Kong',
    location: 'Hong Kong · Now',
    image: '/images/journey-hku.jpg',
    alt: 'The University of Hong Kong sign photographed by Thomas',
  },
];

const communityMoments = [
  {
    image: '/images/innoai-shenzhen-event.jpg',
    alt: 'InnoAI community members after an event in Shenzhen',
    caption: 'InnoAI · Shenzhen',
    className: 'moment-main',
  },
  {
    image: '/images/event-room.jpg',
    alt: 'A full room during a community builder event',
    caption: 'Bringing builders into the same room',
    className: '',
  },
  {
    image: '/images/event-founder-sharing.jpg',
    alt: 'A young founder sharing the SurferGarage project',
    caption: 'Project sharing',
    className: '',
  },
  {
    image: '/images/event-presentation.jpg',
    alt: 'A presentation at an Aurora Club gathering',
    caption: 'Learning in public',
    className: '',
  },
  {
    image: '/images/event-group.jpg',
    alt: 'A group photo after a community gathering',
    caption: 'The people behind the network',
    className: '',
  },
];

const indexItems = [
  {
    date: '2026.08',
    title: 'SenseTime',
    note: 'Local model deployment and AI data workflow automation.',
    category: 'AI',
    image: '/images/sensetime-shanghai.jpg',
  },
  {
    date: '2026.08—09',
    title: 'AIx Origin Summit',
    note: 'Preparing a Hong Kong × Shenzhen AI builder programme.',
    category: 'Community',
    image: '/images/aix-origin-cover.png',
  },
  {
    date: '2026.07',
    title: 'Hejia CoolDown',
    note: 'Mentoring a young team building a family communication prototype.',
    category: 'Product',
    image: '/images/hejia-cooldown-ui.png',
  },
  {
    date: '2026.07',
    title: 'AI Training Suit',
    note: 'Developing an early wearable AI training concept.',
    category: 'Experiment',
    image: '/images/ai-training-suit.jpg',
  },
  {
    date: '2026.04',
    title: 'InnoAI',
    note: 'Founded an AI Builder learning and practice community.',
    category: 'Community',
    image: '/images/innoai-shenzhen-event.jpg',
  },
  {
    date: '2026.04',
    title: 'TOS',
    note: 'Built a local-first personal operating system.',
    category: 'Product',
    image: '/images/tos-focus.jpg',
  },
  {
    date: '2026.04',
    title: 'Trade Review',
    note: 'Built a read-only journal for trading decisions and behavior.',
    category: 'Product',
    image: '/images/trade-review-pretrade.jpg',
  },
  {
    date: '2026.03',
    title: 'DINQ',
    note: 'Product research and experience analysis during an internship.',
    category: 'Research',
    image: null,
  },
  {
    date: '2025.11',
    title: 'ColorBlock Network',
    note: 'Explored professional identity and community infrastructure.',
    category: 'Product',
    image: null,
  },
  {
    date: '2025.04',
    title: 'Aurora Club',
    note: 'Started a cross-region network for young founders and builders.',
    category: 'Community',
    image: '/images/aurora-club-official.jpg',
  },
];

const indexCategories = ['All', 'AI', 'Product', 'Community', 'Research', 'Experiment'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const visibleIndexItems = activeCategory === 'All'
    ? indexItems
    : indexItems.filter((item) => item.category === activeCategory);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Thomas Lin, home">
          TL<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#index">Index</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> Hong Kong · Building now</div>
        <h1>Thomas Lin</h1>
        <div className="hero-bottom">
          <p className="hero-role">AI-native product builder, founder and student at HKU.</p>
          <div className="hero-intro">
            <p>
              I build products, communities and experiments at the intersection of
              <strong> AI × Product × Entrepreneurship.</strong>
            </p>
            <a className="text-link" href="#work">Explore selected work <span aria-hidden="true">↘</span></a>
          </div>
        </div>
      </section>

      <section className="focus" aria-label="Current focus">
        <p className="section-label">Currently</p>
        <strong>SenseTime · InnoAI · Aurora Club</strong>
        <span>Embedded software development intern · Founder · Student at HKU</span>
      </section>

      <section className="section archive-index" id="index">
        <div className="section-heading">
          <div>
            <p className="section-label">00 / Index</p>
            <h2>A record of building</h2>
          </div>
          <p>Projects, communities, research and experiments—in time.</p>
        </div>
        <div className="index-layout">
          <div className="index-controls" aria-label="Filter index">
            {indexCategories.map((category) => (
              <button
                className={activeCategory === category ? 'active' : ''}
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="index-list" aria-live="polite">
            {visibleIndexItems.map((item) => (
              <article className="index-row" key={`${item.date}-${item.title}`} tabIndex={0}>
                <time>{item.date}</time>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
                <span>{item.category}</span>
                {item.image && <img src={item.image} alt="" aria-hidden="true" loading="lazy" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="visual-journal" aria-label="Places shaping the work">
        <figure className="visual-card visual-card-wide">
          <img
            src="/images/life-hku-community.jpg"
            alt="Thomas and friends at The University of Hong Kong"
            width="1800"
            height="1350"
          />
          <figcaption><span>01</span> HKU · Learning with people</figcaption>
        </figure>
        <figure className="visual-card">
          <img
            src="/images/life-wodonga-class.jpg"
            alt="Thomas with classmates at Wodonga Senior Secondary College"
            width="1350"
            height="1800"
            loading="lazy"
          />
          <figcaption><span>02</span> Wodonga · Australia</figcaption>
        </figure>
        <figure className="visual-card">
          <img
            src="/images/life-community-gathering.jpg"
            alt="Thomas with members after a community gathering"
            width="1800"
            height="1350"
            loading="lazy"
          />
          <figcaption><span>03</span> Community · Built together</figcaption>
        </figure>
      </section>

      <section className="section work" id="work">
        <div className="section-heading">
          <div>
            <p className="section-label">01 / Selected work</p>
            <h2>Things I&apos;m building</h2>
          </div>
          <p>Ventures, communities and builder programmes.</p>
        </div>

        <div className="featured-grid">
          {featuredWork.map((project) => (
            <article className={`featured-card ${project.tone}`} key={project.title}>
              <div className="card-top">
                <span>{project.number}</span>
                <span>Selected work</span>
              </div>
              <div className={`project-mark ${project.image ? 'project-mark-image' : ''} ${project.wideImage ? 'project-mark-wide' : ''}`}>
                {project.image ? (
                  <img src={project.image} alt={project.alt} width="358" height="358" loading="lazy" />
                ) : (
                  <span aria-hidden="true">{project.title.slice(0, 2)}</span>
                )}
              </div>
              <p className="project-meta">{project.meta}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-detail">{project.detail}</p>
            </article>
          ))}
        </div>

        <div className="experiments">
          <p className="section-label">More projects</p>
          <div>
            {projects.map((project) => (
              <article className={`experiment ${project.image ? 'has-image' : ''}`} key={project.title}>
                <div>
                  <p>{project.label}</p>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.text}</p>
                {project.image && (
                  <img
                    className="experiment-image"
                    src={project.image}
                    alt={
                      project.title === 'AI Training Suit'
                        ? 'AI Training Suit wearable movement guidance concept'
                        : project.title === 'TOS'
                          ? 'Thomas Operating System focus view'
                          : project.title === 'Trade Review'
                            ? 'Trade Review pre-trade checklist interface'
                            : 'Hejia CoolDown communication plan prototype interface'
                    }
                    loading="lazy"
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section moments" aria-label="Community moments">
        <div className="section-heading">
          <div>
            <p className="section-label">02 / In motion</p>
            <h2>Communities are built in rooms</h2>
          </div>
          <p>Gatherings, conversations and people choosing to build together.</p>
        </div>
        <div className="moments-grid">
          {communityMoments.map((moment) => (
            <figure className={`moment ${moment.className}`} key={moment.image}>
              <img src={moment.image} alt={moment.alt} loading="lazy" />
              <figcaption>{moment.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading">
          <div>
            <p className="section-label">03 / Experience</p>
            <h2>Learning by doing</h2>
          </div>
          <p>Across industry, startups and communities.</p>
        </div>
        <div className="experience-list">
          <article className="experience-with-image">
            <p className="period">Aug 2026—Now</p>
            <div><h3>SenseTime</h3><p>Embedded software development intern · Shanghai</p></div>
            <p>Working on local model deployment and automating AI-generated data workflows for intelligent vehicle scenarios.</p>
            <figure className="experience-image">
              <img src="/images/sensetime-shanghai.jpg" alt="SenseTime Shanghai office atrium" loading="lazy" />
              <figcaption>SenseTime · Shanghai</figcaption>
            </figure>
          </article>
          <article>
            <p className="period">Past</p>
            <div><h3>ColorBlock Network</h3><p>Co-founder</p></div>
            <p>Previously worked across product, early technology, business development and company building.</p>
          </article>
          <article>
            <p className="period">Apr 2025—Now</p>
            <div className="organization-with-logo">
              <img src="/images/aurora-club-official.jpg" alt="Aurora Club official emblem" width="1000" height="1000" loading="lazy" />
              <div><h3>Aurora Club</h3><p>Founder &amp; Chair</p></div>
            </div>
            <p>Building a 200+ member network across Shenzhen, Hong Kong, Shanghai, Hangzhou, Beijing and beyond.</p>
          </article>
        </div>
      </section>

      <section className="philosophy" id="about">
        <p className="section-label">04 / How I work</p>
        <p className="philosophy-lead">
          Human judgment defines the <em>goal, taste and priorities.</em> AI expands what a small team can execute.
        </p>
        <div className="principles">
          <div><span>01</span><p>Build before over-planning.</p></div>
          <div><span>02</span><p>Use prototypes to make ideas testable.</p></div>
          <div><span>03</span><p>Connect technology with product and distribution.</p></div>
          <div><span>04</span><p>Design systems for people and agents to execute.</p></div>
        </div>
      </section>

      <section className="section journey" aria-label="Education journey">
        <div className="section-heading journey-heading">
          <div>
            <p className="section-label">05 / Path</p>
            <h2>Weihai → Wodonga → Zunli → HKU</h2>
          </div>
          <p>A path shaped across China, Australia and Hong Kong.</p>
        </div>
        <div className="journey-grid">
          {journey.map((chapter, index) => (
            <figure className="journey-card" key={chapter.place}>
              <img src={chapter.image} alt={chapter.alt} loading="lazy" />
              <figcaption>
                <span>0{index + 1}</span>
                <strong>{chapter.place}</strong>
                <small>{chapter.location}</small>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="journey-note">
          <p>
            Before HKU, I studied across Weihai, Wodonga and Zunli—moving through different classrooms, cultures and communities.
          </p>
          <p>
            I&apos;m early in the journey. This site is a living record of what I&apos;m building, learning and testing—not a list of inflated titles.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">06 / Contact</p>
        <h2>Let&apos;s build something useful.</h2>
        <p>Interested in AI products, community infrastructure or early-stage experiments?</p>
        <div className="contact-links">
          <a href="mailto:thomaslin070217@gmail.com">Email ↗</a>
          <a href="https://github.com/ThomasLin070217" target="_blank" rel="noreferrer">GitHub ↗</a>
          <span>Xiaohongshu · 2546938708</span>
        </div>
      </section>

      <footer>
        <p>Thomas Lin · 林昱年</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
