import { Wrench, Server, Lock, Cpu, Workflow, Cloud } from "lucide-react";

const items = [
  {
    icon: <Cloud className="h-6 w-6 text-emerald-400" />,
    title: "Cloud Architecture",
    desc: "Design, migrate, and optimize on AWS, Azure, or GCP with reliability and cost in mind.",
  },
  {
    icon: <Workflow className="h-6 w-6 text-cyan-400" />,
    title: "CI/CD & Automation",
    desc: "Ship faster with GitOps, pipelines, and policy-as-code across environments.",
  },
  {
    icon: <Server className="h-6 w-6 text-emerald-400" />,
    title: "Kubernetes & Platform Eng",
    desc: "Scalable platforms, service meshes, observability, and SRE best practices.",
  },
  {
    icon: <Lock className="h-6 w-6 text-cyan-400" />,
    title: "Security & Compliance",
    desc: "Threat modeling, hardening, secret mgmt, vulnerability mgmt, SOC2/ISO 27001.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-emerald-400" />,
    title: "Infrastructure as Code",
    desc: "Terraform, Crossplane, and modular patterns for consistent, repeatable infra.",
  },
  {
    icon: <Wrench className="h-6 w-6 text-cyan-400" />,
    title: "DevEx & Tooling",
    desc: "Developer portals, golden paths, templates, and paved roads that scale.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Practical DevOps, platform engineering, and cloud security services tailored to your stage.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/80 transition">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/5">
                  {it.icon}
                </div>
                <h3 className="text-white font-semibold">{it.title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
