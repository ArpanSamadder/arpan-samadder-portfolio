import Link from "next/link";
import { AssetImage } from "@/components/AssetImage";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

const highlights = [
  {
    title: "Brand Communication",
    detail: "Campaign planning, client coordination, content direction, and creative execution.",
  },
  {
    title: "Campus Activation",
    detail: "Student outreach, ambassador coordination, event promotion, and community engagement.",
  },
  {
    title: "Sponsorship & Outreach",
    detail: "Proposal preparation, company research, partnership communication, and follow-up systems.",
  },
  {
    title: "AI-Assisted Execution",
    detail: "Using AI tools to speed up content planning, research, scripts, and workflow organization.",
  },
];

const experiences = [
  {
    role: "Brand & Communication Manager",
    organization: "Executive Media",
    detail: "Campaign planning, client communication, creative coordination, and brand project execution.",
  },
  {
    role: "Founder",
    organization: "Biztigation",
    detail: "Built and led a national business case competition platform under JU Finance and Banking.",
  },
  {
    role: "Corporate Affairs Wing Secretary",
    organization: "JUCC",
    detail: "Worked on sponsorship outreach, event operations, promotional campaigns, and volunteer coordination.",
  },
  {
    role: "Volunteer",
    organization: "MoFA",
    detail: "Supported delegate coordination and control-room communication during election operations.",
  },
];

const projects = ["Biztigation", "Biztigation 2.0 CRM-Style Outreach System", "Prottoy AI", "Sense of Return 2.0"];

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

function SectionHeading({ title, copy }: { title: string; copy?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.42em] text-cyan-200/75">Portfolio signal</p>
      <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-8 text-blue-100/68 md:text-lg">{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="home-shell min-h-screen overflow-hidden text-white">
      <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-[#020814]/80 backdrop-blur-2xl">
        <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 md:px-8" aria-label="Main navigation">
          <Link href="/" className="group flex items-center" aria-label="Arpan Samadder Home">
            <AssetImage
              src="/images/logo-mark.png"
              alt="Arpan Samadder logo mark"
              fallbackLabel="AS"
              className="h-12 w-12 rounded-2xl border border-cyan-300/35 bg-blue-500/10 shadow-[0_0_28px_rgba(77,232,255,0.18)] transition group-hover:border-cyan-200/70"
              fallbackClassName="bg-gradient-to-br from-blue-950 via-blue-700 to-cyan-300"
            >
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
            </AssetImage>
          </Link>

          <div className="hidden justify-self-center rounded-full border border-cyan-200/15 bg-white/[0.045] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_0_35px_rgba(37,99,235,0.16)] backdrop-blur-xl md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-blue-100/78 transition hover:bg-cyan-300/10 hover:text-cyan-50 hover:shadow-[0_0_20px_rgba(77,232,255,0.14)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/hire-me"
            className="justify-self-end rounded-full border border-cyan-300/50 bg-cyan-300/10 px-5 py-2.5 text-sm font-black text-cyan-50 shadow-[0_0_28px_rgba(77,232,255,0.25),inset_0_0_18px_rgba(77,232,255,0.08)] transition hover:-translate-y-0.5 hover:bg-cyan-300/20"
          >
            Hire Me
          </Link>
        </nav>
        <div className="flex gap-2 overflow-x-auto border-t border-cyan-300/10 px-5 py-3 md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-blue-50/80">
              {item.label}
            </Link>
          ))}
        </div>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 pt-12 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:pb-20 md:pt-14 lg:min-h-[calc(100vh-81px)]">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-600/25 blur-[110px]" />
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="relative z-10 max-w-2xl">
          <h1 className="font-display text-6xl font-black leading-[0.86] tracking-[-0.055em] text-white drop-shadow-[0_0_28px_rgba(77,232,255,0.16)] md:text-8xl lg:text-[8.6rem]">
            Arpan
            <br />
            <span className="text-white">Samadder</span>
          </h1>
          <p className="mt-7 max-w-2xl font-display text-xl font-bold text-cyan-300 drop-shadow-[0_0_18px_rgba(77,232,255,0.32)] md:text-2xl">
            Business Student | Brand Communicator | Campus Leader
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100/72 md:text-lg">
            I turn ideas into campaigns, events, systems, and student-led platforms by combining communication, leadership, and execution discipline.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-full bg-cyan-200 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-[#031027] shadow-[0_0_34px_rgba(77,232,255,0.32)] transition hover:-translate-y-1 hover:bg-white"
            >
              View My Work
            </Link>
            <Link
              href="/files/arpan-samadder-cv.pdf"
              className="rounded-full border border-cyan-300/45 bg-white/[0.045] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-cyan-100 shadow-[inset_0_0_20px_rgba(77,232,255,0.08)] transition hover:-translate-y-1 hover:bg-cyan-300/20"
            >
              Download CV
            </Link>
          </div>
          <div className="mt-7 flex flex-col gap-3 text-sm text-blue-100/72 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="mailto:arpansamadder110@gmail.com" className="rounded-full border border-cyan-200/15 bg-white/[0.045] px-4 py-2 transition hover:border-cyan-200/50 hover:text-cyan-100">
              Email: arpansamadder110@gmail.com
            </a>
            <a href="https://linkedin.com/in/arpansamadder/" className="rounded-full border border-cyan-200/15 bg-white/[0.045] px-4 py-2 transition hover:border-cyan-200/50 hover:text-cyan-100">
              LinkedIn: linkedin.com/in/arpansamadder/
            </a>
          </div>
        </div>

        <div className="hero-composition relative z-10 mx-auto flex min-h-[610px] w-full max-w-[680px] items-center justify-center md:min-h-[690px]">
          <div className="hero-neon-ring absolute" />
          <div className="hero-orbital-ring hero-orbital-ring-one absolute" />
          <div className="hero-orbital-ring hero-orbital-ring-two absolute" />
          <div className="hero-blue-bloom absolute" />
          <div className="electric-swoosh electric-swoosh-back electric-swoosh-one" />
          <div className="electric-swoosh electric-swoosh-back electric-swoosh-two" />
          <div className="electric-swoosh electric-swoosh-front electric-swoosh-three" />
          <div className="electric-swoosh electric-swoosh-front electric-swoosh-four" />

          <AssetImage
            src="/images/arpan-hero-speaker.jpg"
            alt="Arpan Samadder speaking on stage"
            fallbackLabel="Hero image unavailable"
            className="hero-portrait relative z-10 h-[600px] w-[470px] bg-transparent md:h-[690px] md:w-[540px]"
            fallbackClassName="bg-[radial-gradient(circle_at_42%_25%,rgba(77,232,255,0.24),transparent_30%),linear-gradient(145deg,#08235a,#050b18)]"
          >
            <div className="hero-photo-blue-wash absolute inset-0" />
            <div className="hero-photo-edge-fade absolute inset-0" />
          </AssetImage>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => (
            <article key={item.title} className="neon-card group rounded-[1.6rem] p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-300/10 text-sm font-black text-cyan-100 shadow-[0_0_24px_rgba(77,232,255,0.13)]">0{index + 1}</span>
              <h3 className="mt-5 font-display text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-blue-100/64">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionHeading title="Experience" copy="A compact view of the roles where communication, operations, sponsorship, and leadership became practical execution." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {experiences.map((item) => (
            <article key={`${item.role}-${item.organization}`} className="neon-card group rounded-[1.75rem] p-6 transition hover:-translate-y-2">
              <div className="mb-7 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-200 via-blue-400 to-transparent shadow-[0_0_18px_rgba(77,232,255,0.42)]" />
              <h3 className="font-display text-xl font-bold text-white">{item.role}</h3>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-200/78">{item.organization}</p>
              <p className="mt-4 text-sm leading-7 text-blue-100/66">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Link href="/experience" className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-300/20">
            View All Experience
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionHeading title="Projects" copy="Selected platforms, campaign systems, and AI-assisted ideas shaped through student leadership and execution discipline." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <article key={project} className="neon-card group overflow-hidden rounded-[1.75rem]">
              <div className="relative flex h-44 items-end overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(77,232,255,0.22),transparent_30%),linear-gradient(135deg,rgba(8,35,90,0.9),rgba(2,8,20,0.95))] p-5">
                <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-cyan-200/20 shadow-[0_0_50px_rgba(77,232,255,0.18)]" />
                <div className="absolute left-5 top-5 h-px w-24 bg-gradient-to-r from-cyan-200 to-transparent" />
                <p className="relative text-xs font-black uppercase tracking-[0.32em] text-cyan-100/72">Project 0{index + 1}</p>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white">{project}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Link href="/projects" className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-300/20">
            View All Projects
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="neon-card grid overflow-hidden rounded-[2rem] md:grid-cols-4">
          {numbers.map((item) => (
            <div key={item.label} className="border-b border-cyan-200/10 p-7 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              <p className="font-display text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200 md:text-6xl">{item.value}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-100/58">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="neon-card grid gap-8 rounded-[2rem] p-7 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-cyan-200/80">Core skills</p>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-white md:text-5xl">A practical skill set for planning, communication, and execution.</h2>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-cyan-200/20 bg-cyan-100/10 px-5 py-3 text-sm font-semibold text-cyan-50 shadow-[inset_0_0_16px_rgba(77,232,255,0.06)]">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-8 md:px-8" id="contact">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-cyan-200/20 bg-[radial-gradient(circle_at_18%_0%,rgba(77,232,255,0.24),transparent_30%),linear-gradient(135deg,rgba(8,35,90,0.95),rgba(2,8,20,0.98)_55%,rgba(3,16,39,0.96))] p-8 text-center shadow-[0_28px_90px_rgba(0,0,0,0.45),0_0_70px_rgba(37,99,235,0.16)] md:p-12">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/90 to-transparent" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-cyan-200/15" />
          <AssetImage
            src="/images/arpan-profile-photo.jpeg"
            alt="Arpan Samadder profile portrait"
            fallbackLabel="Profile photo unavailable"
            className="mx-auto h-24 w-24 rounded-full border border-cyan-100/40 bg-blue-900 shadow-[0_0_45px_rgba(77,232,255,0.22)]"
            fallbackClassName="bg-gradient-to-br from-cyan-500/40 via-blue-600 to-blue-950"
          />
          <h2 className="mx-auto mt-7 max-w-3xl font-display text-3xl font-black tracking-tight text-white md:text-5xl">
            Need someone who can plan, communicate, organize, and execute?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50/72">
            I am open to internships, campus ambassador roles, part-time opportunities, brand communication work, campaign support, and project-based collaboration.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/hire-me" className="rounded-full bg-cyan-200 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#031027] shadow-[0_0_34px_rgba(77,232,255,0.28)] transition hover:-translate-y-1 hover:bg-white">
              Hire Me
            </Link>
            <Link href="/hire-me" className="rounded-full border border-cyan-200/25 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-white/15">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
