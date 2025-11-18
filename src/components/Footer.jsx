export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-white font-semibold">Aurum Vision</div>
          <p className="mt-2 text-zinc-400">LBMA-certified physical gold accumulation plans.</p>
        </div>
        <div>
          <div className="text-white font-medium">Legal</div>
          <ul className="mt-2 space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Compliance & Disclosures</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-medium">Security</div>
          <ul className="mt-2 space-y-1">
            <li>Institutional vaults</li>
            <li>Insurance coverage</li>
            <li>Audit & certifications</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-medium">Connect</div>
          <ul className="mt-2 space-y-1">
            <li>LinkedIn</li>
            <li>Twitter/X</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Aurum Vision. All rights reserved.</div>
    </footer>
  );
}
