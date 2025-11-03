"use client";

import { useState } from "react";

type ScenarioKey = "baseline" | "transition";

type ScenarioData = {
  label: string;
  exposedWorkers: number;        // workers at risk of displacement
  retrainingCostMUSD: number;    // budget estimate in millions USD
  householdsAtRisk: number;      // households needing temporary income support
  blurb: string;                 // narrative text
};

const SCENARIOS: Record<ScenarioKey, ScenarioData> = {
  baseline: {
    label: "Current policy baseline",
    exposedWorkers: 80000,
    retrainingCostMUSD: 120,
    householdsAtRisk: 15000,
    blurb:
      "No targeted transition policy. High displacement risk in carbon-intensive sectors, mostly unmanaged by social protection.",
  },
  transition: {
    label: "Accelerated green transition",
    exposedWorkers: 55000,
    retrainingCostMUSD: 180,
    householdsAtRisk: 9000,
    blurb:
      "Active reskilling + income support. Fewer vulnerable households, but higher up-front training budget and coordination needs.",
  },
};

export default function DataTaskDemoPage() {
  const [scenario, setScenario] = useState<ScenarioKey>("baseline");
  const data = SCENARIOS[scenario];

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-zinc-900 dark:text-zinc-100">
      {/* Page header */}
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
          Social Protection / Just Transition Dashboard
        </h1>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl">
          Prototype policy surface I use when advising on labour transitions.
          Change the scenario and see how many workers are exposed, how many
          households need support, and what the budget looks like. This is the
          kind of tool I build for climate transition and social protection teams.
        </p>
      </header>

      {/* Scenario selector */}
      <div className="mt-8">
        <label
          htmlFor="scenario"
          className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2"
        >
          Scenario
        </label>

        <select
          id="scenario"
          className="w-full rounded-2xl border border-zinc-200/60 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm
                     dark:border-zinc-800/60 dark:bg-zinc-900 dark:text-zinc-100"
          value={scenario}
          onChange={(e) => setScenario(e.target.value as ScenarioKey)}
        >
          <option value="baseline">Baseline (do nothing)</option>
          <option value="transition">Managed transition</option>
        </select>

        <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">
          {data.label}. {data.blurb}
        </p>
      </div>

      {/* KPI cards */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {/* Exposed workers */}
        <div className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm
                        dark:border-zinc-800/60 dark:bg-zinc-900">
          <div className="text-[10px] font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">
            Exposed workers
          </div>
          <div className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100 tabular-nums">
            {data.exposedWorkers.toLocaleString()}
          </div>
          <div className="text-[11px] text-zinc-600 dark:text-zinc-500 leading-snug">
            Jobs at risk of displacement
          </div>
        </div>

        {/* Retraining budget */}
        <div className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm
                        dark:border-zinc-800/60 dark:bg-zinc-900">
          <div className="text-[10px] font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">
            Retraining budget
          </div>
          <div className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100 tabular-nums">
            ${data.retrainingCostMUSD}M
          </div>
          <div className="text-[11px] text-zinc-600 dark:text-zinc-500 leading-snug">
            Public financing estimate
          </div>
        </div>

        {/* Households needing support */}
        <div className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm
                        dark:border-zinc-800/60 dark:bg-zinc-900">
          <div className="text-[10px] font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide">
            At-risk households
          </div>
          <div className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100 tabular-nums">
            {data.householdsAtRisk.toLocaleString()}
          </div>
          <div className="text-[11px] text-zinc-600 dark:text-zinc-500 leading-snug">
            Need income stabilization / transfers
          </div>
        </div>
      </div>

      {/* Explanation / credibility block */}
      <div className="mt-10 rounded-2xl border border-zinc-200/60 bg-white p-5 text-sm leading-relaxed shadow-sm
                      dark:border-zinc-800/60 dark:bg-zinc-900 dark:text-zinc-300">
        <div className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 tracking-wide mb-2">
          Why this matters
        </div>
        <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
          These are the kinds of surfaces I build when governments or multilaterals
          ask: “If we accelerate decarbonization, who gets hurt first, how do we
          protect them, and what does that cost by year?”.
        </p>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
          I focus on translating labour disruption, reskilling needs, and household
          vulnerability into numbers decision-makers can actually allocate budget
          against. Not just a PDF — something a minister can look at and say
          “OK, fund this first.”
        </p>
      </div>

      {/* Back link to full projects list */}
      <div className="mt-12 text-center sm:text-left">
        <a
          href="/projects"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Back to Projects
        </a>
      </div>
    </section>
  );
}
