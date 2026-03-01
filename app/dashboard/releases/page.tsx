"use client";

import { UploadCloud, Music, Globe, Shield, FileAudio, Info } from 'lucide-react';
import { useState } from 'react';

export default function ReleaseUpload() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in slide-in-from-bottom-4 duration-700">
      {/* HEADER */}
      <header className="border-b border-[#D4AF37]/20 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-[#D4AF37] text-3xl font-black uppercase tracking-widest italic">New Submission</h1>
          <p className="opacity-50 text-xs">Standard DDEX Compliance: PA-DPIDA-2026022701-M</p>
        </div>
        <div className="bg-[#D4AF37]/10 px-3 py-1 rounded border border-[#D4AF37]/30">
          <span className="text-[10px] text-[#D4AF37] font-bold">STATUS: DRAFT</span>
        </div>
      </header>

      {/* THE UPLOAD BOX */}
      <section className="bg-black/40 border-2 border-dashed border-[#D4AF37]/20 rounded-3xl p-12 text-center group hover:border-[#D4AF37]/50 transition-all cursor-pointer">
        <div className="bg-[#D4AF37]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
          <UploadCloud className="text-[#D4AF37]" size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2">Drop your Master Audio</h3>
        <p className="text-xs opacity-50 mb-6 max-w-xs mx-auto">
          High-fidelity <span className="text-[#D4AF37]">WAV</span> or <span className="text-[#D4AF37]">FLAC</span> only. 
          Minimum 16-bit / 44.1kHz for global distribution.
        </p>
        <button className="bg-white/5 border border-[#D4AF37]/30 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#2A1B0E] transition">
          Select Audio File
        </button>
      </section>

      {/* METADATA FORM */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h4 className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest flex items-center gap-2">
            <Music size={16}/> Release Info
          </h4>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] opacity-40 uppercase">Release Title</label>
              <input type="text" placeholder="e.g. Midnight in Durban" className="bg-black/40 border border-[#D4AF37]/20 p-3 rounded text-sm focus:border-[#D4AF37] outline-none transition" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] opacity-40 uppercase">Main Artist(s)</label>
              <input type="text" placeholder="Separate with commas" className="bg-black/40 border border-[#D4AF37]/20 p-3 rounded text-sm focus:border-[#D4AF37] outline-none transition" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] opacity-40 uppercase">Genre</label>
                <select className="bg-black/40 border border-[#D4AF37]/20 p-3 rounded text-sm focus:border-[#D4AF37] outline-none transition">
                  <option>Amapiano</option>
                  <option>Gqom</option>
                  <option>Afro-House</option>
                  <option>Hip-Hop</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] opacity-40 uppercase">UPC / EAN</label>
                <input type="text" placeholder="Leave blank for auto" className="bg-black/40 border border-[#D4AF37]/20 p-3 rounded text-sm focus:border-[#D4AF37] outline-none transition" />
              </div>
            </div>
          </div>
        </div>

        {/* ARTWORK UPLOAD */}
        <div className="space-y-6">
          <h4 className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest flex items-center gap-2">
            <Globe size={16}/> Cover Art
          </h4>
          <div className="aspect-square bg-black/40 border border-[#D4AF37]/20 rounded-2xl flex flex-col items-center justify-center relative group overflow-hidden">
            <div className="text-center p-6 z-10">
              <FileAudio className="mx-auto mb-2 opacity-20" size={32} />
              <p className="text-[10px] opacity-40 uppercase">3000 x 3000px JPG/PNG</p>
            </div>
            <button className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition flex items-center justify-center text-[10px] font-bold opacity-0 group-hover:opacity-100 uppercase tracking-widest">
              Upload Artwork
            </button>
          </div>
        </div>
      </section>

      {/* SUBMIT BUTTON */}
      <footer className="border-t border-[#D4AF37]/10 pt-10 flex items-center justify-between">
        <div className="flex items-center gap-3 text-[#D4AF37]/60">
          <Shield size={20} />
          <p className="text-[10px] leading-tight">
            By submitting, you confirm you own 100% of the rights to this recording.<br />
            Abantü Recordings (Pty) Ltd will distribute this under license.
          </p>
        </div>
        <button className="bg-[#D4AF37] text-[#2A1B0E] px-12 py-4 rounded font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#D4AF37]/10 hover:bg-yellow-500 transition-all">
          Push to Distribution
        </button>
      </footer>
    </div>
  );
}
