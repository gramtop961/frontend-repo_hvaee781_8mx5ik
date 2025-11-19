import { motion } from "framer-motion";
import { ShieldCheck, Cloud, Cog } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-32 right-1/2 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              DevOps, Cloud, and Security for high‑velocity teams
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-slate-300"
            >
              SecPros LLC helps startups and enterprises design reliable platforms, automate delivery, and ship securely at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#contact" className="rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30">
                Book a free consult
              </a>
              <a href="#services" className="rounded-md border border-white/10 px-5 py-3 text-slate-200 hover:bg-white/5 font-medium">
                Explore services
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-slate-300">
              <div className="flex items-center gap-2 text-sm"><ShieldCheck className="h-4 w-4 text-emerald-400"/> SOC2 / ISO 27001</div>
              <div className="flex items-center gap-2 text-sm"><Cloud className="h-4 w-4 text-cyan-400"/> AWS / Azure / GCP</div>
              <div className="flex items-center gap-2 text-sm"><Cog className="h-4 w-4 text-emerald-400"/> CI/CD & IaC</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video w-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-2xl">
              <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur px-4 py-3 text-sm text-slate-200 shadow-lg">
              "They modernized our platform and cut deploy time by 85%." — CTO, fintech
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
