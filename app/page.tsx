
'use client';
import { LayoutDashboard, Library, Wallet } from 'lucide-react';
// These must match the folder you just made!
import UploadForm from '../components/UploadForm'; 
import MetadataForm from '../components/MetadataForm';
 
export default function Page() {
  const gold = '#C5A059';
  const dark = '#0F0908';
  const brown = '#1E1412';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: dark, color: '#F5E8D8' }}>
      {/* Sidebar - This gives the "Vault" its professional look */}
      <aside style={{ width: '250px', backgroundColor: brown, borderRight: `1px solid ${gold}33`, padding: '40px 20px' }}>
        <div style={{ color: gold, fontWeight: '900', fontSize: '22px', marginBottom: '40px' }}>AMV VAULT</div>
        <div style={{ backgroundColor: gold, color: dark, padding: '12px', borderRadius: '8px', fontWeight: 'bold', marginBottom: '10px', fontSize: '12px' }}>DASHBOARD</div>
        <div style={{ color: gold, opacity: 0.5, padding: '12px', fontSize: '12px' }}>CATALOG</div>
      </aside>

      {/* Main Section */}
      <main style={{ flex: 1, padding: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '900' }}>Distributor Portal</h1>
          <div style={{ color: gold, fontSize: '10px', border: `1px solid ${gold}`, padding: '5px 15px', borderRadius: '20px' }}>PRO ACTIVE</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
          <div>
            <UploadForm />
            <div style={{ marginTop: '30px' }}>
              <MetadataForm />
            </div>
          </div>

          {/* Wallet Section */}
          <div style={{ backgroundColor: brown, padding: '30px', borderRadius: '20px', border: `1px solid ${gold}4D`, height: 'fit-content' }}>
            <p style={{ color: gold, fontSize: '10px', fontWeight: 'bold' }}>EARNINGS</p>
            <p style={{ fontSize: '36px', fontWeight: '900' }}>R 0.00</p>
            <button style={{ width: '100%', padding: '15px', backgroundColor: gold, color: dark, border: 'none', borderRadius: '10px', fontWeight: 'bold', marginTop: '20px' }}>WITHDRAW</button>
          </div>
        </div>
      </main>
    </div>
  );
}

