import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

const heroOnlyPolish = `
@media (min-width: 1061px) {
  .site-header {
    height: 74px;
    background: rgba(2, 7, 18, 0.98);
    border-bottom: 1px solid rgba(56, 223, 255, 0.10);
    box-shadow: 0 8px 34px rgba(0, 0, 0, 0.20);
  }

  .site-nav {
    width: min(100%, 1088px);
    height: 74px;
    padding: 0 0;
  }

  .logo-link {
    width: 54px;
    height: 54px;
    filter: drop-shadow(0 0 22px rgba(56, 223, 255, 0.55));
  }

  .logo-mark {
    width: 54px;
    height: 54px;
  }

  .nav-pill {
    gap: 44px;
    background: transparent;
    border: 0;
    box-shadow: none;
  }

  .nav-link {
    padding: 28px 0 24px;
    font-size: 12px;
    font-weight: 800;
    color: rgba(248, 251, 255, 0.72);
  }

  .nav-link::after {
    bottom: 17px;
    height: 2px;
  }

  .nav-link.active::after,
  .nav-link:hover::after {
    width: 40px;
  }

  .hire-button {
    min-width: 134px;
    min-height: 46px;
    border-radius: 7px;
    font-size: 13px;
  }

  .hero-section {
    height: 508px;
    min-height: 508px;
    background: #020816;
  }

  .hero-section::before {
    background:
      radial-gradient(circle at 72% 44%, rgba(23, 123, 255, 0.36), transparent 29%),
      radial-gradient(circle at 63% 43%, rgba(56, 223, 255, 0.12), transparent 24%),
      linear-gradient(90deg, #020711 0%, #020916 40%, #051d45 67%, #020711 100%);
  }

  .hero-bg-dots {
    width: 210px;
    height: 190px;
    opacity: 0.50;
    background-size: 14px 14px;
  }

  .hero-dots-left {
    left: 0;
    top: 138px;
  }

  .hero-dots-right {
    right: 0;
    top: 122px;
  }

  .hero-curve-one {
    right: -8%;
    top: 11%;
    width: 56vw;
    height: 24vw;
    opacity: 0.45;
  }

  .hero-curve-two {
    right: -3%;
    top: 38%;
    width: 50vw;
    height: 18vw;
    opacity: 0.26;
  }

  .hero-grid {
    grid-template-columns: 0.93fr 1.07fr;
    align-items: start;
    width: min(100%, 1088px);
    height: 508px;
    min-height: 508px;
    padding: 0 0;
  }

  .hero-copy {
    max-width: 432px;
    margin-top: 72px;
    transform: none;
  }

  .hero-title {
    font-size: clamp(54px, 5vw, 62px);
    line-height: 0.98;
    letter-spacing: -0.057em;
    text-shadow: 0 0 20px rgba(23, 123, 255, 0.10);
  }

  .hero-title strong {
    color: #187dff;
    text-shadow: 0 0 26px rgba(23, 123, 255, 0.42);
  }

  .hero-role {
    margin-top: 13px;
    color: #25d9ff;
    font-size: 14px;
    line-height: 1.45;
    font-weight: 750;
  }

  .hero-description {
    max-width: 420px;
    margin-top: 20px;
    color: rgba(232, 244, 255, 0.80);
    font-size: 14px;
    line-height: 1.72;
  }

  .hero-actions {
    gap: 20px;
    margin-top: 24px;
  }

  .primary-action,
  .secondary-action {
    min-width: 166px;
    min-height: 44px;
    border-radius: 6px;
    font-size: 14px;
  }

  .quick-links {
    gap: 18px;
    margin-top: 18px;
    font-size: 12px;
  }

  .quick-links a:first-child::after {
    content: "";
    width: 1px;
    height: 14px;
    margin-left: 18px;
    background: rgba(248, 251, 255, 0.32);
  }

  .hero-visual {
    height: 508px;
    min-height: 508px;
    transform: none;
  }

  .hero-blue-haze {
    left: 58%;
    top: 242px;
    width: 420px;
    height: 420px;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(56, 223, 255, 0.30) 0%, rgba(23, 123, 255, 0.24) 36%, rgba(23, 123, 255, 0.08) 62%, transparent 78%);
    filter: blur(7px);
  }

  .hero-ring-main {
    left: 58%;
    top: 246px;
    width: 410px;
    height: 410px;
    transform: translate(-50%, -50%);
    border: 3px solid rgba(23, 123, 255, 0.98);
    box-shadow: 0 0 20px rgba(23, 123, 255, 0.82), 0 0 62px rgba(23, 123, 255, 0.24), inset 0 0 46px rgba(23, 123, 255, 0.18);
  }

  .hero-ring-inner {
    left: 58%;
    top: 246px;
    width: 320px;
    height: 320px;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(56, 223, 255, 0.23);
  }

  .hero-cutout {
    left: 58%;
    top: 36px;
    bottom: auto;
    width: 452px;
    max-height: none;
    transform: translateX(-50%);
    filter: drop-shadow(0 30px 42px rgba(0, 0, 0, 0.42)) drop-shadow(0 0 20px rgba(23, 123, 255, 0.16));
  }

  .hero-swirl-back {
    left: 16%;
    top: 58%;
    width: 780px;
    height: 238px;
    transform: rotate(-16deg);
    border-top: 2px solid rgba(56, 223, 255, 0.18);
    border-bottom: 1px solid rgba(23, 123, 255, 0.18);
    box-shadow: 0 -1px 30px rgba(23, 123, 255, 0.18);
  }

  .hero-swirl-front {
    left: 15%;
    top: 73%;
    width: 820px;
    height: 160px;
    transform: rotate(-13deg);
    background: transparent;
    border-top: 5px solid rgba(23, 123, 255, 0.72);
    border-bottom: 2px solid rgba(56, 223, 255, 0.45);
    border-radius: 50%;
    box-shadow: 0 -6px 28px rgba(23, 123, 255, 0.50), 0 5px 28px rgba(56, 223, 255, 0.26);
    filter: drop-shadow(0 0 20px rgba(56, 223, 255, 0.46));
  }

  .spark-one {
    right: 24%;
    top: 24%;
  }

  .spark-two {
    right: 10%;
    bottom: 25%;
  }

  .highlights-panel {
    margin-top: 22px;
  }
}
`;

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
      <style>{heroOnlyPolish}</style>
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
