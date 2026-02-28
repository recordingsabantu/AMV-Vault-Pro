'use client';

export default function MetadataForm() {
  return (
    <div style={{ backgroundColor: '#1E1412', padding: '30px', borderRadius: '20px', border: '1px solid rgba(197,160,89,0.1)' }}>
      <h2 style={{ fontSize: '11px', color: '#C5A059', letterSpacing: '2px', marginBottom: '20px' }}>2. TRACK METADATA</h2>
      <div style={{ display: 'grid', gap: '15px' }}>
        <input type="text" placeholder="Track Title" style={{ width: '100%' }} />
        <input type="text" placeholder="Primary Artist" style={{ width: '100%' }} />
        <select style={{ width: '100%' }}>
          <option>Select Genre</option>
          <option>Amapiano</option>
          <option>Gqom</option>
          <option>Hip Hop</option>
        </select>
        <button style={{ backgroundColor: '#C5A059', color: '#0F0908', fontWeight: 'bold', border: 'none', padding: '15px', borderRadius: '10px', cursor: 'pointer' }}>
          SUBMIT TO VAULT
        </button>
      </div>
    </div>
  );
}
