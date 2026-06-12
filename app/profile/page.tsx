import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

const profileStyles = `
.profile-page {
  --blue: #187dff;
  --panel: rgba(3, 16, 38, 0.76);
  --line: rgba(24, 125, 255, 0.22);
  --text: #f8fbff;
  --muted: rgba(232, 244, 255, 0.72);
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding-bottom: 76px;
  background: #020712;
}

.profile-page::before {
  pointer-events: none;
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(circle at 78% 13%, rgba(24, 125, 255, 0.12), transparent 28%),
    radial-gradient(circle at 13% 30%, rgba(24, 125, 255, 0.06), transparent 25%),
    linear-gradient(135deg, #020712 0%, #031023 52%, #041b3a 78%, #020712 100%);
}

.profile-wrap {
  position: relative;
  z-index: 4;
  width: min(100% - 76px, 1220px);
  margin: 0 auto;
}

.profile-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.06fr) minmax(320px, 0.94fr);
  gap: 30px;
  align-items: stretch;
  padding-top: 42px;
}

.profile-hero-card,
.profile-photo-card,
.profile-panel,
.profile-cta {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: rgba(3, 16, 38, 0.70);
  box-shadow: none;
}

.profile-hero-card {
  padding: 42px 44px;
  min-height: 430px;
}

.profile-kicker {
  margin: 0 0 14px;
  color: var(--blue);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.profile-title {
  max-width: 760px;
  margin: 0;
  color: #ffffff;
  font-size: clamp(48px, 5vw, 70px);
  line-height: 0.96;
  letter-spacing: -0.06em;
  font-weight: 800;
}

.profile-title span {
  color: var(--blue);
}

.profile-lead {
  max-width: 650px;
  margin: 24px 0 0;
  color: rgba(248, 251, 255, 0.84);
  font-size: 16px;
  line-height: 1.76;
}

.profile-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
}

.profile-actions .primary-action,
.profile-actions .secondary-action,
.profile-cta .primary-action,
.profile-cta .secondary-action {
  min-width: 166px;
  min-height: 46px;
}

.profile-photo-card {
  display: flex;
  min-height: 430px;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px;
}

.profile-photo-frame {
  position: relative;
  min-height: 292px;
  overflow: hidden;
  border: 1px solid rgba(24, 125, 255, 0.26);
  border-radius: 20px;
  background: radial-gradient(circle at 50% 20%, rgba(24, 125, 255, 0.20), transparent 45%), rgba(2, 7, 18, 0.72);
}

.profile-photo-frame img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 22%;
}

.profile-photo-caption {
  padding: 18px 4px 4px;
}

.profile-photo-caption h2 {
  margin: 0;
  color: #ffffff;
  font-size: 24px;
  line-height: 1.1;
  letter-spacing: -0.04em;
  font-weight: 800;
}

.profile-photo-caption p {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.55;
}

.profile-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 16px;
}

.profile-badge-row span {
  border: 1px solid rgba(24, 125, 255, 0.22);
  border-radius: 999px;
  padding: 7px 10px;
  color: rgba(248, 251, 255, 0.82);
  background: rgba(24, 125, 255, 0.08);
  font-size: 11px;
  font-weight: 800;
}

.profile-section {
  margin-top: 26px;
}

.profile-section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 22px;
  margin-bottom: 18px;
}

.profile-section-head h2 {
  margin: 0;
  color: #ffffff;
  font-size: clamp(30px, 3vw, 42px);
  line-height: 1;
  letter-spacing: -0.055em;
  font-weight: 800;
}

.profile-section-head p {
  max-width: 520px;
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
  text-align: right;
}

.profile-panel {
  padding: 28px;
}

.profile-story-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 20px;
}

.profile-story-text {
  color: rgba(248, 251, 255, 0.84);
  font-size: 15px;
  line-height: 1.8;
}

.profile-story-text p {
  margin: 0;
}

.profile-story-text p + p {
  margin-top: 16px;
}

.profile-mini-grid {
  display: grid;
  gap: 12px;
}

.profile-mini-card {
  border: 1px solid rgba(24, 125, 255, 0.18);
  border-radius: 17px;
  padding: 16px;
  background: rgba(2, 7, 18, 0.38);
}

.profile-mini-card h3 {
  margin: 0;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: -0.03em;
  font-weight: 800;
}

.profile-mini-card p {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}

.profile-card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.profile-focus-card {
  min-height: 220px;
  border: 1px solid rgba(24, 125, 255, 0.20);
  border-radius: 22px;
  padding: 22px;
  background: rgba(3, 16, 38, 0.70);
}

.profile-focus-card .count {
  color: var(--blue);
  font-size: 13px;
  font-weight: 800;
}

.profile-focus-card h3 {
  margin: 48px 0 0;
  color: #ffffff;
  font-size: 20px;
  line-height: 1.18;
  letter-spacing: -0.045em;
  font-weight: 800;
}

.profile-focus-card p {
  margin: 14px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.65;
}

.profile-split {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 22px;
}

.profile-list {
  display: grid;
  gap: 14px;
  margin-top: 18px;
}

.profile-list-item {
  border: 1px solid rgba(24, 125, 255, 0.18);
  border-radius: 18px;
  padding: 17px;
  background: rgba(2, 7, 18, 0.36);
}

.profile-list-item h3 {
  margin: 0;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: -0.03em;
  font-weight: 800;
}

.profile-list-item p {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}

.profile-skill-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.profile-skill-cloud span {
  border: 1px solid rgba(24, 125, 255, 0.20);
  border-radius: 999px;
  padding: 9px 12px;
  color: rgba(248, 251, 255, 0.82);
  background: rgba(24, 125, 255, 0.08);
  font-size: 12px;
  font-weight: 800;
}

.profile-cta {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 28px;
  align-items: center;
  margin-top: 28px;
  padding: 26px 34px;
}

.profile-cta h2 {
  margin: 0;
  color: #ffffff;
  font-size: clamp(26px, 2.6vw, 36px);
  line-height: 1.06;
  letter-spacing: -0.055em;
  font-weight: 800;
}

.profile-cta p {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.65;
}

.profile-cta-actions {
  display: flex;
  gap: 14px;
}

@media (max-width: 980px) {
  .profile-wrap {
    width: min(100% - 34px, 720px);
  }

  .profile-hero,
  .profile-story-grid,
  .profile-card-grid,
  .profile-split,
  .profile-cta {
    grid-template-columns: 1fr;
  }

  .profile-section-head {
    display: block;
  }

  .profile-section-head p {
    margin-top: 10px;
    text-align: left;
  }

  .profile-hero-card {
    min-height: auto;
    padding: 30px 22px;
  }

  .profile-title {
    font-size: 42px;
  }

  .profile-lead {
    font-size: 14px;
  }

  .profile-photo-card {
    min-height: auto;
  }

  .profile-photo-frame {
    min-height: 315px;
  }

  .profile-panel {
    padding: 20px;
  }

  .profile-focus-card {
    min-height: 190px;
  }

  .profile-focus-card h3 {
    margin-top: 34px;
  }

  .profile-cta {
    gap: 18px;
    padding: 24px 20px;
  }

  .profile-cta-actions,
  .profile-actions {
    width: 100%;
    flex-direction: column;
  }

  .profile-actions .primary-action,
  .profile-actions .secondary-action,
  .profile-cta .primary-action,
  .profile-cta .secondary-action {
    width: 100%;
  }
}
`;

const focusCards = [
  {
    title: "Brand Communication",
    body: "Campaign planning, client coordination, copy direction, visual identity support, and multi-channel execution.",
  },
  {
    title: "Campus Leadership",
    body: "Building student-led platforms, managing volunteers, coordinating ambassadors, and executing high-pressure events.",
  },
  {
    title: "AI-Assisted Execution",
    body: "Using AI tools to plan faster, create content, organize workflows, research better, and improve productivity.",
  },
];

const education = [
  {
    title: "BBA in Finance & Banking",
    body: "Jahangirnagar University, expected graduation 2027, CGPA 3.32.",
  },
  {
    title: "Business Studies Background",
    body: "HSC GPA 5.00 and SSC GPA 4.78 with general scholarship achievements.",
  },
];

const workingStyle = [
  {
    title: "Execution-first mindset",
    body: "I focus on planning clearly, moving fast, coordinating people, and finishing work with discipline.",
  },
  {
    title: "Works well under pressure",
    body: "I have handled sponsor pressure, event deadlines, client feedback, and multi-team coordination together.",
  },
  {
    title: "Learning-driven growth",
    body: "I am building long-term capability across marketing, communication, AI tools, and business operations.",
  },
];

const skillCloud = [
  "Brand Communication",
  "Campaign Strategy",
  "Event Planning",
  "Sponsorship Outreach",
  "Content Creation",
  "Social Media Marketing",
  "Volunteer Management",
  "Campus Engagement",
  "AI Tools",
  "Presentation Development",
  "Canva Design",
  "Written Communication",
];

export default function ProfilePage() {
  return (
    <main className="profile-page">
      <style>{profileStyles}</style>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/" className="logo-link" aria-label="Arpan Samadder Home">
            <img src="/images/logo-mark.png" alt="Arpan Samadder logo mark" className="logo-mark" />
          </Link>

          <div className="nav-pill" aria-label="Primary navigation links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`nav-link ${item.href === "/profile" ? "active" : ""}`}>
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/hire-me" className="hire-button">
            Hire Me <span aria-hidden="true">→</span>
          </Link>

          <input type="checkbox" id="mobile-menu-toggle" className="mobile-menu-toggle" aria-label="Toggle mobile navigation" />
          <label htmlFor="mobile-menu-toggle" className="mobile-menu-button" aria-hidden="true">☰</label>
          <div className="mobile-menu-panel" aria-label="Mobile navigation links">
            {navItems.map((item) => (
              <Link key={`mobile-${item.href}`} href={item.href} className={`mobile-menu-link ${item.href === "/profile" ? "active" : ""}`}>
                {item.label}
              </Link>
            ))}
            <Link href="/hire-me" className="mobile-menu-hire">
              Hire Me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      </header>

      <div className="profile-wrap">
        <section className="profile-hero" aria-labelledby="profile-title">
          <div className="profile-hero-card">
            <p className="profile-kicker">Profile</p>
            <h1 id="profile-title" className="profile-title">
              Business student with a <span>brand execution</span> mindset.
            </h1>
            <p className="profile-lead">
              I am Arpan Samadder, a BBA student at Jahangirnagar University focused on brand communication, campus leadership, marketing execution, and AI-assisted productivity. I enjoy turning unclear ideas into organized campaigns, events, systems, and practical student-led initiatives.
            </p>
            <div className="profile-actions">
              <Link href="/files/arpan-samadder-cv.pdf" className="primary-action">
                Download CV <span aria-hidden="true">↓</span>
              </Link>
              <Link href="/experience" className="secondary-action">
                View Experience <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <aside className="profile-photo-card" aria-label="Profile summary card">
            <div className="profile-photo-frame">
              <img src="/images/arpan-profile-photo.jpeg" alt="Arpan Samadder" />
            </div>
            <div className="profile-photo-caption">
              <h2>Arpan Samadder</h2>
              <p>BBA Student, Brand Communicator, Campus Leader, and AI-assisted execution enthusiast.</p>
              <div className="profile-badge-row" aria-label="Profile focus tags">
                <span>Marketing</span>
                <span>Branding</span>
                <span>Leadership</span>
                <span>AI Tools</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="profile-section" aria-labelledby="story-title">
          <div className="profile-section-head">
            <h2 id="story-title">About Me</h2>
            <p>A concise view of who I am, how I work, and where I am heading professionally.</p>
          </div>
          <div className="profile-panel profile-story-grid">
            <div className="profile-story-text">
              <p>
                My academic background is Finance and Banking, but my practical career direction is strongly connected to marketing, branding, communication, and people management. I have worked across client projects, student organizations, business competitions, content campaigns, sponsorship outreach, and event operations.
              </p>
              <p>
                I am most comfortable where planning, communication, and execution meet. I can coordinate teams, prepare campaign structures, work with creative people, manage event pressure, and use AI tools to speed up research, writing, design thinking, and workflow organization.
              </p>
            </div>
            <div className="profile-mini-grid">
              <article className="profile-mini-card">
                <h3>Current direction</h3>
                <p>Marketing, brand management, corporate communication, and AI-assisted business operations.</p>
              </article>
              <article className="profile-mini-card">
                <h3>Career priority</h3>
                <p>Build a strong professional profile before graduation and prepare for future MTO and MBA goals.</p>
              </article>
              <article className="profile-mini-card">
                <h3>Core advantage</h3>
                <p>Execution across multiple responsibilities without losing structure, quality, or communication discipline.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="profile-section" aria-labelledby="focus-title">
          <div className="profile-section-head">
            <h2 id="focus-title">Career Focus</h2>
            <p>The professional areas I am actively building through study, work, competitions, and projects.</p>
          </div>
          <div className="profile-card-grid">
            {focusCards.map((item, index) => (
              <article className="profile-focus-card" key={item.title}>
                <span className="count">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-section profile-split" aria-label="Education and working style">
          <div className="profile-panel">
            <div className="profile-section-head">
              <h2>Education</h2>
            </div>
            <div className="profile-list">
              {education.map((item) => (
                <article className="profile-list-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="profile-panel">
            <div className="profile-section-head">
              <h2>Working Style</h2>
            </div>
            <div className="profile-list">
              {workingStyle.map((item) => (
                <article className="profile-list-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="profile-section" aria-labelledby="skills-title">
          <div className="profile-section-head">
            <h2 id="skills-title">Skills Snapshot</h2>
            <p>A practical skill mix across communication, event execution, creative work, and AI-supported workflows.</p>
          </div>
          <div className="profile-panel">
            <div className="profile-skill-cloud">
              {skillCloud.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="profile-cta" aria-label="Profile page call to action">
          <div>
            <h2>Want to see the work behind the profile?</h2>
            <p>Explore my experience, projects, and execution history in more detail.</p>
          </div>
          <div className="profile-cta-actions">
            <Link href="/experience" className="primary-action">Experience <span aria-hidden="true">→</span></Link>
            <Link href="/projects" className="secondary-action">Projects <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </div>
    </main>
  );
}
