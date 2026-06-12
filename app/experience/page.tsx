import Link from "next/link";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-radial-royal px-5 py-16 text-white md:px-8">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-card backdrop-blur-xl md:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200/80">Placeholder route</p>
        <h1 className="mt-5 font-display text-4xl font-black tracking-tight md:text-6xl">Experience</h1>
        <p className="mt-6 text-lg leading-8 text-blue-100/72">
          This page is intentionally scaffolded so the navigation works now. Final content can be added here without changing the Home page links.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-100 transition hover:bg-cyan-300/20">
          Back Home
        </Link>
      </section>
    </main>
  );
}
