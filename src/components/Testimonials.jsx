export default function Testimonials() {
  const quotes = [
    {
      name: "CTO, Fintech",
      text: "SecPros built our delivery platform, cutting deployment times from 40 minutes to under 5—without compromising security.",
    },
    {
      name: "VP Eng, SaaS",
      text: "Their pragmatic guidance around IaC and SRE drastically improved reliability and developer happiness.",
    },
    {
      name: "CISO, HealthTech",
      text: "They aligned our cloud program with SOC2 and automated most of the evidence collection.",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Client results</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">Outcomes we’ve delivered for high‑growth product teams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <blockquote className="text-slate-200">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
