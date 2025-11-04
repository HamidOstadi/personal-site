// src/app/projects/x-farsi-analyzer/page.tsx
import type { Metadata } from "next";
import { ProjectHero } from "@/components/ProjectHero";
import { Tag } from "@/components/Tag";
import Image from "next/image";

export const metadata: Metadata = {
  title: "X Farsi Analyzer — Hamid Ostadi",
  description:
    "Open-source Chrome extension that scrapes, processes, and analyzes Persian-language timelines on X/Twitter using custom NLP and analytics modules.",
  alternates: { canonical: "https://hamidostadi.com/projects/x-farsi-analyzer" },
  openGraph: {
    title: "X Farsi Analyzer — Hamid Ostadi",
    description:
      "A language-aware research tool for studying coordinated messaging and engagement patterns in Persian-language timelines on X.",
    url: "https://hamidostadi.com/projects/x-farsi-analyzer",
    type: "article",
  },
};

export default function XFarsiAnalyzerPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      {/* ---------- HERO ---------- */}
      <ProjectHero
        title="X Farsi Analyzer"
        subtitle="Language-aware Chrome extension for studying coordinated messaging, engagement, and sentiment in Persian-language timelines on X."
        imgSrc="/projects/x-farsi-analyzer/hero.png"
        alt="Architecture of the X Farsi Analyzer extension"
      />

      {/* ---------- TAGS ---------- */}
      <div className="mb-8 flex flex-wrap gap-2">
        <Tag>Platform Governance</Tag>
        <Tag>Farsi NLP</Tag>
        <Tag>Chrome Extension</Tag>
        <Tag>Information Integrity</Tag>
      </div>

      {/* ---------- QUICK STATS ---------- */}
      <div className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { value: "97 %", label: "Farsi detection accuracy" },
          { value: "< 5 s", label: "Analysis time for 1000 tweets" },
          { value: "6", label: "Independent analyzers" },
        ].map(({ value, label }) => (
          <div
            key={label}
            className="rounded-2xl border border-zinc-200 p-4 text-center shadow-sm dark:border-zinc-800"
          >
            <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">{value}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{label}</div>
          </div>
        ))}
      </div>

      {/* ---------- PIPELINE DIAGRAM ---------- */}
      <section className="mb-12">
        <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Pipeline Architecture
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          The analyzer is composed of three integrated modules:
          <strong> (1)</strong> DOM Observer + Scraper to collect tweets,
          <strong> (2)</strong> Farsi Processor for language normalization and tokenization,
          and <strong> (3)</strong> Analytics Engine to extract insights on content, sentiment, and networks.
        </p>
        <div className="mt-5 flex justify-center">
          <Image
            src="/projects/x-farsi-analyzer/pipeline.svg"
            alt="Module 1–3 pipeline"
            width={800}
            height={200}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800"
          />
        </div>
      </section>

      {/* ---------- MODULE SUMMARIES ---------- */}
      <section className="mb-12 space-y-6">
        <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
          <h3 className="mb-1 text-lg font-semibold">Module 1 — Scraper & DOM Observer</h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Captures dynamic tweet data directly from user profiles. Uses a MutationObserver and
            Scroll Manager to load tweets automatically while avoiding duplicates. Extracts tweet text,
            author details, media, and metrics with Farsi/RTL support.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
          <h3 className="mb-1 text-lg font-semibold">Module 2 — Farsi Text Processing Pipeline</h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Cleans and normalizes Persian script, detects mixed languages and Finglish, handles ZWNJ and digit conversion, and outputs tokenized text ready for analysis. Achieves 94–100 % accuracy with &lt; 50 ms per tweet processing time.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
          <h3 className="mb-1 text-lg font-semibold">Module 3 — Analytics Engine</h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Runs six analyzers (word frequency, sentiment, engagement, temporal patterns, hashtags, and mention network). Uses Web Workers and LRU cache for fast client-side processing of 1000 tweets in under 5 seconds.
          </p>
        </div>
      </section>

      {/* ---------- ANALYZER GALLERY ---------- */}
      <section className="mb-12">
        <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Analytics Capabilities
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            ["Word Frequency", "TF-IDF and token statistics"],
            ["Sentiment Analyzer", "Bilingual lexicon (FA/EN) classification"],
            ["Engagement Calc", "Ratios of likes/retweets/replies"],
            ["Posting Patterns", "Temporal trends + Persian calendar support"],
            ["Hashtag Analyzer", "Co-occurrence and reach estimation"],
            ["Mention Network", "Interaction graph and influence scores"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- RESULTS ---------- */}
      <section className="mb-12 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Performance & Results
        </h2>
        <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
          <li>Processed 1500 tweets across 5 profiles with 97 % Farsi detection accuracy.</li>
          <li>1000-tweet analysis completes in &lt; 5 seconds using Web Worker parallelization.</li>
          <li>33 % cache hit rate on repeated analyses with LRU manager.</li>
          <li>Export formats available: JSON and CSV.</li>
        </ul>
      </section>

      {/* ---------- KNOWN ISSUE ---------- */}
      <section className="mb-12 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
        <h2 className="mb-2 text-lg font-semibold text-amber-700 dark:text-amber-400">
          Engineering Note
        </h2>
        <p className="text-zinc-800 dark:text-zinc-200">
          Highlight borders originally caused gaps between tweets in Twitter’s flex layout.
          The next update will replace borders with absolute overlay badges to preserve alignment while maintaining visual feedback.
        </p>
      </section>

      {/* ---------- ETHICS ---------- */}
      <section className="mb-12 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Ethics & Privacy
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          All data collection runs client-side and is user-initiated. No information is transmitted to external servers. The tool is designed for academic and public-interest research on platform transparency and information integrity.
        </p>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="flex flex-wrap gap-3">
        <a
          href="https://github.com/HamidOstadi/twitter-farsi-analyzer"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          View Repository
        </a>
        <a
          href="/projects/x-farsi-analyzer/demo"
          className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          Open Interactive Demo
        </a>
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
