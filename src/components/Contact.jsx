import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let's talk</h2>
            <p className="mt-3 text-slate-300">Tell us about your goals and we’ll get back within one business day.</p>
            <ul className="mt-6 space-y-2 text-slate-300 text-sm">
              <li>• Cloud platform modernization</li>
              <li>• CI/CD & developer experience</li>
              <li>• Security, governance, and compliance</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md bg-white/5 p-2 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md bg-white/5 p-2 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300">Company</label>
              <input name="company" className="mt-1 w-full rounded-md bg-white/5 p-2 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300">How can we help?</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-md bg-white/5 p-2 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>

            <button disabled={status === "loading"} className="mt-6 w-full rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-white font-semibold">
              {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : status === "error" ? "Try again" : "Send message"}
            </button>
            <p className="mt-2 text-xs text-slate-400">We’ll never share your information.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
