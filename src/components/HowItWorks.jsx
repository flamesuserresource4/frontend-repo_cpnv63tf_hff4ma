export default function HowItWorks() {
  const steps = [
    {
      title: "Assessment",
      desc: "Personal financial and risk-profile assessment.",
      num: 1,
    },
    { title: "Plan Selection", desc: "Choose monthly or personalized accumulation.", num: 2 },
    { title: "Fractional Purchase", desc: "Buy LBMA 999.9 physical gold fractionally.", num: 3 },
    { title: "Secure Storage", desc: "Insured partner vaults or home delivery.", num: 4 },
    { title: "Transparent Reporting", desc: "Clear statements and portfolio monitoring.", num: 5 },
    { title: "Freedom to Exit", desc: "Sell or convert anytime.", num: 6 },
  ];

  return (
    <section className="bg-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How the Gold Accumulation Plan Works</h2>
            <p className="mt-3 text-amber-100/80 max-w-2xl">A guided, transparent process designed for long-term wealth protection.</p>
          </div>
          <a href="#lead" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-400 text-black font-semibold shadow hover:shadow-amber-400/50 transition">Find Your Ideal Plan
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-300 text-black font-bold flex items-center justify-center shadow">{s.num}</div>
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-zinc-300/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
