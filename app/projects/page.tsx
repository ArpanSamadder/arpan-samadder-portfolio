import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

const projectStyles = `
.projects-page {
  --blue: #187dff;
  --blue-soft: #4fa1ff;
  --text: #f8fbff;
  --muted: rgba(232, 244, 255, 0.74);
  --line: rgba(24, 125, 255, 0.24);
  --panel: rgba(3, 15, 35, 0.64);
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding-bottom: 72px;
  background: #020712;
}

.projects-page::before {
  pointer-events: none;
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(circle at 82% 12%, rgba(24, 125, 255, 0.12), transparent 28%),
    radial-gradient(circle at 12% 26%, rgba(24, 125, 255, 0.045), transparent 24%),
    linear-gradient(135deg, #020712 0%, #031023 48%, #041a36 78%, #020712 100%);
}

.projects-wrap {
  position: relative;
  z-index: 4;
  width: min(100% - 60px, 1220px);
  margin: 0 auto;
}

.projects-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(340px, 0.88fr);
  align-items: center;
  gap: 42px;
  min-height: 470px;
  padding: 54px 0 28px;
  overflow: hidden;
}

.projects-copy {
  position: relative;
  z-index: 3;
  max-width: 650px;
}

.projects-kicker {
  margin: 0 0 20px;
  color: var(--blue);
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.025em;
}

.projects-title {
  margin: 0;
  color: rgba(248, 251, 255, 0.94);
  font-size: clamp(41px, 4.6vw, 58px);
  line-height: 1.12;
  letter-spacing: -0.065em;
  font-weight: 750;
}

.projects-title span {
  color: var(--blue);
}

.projects-lead {
  max-width: 660px;
  margin: 30px 0 0;
  color: rgba(248, 251, 255, 0.78);
  font-size: 18px;
  line-height: 1.75;
  letter-spacing: -0.02em;
}

.projects-note {
  max-width: 615px;
  margin: 32px 0 0;
  padding-left: 22px;
  border-left: 2px solid var(--blue);
  color: rgba(248, 251, 255, 0.78);
  font-size: 18px;
  line-height: 1.75;
  letter-spacing: -0.02em;
}

.projects-visual {
  position: relative;
  min-height: 380px;
  isolation: isolate;
}

.projects-visual::before {
  pointer-events: none;
  content: "";
  position: absolute;
  inset: 2% -2% 0 2%;
  z-index: 0;
  opacity: 0.72;
  background-image: radial-gradient(circle, rgba(24, 125, 255, 0.60) 0 1.3px, transparent 1.8px);
  background-size: 22px 22px;
  mask-image: radial-gradient(circle at 50% 45%, #000 0%, transparent 68%);
}

.projects-orbit {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 1;
}

.projects-orbit::before,
.projects-orbit::after {
  content: "";
  position: absolute;
  border: 1.5px solid rgba(24, 125, 255, 0.60);
  border-radius: 50%;
  box-shadow: 0 0 28px rgba(24, 125, 255, 0.18);
}

.projects-orbit::before {
  width: min(47vw, 500px);
  height: min(19vw, 205px);
  right: 0;
  top: 30%;
  transform: rotate(-22deg);
}

.projects-orbit::after {
  width: min(34vw, 350px);
  height: min(13vw, 138px);
  right: 10%;
  top: 50%;
  opacity: 0.34;
  transform: rotate(-22deg);
}

.folder-icon {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 52%;
  width: 230px;
  height: 230px;
  transform: translate(-50%, -50%);
  color: var(--blue);
  filter: drop-shadow(0 0 22px rgba(24, 125, 255, 0.56));
}

.float-icon {
  position: absolute;
  z-index: 3;
  display: grid;
  place-items: center;
  width: 74px;
  height: 74px;
  border: 1px solid rgba(24, 125, 255, 0.42);
  border-radius: 12px;
  color: var(--blue);
  background: rgba(2, 12, 30, 0.66);
  box-shadow: inset 0 0 22px rgba(24, 125, 255, 0.10), 0 0 24px rgba(24, 125, 255, 0.14);
}

.float-icon svg {
  width: 34px;
  height: 34px;
}

.float-icon--chart {
  left: 10%;
  top: 34%;
  transform: rotate(7deg);
}

.float-icon--people {
  right: 22%;
  top: 8%;
  transform: rotate(8deg);
}

.float-icon--target {
  right: 4%;
  bottom: 20%;
  transform: rotate(-9deg);
}

.projects-list {
  display: grid;
  gap: 24px;
}

.project-card {
  display: grid;
  grid-template-columns: 230px minmax(0, 1fr) auto;
  align-items: center;
  gap: 38px;
  min-height: 250px;
  padding: 34px 40px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background:
    radial-gradient(circle at 12% 14%, rgba(24, 125, 255, 0.07), transparent 34%),
    rgba(3, 13, 31, 0.58);
  box-shadow: inset 0 0 24px rgba(24, 125, 255, 0.035);
}

.project-thumb {
  width: 190px;
  height: 150px;
  border: 1px solid rgba(24, 125, 255, 0.42);
  border-radius: 12px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 28px rgba(24, 125, 255, 0.08), 0 18px 34px rgba(0, 0, 0, 0.20);
}

.project-thumb--biztigation {
  background-image:
    linear-gradient(180deg, rgba(2, 7, 18, 0.08), rgba(2, 7, 18, 0.32)),
    url("/images/biztigation.png");
}

.project-thumb--crm {
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 50% 44%, rgba(36, 198, 98, 0.18), transparent 60%),
    rgba(4, 18, 40, 0.72);
}

.project-thumb--prottoy {
  background-image:
    linear-gradient(180deg, rgba(2, 7, 18, 0.08), rgba(2, 7, 18, 0.24)),
    url("/images/prottoy-ai.png");
}

.project-thumb--jucc {
  background-image:
    linear-gradient(180deg, rgba(2, 7, 18, 0.08), rgba(2, 7, 18, 0.28)),
    url("/images/sense-of-return-2.png");
}

.sheet-icon {
  width: 104px;
  height: 104px;
  color: #ffffff;
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.26));
}

.project-body h2 {
  max-width: 520px;
  margin: 0;
  color: #ffffff;
  font-size: 30px;
  line-height: 1.14;
  letter-spacing: -0.055em;
  font-weight: 780;
}

.project-detail {
  max-width: 570px;
  margin: 24px 0 0;
  color: rgba(248, 251, 255, 0.70);
  font-size: 18px;
  line-height: 1.72;
  letter-spacing: -0.02em;
}

.project-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-width: 190px;
  min-height: 58px;
  padding: 0 24px;
  border: 1px solid rgba(24, 125, 255, 0.54);
  border-radius: 7px;
  color: var(--blue);
  background: rgba(3, 13, 31, 0.52);
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.025em;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}

.project-button:hover {
  transform: translateY(-1px);
  border-color: rgba(24, 125, 255, 0.84);
  background: rgba(24, 125, 255, 0.08);
}

.projects-count {
  margin: 26px 0 0;
  color: rgba(248, 251, 255, 0.70);
  text-align: center;
  font-size: 18px;
  letter-spacing: -0.02em;
}

.projects-cta {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 24px;
  margin-top: 34px;
  padding: 34px 48px;
  overflow: hidden;
  border: 1px solid rgba(24, 125, 255, 0.42);
  border-radius: 12px;
  background:
    radial-gradient(circle at 4% 108%, rgba(24, 125, 255, 0.24), transparent 34%),
    radial-gradient(circle at 95% 10%, rgba(24, 125, 255, 0.13), transparent 32%),
    rgba(3, 13, 31, 0.70);
}

.projects-cta::after {
  pointer-events: none;
  content: "";
  position: absolute;
  right: -9%;
  bottom: -70%;
  width: 560px;
  height: 210px;
  border: 1px solid rgba(24, 125, 255, 0.26);
  border-radius: 50%;
  transform: rotate(-8deg);
}

.projects-cta h2 {
  position: relative;
  z-index: 2;
  max-width: 760px;
  margin: 0;
  color: #ffffff;
  font-size: 30px;
  line-height: 1.28;
  letter-spacing: -0.052em;
  font-weight: 680;
}

.projects-cta .primary-action {
  position: relative;
  z-index: 2;
  min-width: 248px;
  min-height: 58px;
  color: #ffffff;
  border-color: rgba(24, 125, 255, 0.92);
  font-size: 16px;
  text-transform: none;
  letter-spacing: -0.02em;
}

@media (max-width: 980px) {
  .projects-page {
    padding-bottom: 32px;
  }

  .projects-wrap {
    width: min(100% - 28px, 430px);
    padding-top: 72px;
  }

  .projects-hero {
    display: block;
    min-height: auto;
    padding: 20px 0 22px;
  }

  .projects-visual {
    display: none;
  }

  .projects-kicker {
    margin-bottom: 16px;
    font-size: 14px;
  }

  .projects-title {
    font-size: clamp(27px, 8.2vw, 34px);
    line-height: 1.18;
    letter-spacing: -0.055em;
  }

  .projects-lead {
    margin-top: 24px;
    font-size: 14px;
    line-height: 1.82;
  }

  .projects-note {
    margin-top: 24px;
    padding-left: 16px;
    font-size: 14px;
    line-height: 1.82;
  }

  .projects-list {
    gap: 12px;
  }

  .project-card {
    grid-template-columns: 86px minmax(0, 1fr);
    gap: 14px;
    min-height: auto;
    padding: 18px 14px 16px;
    border-radius: 10px;
  }

  .project-thumb {
    width: 72px;
    height: 72px;
    border-radius: 8px;
  }

  .sheet-icon {
    width: 54px;
    height: 54px;
  }

  .project-body h2 {
    font-size: 18px;
    line-height: 1.22;
    letter-spacing: -0.045em;
  }

  .project-detail {
    margin-top: 8px;
    font-size: 11px;
    line-height: 1.72;
  }

  .project-button {
    grid-column: 1 / -1;
    width: 100%;
    min-width: 0;
    min-height: 38px;
    margin-top: 10px;
    gap: 12px;
    font-size: 12px;
  }

  .projects-count {
    max-width: 190px;
    margin: 24px auto 0;
    font-size: 13px;
    line-height: 1.35;
  }

  .projects-cta {
    display: block;
    margin-top: 28px;
    padding: 26px 22px;
    border-radius: 10px;
  }

  .projects-cta h2 {
    font-size: 20px;
    line-height: 1.28;
    letter-spacing: -0.046em;
  }

  .projects-cta .primary-action {
    width: 100%;
    min-width: 0;
    min-height: 52px;
    margin-top: 26px;
    font-size: 13px;
  }
}
`;

const projects = [
  {
    title: "Biztigation",
    detail: "A national business case competition built from concept to execution under Jahangirnagar University Finance and Banking Department.",
    thumbClass: "project-thumb--biztigation",
  },
  {
    title: "Biztigation 2.0 CRM-Style Outreach System",
    detail: "A tracking system built to organize company research, sponsorship outreach, follow-ups, and team assignments.",
    thumbClass: "project-thumb--crm",
    sheet: true,
  },
  {
    title: "Prottoy AI",
    detail: "An AI-powered business concept focused on practical automation, merchant support, and workflow improvement.",
    thumbClass: "project-thumb--prottoy",
  },
  {
    title: "JUCC Inspire 2.0",
    detail: "A large campus event where I worked on sponsorship, volunteer coordination, promotion, and event execution.",
    thumbClass: "project-thumb--jucc",
  },
];

function FolderIcon() {
  return (
    <svg className="folder-icon" viewBox="0 0 260 260" fill="none" aria-hidden="true">
      <path d="M52 86h55l16 20h85c12.7 0 23 10.3 23 23v70c0 12.7-10.3 23-23 23H52c-12.7 0-23-10.3-23-23v-90c0-12.7 10.3-23 23-23Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <path d="M45 121h164c10.5 0 19 8.5 19 19v58c0 10.5-8.5 19-19 19H51c-12.2 0-22-9.8-22-22v-52c0-12.2 9.8-22 22-22Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" opacity="0.78" />
      <path d="M99 151h64M99 171h50M99 191h76" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.72" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19V9M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.72" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 11.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM15.5 10.5a2.75 2.75 0 1 0 0-5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M3.5 19.5c.7-3.7 2.7-5.6 5.5-5.6s4.8 1.9 5.5 5.6M13.5 14.2c3.4.2 5.6 2 6.3 5.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z" stroke="currentColor" strokeWidth="2.2" />
      <path d="M12 17a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" stroke="currentColor" strokeWidth="2.2" opacity="0.72" />
      <path d="M12 13.8a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM14 10l5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function SheetIcon() {
  return (
    <svg className="sheet-icon" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path d="M20 8h43l17 17v67H20V8Z" fill="#20b65a" />
      <path d="M63 8v18h17" fill="#6be391" />
      <path d="M33 42h34M33 55h34M33 68h34M43 37v38M57 37v38" stroke="white" strokeWidth="5" />
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <style>{projectStyles}</style>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/" className="logo-link" aria-label="Arpan Samadder Home">
            <img src="/images/logo-mark.png" alt="Arpan Samadder logo mark" className="logo-mark" />
          </Link>

          <div className="nav-pill" aria-label="Primary navigation links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`nav-link ${item.href === "/projects" ? "active" : ""}`}>
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
              <Link key={`mobile-${item.href}`} href={item.href} className={`mobile-menu-link ${item.href === "/projects" ? "active" : ""}`}>
                {item.label}
              </Link>
            ))}
            <Link href="/hire-me" className="mobile-menu-hire">
              Hire Me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      </header>

      <div className="projects-wrap">
        <section className="projects-hero" aria-labelledby="projects-title">
          <div className="projects-copy">
            <p className="projects-kicker">Projects</p>
            <h1 id="projects-title" className="projects-title">
              Projects, systems, campaigns, and <span>creative work.</span>
            </h1>
            <p className="projects-lead">
              A collection of projects where I worked on planning, communication, leadership, coordination, design, systems, and execution.
            </p>
            <p className="projects-note">
              These projects show how I turn ideas into structured outputs through strategy, teamwork, tools, and follow-up.
            </p>
          </div>

          <div className="projects-visual" aria-hidden="true">
            <div className="projects-orbit" />
            <FolderIcon />
            <div className="float-icon float-icon--chart"><ChartIcon /></div>
            <div className="float-icon float-icon--people"><PeopleIcon /></div>
            <div className="float-icon float-icon--target"><TargetIcon /></div>
          </div>
        </section>

        <section className="projects-list" aria-label="Projects list">
          {projects.map((item) => (
            <article className="project-card" key={item.title}>
              <div className={`project-thumb ${item.thumbClass}`} aria-hidden="true">
                {item.sheet ? <SheetIcon /> : null}
              </div>
              <div className="project-body">
                <h2>{item.title}</h2>
                <p className="project-detail">{item.detail}</p>
              </div>
              <Link href="#" className="project-button">
                <span>View Details</span> <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </section>

        <p className="projects-count">Showing 1 to 4 of 4 projects</p>

        <section className="projects-cta" aria-label="Projects call to action">
          <h2>Every project is a step toward creating impact through ideas, teamwork, and consistent execution.</h2>
          <Link href="/projects" className="primary-action">
            View All Projects <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
