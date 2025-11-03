"use client";

import { useState } from "react";
import Image from "next/image"

type ArmKey = "control" | "ai" | "ai_adaptive";
type KPI = {
  label: string;
  value?: number | string; // fill with your real estimates later
  note?: string;
};

type Arm = {
  title: string;
  intent: string;
  mechanism: string;
  kpis: KPI[];
  notes: string;
};

const ARMS: Record<ArmKey, Arm> = {
  control: {
    title: "Arm 1 — Control (No AI)",
    intent: "Establish baseline reader performance without assistance.",
    mechanism:
      "Radiologist reads the CXR unaided; no suggestion/uncertainty framing is shown.",
    kpis: [
      { label: "Diagnostic Accuracy (AUC)", value: "—", note: "Fill from ITT" },
      { label: "Escalation Rate", value: "—", note: "CT / specialist referral" },
      { label: "Reading Time (sec)", value: "—" },
      { label: "Calibration / Overconfidence", value: "—" },
    ],
    notes:
      "Used for ITT contrasts with Arm 2/3. Post-decision reveal extension can probe counterfactual shifts.",
  },
  ai: {
    title: "Arm 2 — AI Assistance (Explainer + Suggestion)",
    intent: "Measure effect of AI suggestion + explanation on reader behavior.",
    mechanism:
      "After initial read (or at read time), the assistant displays predicted label + short rationale. Reader can override/accept.",
    kpis: [
      { label: "Δ Accuracy vs Control", value: "—" },
      { label: "Δ Escalation vs Control", value: "—" },
      { label: "Reading Time (sec)", value: "—" },
      { label: "Appropriate Overrides (%)", value: "—" },
    ],
    notes:
      "Primary behavior channel: suggestion nudges borderline cases; risk: anchoring. Guardrails and verifier logic limit unsafe nudges.",
  },
  ai_adaptive: {
    title: "Arm 3 — AI + Adaptive Confidence Framing",
    intent:
      "Test whether calibrated, adaptive uncertainty framing improves safety vs simple suggestions.",
    mechanism:
      "Assistant surfaces suggestion + a confidence frame (e.g., ‘low certainty—seek escalation’). Framing adapts to case difficulty.",
    kpis: [
      { label: "Δ Accuracy vs Control", value: "—" },
      { label: "Δ Escalation vs Control", value: "—" },
      { label: "Time to Decision (sec)", value: "—" },
      { label: "Unsafe Acceptance Rate (%)", value: "—" },
    ],
    notes:
      "Hypothesis: calibrated framing reduces over-trust in AI and improves escalation on uncertain cases.",
  },
};

export default function RadiologyInteractive() {
  const [arm, setArm] = useState<ArmKey>("control");
  const a = ARMS[arm];
  const [showPseudo, setShowPseudo] = useState(false);

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-zinc-900 dark:text-zinc-100">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          CXR Reader Study — Interactive Overview
        </h1>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Explore the randomized controlled design, assistance mechanism, and
          causal plan. Switch arms to see intended behavior channels and the
          KPIs you’ll analyze in ITT models.
        </p>
      </header>

      {/* Arm selector */}
      <div className="mt-8">
        <label
          htmlFor="arm"
          className="block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2"
        >
          Experiment Arm
        </label>
        <select
          id="arm"
          className="w-full rounded-2xl border border-zinc-200/60 bg-white px-4 py-3 text-sm shadow-sm
                     dark:border-zinc-800/60 dark:bg-zinc-900"
          value={arm}
          onChange={(e) => setArm(e.target.value as ArmKey)}
        >
          <option value="control">Arm 1 — Control</option>
          <option value="ai">Arm 2 — AI Assistance</option>
          <option value="ai_adaptive">Arm 3 — AI + Adaptive Framing</option>
        </select>
      </div>

      {/* Arm detail */}
      <div className="mt-6 rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm
                      dark:border-zinc-800/60 dark:bg-zinc-900">
        <div className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 mb-1">
          {a.title}
        </div>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          <span className="font-medium">Intent:</span> {a.intent}
        </p>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
          <span className="font-medium">Mechanism:</span> {a.mechanism}
        </p>
      </div>

      {/* KPI cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {a.kpis.map((k) => (
          <div
            key={k.label}
            className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm
                       dark:border-zinc-800/60 dark:bg-zinc-900"
          >
            <div className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {k.label}
            </div>
            <div className="mt-1 text-2xl font-semibold tabular-nums">
              {k.value ?? "—"}
            </div>
            {k.note && (
              <div className="text-[11px] text-zinc-600 dark:text-zinc-500">
                {k.note}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modules quick links */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900">
          <div className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400">
            Experiment Proposal
          </div>
          <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
            <li><span className="font-medium">Protocol:</span> reader-level RCT (3 arms)</li>
            <li>Post-decision reveal (control extension)</li>
            <li>Adaptive uncertainty framing (Arms 2/3)</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900">
          <div className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400">
            Agent Design
          </div>
          <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
            <li>Explainer prompt + verifier guardrails</li>
            <li>Latency SLOs + privacy</li>
            <li>UI payload schema</li>
          </ul>
          <button
            onClick={() => setShowPseudo(true)}
            className="mt-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            View pseudocode →
          </button>
        </div>
        <div className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900">
          <div className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400">
            Causal Analysis
          </div>
          <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
            <li>ITT models + robustness</li>
            <li>Endogeneity mitigation plan</li>
            <li>Design spec (estimands, masking)</li>
          </ul>
        </div>
        <div className="mt-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 p-3">
            <a
             href="/radiology-dag.png"
             target="_blank"
             rel="noopener noreferrer"
             title="Open full-size DAG in new tab"
             className="block cursor-zoom-in"
            >
            <Image
             src="/radiology-dag.png"
             alt="Causal DAG for CXR Reader Study"
             width={1200}
             height={800}
             className="w-full h-auto rounded-md shadow-sm hover:opacity-90 transition"
             priority
            />
            </a>
            <p className="mt-2 text-center text-xs text-zinc-500 dark:text-zinc-400">
             Click to view full size
            </p>
        </div>

    </div>

      {/* Why it matters */}
      <div className="mt-10 rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900">
        <div className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 mb-2">
          Why this matters
        </div>
        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          The experiment measures not just model accuracy, but how human+AI
          decision loops change: escalation choices, time to decision, and
          responsibility. Arm 3 tests whether calibrated uncertainty framing
          improves safety and reduces over-trust.
        </p>
      </div>

      {/* Back link */}
      <div className="mt-12 text-center sm:text-left">
        <a href="/projects" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Projects
        </a>
      </div>

      {/* Pseudocode modal */}
      {showPseudo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowPseudo(false)}>
          <div className="max-w-2xl w-full rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-lg
                          dark:border-zinc-800/60 dark:bg-zinc-900"
               onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Orchestrator pseudocode</div>
              <button className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400" onClick={() => setShowPseudo(false)}>✕</button>
            </div>
            <pre className="mt-3 max-h-[50vh] overflow-auto rounded-lg bg-zinc-50 p-4 text-xs text-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
{`// Paste from agent_design/pseudocode.md (≈25 lines)
function assist(case) {
  const read = getInitialReaderAssessment(case)
  const ai = getAISuggestion(case) // label + rationale + confidence
  const framed = applyAdaptiveFraming(ai, case) // Arm 3 only
  const decision = reconcile(read, framed ?? ai)
  logLatencySLOs()
  return decision
}`}
            </pre>
          </div>
        </div>
      )}
    </section>
  );
}
