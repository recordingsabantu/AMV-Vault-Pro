"use client";

import { useSearchParams } from 'next/navigation';
import { 
  BarChart3, 
  TrendingUp, 
  Music2, 
  Users, 
  CheckCircle, 
  PartyPopper,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { Suspense } from 'react';

// We wrap the content in Suspense to handle the search params properly in Next.js 15
function DashboardContent() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get('payment') === 'success';

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* SUCCESS NOTIFICATION */}
      {isSuccess && (
        <div className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] p-6 rounded-2xl flex items-center justify-between shadow-2xl shadow-yellow-500/10">
          <div className="flex items-center gap-4">
            <div className="bg-[#D4AF37] p-3 rounded-full">
              <PartyPopper className="text-[#2A1B0E]" size={24} />
            </div>
            <div>
              <p className="font-black text-[#D4AF37] text-lg uppercase tracking-widest">Vault Activated</p>
              <p className="text-sm opacity-70">Payment verified. Your distribution channels are now open.</p>
            </div>
          </div>
          <button className="text-[10px] border border-[#D4AF37]/40 px-3 py-1 rounded hover:bg-[#D4AF37] hover:text-black transition uppercase font-bold">Dismiss</button>
        </div>
      )}

      {/* HEADER SECTION */}
      <header className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-[#D4AF37]/10 pb-6">
        <div>
          <h1 className="text-[#D4AF37] text-4xl font-black tracking-tighter uppercase italic">Artist HQ</h1>
          <p className="opacity-50 text-xs font-mono">ID: ABANTU-088-2026</p>
        </div>
        <div className="text-right flex items-center gap-3 bg-black/40 px-4 py-2 rounded-lg border border-[#D4AF37]/20">
          <ShieldCheck className="text-[#D4AF37]" size={16} />
          <div>
            <p className="text-[8px] opacity-40 uppercase tracking-[0.2em] leading-none">DDEX License</p>
            <p className="text-[#D4AF37] font-mono text-xs font-bold uppercase">PA-DPIDA-2026022701-M</p>
          </div>
        </div>
      </header>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Royalties', value: 'R0.00', icon: TrendingUp, color: 'text-green-500' },
          { label: 'Total Streams', value: '0', icon: BarChart3, color: 'text-[#D4AF37]' },
          { label: 'Releases', value: '0', icon: Music2, color: 'text-[#D4AF37]' },
          { label: 'Artists', value: '1', icon: Users, color: 'text-[#D4AF37]' },
        ].map((stat, i) => (
          <div key={i} className="bg-black/30 border border-[#D4AF37]/5 p-6 rounded-2xl hover:border-[#D4AF37]/30 transition group">
            <div className="flex justify-between items-start mb-4">
              <stat.icon size={20} className="opacity-40 group-hover:opacity-100 transition" />
              <ArrowUpRight size={14} className="opacity-20" />
            </div>
            <p className="text-[10px] opacity-40 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* QUICK ACTIONS */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-8 rounded-3xl">
          <h3 className="text-xl font-bold mb-4">Ready to Release?</h3>
          <p className="text-sm opacity-60 mb-6">Upload your high-fidelity WAV files and let our DDEX engine handle the rest.</p>
          <a href="/dashboard/releases" className="inline-block bg-[#D4AF37] text-[#2A1B0E] px-6 py-3 rounded font-black text-xs uppercase tracking-widest hover:bg-yellow-500 transition">
            Start New Submission
          </a>
        </div>
        
        <div className="bg-black/40 border border-[#D4AF37]/10 p-8 rounded-3xl flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-2">Banking Verified</h3>
          <p className="text-xs opacity-50 mb-4">Payouts scheduled for: <span className="text-[#D4AF37]">Nedbank (Pty) Ltd</span></p>
          <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
             <div className="bg-[#D4AF37] h-full w-[0%]"></div>
          </div>
          <p className="text-[10px] opacity-40 mt-2">Payout Threshold: 0% of R500.00 reached</p>
        </div>
      </div>
    </div>
  );
}

// MAIN EXPORT
export default function Dashboard() {
  return (
    <Suspense fallback={<div className="text-[#D4AF37] p-10 font-mono">Loading Vault...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
