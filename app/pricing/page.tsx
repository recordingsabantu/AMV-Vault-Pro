export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#2A1B0E] p-10">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Basic Plan */}
        <div className="border border-[#D4AF37]/30 p-8 rounded-2xl bg-black/20">
          <h2 className="text-[#D4AF37] text-2xl font-bold">Distribution Basic</h2>
          <p className="text-4xl font-black my-4">R420 <span className="text-sm opacity-50">/year</span></p>
          <ul className="space-y-3 mb-8 opacity-80">
            <li>✓ 1 Artist Profile</li>
            <li>✓ Global Distribution</li>
            <li>✓ 100% Royalties</li>
          </ul>
          <button className="w-full bg-white/10 py-3 rounded hover:bg-[#D4AF37] hover:text-black transition font-bold">
            PAY VIA PAYFAST
          </button>
        </div>

        {/* Pro Plan */}
        <div className="border-2 border-[#D4AF37] p-8 rounded-2xl bg-[#D4AF37]/5">
          <h2 className="text-[#D4AF37] text-2xl font-bold">Distribution Pro</h2>
          <p className="text-4xl font-black my-4">R859 <span className="text-sm opacity-50">/year</span></p>
          <ul className="space-y-3 mb-8 opacity-80">
            <li>✓ 5 Artist Profiles</li>
            <li>✓ Priority DDEX Support</li>
            <li>✓ Advanced Analytics</li>
          </ul>
          <button className="w-full bg-[#D4AF37] text-[#2A1B0E] py-3 rounded font-bold hover:bg-yellow-500 transition">
            SECURE PRO ACCESS
          </button>
        </div>
      </div>
    </div>
  );
}
