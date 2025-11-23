"use client";

import { useMemo, useState } from "react";

type View = "intro" | "experiment" | "post-experiment" | "results";

type Case = {
  id: number;
  peTruth: "Yes" | "No";
  hasAI: boolean;
  aiLabel?: string;
  age: number;
  sex: "M" | "F";
};

type Response = {
  caseId: number;
  peTruth: "Yes" | "No";
  hasAI: boolean;
  aiLabel?: string;
  diagnosis: "Yes" | "No";
  confidence: number;
  isCorrect: boolean;
  timeMs: number | null;
};

const CASES: Case[] = [
  { id: 1, peTruth: "Yes", hasAI: true, aiLabel: "PE likely", age: 67, sex: "F" },
  { id: 2, peTruth: "No", hasAI: true, aiLabel: "PE unlikely", age: 54, sex: "M" },
  { id: 3, peTruth: "Yes", hasAI: true, aiLabel: "PE unlikely", age: 72, sex: "M" },
  { id: 4, peTruth: "No", hasAI: true, aiLabel: "PE likely", age: 45, sex: "F" },
  { id: 5, peTruth: "Yes", hasAI: true, aiLabel: "PE likely", age: 60, sex: "F" },
  { id: 6, peTruth: "No", hasAI: false, age: 51, sex: "M" },
  { id: 7, peTruth: "Yes", hasAI: false, age: 69, sex: "F" },
  { id: 8, peTruth: "No", hasAI: false, age: 39, sex: "F" },
  { id: 9, peTruth: "Yes", hasAI: false, age: 58, sex: "M" },
  { id: 10, peTruth: "No", hasAI: false, age: 63, sex: "F" },
];

// Simple shuffle helper that returns a new array
function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function AiRadiologyRctDemoPage() {
  const [view, setView] = useState<View>("intro");
  const [sequence, setSequence] = useState<Case[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [currentDiagnosis, setCurrentDiagnosis] = useState<"Yes" | "No" | null>(
    null
  );
  const [currentConfidence, setCurrentConfidence] = useState<number>(0);

  const [responses, setResponses] = useState<Response[]>([]);
  const [caseStartTime, setCaseStartTime] = useState<number | null>(null);

  const currentCase =
    view === "experiment" && sequence.length > 0
      ? sequence[currentIndex]
      : null;

  function handleStartDemo() {
    const shuffled = shuffle(CASES);
    setSequence(shuffled);
    setCurrentIndex(0);
    setCurrentDiagnosis(null);
    setCurrentConfidence(0);
    setResponses([]);
    setCaseStartTime(Date.now());
    setView("experiment");
  }

  function recordCurrentResponse(timeMs: number | null) {
    if (!currentCase || currentDiagnosis === null) return;

    const isCorrect = currentDiagnosis === currentCase.peTruth;

    const resp: Response = {
      caseId: currentCase.id,
      peTruth: currentCase.peTruth,
      hasAI: currentCase.hasAI,
      aiLabel: currentCase.aiLabel,
      diagnosis: currentDiagnosis,
      confidence: currentConfidence,
      isCorrect,
      timeMs,
    };

    setResponses((prev) => [...prev, resp]);
  }

  function handleNextCase() {
    // Compute time on this case
    const now = Date.now();
    const elapsedMs =
      caseStartTime !== null ? now - caseStartTime : null;

    // Save current response with timing
    recordCurrentResponse(elapsedMs);

    const isLastCase = currentIndex === sequence.length - 1;
    if (isLastCase) {
      setView("post-experiment");
      setCaseStartTime(null);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setCurrentDiagnosis(null);
      setCurrentConfidence(0);
      setCaseStartTime(Date.now());
    }
  }

  function handleRestart() {
    setView("intro");
    setSequence([]);
    setCurrentIndex(0);
    setCurrentDiagnosis(null);
    setCurrentConfidence(0);
    setResponses([]);
    setCaseStartTime(null);
  }

  function handleGoToResults() {
    setView("results");
  }

  // Compute summary stats for the results view
  const summary = useMemo(() => {
    if (responses.length === 0) {
      return null;
    }

    const total = responses.length;
    const correctTotal = responses.filter((r) => r.isCorrect).length;
    const accuracyTotal = (correctTotal / total) * 100;

    const withAI = responses.filter((r) => r.hasAI);
    const withoutAI = responses.filter((r) => !r.hasAI);

    function groupStats(group: Response[]) {
      if (group.length === 0) {
        return {
          n: 0,
          accuracy: null as number | null,
          avgConfidence: null as number | null,
          avgTimeMs: null as number | null,
        };
      }
      const correct = group.filter((r) => r.isCorrect).length;
      const accuracy = (correct / group.length) * 100;

      const avgConfidence =
        group.reduce((sum, r) => sum + r.confidence, 0) / group.length;

      const timeValues = group
        .map((r) => r.timeMs)
        .filter((t): t is number => t !== null);

      const avgTimeMs =
        timeValues.length > 0
          ? timeValues.reduce((sum, t) => sum + t, 0) / timeValues.length
          : null;

      return { n: group.length, accuracy, avgConfidence, avgTimeMs };
    }

    const withAIStats = groupStats(withAI);
    const withoutAIStats = groupStats(withoutAI);

    const overallTimeValues = responses
      .map((r) => r.timeMs)
      .filter((t): t is number => t !== null);
    const avgTimeMsOverall =
      overallTimeValues.length > 0
        ? overallTimeValues.reduce((sum, t) => sum + t, 0) /
          overallTimeValues.length
        : null;

    return {
      total,
      correctTotal,
      accuracyTotal,
      avgTimeMsOverall,
      withAI: withAIStats,
      withoutAI: withoutAIStats,
    };
  }, [responses]);

  return (
    <section className="max-w-3xl mx-auto py-12 space-y-8">
      {/* Shared header */}
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">
          Experimental Demo
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold">
          AI-Assisted Radiology RCT Demo
        </h1>
      </header>

      {/* INTRO VIEW */}
      {view === "intro" && (
        <>
          {/* Intro / context */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">What this experiment simulates</h2>
            <p className="text-muted-foreground">
              This demo recreates the core idea of a randomized controlled trial
              (RCT) studying how an AI assistant affects medical experts’ ability
              to detect pulmonary embolism (PE) from CT lung scans. Participants
              see CT images with basic patient information, sometimes with an AI
              suggestion, and provide a diagnosis and confidence rating.
            </p>
            <p className="text-muted-foreground text-sm">
              The real study would involve radiologists and a validated dataset.
              Here, we focus on the experimental logic and user flow.
            </p>
          </section>

          {/* How it works */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">How the demo works</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                You will see <strong>10 CT lung cases</strong>, one at a time, in
                a random order each time you run the demo.
              </li>
              <li>
                Each case includes basic patient information like{" "}
                <strong>age</strong> and <strong>sex</strong>.
              </li>
              <li>
                In <strong>5 of the 10 cases</strong>, you will also see an{" "}
                <strong>AI assistant panel</strong> with a suggested PE
                assessment. In the other 5 cases, no AI suggestion is shown.
              </li>
              <li>
                For every case, you will enter:
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>
                    <strong>PE diagnosis</strong>: Yes / No
                  </li>
                  <li>
                    <strong>Confidence</strong>: 0–10
                  </li>
                </ul>
              </li>
              <li>
                The system records how long each case is on screen before you
                submit your answer, simulating a decision-time metric used in
                behavioural RCTs.
              </li>
            </ol>
          </section>

          {/* Disclaimer */}
          <section className="space-y-2 border rounded-lg p-4 bg-muted/40">
            <h2 className="text-sm font-semibold tracking-wide uppercase">
              Important note
            </h2>
            <p className="text-sm text-muted-foreground">
              This is a research demo intended to illustrate experimental design
              and RCT logic. It is <strong>not</strong> a medical tool, does not
              provide clinical advice, and should not be used for diagnosis or
              treatment decisions.
            </p>
          </section>

          {/* Call to action */}
          <section className="space-y-2">
            <button
              type="button"
              onClick={handleStartDemo}
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Start demo
            </button>
          </section>
        </>
      )}

      {/* EXPERIMENT VIEW */}
      {view === "experiment" && currentCase && (
        <section className="space-y-6">
          {/* Progress */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Case {currentIndex + 1} of {sequence.length}
            </span>
            <button
              type="button"
              onClick={handleRestart}
              className="underline hover:no-underline"
            >
              Exit demo
            </button>
          </div>

          {/* Case layout */}
          <div className="space-y-4">
            {/* Placeholder for CT image */}
            <div className="aspect-video w-full rounded-lg border border-dashed flex items-center justify-center text-sm text-muted-foreground">
              CT image for case {currentCase.id} (placeholder)
            </div>

            {/* Patient + AI info */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border rounded-lg p-4 space-y-1">
                <h2 className="text-sm font-semibold uppercase tracking-wide">
                  Patient information
                </h2>
                <p className="text-sm text-muted-foreground">
                  Age: <span className="font-medium">{currentCase.age}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Sex: <span className="font-medium">{currentCase.sex}</span>
                </p>
              </div>

              {currentCase.hasAI && (
                <div className="border rounded-lg p-4 space-y-2 bg-muted/40">
                  <h2 className="text-sm font-semibold uppercase tracking-wide">
                    AI assistant (demo)
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Suggested assessment:{" "}
                    <span className="font-medium">
                      {currentCase.aiLabel ?? "N/A"}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    In the real study, this panel would be populated by a
                    deployed AI model. Here, it is a fixed suggestion shown as
                    part of the experimental design.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Response form */}
          <div className="border rounded-lg p-4 space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              Your assessment (demo)
            </h2>

            {/* PE diagnosis */}
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Do you think pulmonary embolism (PE) is present in this case?
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentDiagnosis("Yes")}
                  className={`px-3 py-1 text-sm rounded-md border transition ${
                    currentDiagnosis === "Yes"
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-background hover:bg-green-50"
                  }`}
                >
                  Yes
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentDiagnosis("No")}
                  className={`px-3 py-1 text-sm rounded-md border transition ${
                    currentDiagnosis === "No"
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-background hover:bg-red-50"
                  }`}
                >
                  No
                </button>
              </div>
              {currentDiagnosis === null && (
                <p className="text-xs text-muted-foreground">
                  Select Yes or No to continue.
                </p>
              )}
            </div>

            {/* Confidence */}
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                How confident are you in your diagnosis?
              </p>
              <input
                type="range"
                min={0}
                max={10}
                value={currentConfidence}
                onChange={(e) => setCurrentConfidence(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Confidence:{" "}
                <span className="font-semibold">
                  {currentConfidence} / 10
                </span>
              </p>
            </div>

            {/* Next button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNextCase}
                disabled={currentDiagnosis === null}
                className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition"
              >
                {currentIndex === sequence.length - 1
                  ? "Finish demo"
                  : "Next case"}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* POST-EXPERIMENT VIEW */}
      {view === "post-experiment" && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Experiment Completed</h2>
          <p className="text-muted-foreground">
            You have reached the end of the diagnostic task. In a real randomized
            controlled trial, participants would typically exit the study at this
            point without seeing their detailed performance metrics.
          </p>
          <p className="text-muted-foreground">
            For demonstration purposes, you can now choose to view a summary of
            your performance based on the responses you just provided.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={handleGoToResults}
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              View Analysis Results (Demo Only)
            </button>
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition"
            >
              Exit Demo
            </button>
          </div>
        </section>
      )}

      {/* RESULTS VIEW */}
      {view === "results" && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Analysis Results (Demo)</h2>

          <p className="text-muted-foreground">
            Below is a simple summary of your performance in this run. In a full
            RCT with many participants, these metrics would form the basis for
            estimating the causal effect of AI assistance on diagnostic accuracy,
            confidence, and decision time.
          </p>

          {/* Overall summary */}
          {summary && (
            <div className="space-y-4">
              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  Overall performance
                </h3>
                <p className="text-sm text-muted-foreground">
                  Correct diagnoses:{" "}
                  <span className="font-semibold">
                    {summary.correctTotal} / {summary.total}
                  </span>{" "}
                  ({summary.accuracyTotal.toFixed(1)}%)
                </p>
                {summary.avgTimeMsOverall !== null && (
                  <p className="text-sm text-muted-foreground">
                    Average decision time (all cases):{" "}
                    <span className="font-semibold">
                      {(summary.avgTimeMsOverall / 1000).toFixed(1)} seconds
                    </span>
                  </p>
                )}
              </div>

              {/* Group comparison */}
              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  With vs. without AI assistance
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-medium">
                          Condition
                        </th>
                        <th className="text-left py-2 pr-4 font-medium">n</th>
                        <th className="text-left py-2 pr-4 font-medium">
                          Accuracy
                        </th>
                        <th className="text-left py-2 pr-4 font-medium">
                          Avg. confidence
                        </th>
                        <th className="text-left py-2 pr-4 font-medium">
                          Avg. decision time (s)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4">With AI assistance</td>
                        <td className="py-2 pr-4">{summary.withAI.n}</td>
                        <td className="py-2 pr-4">
                          {summary.withAI.accuracy !== null
                            ? `${summary.withAI.accuracy.toFixed(1)}%`
                            : "—"}
                        </td>
                        <td className="py-2 pr-4">
                          {summary.withAI.avgConfidence !== null
                            ? summary.withAI.avgConfidence.toFixed(1)
                            : "—"}
                        </td>
                        <td className="py-2 pr-4">
                          {summary.withAI.avgTimeMs !== null
                            ? (summary.withAI.avgTimeMs / 1000).toFixed(1)
                            : "—"}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">Without AI assistance</td>
                        <td className="py-2 pr-4">{summary.withoutAI.n}</td>
                        <td className="py-2 pr-4">
                          {summary.withoutAI.accuracy !== null
                            ? `${summary.withoutAI.accuracy.toFixed(1)}%`
                            : "—"}
                        </td>
                        <td className="py-2 pr-4">
                          {summary.withoutAI.avgConfidence !== null
                            ? summary.withoutAI.avgConfidence.toFixed(1)
                            : "—"}
                        </td>
                        <td className="py-2 pr-4">
                          {summary.withoutAI.avgTimeMs !== null
                            ? (summary.withoutAI.avgTimeMs / 1000).toFixed(1)
                            : "—"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground">
                  In a full analysis, you would compare these group-level
                  metrics (and their uncertainty) to estimate how AI assistance
                  changes diagnostic accuracy, confidence, and decision time.
                </p>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition"
          >
            Exit to Demo Intro Page
          </button>
        </section>
      )}
    </section>
  );
}
