export default function FAQ() {
  const faqs = [
    { q: "What purity is the gold?", a: "Only LBMA-certified 999.9 physical gold." },
    { q: "Where is the gold stored?", a: "Institutional-grade partner vaults with full insurance. Home delivery optional." },
    { q: "Can I sell anytime?", a: "Yes. You can sell or convert holdings at any time at competitive market rates." },
    { q: "Minimum monthly contribution?", a: "Start small and scale over time. We help you set the right level." },
    { q: "Are there hidden fees?", a: "No. Transparent pricing covering custody, insurance, and reporting." },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Frequently Asked Questions</h2>
        <div className="mt-10 divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-zinc-900/50">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between text-left text-lg marker:hidden">
                <span>{f.q}</span>
                <span className="ml-4 w-6 h-6 rounded-full bg-amber-400 text-black inline-flex items-center justify-center">+</span>
              </summary>
              <p className="mt-3 text-zinc-300/90">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
