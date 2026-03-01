import { Music, LayoutDashboard, BarChart3, ShieldCheck, LogOut } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#1A110A]">
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-[#D4AF37]/10 bg-black/40 p-6 flex flex-col">
        <div className="mb-10">
          <h2 className="text-[#D4AF37] font-bold tracking-tighter">AMV VAULT PRO</h2>
          <p className="text-[10px] opacity-40">LIC: PA-DPIDA-2026022701-M</p>
        </div>
        
        <nav className="flex-1 space-y-4">
          <a href="/dashboard" className="flex items-center gap-3 text-[#D4AF37] bg-[#D4AF37]/10 p-3 rounded-lg"><LayoutDashboard size={20}/> Dashboard</a>
          <a href="/dashboard/releases" className="flex items-center gap-3 opacity-60 hover:opacity-100 p-3"><Music size={20}/> Releases</a>
          <a href="/dashboard/analytics" className="flex items-center gap-3 opacity-60 hover:opacity-100 p-3"><BarChart3 size={20}/> Analytics & Payouts</a>
          <a href="/dashboard/license" className="flex items-center gap-3 opacity-60 hover:opacity-100 p-3"><ShieldCheck size={20}/> DDEX License</a>
        </nav>

        <button className="flex items-center gap-3 text-red-400 p-3 mt-auto"><LogOut size={20}/> Sign Out</button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}
