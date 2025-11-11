// src/app/projects/tfl-micromobility/page.tsx
import type { Metadata } from "next";
import { ProjectHero } from "@/components/ProjectHero";
import { Tag } from "@/components/Tag";

export const metadata: Metadata = {
  title: "Measuring Micromobility - Capastone Project with TfL — Hamid Ostadi",
  description:
    "LSE MPA Capstone collaboration with Transport for London: measuring micromobility usage and designing evidence-based interventions for accessibility and mode shift.",
  alternates: { canonical: "https://hamidostadi.com/projects/tfl-micromobility" },
  openGraph: {
    title: "Measuring Micromobility - Capastone Project with TfL — Hamid Ostadi",
    description:
      "Behavioral and data-driven analysis of micromobility in London with TfL: methods, findings, and policy implications.",
    url: "https://hamidostadi.com/projects/tfl-micromobility",
    type: "article",
  },
};

export default function TfLMicromobility() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <ProjectHero
        title="Measuring Micromobility - Capastone Project with TfL"
        subtitle="LSE MPA Capstone with Transport for London: quantifying micromobility patterns and testing behaviorally informed interventions for equitable, sustainable transport."
        imgSrc="/projects/tfl-micromobility/hero.png" // add this
        alt="Micromobility in London with TfL"
      />

      {/* Status + Tags */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-emerald-400/40 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          Done
        </span>
        <div className="flex flex-wrap gap-2">
          <Tag>Public Transport</Tag>
          <Tag>Micromobility</Tag>
          <Tag>Behavioral Economics</Tag>
          <Tag>Data Analysis</Tag>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-10 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Summary</h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          A capstone collaboration with <strong>Transport for London (TfL)</strong> measuring micromobility usage and
          accessibility in post-COVID London. We combined platform and survey data with behavioral design to understand
          who rides, where gaps exist, and what targeted nudges could unlock equitable mode shift.
        </p>
      </section>

      {/* Problem */}
      <section className="mb-8 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
        <h3 className="mb-1 text-lg font-semibold">Problem</h3>
        <p className="text-zinc-700 dark:text-zinc-300">
          Micromobility offers low-carbon options, but adoption is uneven across income and geography. TfL needs reliable
          measures of usage and exposure, and practical levers to improve accessibility without widening inequities.
        </p>
      </section>

      {/* Approach */}
      <section className="mb-8 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
        <h3 className="mb-1 text-lg font-semibold">Approach</h3>
        <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
          <li>Built a micromobility measurement framework (exposure, usage, and accessibility proxies).</li>
          <li>Linked area-level indicators (deprivation, density, PTAL) to trip counts and availability.</li>
          <li>Designed behavioral nudges (timing, messaging, incentives) for targeted pilots.</li>
          <li>Compared interventions with a cost–benefit and equity screen.</li>
        </ul>
      </section>

      {/* Methods */}
      <section className="mb-8 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
        <h3 className="mb-1 text-lg font-semibold">Methods</h3>
        <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
          <li>Data assembly: trip/event feeds, borough stats, deprivation indices, station buffers.</li>
          <li>Descriptive + regression analysis for correlates of adoption and access gaps.</li>
          <li>Behavioral experiment design (randomized messaging/incentives; fairness constraints).</li>
          <li>Scenario modeling for uptake under targeted vs. universal interventions.</li>
        </ul>
      </section>

      {/* Results */}
      <section className="mb-8 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
        <h3 className="mb-1 text-lg font-semibold">Results (selected)</h3>
        <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
          <li>Identified geographic pockets with high exposure but low usage (latent demand).</li>
          <li>Evidence that targeted, time-bound prompts outperform untargeted messaging for first-rides.</li>
          <li>Equity screen flagged areas needing subsidy or infrastructure tweaks before nudges.</li>
        </ul>
      </section>

      {/* Role */}
      <section className="mb-8 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
        <h3 className="mb-1 text-lg font-semibold">My Role</h3>
        <p className="text-zinc-700 dark:text-zinc-300">
          Led data modeling and experimental design: built the measurement framework, engineered datasets, ran the
          analysis, and authored the recommendations with an equity lens.
        </p>
      </section>

      {/* Deliverables */}
      <section className="mb-10 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
        <h3 className="mb-2 text-lg font-semibold">Deliverables</h3>
        <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
          <li>Policy brief and executive deck for TfL.</li>
          <li>Dataset and reproducible analysis notebook.</li>
          <li>Cost–benefit and equity comparison of intervention options.</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="/projects/tfl-micromobility/tfl_capstone.pdf" // place your PDF here
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Download full report (PDF)
          </a>
        </div>
      </section>

      {/* Back/Explore */}
      <section className="flex flex-wrap gap-3">
        <a
          href="/projects"
          className="rounded-xl border border-zinc-200 px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          Back to Projects
        </a>
      </section>
    </main>
  );
}
