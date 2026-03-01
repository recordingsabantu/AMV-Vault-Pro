import { PlusCircle, UploadCloud } from 'lucide-react';

export default function Releases() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-[#D4AF37] text-2xl font-bold uppercase tracking-widest">My Releases</h2>
        <button className="bg-[#D4AF37] text-[#2A1B0E] px-4 py-2 rounded flex items-center gap-2 font-bold text-xs">
          <PlusCircle size={16} /> NEW SUBMISSION
        </button>
      </div>

      <div className="border-2 border-dashed border-[#D4AF37]/20 rounded-3xl p-20 flex flex-col items-center justify-center text-center">
        <UploadCloud size={48} className="text-[#D4AF37]/40 mb-4" />
        <h3 className="text-xl font-bold mb-2">No Releases Found</h3>
        <p className="text-sm opacity-50 max-w-xs mx-auto mb-6">Start your legacy by uploading your first high-quality audio file (WAV preferred).</p>
        <button className="text-[#D4AF37] text-sm underline hover:opacity-100 transition">Download Metadata Template</button>
      </div>
    </div>
  );
}
