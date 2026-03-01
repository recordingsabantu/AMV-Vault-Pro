"use client"; // This makes the page interactive
import { useSearchParams } from 'next/navigation';
import { CheckCircle, PartyPopper } from 'lucide-react';

export default function Dashboard() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get('payment') === 'success';

  return (
    <div className="space-y-8">
      {isSuccess && (
        <div className="bg-[#D4AF37]/20 border border-[#D4AF37] p-4 rounded-lg flex items-center gap-4 animate-bounce">
          <PartyPopper className="text-[#D4AF37]" />
          <div>
            <p className="font-bold text-[#D4AF37]">Payment Verified!</p>
            <p className="text-xs opacity-70">Your AMV Vault is now active. Welcome to the family.</p>
          </div>
        </div>
      )}

      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-[#D4AF37] text-3xl font-bold">Artist HQ</h1>
          <p className="opacity-60 text-sm">Managing: Abantü Recordings (Pty) Ltd</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] opacity-50 uppercase">DDEX License</p>
          <p className="text-[#D4AF37] font-mono text-xs">PA-DPIDA-2026022701-M</p>
        </div>
      </header>

      {/* Main Pro Dashboard Content (Stats, etc.) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/40 border border-[#D4AF37]/10 p-6 rounded-2xl">
          <p className="text-xs opacity-50 uppercase mb-2">Current Balance</p>
          <p className="text-3xl font-bold text-[#D4AF37]">R0.00</p>
          <button className="mt-4 text-[10px] text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full uppercase">Request Payout</button>
        </div>
        {/* Add more pro cards here */}
      </div>
    </div>
  );
}
