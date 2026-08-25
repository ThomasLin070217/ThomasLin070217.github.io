const featuredWork = [
  {
    number: '01',
    title: 'InnoAI',
    meta: 'Founder · AI Builder Community',
    description:
      'Building a learning and practice community for people who want to turn AI ideas into real projects.',
    detail: 'Community building · Product practice · Industry connection',
    tone: 'green',
  },
  {
    number: '02',
    title: 'ColorBlock',
    meta: 'Co-founder · Community Infrastructure',
    description:
      'Exploring how professional communities can turn scattered relationships, intent and collaboration into useful infrastructure.',
    detail: 'Product · Growth · Business development',
    tone: 'ink',
  },
  {
    number: '03',
    title: 'AIx Origin Summit',
    meta: 'Hong Kong × Shenzhen · Builder Event',
    description:
      'A cross-city hackathon built to move ideas toward prototypes that can be seen, tested and continued after Demo Day.',
    detail: 'AI · Hardware · Physical AI · Enterprise use cases',
    tone: 'sand',
  },
];

const experiments = [
  {
    title: 'DINQ',
    label: 'Product research',
    text: 'A dynamic professional identity layer built around evidence of work—not just static credentials.',
  },
  {
    title: 'FinanceBIO',
    label: 'HKU project',
    text: 'A personal budget assistant for students, developed through fast prototyping, scope reduction and an MVP rebuild.',
  },
  {
    title: 'Hejia CoolDown',
    label: 'Product experiment',
    text: 'An AI communication assistant exploring preparation, mediation and review for difficult family conversations.',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Thomas Lin, home">
          TL<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
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
        <strong>Designing systems that help people and AI execute together.</strong>
        <span>BA &amp; BEng in Artificial Intelligence and Data Science · The University of Hong Kong</span>
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
              <div className="project-mark" aria-hidden="true">{project.title.slice(0, 2)}</div>
              <p className="project-meta">{project.meta}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-detail">{project.detail}</p>
            </article>
          ))}
        </div>

        <div className="experiments">
          <p className="section-label">Other experiments</p>
          <div>
            {experiments.map((project) => (
              <article className="experiment" key={project.title}>
                <div>
                  <p>{project.label}</p>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading">
          <div>
            <p className="section-label">02 / Experience</p>
            <h2>Learning by doing</h2>
          </div>
          <p>Across industry, startups and communities.</p>
        </div>
        <div className="experience-list">
          <article>
            <p className="period">2026</p>
            <div><h3>SenseTime</h3><p>AI engineering internship · Shanghai</p></div>
            <p>Exploring multimodal AI and computer vision workflows for intelligent vehicle scenarios.</p>
          </article>
          <article>
            <p className="period">Now</p>
            <div><h3>ColorBlock Network</h3><p>Co-founder</p></div>
            <p>Working across product, early technology, business development and company building.</p>
          </article>
          <article>
            <p className="period">2025—Now</p>
            <div><h3>Aurora Club</h3><p>Founder &amp; Chair</p></div>
            <p>Building a cross-region network for young founders, developers, investors and builders.</p>
          </article>
        </div>
      </section>

      <section className="philosophy" id="about">
        <p className="section-label">03 / How I work</p>
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

      <section className="background">
        <p className="section-label">Background</p>
        <div>
          <p>
            I&apos;m studying Artificial Intelligence and Data Science at HKU, while building across university, startup and industry environments.
          </p>
          <p>
            I&apos;m early in the journey. This site is a living record of what I&apos;m building, learning and testing—not a list of inflated titles.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">04 / Contact</p>
        <h2>Let&apos;s build something useful.</h2>
        <p>Interested in AI products, community infrastructure or early-stage experiments?</p>
        <span>Public contact links will be added after confirmation.</span>
      </section>

      <footer>
        <p>Thomas Lin · 林昱年</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
