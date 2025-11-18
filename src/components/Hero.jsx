import Spline from '@splinetool/react-spline';

export default function Hero({ onPrimaryCta }) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_10%,rgba(212,175,55,0.18),transparent)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-amber-200 text-xs tracking-wide uppercase">
            Aurum Vision
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Protect Your Wealth. Accumulate Physical Gold, Month After Month.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-amber-100/90 max-w-2xl">
            Personalized gold accumulation plans with certified physical gold, fully secured and easily accessible.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={onPrimaryCta} className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold shadow-[0_0_30px_rgba(245,197,24,0.35)] hover:shadow-[0_0_45px_rgba(245,197,24,0.55)] transition">
              Book Your Free Consultation
              <svg className="w-4 h-4 transition -translate-x-0 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <a href="#calculator" className="text-amber-200/90 hover:text-amber-200 underline underline-offset-4">Estimate your plan</a>
          </div>
        </div>
      </div>
    </section>
  );
}
