export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        About me
      </h1>

      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-prose">
        I'm Hamid Ostadi. I work at the intersection of policy, data, and AI —
        focusing on digital economy, labour markets, and how technology shapes
        opportunity. My work spans research, product thinking, and building
        practical tools like data dashboards, bots, and policy trackers.
      </p>

      <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 p-4">
        <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
          Currently
        </h2>
        <ul className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed list-disc pl-5">
          <li>Working on social data science and digital economy topics.</li>
          <li>Building tools that connect research to real-world policy use.</li>
          <li>Exploring AI governance and labour market impact of AI.</li>
        </ul>
      </div>
    </section>
  );
}
