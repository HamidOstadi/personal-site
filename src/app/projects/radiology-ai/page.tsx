export default function RadiologyAIPage() {
  return (
    <section className="space-y-8">
      {/* Title + status */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          AI-Assisted Radiology Decision Support
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Status: Design · Focus: Diagnostic safety, AI calibration, clinical workflow
        </p>
      </header>

      {/* Problem */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          The problem
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          Radiologists and clinicians make high-stakes diagnostic decisions under time
          pressure. AI systems promise to “help,” but we don’t actually know if that help
          reduces diagnostic error — or if it just changes clinician behavior in risky ways
          (for example, making them over-trust the AI or feel overconfident).
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          Regulators, hospitals, and AI vendors all talk about “AI improves care,” but in
          practice there’s still very little rigorous, controlled evidence about how AI
          support actually changes decision quality in real reading conditions.
        </p>
      </section>

      {/* What I built / designed */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          What I designed
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          I designed an experimental protocol to test whether AI assistance improves
          clinician diagnostic performance when reading chest X-rays for pneumonia.
          The core idea: not “is the AI good,” but “does the human+AI team make
          better, safer calls?”
        </p>

        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base space-y-2">
          <li>
            Multi-reader, multi-case (MRMC) design: multiple clinicians read the
            same curated image set so we can compare across readers and across conditions.
          </li>
          <li>
            Multiple experimental arms: some clinicians see the raw image only,
            others see AI suggestions, and others also see AI “confidence.”
          </li>
          <li>
            Each clinician reports not just the diagnosis but their confidence in
            that diagnosis.
          </li>
        </ul>
      </section>

      {/* Why that matters */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Why this matters
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          This setup lets us answer questions that regulators and hospital
          decision-makers actually care about:
        </p>

        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base space-y-2">
          <li>
            Does AI support reduce false negatives (missed pneumonia)?
          </li>
          <li>
            Does AI support reduce false positives (unnecessary escalation/treatment)?
          </li>
          <li>
            Does showing the AI’s “confidence score” make clinicians more accurate —
            or does it just make them more confident, even when they’re wrong?
          </li>
          <li>
            Do less-experienced readers benefit more from AI support than experts?
          </li>
        </ul>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          Those are not hypothetical policy questions. Those are procurement,
          liability, and safety questions.
        </p>
      </section>

      {/* How it works (experiment flow) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Experiment flow
        </h2>

        <ol className="list-decimal pl-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base space-y-2">
          <li>
            Curate a set of chest X-ray cases with known ground truth labels
            (confirmed pneumonia vs. no pneumonia).
          </li>
          <li>
            Randomly assign each clinician-reader to different arms:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Arm A: No AI (baseline)</li>
              <li>Arm B: AI suggestion only (“pneumonia: yes/no”)</li>
              <li>
                Arm C: AI suggestion + AI confidence score
                (“pneumonia likely: 92%”)
              </li>
            </ul>
          </li>
          <li>
            For each case, record:
            - their diagnosis,
            - their confidence in that diagnosis,
            - their read time.
          </li>
          <li>
            Compare accuracy, overconfidence, and speed across arms.
          </li>
        </ol>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          This lets us measure not just “did AI help,” but “did AI
          change behaviour in a safe way.”
        </p>
      </section>

      {/* My role */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          My role
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          I drafted the study design, defined the experimental arms, and laid
          out the evaluation metrics. I focused on decision quality,
          calibration, and bias — not just model accuracy. The goal is to make
          this usable by policy people (AI governance), clinical leadership,
          and safety/approval bodies.
        </p>
      </section>

      {/* Next steps */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          What’s next
        </h2>
        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base space-y-2">
          <li>
            Build a simple web interface to run the study and log clinician
            responses in a structured way.
          </li>
          <li>
            Run pilot with a small group of readers to test instructions and UI
            friction.
          </li>
          <li>
            Produce an interpretability + governance summary:
            “Under which conditions does this AI support tool improve care?”
          </li>
        </ul>
      </section>
    </section>
  );
}