'use client';
import { 
  LayoutDashboard, Library, Wallet, Search, 
  Home, Disc, Users, Calendar, Play, SkipForward, 
  SkipBack, Volume2, Mic2 
} from 'lucide-react';
import UploadForm from '../components/UploadForm';

export default function AmvVaultPro() {
  const gold = '#C5A059';
  const dark = '#0F0908';
  const brown = '#1E1412';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: dark, color: '#F5E8D8', fontFamily: 'sans-serif' }}>
      
      <div style={{ display: 'flex', flex: 1 }}>
        {/* SIDEBAR: NAVIGATION HUB */}
        <aside style={{ width: '240px', backgroundColor: brown, borderRight: `1px solid ${gold}33`, padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontWeight: '900', fontSize: '22px', color: gold, marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: gold, rotate: '45deg' }} /> AMV VAULT
          </div>
          
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <p style={{ fontSize: '10px', color: gold, opacity: 0.5, marginBottom: '10px', letterSpacing: '1px' }}>MENU</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', borderRadius: '8px', backgroundColor: `${gold}22`, color: gold }}><Home size={18}/> Homepage</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', opacity: 0.6 }}><Disc size={18}/> Browse/Discover</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', opacity: 0.6 }}><Users size={18}/> Artist Profiles</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', opacity: 0.6 }}><Calendar size={18}/> Live/Events</div>
          </nav>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '20px' }}>
            <p style={{ fontSize: '10px', color: gold, opacity: 0.5, marginBottom: '10px', letterSpacing: '1px' }}>YOUR OFFICE</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', opacity: 0.6 }}><LayoutDashboard size={18}/> Dashboard</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', opacity: 0.6 }}><Wallet size={18}/> E-commerce/Vault</div>
          </nav>
        </aside>

        {/* MAIN INTERFACE: HOMEPAGE & SEARCH */}
        <main style={{ flex: 1, padding: '40px', overflowY: 'auto', paddingBottom: '120px' }}>
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <div style={{ position: 'relative', width: '400px' }}>
              <Search style={{ position: 'absolute', left: '15px', top: '12px', opacity: 0.4 }} size={18} />
              <input 
                placeholder="Search artists, albums, or Gqom tracks..." 
                style={{ width: '100%', padding: '12px 12px 12px 45px', backgroundColor: brown, border: `1px solid ${gold}33`, borderRadius: '30px', color: 'white' }} 
              />
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
               <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '12px', fontWeight: 'bold' }}>Abantü Admin</p>
                  <p style={{ fontSize: '10px', color: gold }}>PRO ACCOUNT</p>
               </div>
               <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: gold }} />
            </div>
          </header>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '20px' }}>Trending in Durban</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{ backgroundColor: brown, padding: '15px', borderRadius: '15px', border: `1px solid ${gold}11` }}>
                  <div style={{ width: '100%', aspectRatio: '1/1', backgroundColor: '#333', borderRadius: '10px', marginBottom: '12px', background: `linear-gradient(45deg, ${brown}, ${gold}33)` }} />
                  <p style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Gqom Anthem Vol. {i}</p>
                  <p style={{ fontSize: '12px', opacity: 0.5 }}>AMV Exclusive</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ backgroundColor: brown, padding: '30px', borderRadius: '24px', border: `1px solid ${gold}33` }}>
            <h2 style={{ color: gold, fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '20px' }}>UPLOAD TO DISTRIBUTION</h2>
            <UploadForm />
          </section>
        </main>
      </div>

      {/* STICKY PLAYER: PERSISTENT CONTROLS */}
      <footer style={{ height: '90px', backgroundColor: '#160e0d', borderTop: `1px solid ${gold}33`, position: 'fixed', bottom: 0, width: '100%', display: 'flex', alignItems: 'center', padding: '0 30px', justifyContent: 'space-between', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', width: '300px' }}>
          <div style={{ width: '56px', height: '56px', backgroundColor: gold, borderRadius: '6px' }} />
          <div>
            <p style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Now Scanning...</p>
            <p style={{ fontSize: '11px', color: gold, margin: 0 }}>AMV Metadata Engine</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
            <SkipBack size={20} style={{ opacity: 0.6 }} />
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F5E8D8', color: dark, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Play size={20} fill={dark} />
            </div>
            <SkipForward size={20} style={{ opacity: 0.6 }} />
          </div>
          <div style={{ width: '500px', height: '4px', backgroundColor: `${gold}22`, borderRadius: '2px', position: 'relative' }}>
            <div style={{ width: '30%', height: '100%', backgroundColor: gold, borderRadius: '2px' }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', width: '300px', justifyContent: 'flex-end' }}>
          <Mic2 size={18} style={{ opacity: 0.6 }} />
          <Volume2 size={18} style={{ opacity: 0.6 }} />
          <div style={{ width: '100px', height: '4px', backgroundColor: `${gold}22`, borderRadius: '2px' }}>
            <div style={{ width: '70%', height: '100%', backgroundColor: '#F5E8D8', borderRadius: '2px' }} />
          </div>
        </div>
      </footer>
    </div>
  );
}
