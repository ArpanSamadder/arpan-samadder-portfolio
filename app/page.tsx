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

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.55em] text-cyan-200/70">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-px w-40 bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_30px_rgba(77,232,255,0.75)]" />
    </div>
  );
}

function NeonCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <article className={`group relative overflow-hidden rounded-[2rem] border border-cyan-300/18 bg-[#07162f]/72 shadow-[0_24px_90px_rgba(0,20,70,0.5)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-cyan-200/45 hover:shadow-[0_0_60px_rgba(21,130,255,0.24)] ${className}`}>
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/85 to-transparent opacity-70" />
      <div className="absolute -right-16 -top-20 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-cyan-300/15" />
      <div className="relative z-10">{children}</div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020916] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(0,120,255,0.28),transparent_30%),radial-gradient(circle_at_78%_20%,rgba(77,232,255,0.14),transparent_26%),linear-gradient(135deg,#020916_0%,#041331_44%,#020713_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(77,232,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(77,232,255,0.08)_1px,transparent_1px)] [background-size:84px_84px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="pointer-events-none absolute left-[-12rem] top-32 h-[32rem] w-[32rem] rounded-full border border-cyan-300/10" />
      <div className="pointer-events-none absolute right-[-18rem] top-10 h-[44rem] w-[44rem] rounded-full border border-blue-400/10" />
      <div className="pointer-events-none absolute inset-x-0 top-[42rem] h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />

      <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-[#020916]/82 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Main navigation">
          <Link href="/" className="group flex items-center" aria-label="Arpan Samadder Home">
            <AssetImage
              src="/images/logo-mark.png"
              alt="Arpan Samadder logo mark"
              fallbackLabel="AS"
              className="h-12 w-12 rounded-2xl border border-cyan-300/35 bg-blue-500/10 shadow-[0_0_32px_rgba(39,136,255,0.35)]"
              fallbackClassName="bg-gradient-to-br from-blue-800 via-blue-500 to-cyan-300"
            >
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
            </AssetImage>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-cyan-300/15 bg-[#061733]/80 p-1 shadow-[0_0_35px_rgba(0,90,255,0.14)] md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-blue-100/78 transition hover:bg-cyan-300/10 hover:text-cyan-50 hover:shadow-[0_0_24px_rgba(77,232,255,0.18)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/hire-me"
            className="rounded-full border border-cyan-300/50 bg-cyan-300/10 px-5 py-2.5 text-sm font-black text-cyan-50 shadow-[0_0_28px_rgba(77,232,255,0.25)] transition hover:-translate-y-0.5 hover:bg-cyan-300/20"
          >
            Hire Me
          </Link>
        </nav>
        <div className="flex gap-2 overflow-x-auto border-t border-cyan-300/10 px-5 py-3 md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 rounded-full border border-cyan-300/14 bg-cyan-300/[0.06] px-4 py-2 text-sm text-blue-50/82">
              {item.label}
            </Link>
          ))}
        </div>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-14 px-5 pb-20 pt-16 md:grid-cols-[0.92fr_1.08fr] md:px-8 md:pb-24 md:pt-20">
        <div className="relative z-10">
          <div className="mb-8 h-px w-56 bg-gradient-to-r from-cyan-300 via-blue-500 to-transparent shadow-[0_0_32px_rgba(77,232,255,0.65)]" />
          <h1 className="font-display text-6xl font-black leading-[0.86] tracking-[-0.07em] text-white md:text-8xl lg:text-[8.8rem]">
            <span className="block bg-gradient-to-r from-white via-white to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(77,232,255,0.22)]">Arpan</span>
            <span className="mt-3 block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(37,99,235,0.28)]">Samadder</span>
          </h1>
          <p className="mt-8 max-w-2xl font-display text-2xl font-bold text-cyan-100 md:text-3xl">
            Business Student | Brand Communicator | Campus Leader
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/76">
            I turn ideas into campaigns, events, systems, and student-led platforms by combining communication, leadership, and execution discipline.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-[#020916] shadow-[0_0_45px_rgba(77,232,255,0.38)] transition hover:-translate-y-1 hover:shadow-[0_0_65px_rgba(77,232,255,0.55)]"
            >
              View My Work
            </Link>
            <Link
              href="/files/arpan-samadder-cv.pdf"
              className="rounded-full border border-cyan-300/45 bg-[#061733]/70 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-cyan-100 shadow-[inset_0_0_24px_rgba(77,232,255,0.08),0_0_26px_rgba(0,90,255,0.18)] transition hover:-translate-y-1 hover:bg-cyan-300/12"
            >
              Download CV
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-3 text-sm text-blue-100/72 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="mailto:arpansamadder110@gmail.com" className="rounded-full border border-cyan-300/16 bg-[#061733]/70 px-4 py-2 transition hover:border-cyan-200/50 hover:text-cyan-100 hover:shadow-[0_0_22px_rgba(77,232,255,0.14)]">
              Email: arpansamadder110@gmail.com
            </a>
            <a href="https://linkedin.com/in/arpansamadder/" className="rounded-full border border-cyan-300/16 bg-[#061733]/70 px-4 py-2 transition hover:border-cyan-200/50 hover:text-cyan-100 hover:shadow-[0_0_22px_rgba(77,232,255,0.14)]">
              LinkedIn: linkedin.com/in/arpansamadder/
            </a>
          </div>
        </div>

        <div className="relative z-10 min-h-[560px] md:min-h-[700px]">
          <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl md:h-[42rem] md:w-[42rem]" />
          <div className="absolute left-1/2 top-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-[54%] rounded-full border border-cyan-200/45 shadow-[0_0_80px_rgba(77,232,255,0.35),inset_0_0_75px_rgba(37,99,235,0.18)] md:h-[35rem] md:w-[35rem]" />
          <div className="absolute left-[53%] top-[49%] h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/25 md:h-[29rem] md:w-[29rem]" />
          <div className="absolute bottom-16 right-0 h-32 w-[72%] rotate-[-10deg] rounded-[999px] border-t-2 border-cyan-200/65 bg-cyan-300/10 blur-[1px] shadow-[0_0_36px_rgba(77,232,255,0.65)]" />
          <div className="absolute bottom-20 right-6 h-20 w-[56%] rotate-[-16deg] rounded-[999px] border-t border-blue-300/55 shadow-[0_0_28px_rgba(58,123,255,0.7)]" />
          <div className="absolute bottom-28 right-20 h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_26px_12px_rgba(77,232,255,0.55)]" />
          <AssetImage
            src="/images/arpan-hero-speaker.jpg"
            alt="Arpan Samadder speaking on stage"
            fallbackLabel="Hero image placeholder"
            className="absolute inset-x-0 bottom-0 mx-auto h-[560px] max-w-[34rem] rounded-b-[4rem] bg-transparent md:h-[700px] md:max-w-[42rem]"
            fallbackClassName="bg-[radial-gradient(circle_at_50%_30%,rgba(77,232,255,0.18),transparent_30%),linear-gradient(180deg,rgba(10,34,85,0.1),rgba(2,9,22,0.1))]"
          >
            <div className="absolute inset-x-12 bottom-0 h-40 bg-gradient-to-t from-[#020916] via-[#020916]/84 to-transparent" />
          </AssetImage>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => (
            <NeonCard key={item.title} className="p-6">
              <span className="text-sm font-black text-cyan-200 drop-shadow-[0_0_18px_rgba(77,232,255,0.8)]">0{index + 1}</span>
              <h3 className="mt-6 font-display text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-blue-100/68">{item.detail}</p>
            </NeonCard>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeading eyebrow="Selected roles" title="Experience" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {experiences.map((item) => (
            <NeonCard key={`${item.role}-${item.organization}`} className="p-7">
              <div className="mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 shadow-[0_0_24px_rgba(77,232,255,0.65)]" />
              <h3 className="font-display text-2xl font-bold text-white">{item.role}</h3>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.24em] text-cyan-200/78">{item.organization}</p>
              <p className="mt-5 leading-7 text-blue-100/68">{item.detail}</p>
            </NeonCard>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/experience" className="inline-flex rounded-full border border-cyan-300/45 bg-cyan-300/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-cyan-100 shadow-[0_0_28px_rgba(77,232,255,0.18)] transition hover:-translate-y-1 hover:bg-cyan-300/20">
            View All Experience
          </Link>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeading eyebrow="Selected builds" title="Projects" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <NeonCard key={project} className="overflow-hidden">
              <div className="relative flex h-52 items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(77,232,255,0.16),transparent_36%),linear-gradient(135deg,rgba(7,22,47,0.98),rgba(10,43,103,0.74))]">
                <div className="absolute inset-x-10 top-1/2 h-px bg-cyan-300/40 shadow-[0_0_24px_rgba(77,232,255,0.75)]" />
                <div className="absolute h-28 w-28 rounded-full border border-cyan-200/20" />
                <div className="rounded-3xl border border-cyan-200/25 bg-[#020916]/50 px-6 py-5 text-center backdrop-blur-md">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-100/75">Placeholder</p>
                  <p className="mt-2 font-display text-xl font-bold text-white">Visual pending</p>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-white">{project}</h3>
              </div>
            </NeonCard>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/projects" className="inline-flex rounded-full border border-cyan-300/45 bg-cyan-300/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-cyan-100 shadow-[0_0_28px_rgba(77,232,255,0.18)] transition hover:-translate-y-1 hover:bg-cyan-300/20">
            View All Projects
          </Link>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid overflow-hidden rounded-[2.5rem] border border-cyan-300/18 bg-[#061733]/72 shadow-[0_0_70px_rgba(0,70,200,0.18)] backdrop-blur-2xl md:grid-cols-4">
          {numbers.map((item) => (
            <div key={item.label} className="relative border-b border-cyan-300/12 p-8 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/65 to-transparent" />
              <p className="font-display text-5xl font-black text-cyan-100 drop-shadow-[0_0_22px_rgba(77,232,255,0.42)] md:text-6xl">{item.value}</p>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-100/64">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 rounded-[2.5rem] border border-cyan-300/18 bg-[#07162f]/74 p-7 shadow-[0_24px_90px_rgba(0,20,70,0.5)] backdrop-blur-2xl md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.55em] text-cyan-200/70">Core skills</p>
            <h2 className="mt-5 font-display text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">A practical skill set for planning, communication, and execution.</h2>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-cyan-200/22 bg-cyan-100/[0.07] px-5 py-3 text-sm font-bold text-cyan-50 shadow-[inset_0_0_18px_rgba(77,232,255,0.06)]">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-10 md:px-8" id="contact">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-cyan-200/24 bg-[radial-gradient(circle_at_50%_0%,rgba(77,232,255,0.18),transparent_34%),linear-gradient(135deg,rgba(7,28,78,0.9),rgba(2,9,22,0.98))] p-8 text-center shadow-[0_0_90px_rgba(0,90,255,0.22)] md:p-14">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/90 to-transparent" />
          <AssetImage
            src="/images/arpan-profile-photo.jpeg"
            alt="Arpan Samadder profile portrait"
            fallbackLabel="Profile photo placeholder"
            className="mx-auto h-28 w-28 rounded-full border border-cyan-100/35 bg-blue-900 shadow-[0_0_55px_rgba(77,232,255,0.28)]"
            fallbackClassName="bg-gradient-to-br from-cyan-500/40 via-blue-600 to-blue-950"
          />
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
            Need someone who can plan, communicate, organize, and execute?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50/76">
            I am open to internships, campus ambassador roles, part-time opportunities, brand communication work, campaign support, and project-based collaboration.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/hire-me" className="rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#020916] shadow-[0_0_45px_rgba(77,232,255,0.36)] transition hover:-translate-y-1">
              Hire Me
            </Link>
            <Link href="/projects" className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-white/15">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
