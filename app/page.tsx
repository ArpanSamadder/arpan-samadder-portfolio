import Link from "next/link";
import { AssetImage } from "@/components/AssetImage";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Hire Me", href: "/hire-me" },
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
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-8 text-blue-100/72 md:text-lg">{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-radial-royal text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-royal-950/75 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Main navigation">
          <Link href="/" className="group flex items-center" aria-label="Arpan Samadder Home">
            <AssetImage
              src="/images/logo-mark.png"
              alt="Arpan Samadder logo mark"
              fallbackLabel="AS"
              className="h-11 w-11 rounded-2xl border border-cyan-300/25 bg-blue-500/10"
              fallbackClassName="bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-300"
            >
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
            </AssetImage>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-blue-100/78 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/hire-me"
            className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 shadow-glow transition hover:bg-cyan-300/20"
          >
            Hire Me
          </Link>
        </nav>
        <div className="flex gap-2 overflow-x-auto border-t border-white/10 px-5 py-3 md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 rounded-full bg-white/[0.06] px-4 py-2 text-sm text-blue-50/80">
              {item.label}
            </Link>
          ))}
        </div>
      </header>

      <section className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-28 md:pt-24">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative z-10 flex flex-col justify-center">
          <h1 className="font-display text-5xl font-black leading-[0.96] tracking-tight text-white md:text-7xl lg:text-8xl">
            I&apos;m <span className="text-cyan-300 drop-shadow-[0_0_24px_rgba(77,232,255,0.45)]">Arpan</span>
            <br />
            Samadder
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-semibold text-cyan-100 md:text-3xl">
            Business Student. Brand Communicator. Campus Leader.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/74">
            I turn ideas into campaigns, events, systems, and student-led platforms by combining communication, leadership, and execution discipline.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/files/arpan-samadder-cv.pdf"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-royal-950 transition hover:-translate-y-1 hover:shadow-glow"
            >
              Download CV
            </Link>
            <Link
              href="/hire-me"
              className="rounded-full border border-cyan-300/45 bg-cyan-300/10 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-300/20"
            >
              Contact Me
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-3 text-sm text-blue-100/72 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="mailto:arpansamadder110@gmail.com" className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 transition hover:border-cyan-200/40 hover:text-cyan-100">
              Email: arpansamadder110@gmail.com
            </a>
            <a href="https://linkedin.com/in/arpansamadder/" className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 transition hover:border-cyan-200/40 hover:text-cyan-100">
              LinkedIn: linkedin.com/in/arpansamadder/
            </a>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -left-8 top-8 h-28 w-28 rounded-full border border-cyan-200/20" />
          <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-cyan-300/10 blur-2xl" />
          <AssetImage
            src="/images/arpan-hero-speaker.jpg"
            alt="Arpan Samadder speaking on stage"
            fallbackLabel="Hero image placeholder"
            className="min-h-[520px] rounded-[2.5rem] border border-white/15 bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-900 shadow-card"
            fallbackClassName="bg-[radial-gradient(circle_at_30%_20%,rgba(77,232,255,0.25),transparent_28%),linear-gradient(145deg,#08235a,#050b18)]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-royal-950/78 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-100/80">Available for</p>
              <p className="mt-2 font-display text-2xl font-bold text-white">Campaigns, events, outreach, and execution roles</p>
            </div>
          </AssetImage>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => (
            <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-card backdrop-blur-xl">
              <span className="text-sm font-black text-cyan-200">0{index + 1}</span>
              <h3 className="mt-5 font-display text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-blue-100/65">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeading title="Experience" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {experiences.map((item) => (
            <article key={`${item.role}-${item.organization}`} className="rounded-[2rem] border border-blue-300/15 bg-blue-950/45 p-7 transition hover:-translate-y-2 hover:border-cyan-200/35 hover:bg-blue-900/50">
              <div className="mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" />
              <h3 className="font-display text-2xl font-bold text-white">{item.role}</h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200/78">{item.organization}</p>
              <p className="mt-4 leading-7 text-blue-100/68">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/experience" className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-300/20">
            View All Experience
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeading title="Projects" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article key={project} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-card backdrop-blur-xl">
              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-blue-950 via-blue-800/70 to-cyan-900/70">
                <div className="rounded-3xl border border-cyan-200/25 bg-white/10 px-6 py-5 text-center backdrop-blur-md">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-100/75">Placeholder</p>
                  <p className="mt-2 font-display text-xl font-bold text-white">Visual pending</p>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-white">{project}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/projects" className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-300/20">
            View All Projects
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid overflow-hidden rounded-[2.5rem] border border-cyan-200/15 bg-white/[0.055] shadow-card backdrop-blur-xl md:grid-cols-4">
          {numbers.map((item) => (
            <div key={item.label} className="border-b border-white/10 p-8 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              <p className="font-display text-4xl font-black text-cyan-100 md:text-5xl">{item.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-blue-100/60">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-blue-950/45 p-7 shadow-card backdrop-blur-xl md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200/80">Core skills</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">A practical skill set for planning, communication, and execution.</h2>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-cyan-200/20 bg-cyan-100/10 px-5 py-3 text-sm font-semibold text-cyan-50">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-10 md:px-8" id="contact">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-200/20 bg-gradient-to-br from-blue-700/70 via-blue-950 to-cyan-950 p-8 text-center shadow-card md:p-14">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent" />
          <AssetImage
            src="/images/arpan-profile-photo.jpeg"
            alt="Arpan Samadder profile portrait"
            fallbackLabel="Profile photo placeholder"
            className="mx-auto h-28 w-28 rounded-full border border-cyan-100/35 bg-blue-900 shadow-glow"
            fallbackClassName="bg-gradient-to-br from-cyan-500/40 via-blue-600 to-blue-950"
          />
          <h2 className="mx-auto mt-8 max-w-3xl font-display text-3xl font-black tracking-tight text-white md:text-5xl">
            Need someone who can plan, communicate, organize, and execute?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50/75">
            I am open to internships, campus ambassador roles, part-time opportunities, brand communication work, campaign support, and project-based collaboration.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/hire-me" className="rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-royal-950 transition hover:-translate-y-1">
              Hire Me
            </Link>
            <Link href="/hire-me" className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-white/15">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
