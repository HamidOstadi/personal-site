export default function XFarsiAnalyzerPage() {
  return (
    <section className="space-y-8">
      {/* Title + status */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Twitter / X Farsi Analyzer
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Status: In progress · Stack: JavaScript, Chrome Extension, DOM parsing
        </p>
      </header>

      {/* Problem */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          The problem
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          Understanding influence operations and coordinated messaging on X
          (Twitter) in Farsi is hard. Accounts can look “normal,” but they post
          on a robotic schedule, repeat the same talking points, or boost each
          other unnaturally. Traditional bot detectors are mostly English- and
          US-focused. There’s almost no accessible tooling for Persian/Farsi
          analysis.
        </p>
      </section>

      {/* Solution / what I built */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          What I built
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          I’m building a Chrome extension that scrolls down a user’s X profile,
          collects publicly visible data (posts, timestamps, engagement
          metrics), and analyzes behaviour. The tool:
        </p>

        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base space-y-2">
          <li>
            Detects Farsi / RTL content to distinguish multilingual messaging
            strategies.
          </li>
          <li>
            Captures timing patterns (posting bursts, 24/7 posting behaviour) to
            flag “non-human” regularity.
          </li>
          <li>
            Surfaces repeated phrasing / copy-paste narratives across posts.
          </li>
          <li>
            Maps engagement anomalies (for example: very low organic replies
            but high retweet counts from a fixed circle).
          </li>
        </ul>
      </section>

      {/* Why this matters */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Why this matters
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          Disinformation and coordinated persuasion are not just “politics.”
          They affect safety, mobilisation, reputational attacks, and public
          trust. The point of this tool is to give researchers, journalists, and
          civil society a way to study these behaviours without needing paid
          API access.
        </p>
      </section>

      {/* How it works technically (still readable) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          How it works (technical overview)
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          The extension runs in the browser and does three main things:
        </p>

        <ol className="list-decimal pl-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base space-y-2">
          <li>
            It scrolls the profile page and reads tweet elements directly from
            the DOM (what’s already loaded in front of the user).
          </li>
          <li>
            It extracts text, timestamps, and engagement metrics for each post,
            and stores that in memory.
          </li>
          <li>
            It calculates simple behavioural signals (posting frequency,
            repetition, time-of-day patterns, language mix).
          </li>
        </ol>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          The goal is to present this back in a dashboard: “How human does this
          account look? What narratives does it push? Does it coordinate with
          others?”
        </p>
      </section>

      {/* My role / ownership */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          My role
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          I designed the concept, the signal definitions, and the extension
          architecture. I’m building and testing the code, focusing on Farsi
          and mixed-language accounts where moderation/oversight is weakest.
        </p>
      </section>

      {/* Next steps / roadmap */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          What’s next
        </h2>
        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base space-y-2">
          <li>
            Add lightweight visual dashboard inside the extension popup (heatmap
            of posting hours, word frequency cloud, bot/human score).
          </li>
          <li>
            Export anonymized JSON so researchers can study patterns without
            storing personal data.
          </li>
          <li>
            Case studies: analyse a few known suspicious networks and publish
            write-ups.
          </li>
        </ul>
      </section>
    </section>
  );
}