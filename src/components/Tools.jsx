import { Boxes, GitBranch, ShieldCheck, Cloud, Docker, Terminal } from "lucide-react";

const tools = [
  { name: "AWS", icon: <Cloud className="h-5 w-5" /> },
  { name: "Kubernetes", icon: <Boxes className="h-5 w-5" /> },
  { name: "Terraform", icon: <Terminal className="h-5 w-5" /> },
  { name: "GitHub Actions", icon: <GitBranch className="h-5 w-5" /> },
  { name: "Docker", icon: <Docker className="h-5 w-5" /> },
  { name: "Security", icon: <ShieldCheck className="h-5 w-5" /> },
];

export default function Tools() {
  return (
    <section id="tools" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-300">
            {tools.map((t) => (
              <div key={t.name} className="inline-flex items-center gap-2">
                <span className="text-emerald-400/90">{t.icon}</span>
                <span className="text-sm">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
