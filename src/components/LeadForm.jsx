import { useState } from 'react';

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', monthly_budget: '', message: '' });
  const [status, setStatus] = useState(null);

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  async function handleSubmit(e){
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          monthly_budget: form.monthly_budget ? Number(form.monthly_budget) : null,
          message: form.message,
          source: 'website'
        })
      });
      if(!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', monthly_budget: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="lead" className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Book Your Free Consultation</h2>
          <p className="mt-2 text-amber-100/80">Tell us a bit about your goals and we’ll match you with a dedicated gold advisor.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
            <Input label="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
            <Input label="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
            <Input label="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            <Input label="Monthly budget (USD)" type="number" value={form.monthly_budget} onChange={e=>setForm({...form, monthly_budget:e.target.value})} />
            <div className="sm:col-span-2">
              <label className="block text-sm text-zinc-300 mb-2">Message</label>
              <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="w-full rounded-lg bg-black border border-zinc-800 px-3 py-2 min-h-[120px]" placeholder="Your goals, timeline, and any questions"/>
            </div>
            <div className="sm:col-span-2 flex items-center gap-4">
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 text-black font-semibold shadow hover:shadow-amber-400/50 transition">
                {status==='loading' ? 'Submitting...' : 'Book Your Free Consultation'}
              </button>
              {status==='success' && <span className="text-emerald-400">Thanks! We’ll be in touch shortly.</span>}
              {status==='error' && <span className="text-red-400">Something went wrong. Please try again.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }){
  return (
    <div>
      <label className="block text-sm text-zinc-300 mb-2">{label}</label>
      <input {...props} className="w-full rounded-lg bg-black border border-zinc-800 px-3 py-2" />
    </div>
  );
}
