import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#2A1B0E] text-[#F5E6CC] p-8 flex flex-col items-center">
      <h1 className="text-[#D4AF37] text-4xl font-bold mb-4 tracking-tight text-center uppercase">Distribution Plans</h1>
      <p className="text-[#C5A059] mb-12 text-center max-w-xl">Choose your legacy path. All plans include global distribution and 100% royalty ownership.</p>
      
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Basic Plan */}
        <div className="bg-black/20 border border-[#D4AF37]/20 p-8 rounded-2xl flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Distribution Basic</h2>
          <p className="text-[#D4AF37] text-4xl font-black mb-6">R420 <span className="text-sm opacity-50">/year</span></p>
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#D4AF37]"/> 1 Artist Profile</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#D4AF37]"/> Unlimited Music Uploads</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#D4AF37]"/> Standard Support</li>
          </ul>
          <Link href="/api/pay/basic" className="bg-transparent border border-[#D4AF37] text-[#D4AF37] py-3 rounded text-center font-bold hover:bg-[#D4AF37] hover:text-[#2A1B0E] transition">SELECT BASIC</Link>
        </div>

        {/* Pro Plan */}
        <div className="bg-[#D4AF37]/5 border-2 border-[#D4AF37] p-8 rounded-2xl flex flex-col relative overflow-hidden">
          <div className="absolute top-4 right-[-35px] bg-[#D4AF37] text-[#2A1B0E] py-1 px-10 rotate-45 text-[10px] font-bold">RECOMENDED</div>
          <h2 className="text-2xl font-bold mb-2">Distribution Pro</h2>
          <p className="text-[#D4AF37] text-4xl font-black mb-6">R859 <span className="text-sm opacity-50">/year</span></p>
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#D4AF37]"/> Up to 5 Artist Profiles</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#D4AF37]"/> Advanced Analytics</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#D4AF37]"/> Priority DDEX Processing</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#D4AF37]"/> Generation Vault Storage</li>
          </ul>
          <Link href="/api/pay/pro" className="bg-[#D4AF37] text-[#2A1B0E] py-3 rounded text-center font-bold hover:bg-[#B8962E] transition">UPGRADE TO PRO</Link>
        </div>
      </div>
    </div>
  );
}
