import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Reducing Bedtime Procrastination with MCII — RCT at LSE",
  description:
    "Randomized evaluation testing MCII to reduce digital-media-driven bedtime procrastination among students.",
  openGraph: {
    title: "Reducing Bedtime Procrastination with MCII — RCT at LSE",
    images: ["/projects/bedtime-procrastination/hero.png"],
  },
};

export default function ProjectBedtimeProcrastination() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          Reducing Bedtime Procrastination with MCII (RCT)
        </h1>
        <p className="mt-2 text-muted-foreground">
          PP452 — Applying Behavioural Economics for Social Impact (Dec 2023)
        </p>
      </header>

      <div className="relative mb-8 overflow-hidden rounded-2xl">
        <Image
          src="/projects/bedtime-procrastination/hero.png"
          alt="MCII RCT project cover"
          width={1400}
          height={700}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      {/* Quick facts */}
      <section className="mb-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border p-4">
          <p className="text-sm text-muted-foreground">Design</p>
          <p className="text-base">Randomized, phase-in (2 weeks)</p>
        </div>
        <div className="rounded-2xl border p-4">
          <p className="text-sm text-muted-foreground">Sample</p>
          <p className="text-base">46 students (UG + PG)</p>
        </div>
        <div className="rounded-2xl border p-4">
          <p className="text-sm text-muted-foreground">Intervention</p>
          <p className="text-base">MCII training sessions (+ if-then routine)</p>
        </div>
        <div className="rounded-2xl border p-4">
          <p className="text-sm text-muted-foreground">Outcomes</p>
          <p className="text-base">BPS, media minutes, bedtime gap, satisfaction</p>
        </div>
      </section>

      {/* Summary */}
      <section className="prose prose-neutral dark:prose-invert">
        <h2>Summary</h2>
        <p>
          We ran a randomized evaluation at LSE to test whether{" "}
          <em>Mental Contrasting with Implementation Intentions (MCII)</em> can reduce
          digital-media-induced bedtime procrastination. Participants in the treatment arm
          received MCII training; controls were phased in later.
        </p>

        <h3>Team</h3>
        <p>
          Meher Bano · Mikayla Boginsky · Sanjana Meka · <strong>Hamid Ostadi</strong> · Phoebe Roberts
        </p>
      </section>

      {/* Links */}
      <section className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/projects/bedtime-procrastination/pp452-rct-bedtime-procrastination.pdf"
          className="rounded-xl border px-4 py-2 transition hover:bg-accent hover:text-accent-foreground"
        >
          Download full report (PDF)
        </Link>

        {/* Optional inline viewer — keep if you want an embedded PDF preview */}
        {/* <Link
          href="#pdf"
          className="rounded-xl border px-4 py-2 transition hover:bg-accent hover:text-accent-foreground"
        >
          View inline
        </Link> */}
      </section>

      {/* Optional embedded PDF section (uncomment if you want an inline viewer) */}
      {/* <section id="pdf" className="mt-10">
        <div className="rounded-2xl border">
          <object
            data="/projects/bedtime-procrastination/pp452-rct-bedtime-procrastination.pdf#view=FitH"
            type="application/pdf"
            className="h-[80vh] w-full rounded-2xl"
          >
            <p className="p-4">
              PDF viewer not available.{" "}
              <a
                className="underline"
                href="/projects/bedtime-procrastination/pp452-rct-bedtime-procrastination.pdf"
              >
                Download the report
              </a>
              .
            </p>
          </object>
        </div>
      </section> */}
    </main>
  );
}
