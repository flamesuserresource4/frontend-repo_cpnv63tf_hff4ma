export default function WhyGold() {
  const points = [
    {
      title: "World’s oldest store of value",
      desc: "Gold has preserved purchasing power for millennia across cycles and regimes.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      )
    },
    {
      title: "Hedge against inflation",
      desc: "A natural hedge to currency debasement and monetary volatility.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 13l3-3 4 4 5-5"/></svg>
      )
    },
    {
      title: "Tangible & liquid",
      desc: "A globally recognized asset you can hold, store, and sell anywhere.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-2-2h-3l-2-2H7L5 6H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"/></svg>
      )
    },
    {
      title: "Crisis-proof",
      desc: "Diversifies and protects wealth in uncertain times.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M12 18h.01"/></svg>
      )
    },
    {
      title: "Simple & transparent",
      desc: "A disciplined, long-term strategy with clear reporting.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v4H3z"/><path d="M3 11h18v4H3z"/><path d="M3 19h18v2H3z"/></svg>
      )
    }
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Why Physical Gold</h2>
        <p className="mt-3 text-amber-100/80 max-w-2xl">The world’s most trusted store of value. Here’s why investors rely on it to preserve purchasing power.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div key={i} className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition p-6">
              <div className="w-10 h-10 rounded-lg bg-amber-400/15 text-amber-300 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-zinc-300/80">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
