"use client";
import { supabase } from '../../../lib/supabase';
import { useState } from 'react';

export default function ReleaseUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  async function handlePush() {
    if (!file) return alert("Please select a WAV file first, brother.");
    
    setUploading(true);
    
    // 1. Upload to Storage
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const { data, error } = await supabase.storage
      .from('music-vault')
      .upload(fileName, file);

    if (error) {
      alert("Upload failed: " + error.message);
    } else {
      alert("MAGIC! Your music is now secured in the AMV Vault.");
      // 2. Here we would save the title/artist to the Database
    }
    setUploading(false);
  }

  return (
    // ... (Keep your beautiful UI code from before)
    // Add this to your input: 
    // onChange={(e) => setFile(e.target.files?.[0] || null)}
    
    // Change your button to:
    <button 
      onClick={handlePush}
      disabled={uploading}
      className="bg-[#D4AF37] text-[#2A1B0E] px-12 py-4 rounded font-black">
      {uploading ? "LOCKING VAULT..." : "PUSH TO DISTRIBUTION"}
    </button>
  );
}
