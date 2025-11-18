export default function Education() {
  const posts = [
    { title: "Physical Gold vs. Paper Gold: What’s the Difference?", blurb: "Understand the key differences and why physical gold matters.", href: "#" },
    { title: "Why Accumulation Plans Outperform One-Time Purchases", blurb: "The power of dollar-cost averaging over time.", href: "#" },
    { title: "How Vault Storage Works", blurb: "Security, insurance, and access explained.", href: "#" },
    { title: "When and How to Sell Your Gold", blurb: "Liquidity options and best practices.", href: "#" },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Learn the Essentials</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, i) => (
            <a key={i} href={p.href} className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-amber-400/50 transition">
              <div className="text-amber-300 font-medium">Article</div>
              <h3 className="mt-2 text-lg group-hover:text-amber-200">{p.title}</h3>
              <p className="mt-2 text-zinc-300/80">{p.blurb}</p>
              <div className="mt-4 text-amber-300 group-hover:translate-x-1 transition inline-flex items-center gap-1">Read more
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
