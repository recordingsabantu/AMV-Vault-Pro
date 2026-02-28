'use client';
import { UploadCloud } from 'lucide-react';

export default function UploadForm() {
  return (
    <div style={{ border: '2px dashed rgba(197,160,89,0.3)', borderRadius: '15px', padding: '40px', textAlign: 'center' }}>
      <UploadCloud size={48} color="#C5A059" style={{ marginBottom: '15px' }} />
      <input type="file" id="file-upload" style={{ display: 'none' }} />
      <label htmlFor="file-upload" style={{ cursor: 'pointer', display: 'block' }}>
        <p style={{ fontWeight: 'bold', margin: '0' }}>Click to upload WAV</p>
        <p style={{ fontSize: '12px', opacity: 0.5 }}>Maximum file size: 200MB</p>
      </label>
    </div>
  );
}
