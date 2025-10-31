export default function AboutPage() {
  return (
    <section className="space-y-10">
      {/* Intro */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          About me
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base max-w-prose">
          I work at the intersection of policy, data, and AI. My focus is on
          how technology reshapes real decisions that affect people’s lives:
          who gets work, who gets social protection, who gets flagged as
          “suspicious,” who gets treated in time.
        </p>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base max-w-prose">
          I build tools, experiments, and policy frameworks around three areas:
        </p>

        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base space-y-2 max-w-prose">
          <li>
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              AI and decision-making:
            </span>{" "}
            How AI systems affect the confidence, accuracy, and liability of
            human experts (for example: radiology support during diagnosis).
          </li>
          <li>
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              Digital economy and labour markets:
            </span>{" "}
            How automation and AI change task demand, skills, and job quality,
            especially for workers with weaker bargaining power.
          </li>
          <li>
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              Social protection and climate transition:
            </span>{" "}
            How vulnerable groups are (or are not) protected when economies
            decarbonize, restructure, and start pricing risk.
          </li>
        </ul>
      </div>

      {/* How I work */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          How I work
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base max-w-prose">
          My work usually sits in the uncomfortable space between “technical”
          and “political.” I design things that have to function in the real
          world, where incentives, time pressure, and power imbalances are not
          hypothetical.
        </p>

        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base space-y-2 max-w-prose">
          <li>
            I turn vague policy questions into testable structures: experimental
            arms, dashboards, trackers.
          </li>
          <li>
            I build prototypes quickly (extensions, bots, internal tools)
            instead of just writing concept notes.
          </li>
          <li>
            I frame outputs in a way decision-makers will actually understand:
            risk, exposure, trade-offs, who is left behind.
          </li>
        </ul>
      </div>

      {/* Selected work */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          What I’ve built / designed recently
        </h2>

        <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 p-4 space-y-3 bg-white dark:bg-zinc-900">
          <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
            AI-Assisted Radiology Decision Support
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Experimental design to measure whether AI guidance actually improves
            diagnostic safety in pneumonia detection — or just shifts
            responsibility. Multi-reader multi-case setup, different AI support
            “arms,” and explicit measurement of clinician confidence, bias, and
            error.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 p-4 space-y-3 bg-white dark:bg-zinc-900">
          <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
            Twitter / X Farsi Analyzer
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A browser extension that profiles accounts on X, captures posting
            behaviour in Persian/Farsi, and surfaces signs of coordinated
            messaging and inauthentic activity. Useful for researchers,
            journalists, and civil society actors without privileged API
            access.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 p-4 space-y-3 bg-white dark:bg-zinc-900">
          <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
            Climate & Social Protection Tracker (UNICEF)
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A policy tracker connecting climate commitments to social
            protection systems across Eastern Europe and Central Asia —
            highlighting gaps in gender protection, just transition support,
            and disaster risk coverage.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 p-4 space-y-3 bg-white dark:bg-zinc-900">
          <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
            Telegram B2B Product Catalog Bot
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A Telegram bot that replaces repetitive manual quoting in wholesale
            tile / sanitary ware sales. It returns product cards (image, spec,
            finish, size) instantly from a structured product list. Built for
            actual business operations, not a classroom.
          </p>
        </div>
      </div>

      {/* Current focus / what I'm open to */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Currently
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base max-w-prose">
          I’m currently sharpening two tracks in parallel:
        </p>

        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base space-y-2 max-w-prose">
          <li>
            Research & evidence: AI and labour markets, decision support
            safety, climate and social protection.
          </li>
          <li>
            Tooling: lightweight, usable systems that help decision-makers,
            not just academics.
          </li>
        </ul>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base max-w-prose">
          I’m open to collaboration on applied research, policy analysis, or
          prototyping tools that sit between data and decisions — especially in
          AI governance, labour markets, and social protection in climate
          transition.
        </p>
      </div>
    </section>
  );
}
