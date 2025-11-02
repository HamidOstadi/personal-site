import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-10 text-center sm:text-left">
      {/* Portrait */}
      <div className="flex-shrink-0 mb-6 sm:mb-0">
        <div className="relative h-40 w-40 mx-auto sm:mx-0">
          <Image
            src="/me.jpg" // <-- make sure this file exists in /public (or update name)
            alt="Hamid Ostadi portrait"
            width={160}
            height={160}
            priority
            className="rounded-full border border-zinc-200 bg-zinc-100 object-cover shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          />
        </div>
      </div>

      {/* Text + cards */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Hamid Ostadi
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-xl">
          Building at the intersection of policy, data, and AI.
          Working on digital economy, social data science, and practical tools
          that connect research to impact.
        </p>

        {/* Currently Card */}
        <div className="mt-6 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 px-5 py-4 shadow-sm max-w-xl mx-auto sm:mx-0">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-wide uppercase">
            Currently
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            Working on advanced modules of my{" "}
            <a
              href="/projects/x-farsi-analyzer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              X Farsi Analyzer
            </a>{" "}
            — expanding it to detect coordinated messaging and behavioral
            anomalies across multilingual networks.
          </p>
        </div>

        {/* Navigation cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="/projects"
            className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 p-5 hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
              Projects
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Code, dashboards, bots, research tools.
            </p>
          </a>

          <a
            href="/blog"
            className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 p-5 hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
              Writing
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Notes on AI, labour markets, and digital governance.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
