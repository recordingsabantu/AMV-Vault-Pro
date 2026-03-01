import { BarChart3, TrendingUp, Music2, Users } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-[#D4AF37] text-3xl font-bold">Artist Overview</h1>
        <p className="opacity-60 text-sm italic">Welcome back to Abantü Recordings HQ</p>
      </header>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-black/20 p-6 rounded-xl border border-[#D4AF37]/10 text-center">
          <BarChart3 className="mx-auto mb-2 text-[#D4AF37]" size={20} />
          <p className="text-xs opacity-50 uppercase tracking-widest">Total Streams</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-black/20 p-6 rounded-xl border border-[#D4AF37]/10 text-center">
          <TrendingUp className="mx-auto mb-2 text-[#D4AF37]" size={20} />
          <p className="text-xs opacity-50 uppercase tracking-widest">Revenue (ZAR)</p>
          <p className="text-2xl font-bold text-green-500">R0.00</p>
        </div>
        <div className="bg-black/20 p-6 rounded-xl border border-[#D4AF37]/10 text-center">
          <Music2 className="mx-auto mb-2 text-[#D4AF37]" size={20} />
          <p className="text-xs opacity-50 uppercase tracking-widest">Active Releases</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-black/20 p-6 rounded-xl border border-[#D4AF37]/10 text-center">
          <Users className="mx-auto mb-2 text-[#D4AF37]" size={20} />
          <p className="text-xs opacity-50 uppercase tracking-widest">Artist Profiles</p>
          <p className="text-2xl font-bold">1</p>
        </div>
      </div>
    </div>
  );
}
