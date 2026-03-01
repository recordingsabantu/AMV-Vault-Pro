import { LayoutDashboard, Music, BarChart3, Shield, LogOut } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#1A110A] text-[#F5E6CC]">
      <aside className="w-64 border-r border-[#D4AF37]/10 bg-black/40 p-6 flex flex-col gap-6">
        <div className="font-bold text-[#D4AF37] tracking-widest text-sm">AMV VAULT PRO</div>
        <nav className="flex flex-col gap-2 flex-1">
          <a href="/dashboard" className="flex items-center gap-3 p-3 rounded bg-[#D4AF37]/10 text-[#D4AF37]"><LayoutDashboard size={18}/> Overview</a>
          <a href="/dashboard/releases" className="flex items-center gap-3 p-3 rounded opacity-60 hover:opacity-100"><Music size={18}/> Releases</a>
          <a href="/dashboard/analytics" className="flex items-center gap-3 p-3 rounded opacity-60 hover:opacity-100"><BarChart3 size={18}/> Analytics</a>
          <a href="/dashboard/license" className="flex items-center gap-3 p-3 rounded opacity-60 hover:opacity-100"><Shield size={18}/> DDEX License</a>
        </nav>
        <button className="flex items-center gap-3 p-3 text-red-400 mt-auto"><LogOut size={18}/> Sign Out</button>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
