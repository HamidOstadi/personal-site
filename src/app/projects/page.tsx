type Project = {
  title: string;
  problem: string;
  contribution: string;
  status: "Live" | "In progress" | "Prototype" | "Design";
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Twitter / X Farsi Analyzer",
    problem:
      "It’s very hard to study coordinated behaviour and narrative shaping on X in Persian/Farsi, especially when accounts mix bot-like activity with human signalling.",
    contribution:
      "I’m building a Chrome extension that scrolls a profile, extracts posting patterns, detects Farsi/RTL content, and surfaces red flags like abnormal timing, repeated messaging, or engineered engagement.",
    status: "In progress",
    tags: ["Chrome Extension", "Social Data", "Disinformation"],
  },
  {
    title: "AI-Assisted Radiology Decision Support",
    problem:
      "Clinicians under time pressure make life-impacting diagnostic calls. The question is: does AI actually improve decision quality, or just add noise and overconfidence?",
    contribution:
      "I designed an experimental protocol (multi-reader multi-case) to test whether AI suggestions and AI confidence scores change clinician accuracy, calibration, and diagnostic bias in pneumonia detection.",
    status: "Design",
    tags: ["AI Safety", "Health", "Experimental Design"],
  },
  {
    title: "Climate & Social Protection Tracker (UNICEF)",
    problem:
      "Climate policy in Eastern Europe and Central Asia often talks about ‘resilience,’ but doesn’t always specify social protection for workers, gender risks, or just transition mechanisms.",
    contribution:
      "I built a live tracker that maps policies, highlights gaps (gender, disaster risk, vulnerable groups), and flags where social protection is missing from climate commitments.",
    status: "Live",
    tags: ["Policy", "Climate", "Social Protection"],
  },
  {
    title: "Telegram B2B Product Catalog Bot",
    problem:
      "For SMEs importing tiles/sanitary ware, sales depends on WhatsApp/Telegram conversations. Reps waste time sending the same specs, photos, and prices again and again.",
    contribution:
      "I built a Telegram bot that serves as a searchable catalogue. It returns product cards (image, specs, sizing, finish) instantly from a CSV instead of manual replies.",
    status: "Prototype",
    tags: ["Automation", "Python", "SME Ops"],
  },
  {
    title: "Digital Economy & Labour Markets",
    problem:
      "AI is reshaping labour demand, skill requirements, and job quality, but policymakers mostly see headlines, not structured evidence.",
    contribution:
      "I work on skill-level and task-level evidence: how AI exposure affects employability, wage pressure, and transition risk — especially for workers in lower-signal labour markets.",
    status: "In progress",
    tags: ["AI & Work", "Labour Markets", "Policy"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-10">
      {/* Page intro */}
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Projects
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-prose leading-relaxed text-base">
          Selected work across data, policy, AI, and tooling. Each project
          focuses on a real-world problem — misinformation, worker transition,
          diagnostic safety, climate resilience, or SME operations — and tries
          to build something practical.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-4">
        {projects.map((proj) => (
          <article
            key={proj.title}
            className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 p-5 hover:shadow-md transition-shadow"
          >
            {/* Title row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <h2 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                {proj.title}
              </h2>

              <span
                className={
                  "shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-medium " +
                  (proj.status === "Live"
                    ? "border-emerald-400/40 text-emerald-600 dark:text-emerald-400"
                    : proj.status === "In progress"
                    ? "border-blue-400/40 text-blue-600 dark:text-blue-400"
                    : proj.status === "Prototype"
                    ? "border-amber-400/40 text-amber-600 dark:text-amber-400"
                    : "border-zinc-400/40 text-zinc-600 dark:text-zinc-400")
                }
              >
                {proj.status}
              </span>
            </div>

            {/* Problem / Contribution */}
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                  Problem:
                </span>{" "}
                {proj.problem}
              </p>
              <p>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                  What I built:
                </span>{" "}
                {proj.contribution}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-300/60 dark:border-zinc-700/60 bg-white dark:bg-zinc-950 px-2 py-1 text-zinc-600 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
