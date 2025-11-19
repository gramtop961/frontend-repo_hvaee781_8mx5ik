import { ArrowRight, GitBranch, Dock, Cog, Shield } from "lucide-react";

const steps = [
  { step: "01", title: "Discovery", desc: "Assess goals, constraints, and current state. Define success metrics." },
  { step: "02", title: "Blueprint", desc: "Architecture, IaC, guardrails, and delivery workflows documented." },
  { step: "03", title: "Build", desc: "Implement pipelines, platforms, and security controls with enablement." },
  { step: "04", title: "Operate", desc: "Reliability SLOs, observability, incident response, and continuous improvement." },
];

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">How we work</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">A pragmatic approach that meets teams where they are and raises the bar sustainably.</p>
          </div>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <li key={s.step} className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <span className="text-xs font-semibold text-emerald-400">{s.step}</span>
              <h3 className="mt-1 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
