import { Shield, Music, BarChart3, Lock, CreditCard, Landmark, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#2A1B0E] text-[#F5E6CC] font-sans selection:bg-vault-gold selection:text-black">
      {/* Navigation */}
      <nav className="border-b border-[#D4AF37]/30 p-6 flex justify-between items-center bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-[#D4AF37] tracking-[0.2em]">ABANTÜ RECORDINGS</h1>
          <span className="text-[10px] text-[#D4AF37]/60 tracking-widest uppercase">Premium Distribution Vault</span>
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <a href="#plans" className="hover:text-[#D4AF37] transition">Plans</a>
          <a href="#banking" className="hover:text-[#D4AF37] transition">Payouts</a>
          <div className="h-4 w-[1px] bg-[#D4AF37]/20"></div>
          <button className="bg-[#D4AF37] text-[#2A1B0E] px-6 py-2 rounded-sm font-bold hover:bg-[#B8962E] transition-all transform hover:scale-105 shadow-lg shadow-black/50">
            ARTIST LOGIN
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8">
        {/* DDEX Status Bar */}
        <div className="bg-black/20 border border-[#D4AF37]/20 rounded-full py-2 px-6 flex items-center justify-between mb-12">
          <div className="flex items-center gap-2 text-xs">
            <Shield size={14} className="text-[#D4AF37]" />
            <span className="opacity-70">DDEX COMPLIANT:</span>
            <span className="font-mono font-bold text-[#D4AF37]">PA-DPIDA-2026022701-M</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <CheckCircle size={14} className="text-green-500" />
            <span className="opacity-70">BUSINESS VERIFIED:</span>
            <span className="font-bold text-[#D4AF37]">ABANTÜ RECORDINGS (PTY) LTD</span>
          </div>
        </div>

        {/* Hero Section */}
        <header className="py-12 text-center">
          <h2 className="text-6xl font-black mb-6 tracking-tight">The Future of <span className="text-[#D4AF37]">Sound.</span></h2>
          <p className="text-[#C5A059] text-xl max-w-2xl mx-auto leading-relaxed">
            Distribute your art globally with the precision of a major label and the soul of the continent.
          </p>
        </header>

        {/* Banking & Payouts Section */}
        <section id="banking" className="my-20 bg-gradient-to-br from-black/60 to-transparent border border-[#D4AF37]/30 p-8 rounded-2xl relative">
          <div className="absolute -top-4 left-8 bg-[#2A1B0E] px-4 py-1 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest">
            OFFICIAL BUSINESS SETTINGS
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Landmark className="text-[#D4AF37]" /> Payout Integrity
              </h3>
              <p className="text-[#C5A059] mb-6 leading-relaxed">
                All royalty payments and subscription fees are managed through our secure Nedbank Enterprise account. 
                We ensure 100% transparency for our artists and their legacies.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-[#D4AF37]/10 pb-2">
                  <span className="text-sm opacity-60">Bank</span>
                  <span className="font-bold">NEDBANK</span>
                </div>
                <div className="flex justify-between border-b border-[#D4AF37]/10 pb-2">
                  <span className="text-sm opacity-60">Account Holder</span>
                  <span className="font-bold">ABANTÜ RECORDINGS (PTY) LTD</span>
                </div>
                <div className="flex justify-between border-b border-[#D4AF37]/10 pb-2">
                  <span className="text-sm opacity-60">Business Account No.</span>
                  <span className="font-mono font-bold text-[#D4AF37]">3154214088</span>
                </div>
              </div>
            </div>
            <div className="bg-[#D4AF37]/5 p-8 rounded-xl border border-[#D4AF37]/10 text-center">
              <BarChart3 size={48} className="mx-auto mb-4 text-[#D4AF37]" />
              <h4 className="text-xl font-bold mb-2">Revenue Tracking</h4>
              <p className="text-sm text-[#C5A059]">Artists receive monthly payouts directly into their nominated accounts once the R500 threshold is reached.</p>
            </div>
          </div>
        </section>

        {/* Pricing/Plans Section */}
        <section id="plans" className="grid md:grid-cols-2 gap-8 mb-20">
             {/* ... (Previous pricing cards here with the new colors) ... */}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 p-12 bg-black border-t border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <p className="text-[#D4AF37] font-bold">ABANTÜ RECORDINGS (PTY) LTD</p>
            <p className="text-[10px] opacity-40 uppercase tracking-widest">Enterprise Distribution Vault v1.0</p>
          </div>
          <div className="text-right text-[10px] opacity-40 leading-loose">
            <p>NEDBANK ACCOUNT: 3154214088</p>
            <p>DDEX LICENSE: PA-DPIDA-2026022701-M</p>
            <p>ESTABLISHED 2026 | FOR THE GENERATIONS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
