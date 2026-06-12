import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

const highlights = [
  {
    icon: "megaphone",
    title: "Brand Communication",
    detail: "Campaign planning, client coordination, content direction, and creative execution.",
  },
  {
    icon: "people",
    title: "Campus Activation",
    detail: "Student outreach, ambassador coordination, event promotion, and community engagement.",
  },
  {
    icon: "handshake",
    title: "Sponsorship & Outreach",
    detail: "Proposal preparation, company research, partnership communication, and follow-up systems.",
  },
  {
    icon: "spark",
    title: "AI-Assisted Execution",
    detail: "Using AI tools to speed up content planning, research, scripts, and workflow organization.",
  },
];

const experiences = [
  {
    badge: "EM",
    role: "Brand & Communication Manager",
    organization: "Executive Media",
    detail: "Campaign planning, client communication, creative coordination, and brand project execution.",
    date: "February 2025 - Present",
  },
  {
    badge: "B",
    role: "Founder",
    organization: "Biztigation",
    detail: "Built and led a national business case competition platform under JU Finance and Banking.",
    date: "May 2024 - Present",
  },
  {
    badge: "JUCC",
    role: "Corporate Affairs Wing Secretary",
    organization: "JUCC",
    detail: "Worked on sponsorship outreach, event operations, promotional campaigns, and volunteer coordination.",
    date: "July 2025 - January 2026",
  },
  {
    badge: "MoFA",
    role: "Volunteer",
    organization: "MoFA",
    detail: "Supported delegate coordination and control-room communication during election operations.",
    date: "December 2023 - January 2024",
  },
];

const projects = [
  {
    title: "Biztigation 2.0",
    subtitle: "CRM-Style Outreach System",
    detail: "A CRM-style platform to streamline outreach, track partnerships, and manage collaboration efficiently.",
    visual: "dashboard",
  },
  {
    title: "Prottoy AI",
    subtitle: "AI Business Assistant",
    detail: "An AI-powered assistant designed to support students with smart tools, insights, and productivity.",
    visual: "network",
  },
  {
    title: "Biztigation",
    subtitle: "National Business Case Competition",
    detail: "A student-led initiative promoting business awareness, networking, and practical learning.",
    visual: "growth",
  },
  {
    title: "Sense of Return 2.0",
    subtitle: "Finance Fest Magazine",
    detail: "A campus initiative fostering community connection and meaningful engagement.",
    visual: "stage",
  },
];

const numbers = [
  { value: "2+", label: "Prominent Leadership Roles" },
  { value: "30+", label: "Campaigns & Events Handled" },
  { value: "5+", label: "Major Projects Delivered" },
  { value: "100+", label: "People Coordinated" },
];

const skills = [
  "Brand Communication",
  "Campus Activation",
  "Event Management",
  "Content Strategy",
  "Sponsorship & Outreach",
  "Stakeholder Management",
  "AI-Assisted Execution",
  "Problem Solving",
  "Leadership",
  "Public Speaking",
];

function IconMark({ type }: { type: string }) {
  const common = "h-7 w-7";

  if (type === "megaphone") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="M4 13.5V10l11-4v12L4 13.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 14v3.3c0 .8.6 1.4 1.4 1.4h1.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 9.2c1 .7 1.5 1.6 1.5 2.8S19 14.1 18 14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "people") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="M9 11a3.2 3.2 0 1 0 0-6.4A3.2 3.2 0 0 0 9 11Zm6.8.6a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3.8 19.5c.7-3.4 2.7-5.2 5.2-5.2s4.5 1.8 5.2 5.2M13.8 15c2.8.2 4.7 1.7 5.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "handshake") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="m7.3 12.2 3.2-3.1c1-.9 2.2-.9 3.2 0l3 2.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="m3.5 11.3 3.3-3.2 3.1 3.1-3.3 3.2-3.1-3.1Zm13.7-3.2 3.3 3.2-3.1 3.1-3.3-3.2 3.1-3.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="m8.7 14.4 1.9 1.9c.8.8 2.1.8 2.9 0l1.9-1.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <path d="M12 3.6 13.7 9l5.6 1.7-5.6 1.7L12 18l-1.7-5.6-5.6-1.7L10.3 9 12 3.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M18.5 16.5 19.2 19l2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/" className="logo-link" aria-label="Arpan Samadder Home">
            <img src="/images/logo-mark.png" alt="Arpan Samadder logo mark" className="logo-mark" />
          </Link>

          <div className="nav-pill" aria-label="Primary navigation links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/hire-me" className="hire-button">
            Hire Me <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">
              <span>Arpan</span>
              <span>Samadder</span>
            </h1>
            <p className="hero-role">Business Student <span>|</span> Brand Communicator <span>|</span> Campus Leader</p>
            <p className="hero-description">
              I turn ideas into campaigns, events, systems, and student-led platforms by combining communication, leadership, and execution discipline.
            </p>

            <div className="hero-actions">
              <Link href="/projects" className="primary-action">
                View My Work <span aria-hidden="true">→</span>
              </Link>
              <Link href="/files/arpan-samadder-cv.pdf" className="secondary-action">
                Download CV <span aria-hidden="true">↓</span>
              </Link>
            </div>

            <div className="quick-links" aria-label="Quick contact links">
              <a href="mailto:arpansamadder110@gmail.com"><span aria-hidden="true">✉</span> arpansamadder110@gmail.com</a>
              <a href="https://linkedin.com/in/arpansamadder/"><span aria-hidden="true">in</span> linkedin.com/in/arpansamadder</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Arpan Samadder speaking with microphone">
            <div className="hero-glow" />
            <div className="hero-ring hero-ring-main" />
            <div className="hero-ring hero-ring-secondary" />
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-trail hero-trail-back-one" />
            <div className="hero-trail hero-trail-back-two" />
            <img src="/images/arpan-hero-cutout.png" alt="Arpan Samadder speaking with a microphone" className="hero-cutout" />
            <div className="hero-trail hero-trail-front-one" />
            <div className="hero-trail hero-trail-front-two" />
          </div>
        </div>
      </section>

      <section className="content-panel highlights-panel" aria-labelledby="highlights-title">
        <div className="section-head row-head">
          <h2 id="highlights-title">Highlights</h2>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="feature-card" key={item.title}>
              <div className="icon-circle"><IconMark type={item.icon} /></div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-panel" aria-labelledby="experience-title">
        <div className="section-head row-head">
          <h2 id="experience-title">Experience</h2>
          <Link href="/experience">View All Experience <span aria-hidden="true">→</span></Link>
        </div>
        <div className="experience-grid">
          {experiences.map((item) => (
            <article className="experience-card" key={`${item.role}-${item.organization}`}>
              <div className="experience-top">
                <div className="experience-badge">{item.badge}</div>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.organization}</p>
                </div>
              </div>
              <p className="experience-detail">{item.detail}</p>
              <p className="experience-date"><span aria-hidden="true">▣</span> {item.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-panel" aria-labelledby="projects-title">
        <div className="section-head row-head">
          <h2 id="projects-title">Projects</h2>
          <Link href="/projects">View All Projects <span aria-hidden="true">→</span></Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-visual ${project.visual}`}>
                <span />
                <span />
                <span />
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p>{project.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="content-panel numbers-panel" aria-labelledby="numbers-title">
          <div className="section-head">
            <h2 id="numbers-title">Key Numbers</h2>
          </div>
          <div className="numbers-grid">
            {numbers.map((item) => (
              <article className="number-card" key={item.label}>
                <div className="number-icon" />
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="content-panel skills-panel" aria-labelledby="skills-title">
          <div className="section-head row-head">
            <h2 id="skills-title">Core Skills</h2>
            <Link href="/profile">View All Skills <span aria-hidden="true">→</span></Link>
          </div>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-glow" />
        <div className="cta-copy">
          <h2>Need someone who can plan, communicate, organize, and execute?</h2>
        </div>
        <div className="cta-actions">
          <Link href="/hire-me" className="primary-action">Hire Me <span aria-hidden="true">→</span></Link>
          <Link href="/hire-me" className="secondary-action">Contact Me <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}
