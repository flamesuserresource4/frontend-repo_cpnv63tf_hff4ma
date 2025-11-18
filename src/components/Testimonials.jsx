export default function Testimonials() {
  const items = [
    {
      name: "Elena M.",
      role: "Entrepreneur",
      quote: "I started with a modest monthly plan. Three years in, my gold holdings are a cornerstone of my safety net.",
    },
    {
      name: "David R.",
      role: "Tech Professional",
      quote: "The transparency and reporting made it easy. I appreciate being able to sell or convert anytime.",
    },
    {
      name: "Sara P.",
      role: "Long-term Saver",
      quote: "A simple, disciplined way to protect purchasing power without overthinking timing the market.",
    },
    {
      name: "Marco A.",
      role: "Consultant",
      quote: "LBMA 999.9 purity and insured vaults were the key differentiators for me.",
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Trusted by Savers and Professionals</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <p className="text-zinc-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-amber-300 font-medium">{t.name}</div>
              <div className="text-xs text-zinc-400">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
