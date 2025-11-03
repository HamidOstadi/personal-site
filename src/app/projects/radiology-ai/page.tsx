<p className="mt-2">
  <a href="/projects/radiology-ai/interactive" className="text-blue-600 dark:text-blue-400 hover:underline">
    → Explore the interactive overview
  </a>
</p>
export default function RadiologyAIPage() {
  return (
    <section className="mx-auto max-w-3xl py-16 px-6 text-left space-y-10">
      {/* Title / Status */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          AI-Assisted Radiology Decision Support
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Status: Research design & prototyping · Focus: diagnostic safety,
          assistive AI, and clinical workflow
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Repo structure includes: <code className="font-mono text-xs">agent_design</code>,{" "}
          <code className="font-mono text-xs">causal_analysis</code>,{" "}
          <code className="font-mono text-xs">experiment_proposal</code>,{" "}
          <code className="font-mono text-xs">docs</code>
        </p>
      </header>

      {/* Problem / Motivation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          The problem
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Clinicians and radiologists make time-pressured, high-stakes
          decisions that directly affect patient outcomes. AI support tools
          promise to “help,” but right now we don’t have strong evidence about
          how they actually change human decision-making under real workflow
          conditions.
        </p>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          The core questions are not just <em>“Is the model accurate?”</em> but:
        </p>

        <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-2">
          <li>Does AI support make the final diagnosis more correct?</li>
          <li>
            Does AI support reduce dangerous errors (for example, missing
            pneumonia)?
          </li>
          <li>
            Does AI support reduce false alarms that lead to unnecessary
            escalation / treatment?
          </li>
          <li>
            Does AI support change clinician behaviour in a risky way — like
            over-trusting a suggestion?
          </li>
          <li>
            Who benefits more from AI help: junior readers or experienced
            readers?
          </li>
        </ul>
      </section>

      {/* What I designed */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          What I designed
        </h2>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          I designed an experimental framework to evaluate AI-assist systems
          in chest X-ray interpretation, focusing on suspected pneumonia. The
          goal is to measure not only model performance, but clinician + AI
          team performance.
        </p>

        <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-2">
          <li>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Multi-reader, multi-case design (MRMC):
            </span>{" "}
            Multiple clinicians read the same curated image set. This lets us
            compare performance across different readers, not just across
            different images.
          </li>

          <li>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Multiple study arms:
            </span>{" "}
            Each reader is randomly assigned different levels of AI support.
            For example:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <span className="font-medium">Arm A:</span> image only
                (baseline, no AI).
              </li>
              <li>
                <span className="font-medium">Arm B:</span> AI suggestion
                (“pneumonia: yes/no”).
              </li>
              <li>
                <span className="font-medium">Arm C:</span> AI suggestion +
                AI confidence score (“pneumonia likely: 92%”).
              </li>
            </ul>
          </li>

          <li>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Behavioural capture:
            </span>{" "}
            For each case, the clinician not only records the diagnosis but
            also:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>their confidence,</li>
              <li>their read time,</li>
              <li>whether they would escalate / flag for further review.</li>
            </ul>
          </li>
        </ul>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          This is important because we can measure not just{" "}
          <em>“Did the AI help?”</em> but <em>“Did the AI change behaviour
          safely?”</em>
        </p>
      </section>

      {/* Repo modules */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Core modules in this project
        </h2>

        <div className="space-y-4">

          <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 p-5">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
              <code className="text-xs font-mono">agent_design/</code>
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
              Designs the “AI assistant” behaviour: how suggestions are
              surfaced to clinicians, how confidence is communicated, and when
              intervention happens in the workflow. This matters because poor
              UX can create blind trust or alert fatigue.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 p-5">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
              <code className="text-xs font-mono">causal_analysis/</code>
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
              Investigates counterfactual questions like “Would this
              decision have been different without AI?” and fairness
              questions like “Does AI affect escalation decisions differently
              across subgroups?” This is where safety, bias, and liability
              live.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 p-5">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
              <code className="text-xs font-mono">experiment_proposal/</code>
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
              Study protocol drafts, inclusion/exclusion criteria for image
              sets, reader assignment logic, and instructions to clinicians.
              This is essentially the “trial design” layer for a
              human+AI evaluation.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 p-5">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
              <code className="text-xs font-mono">docs/</code>
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
              Written analysis and Markdown reports: methodology notes,
              interpretation of expected results, governance framing (how do
              we certify or approve these tools responsibly?), and
              communication to non-technical stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Why this matters / impact */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Why this matters
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          This is more than “AI for healthcare.” It’s about accountability in
          augmented decision-making. Hospitals, regulators, and vendors all
          need to answer the same question: <em>Under what conditions does AI
          support actually improve clinical care, and under what conditions
          does it just shift responsibility?</em>
        </p>

        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          This project provides an auditable way to measure that. The work is
          designed so it can feed both:
        </p>

        <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-2">
          <li>
            Clinical leadership (Is this safe to deploy to staff?)
          </li>
          <li>
            Policy / governance bodies (Does this align with responsible AI
            and human oversight claims?)
          </li>
        </ul>
      </section>

      {/* My role / ownership */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          My role
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          I architected the evaluation approach, defined the study arms,
          scoped the behavioural metrics, and wrote the protocol language to
          make it usable not only for technical review but also for governance
          and decision-making. I positioned this project at the intersection
          of ML performance, clinical workflow reality, and accountability.
        </p>
      </section>

      {/* Access / contact */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Access
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          The full repository (code, study design, and documentation) is
          currently private. I’m open to sharing details or collaborating on
          this work in research, evaluation, or policy contexts.
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          To discuss this project, reach out via LinkedIn, GitHub, or Telegram
          using the links in the footer.
        </p>
      </section>
    </section>
  );
}
