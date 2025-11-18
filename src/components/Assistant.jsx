import { useState } from 'react';

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi! Ask me anything about physical gold and our accumulation plans.' }]);

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  async function send() {
    const q = input.trim();
    if(!q) return;
    setMessages(m => [...m, { role: 'user', content: q }]);
    setInput('');
    try {
      const res = await fetch(`${backend}/api/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q })
      });
      const data = await res.json();
      setMessages(m => [...m, { role: 'assistant', content: data.answer || 'Thanks!'}]);
    } catch (e) {
      setMessages(m => [...m, { role: 'assistant', content: 'Sorry, I could not fetch an answer right now.' }]);
    }
  }

  return (
    <>
      <button onClick={()=>setOpen(true)} className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold px-5 py-3 shadow-[0_0_30px_rgba(245,197,24,0.35)]">Ask Aurum</button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-xl">
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
              <div className="font-medium">Aurum Assistant</div>
              <button onClick={()=>setOpen(false)} className="text-zinc-400 hover:text-white">✕</button>
            </div>
            <div className="p-4 max-h-80 overflow-auto space-y-3">
              {messages.map((m,i)=> (
                <div key={i} className={m.role==='assistant' ? 'text-amber-200' : 'text-zinc-200'}>
                  {m.content}
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-zinc-800 flex gap-2">
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter' && send()} placeholder="Type your question..." className="flex-1 rounded-lg bg-black border border-zinc-800 px-3 py-2" />
              <button onClick={send} className="rounded-lg px-4 py-2 bg-amber-400 text-black font-semibold">Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
