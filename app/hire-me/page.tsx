import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Hire Me", href: "/hire-me" },
];

const hireStyles = `
.hire-page {
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
  color: var(--text);
  background: #020712;
}

.hire-page::before {
  pointer-events: none;
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(circle at 80% 12%, rgba(24, 125, 255, 0.13), transparent 28%),
    radial-gradient(circle at 16% 28%, rgba(24, 125, 255, 0.05), transparent 24%),
    linear-gradient(135deg, #020712 0%, #031023 48%, #041a36 78%, #020712 100%);
}

.hire-page .site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  height: 78px;
  border-bottom: 1px solid rgba(24, 125, 255, 0.14);
  background: rgba(2, 7, 18, 0.94);
  backdrop-filter: blur(18px);
}

.hire-page .site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100% - 60px, 1220px);
  height: 78px;
  margin: 0 auto;
}

.hire-page .logo-link {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  text-decoration: none;
}

.hire-page .logo-mark {
  width: 58px;
  height: 58px;
  object-fit: contain;
}

.hire-page .nav-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;
}

.hire-page .nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 29px 0 25px;
  color: rgba(255, 255, 255, 0.78);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.hire-page .nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 16px;
  width: 0;
  height: 2px;
  border-radius: 999px;
  background: var(--blue);
  transform: translateX(-50%);
  transition: width 180ms ease;
}

.hire-page .nav-link.active,
.hire-page .nav-link:hover {
  color: var(--blue);
}

.hire-page .nav-link.active::after,
.hire-page .nav-link:hover::after {
  width: 48px;
}

.hire-page .hire-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-width: 136px;
  min-height: 46px;
  border: 1px solid rgba(24, 125, 255, 0.90);
  border-radius: 7px;
  color: #ffffff;
  background: var(--blue);
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 10px 30px rgba(24, 125, 255, 0.22);
}

.hire-page .mobile-menu-toggle,
.hire-page .mobile-menu-button,
.hire-page .mobile-menu-panel {
  display: none;
}

.hire-wrap {
  position: relative;
  z-index: 4;
  width: min(100% - 60px, 1220px);
  margin: 0 auto;
}

.hire-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(380px, 0.92fr);
  align-items: center;
  gap: 46px;
  min-height: 500px;
  padding: 44px 0 20px;
  overflow: hidden;
}

.hire-copy {
  position: relative;
  z-index: 3;
  max-width: 705px;
}

.hire-kicker {
  margin: 0 0 18px;
  color: var(--blue);
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.025em;
}

.hire-title {
  margin: 0;
  color: rgba(248, 251, 255, 0.94);
  font-size: clamp(41px, 4.5vw, 56px);
  line-height: 1.12;
  letter-spacing: -0.064em;
  font-weight: 750;
}

.hire-title span {
  color: var(--blue);
}

.hire-lead {
  max-width: 690px;
  margin: 24px 0 0;
  color: rgba(248, 251, 255, 0.78);
  font-size: 17px;
  line-height: 1.72;
  letter-spacing: -0.02em;
}

.hire-note {
  max-width: 640px;
  margin: 27px 0 0;
  padding-left: 22px;
  border-left: 2px solid var(--blue);
  color: rgba(248, 251, 255, 0.78);
  font-size: 17px;
  line-height: 1.72;
  letter-spacing: -0.02em;
}

.hire-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.hire-action,
.primary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 52px;
  padding: 0 24px;
  border: 1px solid rgba(24, 125, 255, 0.54);
  border-radius: 7px;
  color: var(--blue);
  background: rgba(3, 13, 31, 0.52);
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.02em;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}

.hire-action.primary,
.primary-action {
  color: #ffffff;
  border-color: rgba(24, 125, 255, 0.92);
  background: var(--blue);
  box-shadow: 0 12px 30px rgba(24, 125, 255, 0.22);
}

.hire-action:hover,
.primary-action:hover {
  transform: translateY(-1px);
  border-color: rgba(24, 125, 255, 0.84);
}

.hire-visual {
  position: relative;
  min-height: 440px;
  isolation: isolate;
}

.hire-visual::before {
  pointer-events: none;
  content: "";
  position: absolute;
  inset: 0 -2% 5% 0;
  z-index: 0;
  opacity: 0.55;
  background-image: radial-gradient(circle, rgba(24, 125, 255, 0.62) 0 1.25px, transparent 1.8px);
  background-size: 18px 18px;
  mask-image: radial-gradient(circle at 52% 45%, #000 0%, transparent 70%);
}

.hire-orbit {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hire-orbit::before,
.hire-orbit::after {
  content: "";
  position: absolute;
  border: 1.5px solid rgba(24, 125, 255, 0.60);
  border-radius: 50%;
  box-shadow: 0 0 28px rgba(24, 125, 255, 0.18);
}

.hire-orbit::before {
  width: min(42vw, 500px);
  height: min(18vw, 210px);
  right: 1%;
  top: 28%;
  transform: rotate(-21deg);
}

.hire-orbit::after {
  width: min(30vw, 360px);
  height: min(12vw, 145px);
  right: 12%;
  top: 48%;
  opacity: 0.32;
  transform: rotate(-21deg);
}

.hire-portrait-glow {
  pointer-events: none;
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 1;
  width: min(40vw, 470px);
  height: 82%;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 46%, rgba(24, 125, 255, 0.22), transparent 62%);
  transform: translateX(-50%);
  filter: blur(2px);
}

.hire-portrait {
  position: absolute;
  left: 50%;
  bottom: -1px;
  z-index: 3;
  width: min(34vw, 430px);
  max-height: 460px;
  object-fit: contain;
  object-position: center bottom;
  transform: translateX(-50%);
  filter: drop-shadow(0 28px 38px rgba(0, 0, 0, 0.34));
}

.section-panel {
  margin-top: 20px;
  padding: 24px 20px 18px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background:
    radial-gradient(circle at 10% 8%, rgba(24, 125, 255, 0.07), transparent 34%),
    rgba(3, 13, 31, 0.58);
  box-shadow: inset 0 0 24px rgba(24, 125, 255, 0.035);
}

.section-heading {
  margin: 0 0 18px;
  color: #ffffff;
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: -0.045em;
  font-weight: 650;
}

.opportunity-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.help-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.info-card {
  min-height: 210px;
  padding: 26px 26px 24px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: rgba(3, 13, 31, 0.58);
  box-shadow: inset 0 0 22px rgba(24, 125, 255, 0.04);
}

.help-grid .info-card {
  min-height: 205px;
}

.card-icon {
  width: 38px;
  height: 38px;
  margin-bottom: 24px;
  color: var(--blue);
  filter: drop-shadow(0 0 14px rgba(24, 125, 255, 0.32));
}

.info-card h3 {
  margin: 0;
  color: #ffffff;
  font-size: 19px;
  line-height: 1.18;
  letter-spacing: -0.04em;
  font-weight: 700;
}

.info-card p {
  margin: 16px 0 0;
  color: rgba(248, 251, 255, 0.70);
  font-size: 14px;
  line-height: 1.7;
  letter-spacing: -0.02em;
}

.value-layout {
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  gap: 18px;
  margin-top: 18px;
}

.role-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.role-item {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 7px;
  color: rgba(248, 251, 255, 0.82);
  background: rgba(3, 13, 31, 0.54);
  font-size: 13px;
  letter-spacing: -0.02em;
}

.role-item span {
  margin-left: auto;
  color: var(--blue);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.why-card {
  min-height: 128px;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: rgba(3, 13, 31, 0.58);
}

.why-card .card-icon {
  width: 34px;
  height: 34px;
  margin-bottom: 13px;
}

.why-card h3 {
  margin: 0;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: -0.035em;
}

.why-card p {
  margin: 12px 0 0;
  color: rgba(248, 251, 255, 0.68);
  font-size: 13px;
  line-height: 1.55;
  letter-spacing: -0.02em;
}

.connect-panel {
  margin-top: 28px;
}

.connect-lead {
  max-width: 740px;
  margin: -8px 0 20px;
  color: rgba(248, 251, 255, 0.72);
  font-size: 15px;
  line-height: 1.65;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 74px;
  padding: 14px 18px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(3, 13, 31, 0.58);
}

.contact-card .card-icon {
  width: 28px;
  height: 28px;
  margin: 0;
}

.contact-card strong {
  display: block;
  color: #ffffff;
  font-size: 13px;
  line-height: 1.2;
}

.contact-card span {
  display: block;
  margin-top: 3px;
  color: rgba(248, 251, 255, 0.70);
  font-size: 12px;
  line-height: 1.35;
}

.connect-actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 18px;
}

.connect-actions .hire-action {
  width: 100%;
}

.hire-final-cta {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
  padding: 28px 42px;
  overflow: hidden;
  border: 1px solid rgba(24, 125, 255, 0.42);
  border-radius: 12px;
  background:
    radial-gradient(circle at 4% 108%, rgba(24, 125, 255, 0.24), transparent 34%),
    radial-gradient(circle at 95% 10%, rgba(24, 125, 255, 0.13), transparent 32%),
    rgba(3, 13, 31, 0.70);
}

.hire-final-cta::after {
  pointer-events: none;
  content: "";
  position: absolute;
  right: -8%;
  bottom: -78%;
  width: 560px;
  height: 210px;
  border: 1px solid rgba(24, 125, 255, 0.26);
  border-radius: 50%;
  transform: rotate(-8deg);
}

.hire-final-cta h2 {
  position: relative;
  z-index: 2;
  max-width: 760px;
  margin: 0;
  color: #ffffff;
  font-size: 26px;
  line-height: 1.24;
  letter-spacing: -0.052em;
  font-weight: 680;
}

.hire-final-cta p {
  position: relative;
  z-index: 2;
  margin: 8px 0 0;
  color: rgba(248, 251, 255, 0.72);
  font-size: 14px;
  line-height: 1.55;
}

.hire-final-cta .primary-action {
  position: relative;
  z-index: 2;
  min-width: 230px;
}

@media (max-width: 980px) {
  .hire-page {
    padding-bottom: 32px;
  }

  .hire-page .site-header {
    height: 64px;
  }

  .hire-page .site-nav {
    width: min(100% - 28px, 430px);
    height: 64px;
  }

  .hire-page .logo-link,
  .hire-page .logo-mark {
    width: 48px;
    height: 48px;
  }

  .hire-page .nav-pill,
  .hire-page .hire-button {
    display: none;
  }

  .hire-page .mobile-menu-toggle {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }

  .hire-page .mobile-menu-button {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    color: #ffffff;
    font-size: 28px;
    line-height: 1;
    cursor: pointer;
  }

  .hire-page .mobile-menu-panel {
    position: absolute;
    left: 14px;
    right: 14px;
    top: 64px;
    display: none;
    padding: 14px;
    border: 1px solid rgba(24, 125, 255, 0.28);
    border-radius: 12px;
    background: rgba(2, 8, 20, 0.97);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.34);
  }

  .hire-page .mobile-menu-toggle:checked ~ .mobile-menu-panel {
    display: grid;
    gap: 8px;
  }

  .hire-page .mobile-menu-link,
  .hire-page .mobile-menu-hire {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 42px;
    padding: 0 14px;
    border: 1px solid rgba(24, 125, 255, 0.18);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.82);
    text-decoration: none;
    font-size: 14px;
  }

  .hire-page .mobile-menu-link.active,
  .hire-page .mobile-menu-hire {
    color: var(--blue);
    border-color: rgba(24, 125, 255, 0.40);
  }

  .hire-wrap {
    width: min(100% - 28px, 430px);
  }

  .hire-hero {
    display: block;
    min-height: auto;
    padding: 18px 0 20px;
  }

  .hire-visual {
    display: none;
  }

  .hire-kicker {
    margin-bottom: 14px;
    font-size: 14px;
  }

  .hire-title {
    font-size: clamp(26px, 7.8vw, 34px);
    line-height: 1.18;
    letter-spacing: -0.055em;
  }

  .hire-lead {
    margin-top: 18px;
    font-size: 13px;
    line-height: 1.78;
  }

  .hire-note {
    margin-top: 20px;
    padding-left: 16px;
    font-size: 13px;
    line-height: 1.78;
  }

  .hire-hero-actions {
    gap: 10px;
    margin-top: 20px;
  }

  .hire-action,
  .primary-action {
    min-height: 42px;
    padding: 0 14px;
    font-size: 12px;
  }

  .section-panel {
    margin-top: 14px;
    padding: 18px 14px;
    border-radius: 10px;
  }

  .section-heading {
    margin-bottom: 14px;
    font-size: 17px;
  }

  .opportunity-grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .opportunity-grid .info-card {
    display: grid;
    grid-template-columns: 54px minmax(0, 1fr);
    gap: 12px;
    min-height: auto;
    padding: 14px 12px;
  }

  .opportunity-grid .card-icon {
    width: 34px;
    height: 34px;
    margin: 0;
  }

  .info-card h3 {
    font-size: 13px;
    line-height: 1.25;
  }

  .info-card p {
    margin-top: 7px;
    font-size: 10.5px;
    line-height: 1.55;
  }

  .help-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .help-grid .info-card {
    display: grid;
    place-items: center;
    min-height: 82px;
    padding: 10px 8px;
    text-align: center;
  }

  .help-grid .card-icon {
    width: 26px;
    height: 26px;
    margin: 0 0 8px;
  }

  .help-grid .info-card h3 {
    font-size: 10px;
    line-height: 1.18;
  }

  .help-grid .info-card p {
    display: none;
  }

  .value-layout {
    display: block;
    margin-top: 12px;
  }

  .value-layout .section-panel + .section-panel {
    margin-top: 14px;
  }

  .role-list {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .role-item {
    min-height: 34px;
    padding: 0 10px;
    font-size: 10px;
  }

  .why-grid {
    gap: 8px;
  }

  .why-card {
    display: grid;
    place-items: center;
    min-height: 86px;
    padding: 10px;
    text-align: center;
  }

  .why-card .card-icon {
    width: 30px;
    height: 30px;
    margin: 0 0 8px;
  }

  .why-card h3 {
    font-size: 10.5px;
  }

  .why-card p {
    display: none;
  }

  .connect-lead {
    display: none;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 0;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 8px;
  }

  .contact-card {
    min-height: 48px;
    padding: 8px 12px;
    border: 0;
    border-bottom: 1px solid rgba(24, 125, 255, 0.16);
    border-radius: 0;
  }

  .contact-card:last-child {
    border-bottom: 0;
  }

  .contact-card .card-icon {
    width: 22px;
    height: 22px;
  }

  .contact-card strong {
    font-size: 10px;
  }

  .contact-card span {
    font-size: 9.5px;
  }

  .connect-actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    margin-top: 10px;
  }

  .connect-actions .hire-action:last-child {
    grid-column: 1 / -1;
  }

  .hire-final-cta {
    display: block;
    margin-top: 18px;
    padding: 22px 16px;
    border-radius: 10px;
  }

  .hire-final-cta h2 {
    font-size: 18px;
    line-height: 1.26;
  }

  .hire-final-cta p {
    font-size: 11px;
  }

  .hire-final-cta .primary-action {
    width: 100%;
    min-width: 0;
    margin-top: 20px;
  }
}
`;

const opportunities = [
  {
    icon: "briefcase",
    title: "Internships",
    text: "Marketing, brand communication, business development, HR, operations, event management, and corporate communication roles.",
  },
  {
    icon: "people",
    title: "Campus Ambassador Roles",
    text: "Brand promotion, campus activation, student outreach, event promotion, and university-level community engagement.",
  },
  {
    icon: "laptop",
    title: "Part-Time or Remote Work",
    text: "Content planning, social media support, campaign coordination, research, reporting, and communication support.",
  },
  {
    icon: "puzzle",
    title: "Project-Based Collaboration",
    text: "Campaign planning, event support, sponsorship outreach, presentation decks, design support, and AI-assisted content planning.",
  },
];

const helpItems = [
  {
    icon: "megaphone",
    title: "Brand Communication",
    text: "Marketing ideas, communication planning, content direction, captions, scripts, and brand-facing materials.",
  },
  {
    icon: "network",
    title: "Campus Activation",
    text: "Student engagement plans, ambassador coordination, event promotion, volunteer management, and campus communication.",
  },
  {
    icon: "handshake",
    title: "Sponsorship & Outreach",
    text: "Company research, sponsorship proposals, outreach tracking, follow-up planning, and partner communication.",
  },
  {
    icon: "calendar",
    title: "Event & Project Coordination",
    text: "Task planning, volunteer coordination, execution tracking, backstage support, and post-event follow-up.",
  },
  {
    icon: "palette",
    title: "Creative & Content Support",
    text: "Posters, slide decks, short-form video planning, magazine layouts, campaign visuals, and social media content.",
  },
  {
    icon: "sparkles",
    title: "AI-Assisted Execution",
    text: "Research support, idea generation, workflow planning, script support, slide structuring, and content planning using AI tools.",
  },
];

const roles = [
  "Marketing Intern",
  "Sponsorship Outreach Assistant",
  "Brand Communication Intern",
  "Event Management Intern",
  "Campus Ambassador",
  "Social Media & Content Assistant",
  "Corporate Affairs Support",
  "Project Coordination Assistant",
  "Business Development Intern",
  "Operations Support Intern",
];

const whyItems = [
  {
    icon: "target",
    title: "Execution-Focused",
    text: "I do not stop at ideas. I focus on planning, organizing, following up, and completing the work.",
  },
  {
    icon: "people",
    title: "People-Oriented",
    text: "I am comfortable working with teams, volunteers, ambassadors, partners, clients, and stakeholders.",
  },
  {
    icon: "chart",
    title: "Campaign-Minded",
    text: "I understand how to connect messaging, visuals, promotion, timing, and audience attention.",
  },
  {
    icon: "sparkles",
    title: "AI-Supported",
    text: "I use AI tools to make research, content planning, scripts, workflows, and presentations faster and more structured.",
  },
];

function Icon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2.1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (name === "briefcase") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7"/><path {...common} d="M4 7h16v12H4z"/><path {...common} d="M4 12h16M10 12v1.5h4V12"/></svg>;
  }
  if (name === "people") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M9 11.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM15.5 10.5a2.75 2.75 0 1 0 0-5.5"/><path {...common} d="M3.5 19.5c.7-3.7 2.7-5.6 5.5-5.6s4.8 1.9 5.5 5.6M13.5 14.2c3.4.2 5.6 2 6.3 5.3"/></svg>;
  }
  if (name === "laptop") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M5 6h14v9H5z"/><path {...common} d="M3 19h18l-2-4H5z"/></svg>;
  }
  if (name === "puzzle") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M9 4h4v3a2 2 0 1 0 4 0h3v5h-3a2 2 0 1 0 0 4h3v4h-6v-3a2 2 0 1 0-4 0v3H4v-6h3a2 2 0 1 0 0-4H4V4h5z"/></svg>;
  }
  if (name === "megaphone") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M4 13h4l9 5V6L8 11H4z"/><path {...common} d="M8 13l2 6"/></svg>;
  }
  if (name === "network") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M12 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" transform="translate(0 2)"/><path {...common} d="M12 8v5M8 16l-2 2M16 16l2 2"/></svg>;
  }
  if (name === "handshake") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M8 12l3 3a2 2 0 0 0 3 0l4-4"/><path {...common} d="M3 12l5-5 4 4M21 12l-5-5-2 2"/><path {...common} d="M7 15l2 2M11 17l1.5 1.5M15 15l1.5 1.5"/></svg>;
  }
  if (name === "calendar") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M5 5h14v15H5zM8 3v4M16 3v4M5 10h14"/></svg>;
  }
  if (name === "palette") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M12 21a9 9 0 1 1 9-9c0 1.7-1.1 2.6-2.8 2.6H16a2 2 0 0 0-2 2c0 1.2-.8 4.4-2 4.4Z"/><path {...common} d="M7.5 10h.1M10 7h.1M14 7h.1M16.5 10h.1"/></svg>;
  }
  if (name === "sparkles") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3ZM5 16l.8 2.5L8 19l-2.2.5L5 22l-.8-2.5L2 19l2.2-.5L5 16ZM19 15l.8 2.3L22 18l-2.2.7L19 21l-.8-2.3L16 18l2.2-.7L19 15Z"/></svg>;
  }
  if (name === "person") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 21c.8-4.2 3.2-6.2 7-6.2s6.2 2 7 6.2"/></svg>;
  }
  if (name === "target") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z"/><path {...common} d="M12 17a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z"/><path {...common} d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM14 10l5-5"/></svg>;
  }
  if (name === "chart") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M5 19V9M12 19V5M19 19v-7M4 19h16"/></svg>;
  }
  if (name === "mail") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M4 6h16v12H4z"/><path {...common} d="m4 7 8 6 8-6"/></svg>;
  }
  if (name === "phone") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M6 4h3l1.5 4-2 1.2c1.2 2.6 3.3 4.7 5.9 5.9l1.2-2 4 1.5v3c0 1.1-.9 2-2 2C10.1 20.6 3.4 13.9 4 6c0-1.1.9-2 2-2Z"/></svg>;
  }
  if (name === "linkedin") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M5 9v10M5 5.2v.1M10 19v-6c0-2 1.2-3.5 3.2-3.5 2.2 0 3.8 1.4 3.8 4.2V19"/><path {...common} d="M10 10v9"/></svg>;
  }
  if (name === "location") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><path {...common} d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>;
  }
  if (name === "download") {
    return <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M12 4v11M8 11l4 4 4-4M5 20h14"/></svg>;
  }
  return <Icon name="sparkles" />;
}

function SmallIcon({ name }: { name: string }) {
  return <span aria-hidden="true" className="inline-icon"><Icon name={name} /></span>;
}

export default function HireMePage() {
  return (
    <main className="hire-page">
      <style>{hireStyles}</style>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/" className="logo-link" aria-label="Arpan Samadder Home">
            <img src="/images/logo-mark.png" alt="Arpan Samadder logo mark" className="logo-mark" />
          </Link>

          <div className="nav-pill" aria-label="Primary navigation links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`nav-link ${item.href === "/hire-me" ? "active" : ""}`}>
                {item.label}
              </Link>
            ))}
          </div>

          <a href="mailto:arpansamadder110@gmail.com" className="hire-button">
            Hire Me <span aria-hidden="true">→</span>
          </a>

          <input type="checkbox" id="mobile-menu-toggle" className="mobile-menu-toggle" aria-label="Toggle mobile navigation" />
          <label htmlFor="mobile-menu-toggle" className="mobile-menu-button" aria-hidden="true">☰</label>
          <div className="mobile-menu-panel" aria-label="Mobile navigation links">
            {navItems.map((item) => (
              <Link key={`mobile-${item.href}`} href={item.href} className={`mobile-menu-link ${item.href === "/hire-me" ? "active" : ""}`}>
                {item.label}
              </Link>
            ))}
            <a href="mailto:arpansamadder110@gmail.com" className="mobile-menu-hire">
              Email Me <span aria-hidden="true">→</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="hire-wrap">
        <section className="hire-hero" aria-labelledby="hire-title">
          <div className="hire-copy">
            <p className="hire-kicker">Hire Me</p>
            <h1 id="hire-title" className="hire-title">
              Looking for someone who can <span>plan, communicate, organize, and execute?</span>
            </h1>
            <p className="hire-lead">
              I am open to internships, campus ambassador roles, part-time opportunities, remote work, brand communication support, campus activation, sponsorship outreach, and project-based collaboration.
            </p>
            <p className="hire-note">
              If your team needs someone who can work with people, campaigns, content, events, partners, and execution systems, I would be happy to connect.
            </p>
            <div className="hire-hero-actions">
              <a href="mailto:arpansamadder110@gmail.com" className="hire-action primary"><SmallIcon name="mail" />Email Me</a>
              <a href="/Arpan_Samadder_CV.pdf" className="hire-action" download><SmallIcon name="download" />Download CV</a>
            </div>
          </div>

          <div className="hire-visual" aria-hidden="true">
            <div className="hire-orbit" />
            <div className="hire-portrait-glow" />
            <img src="/images/arpan-profile-cutout.png" alt="" className="hire-portrait" />
          </div>
        </section>

        <section className="section-panel" aria-labelledby="opportunities-title">
          <h2 id="opportunities-title" className="section-heading">Opportunities I am open to.</h2>
          <div className="opportunity-grid">
            {opportunities.map((item) => (
              <article className="info-card" key={item.title}>
                <Icon name={item.icon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel" aria-labelledby="help-title">
          <h2 id="help-title" className="section-heading">What I can help with.</h2>
          <div className="help-grid">
            {helpItems.map((item) => (
              <article className="info-card" key={item.title}>
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="value-layout">
          <section className="section-panel" aria-labelledby="roles-title">
            <h2 id="roles-title" className="section-heading">Roles where I can add value.</h2>
            <div className="role-list">
              {roles.map((role) => (
                <div className="role-item" key={role}>
                  <SmallIcon name="person" /> {role} <span aria-hidden="true">›</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section-panel" aria-labelledby="why-title">
            <h2 id="why-title" className="section-heading">Why work with me?</h2>
            <div className="why-grid">
              {whyItems.map((item) => (
                <article className="why-card" key={item.title}>
                  <Icon name={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="connect-panel" aria-labelledby="connect-title">
          <h2 id="connect-title" className="section-heading">Let's connect.</h2>
          <p className="connect-lead">
            For internships, collaborations, campus roles, project work, or professional opportunities, you can reach me directly through email, LinkedIn, or phone.
          </p>

          <div className="contact-grid">
            <div className="contact-card"><Icon name="mail" /><div><strong>Email</strong><span>arpansamadder110@gmail.com</span></div></div>
            <div className="contact-card"><Icon name="phone" /><div><strong>Phone</strong><span>+8801776794766</span></div></div>
            <div className="contact-card"><Icon name="linkedin" /><div><strong>LinkedIn</strong><span>linkedin.com/in/arpansamadder</span></div></div>
            <div className="contact-card"><Icon name="location" /><div><strong>Location</strong><span>Savar, Dhaka, Bangladesh</span></div></div>
          </div>

          <div className="connect-actions">
            <a href="mailto:arpansamadder110@gmail.com" className="hire-action primary"><SmallIcon name="mail" />Send Email</a>
            <a href="https://linkedin.com/in/arpansamadder" className="hire-action"><SmallIcon name="linkedin" />Visit LinkedIn</a>
            <a href="/Arpan_Samadder_CV.pdf" className="hire-action" download><SmallIcon name="download" />Download CV</a>
          </div>
        </section>

        <section className="hire-final-cta" aria-label="Hire me call to action">
          <div>
            <h2>Have an opportunity where communication, leadership, and execution matter?</h2>
            <p>Let's talk about how I can contribute to your team, campaign, event, or project.</p>
          </div>
          <a href="mailto:arpansamadder110@gmail.com" className="primary-action">
            Contact Me <span aria-hidden="true">→</span>
          </a>
        </section>
      </div>
    </main>
  );
}
