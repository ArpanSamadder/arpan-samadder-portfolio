import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

const experienceStyles = `
.experience-page {
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

.experience-page::before {
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

.experience-wrap {
  position: relative;
  z-index: 4;
  width: min(100% - 60px, 1220px);
  margin: 0 auto;
}

.experience-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(340px, 0.88fr);
  align-items: center;
  gap: 42px;
  min-height: 470px;
  padding: 54px 0 28px;
  overflow: hidden;
}

.experience-copy {
  position: relative;
  z-index: 3;
  max-width: 650px;
}

.experience-kicker {
  margin: 0 0 20px;
  color: var(--blue);
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.025em;
}

.experience-title {
  margin: 0;
  color: rgba(248, 251, 255, 0.94);
  font-size: clamp(41px, 4.6vw, 58px);
  line-height: 1.12;
  letter-spacing: -0.065em;
  font-weight: 750;
}

.experience-title span {
  color: var(--blue);
}

.experience-lead {
  max-width: 660px;
  margin: 30px 0 0;
  color: rgba(248, 251, 255, 0.78);
  font-size: 18px;
  line-height: 1.75;
  letter-spacing: -0.02em;
}

.experience-note {
  max-width: 615px;
  margin: 32px 0 0;
  padding-left: 22px;
  border-left: 2px solid var(--blue);
  color: rgba(248, 251, 255, 0.78);
  font-size: 18px;
  line-height: 1.75;
  letter-spacing: -0.02em;
}

.experience-visual {
  position: relative;
  min-height: 380px;
  isolation: isolate;
}

.experience-visual::before {
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

.experience-orbit {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 1;
}

.experience-orbit::before,
.experience-orbit::after {
  content: "";
  position: absolute;
  border: 1.5px solid rgba(24, 125, 255, 0.60);
  border-radius: 50%;
  box-shadow: 0 0 28px rgba(24, 125, 255, 0.18);
}

.experience-orbit::before {
  width: min(47vw, 500px);
  height: min(19vw, 205px);
  right: 0;
  top: 30%;
  transform: rotate(-26deg);
}

.experience-orbit::after {
  width: min(34vw, 350px);
  height: min(13vw, 138px);
  right: 10%;
  top: 50%;
  opacity: 0.34;
  transform: rotate(-26deg);
}

.briefcase-icon {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 52%;
  width: 190px;
  height: 190px;
  transform: translate(-50%, -50%);
  color: var(--blue);
  filter: drop-shadow(0 0 18px rgba(24, 125, 255, 0.52));
}

.experience-list {
  display: grid;
  gap: 24px;
}

.experience-card {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr) auto;
  align-items: center;
  gap: 28px;
  min-height: 228px;
  padding: 34px 32px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background:
    radial-gradient(circle at 12% 14%, rgba(24, 125, 255, 0.07), transparent 34%),
    rgba(3, 13, 31, 0.58);
  box-shadow: inset 0 0 24px rgba(24, 125, 255, 0.035);
}

.exp-logo {
  width: 116px;
  height: 116px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 0 0 auto;
}

.exp-logo--em {
  display: grid;
  place-items: center;
  border: 5px dotted #32f05b;
  color: #32f05b;
  background: transparent;
  font-size: 44px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.08em;
}

.exp-logo--biztigation { background-image: url("/images/biztigation.png"); }
.exp-logo--jucc { background-image: url("/images/jucc.png"); }
.exp-logo--mofa { background-image: url("/images/mofa.png"); }

.exp-body h2 {
  margin: 0;
  color: #ffffff;
  font-size: 30px;
  line-height: 1.1;
  letter-spacing: -0.055em;
  font-weight: 780;
}

.exp-org {
  margin: 10px 0 0;
  color: var(--blue);
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  font-weight: 500;
}

.exp-date {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 22px 0 0;
  color: rgba(248, 251, 255, 0.76);
  font-size: 17px;
  line-height: 1.4;
}

.exp-date svg {
  width: 18px;
  height: 18px;
  color: rgba(248, 251, 255, 0.88);
}

.exp-detail {
  max-width: 560px;
  margin: 24px 0 0;
  color: rgba(248, 251, 255, 0.70);
  font-size: 18px;
  line-height: 1.72;
  letter-spacing: -0.02em;
}

.exp-button {
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

.exp-button:hover {
  transform: translateY(-1px);
  border-color: rgba(24, 125, 255, 0.84);
  background: rgba(24, 125, 255, 0.08);
}

.experience-count {
  margin: 26px 0 0;
  color: rgba(248, 251, 255, 0.70);
  text-align: center;
  font-size: 18px;
  letter-spacing: -0.02em;
}

.experience-cta {
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

.experience-cta::after {
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

.experience-cta h2 {
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

.experience-cta .primary-action {
  position: relative;
  z-index: 2;
  min-width: 248px;
  min-height: 62px;
  border-radius: 8px;
  background: var(--blue);
  color: #ffffff;
  border-color: rgba(24, 125, 255, 0.92);
  font-size: 16px;
  text-transform: none;
  letter-spacing: -0.02em;
}

@media (max-width: 980px) {
  .experience-page {
    padding-bottom: 32px;
  }

  .experience-wrap {
    width: min(100% - 28px, 430px);
  }

  .experience-hero {
    display: block;
    min-height: auto;
    padding: 20px 0 22px;
  }

  .experience-visual {
    display: none;
  }

  .experience-kicker {
    margin-bottom: 16px;
    font-size: 14px;
  }

  .experience-title {
    font-size: clamp(27px, 8.2vw, 34px);
    line-height: 1.18;
    letter-spacing: -0.055em;
  }

  .experience-lead {
    margin-top: 24px;
    font-size: 14px;
    line-height: 1.82;
  }

  .experience-note {
    margin-top: 24px;
    padding-left: 16px;
    font-size: 14px;
    line-height: 1.82;
  }

  .experience-list {
    gap: 12px;
  }

  .experience-card {
    grid-template-columns: 70px minmax(0, 1fr);
    gap: 14px;
    min-height: auto;
    padding: 22px 18px 18px;
    border-radius: 10px;
  }

  .exp-logo {
    width: 58px;
    height: 58px;
  }

  .exp-logo--em {
    border-width: 3px;
    font-size: 24px;
  }

  .exp-body h2 {
    font-size: 18px;
    line-height: 1.22;
    letter-spacing: -0.045em;
  }

  .exp-org {
    margin-top: 4px;
    font-size: 14px;
  }

  .exp-date {
    margin-top: 12px;
    gap: 6px;
    font-size: 12px;
  }

  .exp-date svg {
    width: 13px;
    height: 13px;
  }

  .exp-detail {
    display: none;
  }

  .exp-button {
    grid-column: 1 / -1;
    width: 100%;
    min-width: 0;
    min-height: 38px;
    margin-top: 10px;
    gap: 12px;
    font-size: 12px;
  }

  .exp-button span:first-child {
    display: none;
  }

  .exp-button::before {
    content: "Tap to View Details";
  }

  .experience-count {
    max-width: 180px;
    margin: 24px auto 0;
    font-size: 13px;
    line-height: 1.35;
  }

  .experience-cta {
    display: block;
    margin-top: 28px;
    padding: 26px 22px;
    border-radius: 10px;
  }

  .experience-cta h2 {
    font-size: 20px;
    line-height: 1.28;
    letter-spacing: -0.046em;
  }

  .experience-cta .primary-action {
    width: 100%;
    min-width: 0;
    min-height: 52px;
    margin-top: 26px;
    font-size: 13px;
  }
}
`;

const experiences = [
  {
    title: "Brand & Communication Manager",
    organization: "Executive Media",
    date: "Feb 2025 – Present",
    detail: "Managing client brand projects, campaign plans, creative teams, and communication workflows.",
    logoClass: "exp-logo--em",
    logoText: "EM",
  },
  {
    title: "Founder",
    organization: "Biztigation",
    date: "May 2024 – Present",
    detail: "Built and led a national business case competition platform under JU Finance and Banking.",
    logoClass: "exp-logo--biztigation",
  },
  {
    title: "Corporate Affairs Wing Secretary",
    organization: "JUCC",
    date: "Jul 2025 – Jan 2026",
    detail: "Worked on sponsorship outreach, event operations, promotional campaigns, and volunteer coordination.",
    logoClass: "exp-logo--jucc",
  },
  {
    title: "Volunteer",
    organization: "MoFA",
    date: "Jan 2025 – Present",
    detail: "Contributed to outreach programs, event support, and community engagement initiatives.",
    logoClass: "exp-logo--mofa",
  },
];

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3v3M17 3v3M4.75 9.25h14.5M6.5 5.25h11A2.75 2.75 0 0 1 20.25 8v9.5a2.75 2.75 0 0 1-2.75 2.75h-11A2.75 2.75 0 0 1 3.75 17.5V8A2.75 2.75 0 0 1 6.5 5.25Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="briefcase-icon" viewBox="0 0 240 240" fill="none" aria-hidden="true">
      <path d="M77 82V68c0-8.8 7.2-16 16-16h54c8.8 0 16 7.2 16 16v14" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M51 84h138c10 0 18 8 18 18v74c0 10-8 18-18 18H51c-10 0-18-8-18-18v-74c0-10 8-18 18-18Z" stroke="currentColor" strokeWidth="5" />
      <path d="M34 121c30 15 62 22 96 22 26 0 52-5 78-16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.82" />
      <path d="M108 132h24v27c0 6.5-5.3 11.8-11.8 11.8h-.4c-6.5 0-11.8-5.3-11.8-11.8v-27Z" stroke="currentColor" strokeWidth="4" />
      <path d="M91 82V68h58v14" stroke="currentColor" strokeWidth="3" opacity="0.45" />
    </svg>
  );
}

export default function ExperiencePage() {
  return (
    <main className="experience-page">
      <style>{experienceStyles}</style>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/" className="logo-link" aria-label="Arpan Samadder Home">
            <img src="/images/logo-mark.png" alt="Arpan Samadder logo mark" className="logo-mark" />
          </Link>

          <div className="nav-pill" aria-label="Primary navigation links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`nav-link ${item.href === "/experience" ? "active" : ""}`}>
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
              <Link key={`mobile-${item.href}`} href={item.href} className={`mobile-menu-link ${item.href === "/experience" ? "active" : ""}`}>
                {item.label}
              </Link>
            ))}
            <Link href="/hire-me" className="mobile-menu-hire">
              Hire Me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      </header>

      <div className="experience-wrap">
        <section className="experience-hero" aria-labelledby="experience-title">
          <div className="experience-copy">
            <p className="experience-kicker">Experience</p>
            <h1 id="experience-title" className="experience-title">
              Roles where I learned to <span>plan, communicate, lead, and execute.</span>
            </h1>
            <p className="experience-lead">
              My experience spans brand communication, campaign planning, sponsorship outreach, event execution, creative coordination, student leadership, and operational support.
            </p>
            <p className="experience-note">
              Each role taught me how to work with people, manage pressure, organize tasks, and turn plans into visible outcomes.
            </p>
          </div>

          <div className="experience-visual" aria-hidden="true">
            <div className="experience-orbit" />
            <BriefcaseIcon />
          </div>
        </section>

        <section className="experience-list" aria-label="Experience roles">
          {experiences.map((item) => (
            <article className="experience-card" key={item.title}>
              <div className={`exp-logo ${item.logoClass}`} aria-hidden="true">
                {item.logoText || ""}
              </div>
              <div className="exp-body">
                <h2>{item.title}</h2>
                <p className="exp-org">{item.organization}</p>
                <p className="exp-date"><CalendarIcon /> {item.date}</p>
                <p className="exp-detail">{item.detail}</p>
              </div>
              <Link href="#" className="exp-button">
                <span>View Details</span> <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </section>

        <p className="experience-count">Showing 1 to 4 of 4 experiences</p>

        <section className="experience-cta" aria-label="Experience call to action">
          <h2>Every role has been a step toward becoming the person teams trust when ideas need to be organized and executed.</h2>
          <Link href="/experience" className="primary-action">
            View My Experience <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
