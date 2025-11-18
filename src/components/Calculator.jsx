import { useMemo, useState } from 'react';

export default function Calculator() {
  const [monthly, setMonthly] = useState(500);
  const [years, setYears] = useState(5);
  const [goldPrice, setGoldPrice] = useState(2000); // USD per oz reference
  const [growth, setGrowth] = useState(0); // % annual price change, conservative default

  const result = useMemo(() => {
    const months = years * 12;
    const monthlyGrowth = Math.pow(1 + growth / 100, 1 / 12) - 1;
    let totalInvested = 0;
    let ounces = 0;
    let price = goldPrice;
    for (let m = 0; m < months; m++) {
      const p = goldPrice * Math.pow(1 + monthlyGrowth, m);
      ounces += monthly / p; // fractional purchase at monthly price
      totalInvested += monthly;
    }
    const estCurrentPrice = goldPrice * Math.pow(1 + monthlyGrowth, months);
    const estValue = ounces * estCurrentPrice;
    return { months, ounces, totalInvested, estCurrentPrice, estValue };
  }, [monthly, years, goldPrice, growth]);

  return (
    <section id="calculator" className="bg-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Gold Accumulation Calculator</h2>
        <p className="mt-3 text-amber-100/80 max-w-2xl">Estimate your projected gold holdings using a monthly contribution and an assumed price path.</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <label className="block text-sm text-zinc-300 mb-2">Monthly contribution (USD)</label>
            <input type="range" min="50" max="5000" step="50" value={monthly} onChange={e=>setMonthly(Number(e.target.value))} className="w-full" />
            <div className="text-amber-300 font-semibold">${monthly.toLocaleString()}</div>

            <div className="mt-6">
              <label className="block text-sm text-zinc-300 mb-2">Years</label>
              <input type="range" min="1" max="20" value={years} onChange={e=>setYears(Number(e.target.value))} className="w-full" />
              <div className="text-amber-300 font-semibold">{years} years</div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-300 mb-2">Starting gold price (USD/oz)</label>
                <input type="number" value={goldPrice} onChange={e=>setGoldPrice(Number(e.target.value)||0)} className="w-full rounded-lg bg-black border border-zinc-800 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-2">Assumed annual price change (%)</label>
                <input type="number" value={growth} onChange={e=>setGrowth(Number(e.target.value)||0)} className="w-full rounded-lg bg-black border border-zinc-800 px-3 py-2" />
              </div>
            </div>
            <p className="mt-3 text-xs text-zinc-400">Estimates are illustrative and not guarantees. Pricing and outcomes vary.</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="grid grid-cols-2 gap-6">
              <Metric label="Total invested" value={`$${result.totalInvested.toLocaleString(undefined,{maximumFractionDigits:0})}`} />
              <Metric label="Estimated price at horizon" value={`$${result.estCurrentPrice.toFixed(0)}/oz`} />
              <Metric label="Projected ounces accumulated" value={`${result.ounces.toFixed(2)} oz`} />
              <Metric label="Projected portfolio value" value={`$${result.estValue.toLocaleString(undefined,{maximumFractionDigits:0})}`} highlight />
            </div>
            <a href="#lead" className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-400 text-black font-semibold shadow hover:shadow-amber-400/50 transition">Book Your Free Consultation
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value, highlight }){
  return (
    <div className={`rounded-xl p-4 border ${highlight? 'border-amber-400/60 bg-amber-400/10':'border-zinc-800 bg-black/40'}`}>
      <div className="text-sm text-zinc-400">{label}</div>
      <div className={`mt-1 text-2xl font-semibold ${highlight? 'text-amber-300':'text-white'}`}>{value}</div>
    </div>
  );
}
