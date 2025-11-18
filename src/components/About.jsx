export default function About() {
  const values = [
    { title: "Transparency", desc: "Clear pricing and reporting at every step." },
    { title: "Security", desc: "Institutional-grade custody and insurance." },
    { title: "Education", desc: "We help you understand and decide with confidence." },
  ];

  const team = [
    { name: "Alex Carter", role: "Head of Gold Strategy" },
    { name: "Maya Singh", role: "Senior Wealth Consultant" },
    { name: "Luca Bianchi", role: "Operations & Vaults" },
  ];

  return (
    <section className="bg-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About Aurum Vision</h2>
            <p className="mt-3 text-amber-100/80 max-w-2xl">We help people protect and grow their wealth through real, tangible assets. Our approach is transparent, safe, and education-driven.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {values.map((v,i)=> (
                <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                  <div className="text-amber-300 font-medium">{v.title}</div>
                  <p className="text-zinc-300/80">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-xl font-medium">Our Team</h3>
              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                {team.map((m, i)=> (
                  <div key={i} className="text-center">
                    <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-amber-400/60 to-yellow-300/40 border border-amber-400/40"/>
                    <div className="mt-2 font-medium">{m.name}</div>
                    <div className="text-sm text-zinc-400">{m.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
