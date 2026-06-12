import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

const highlights = [
  {
    icon: "01",
    title: "Brand Communication",
    detail: "Campaign planning, client coordination, content direction, and creative execution.",
  },
  {
    icon: "02",
    title: "Campus Activation",
    detail: "Student outreach, ambassador coordination, event promotion, and community engagement.",
  },
  {
    icon: "03",
    title: "Sponsorship & Outreach",
    detail: "Proposal preparation, company research, partnership communication, and follow-up systems.",
  },
  {
    icon: "04",
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
    title: "Biztigation",
    subtitle: "National Business Case Competition",
    detail: "A student-led initiative promoting business awareness, networking, and practical learning.",
  },
  {
    title: "Biztigation 2.0",
    subtitle: "CRM-Style Outreach System",
    detail: "A CRM-style platform to streamline outreach, track partnerships, and manage collaboration efficiently.",
  },
  {
    title: "Prottoy AI",
    subtitle: "AI Business Assistant",
    detail: "An AI-powered assistant designed to support students with smart tools, insights, and productivity.",
  },
  {
    title: "Sense of Return 2.0",
    subtitle: "Finance Fest Magazine",
    detail: "A campus initiative fostering community connection and meaningful engagement.",
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
              <Link key={item.href} href={item.href} className={`nav-link ${item.href === "/" ? "active" : ""}`}>
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
        <div className="hero-bg-dots hero-dots-left" />
        <div className="hero-bg-dots hero-dots-right" />
        <div className="hero-curve hero-curve-one" />
        <div className="hero-curve hero-curve-two" />
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">
              <span className="hero-title-line hero-title-intro">I&apos;m <strong>Arpan</strong></span>
              <span className="hero-title-line">Samadder</span>
            </h1>
            <p className="hero-role">Business Student. Brand Communicator. Campus Leader.</p>
            <p className="hero-description">
              I turn ideas into campaigns, events, systems, and student-led platforms by combining communication, leadership, and execution discipline.
            </p>

            <div className="hero-actions">
              <Link href="/files/arpan-samadder-cv.pdf" className="primary-action">
                Download CV <span aria-hidden="true">↓</span>
              </Link>
              <Link href="/hire-me" className="secondary-action">
                Contact Me <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="quick-links" aria-label="Quick contact links">
              <a href="mailto:arpansamadder110@gmail.com"><span aria-hidden="true">✉</span> arpansamadder110@gmail.com</a>
              <a href="https://linkedin.com/in/arpansamadder/"><span aria-hidden="true">in</span> linkedin.com/in/arpansamadder/</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Arpan Samadder speaking with microphone">
            <div className="hero-blue-haze" />
            <div className="hero-ring hero-ring-main" />
            <div className="hero-ring hero-ring-inner" />
            <div className="hero-swirl hero-swirl-back" />
            <img src="/images/arpan-hero-cutout.png" alt="Arpan Samadder speaking with a microphone" className="hero-cutout" />
            <div className="hero-swirl hero-swirl-front" />
            <div className="hero-spark spark-one" />
            <div className="hero-spark spark-two" />
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
              <div className="icon-circle">{item.icon}</div>
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
              <p className="experience-date">{item.date}</p>
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
              <div className="project-visual">
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
          <p className="cta-label">Open to internships, campus roles, and project work</p>
          <h2>Need someone who can plan, communicate, organize, and execute?</h2>
          <p>I am open to internships, campus ambassador roles, brand communication work, campaign support, and project-based collaboration.</p>
        </div>
        <div className="cta-actions">
          <Link href="/hire-me" className="primary-action">Hire Me <span aria-hidden="true">→</span></Link>
          <Link href="/hire-me" className="secondary-action">Contact Me <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}
