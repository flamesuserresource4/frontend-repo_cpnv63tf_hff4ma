export default function WhyAurum() {
  const diffs = [
    "LBMA-certified physical gold only (999.9 purity)",
    "Low entry point — start small, accumulate over time",
    "Dedicated gold advisors",
    "Simple onboarding, no technical knowledge required",
    "Institutional-level vault security + insurance",
    "Transparent pricing, no hidden fees",
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Why Choose Aurum Vision</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {diffs.map((d, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-amber-400 inline-flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              <p className="text-zinc-200">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
