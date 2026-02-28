export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ backgroundColor: '#0F0908' }}>
      <head>
        <title>AMV VAULT PRO | Elite Distribution</title>
        <style>{`
          body { 
            background-color: #0F0908 !important; 
            color: #F5E8D8 !important; 
            margin: 0; 
            font-family: sans-serif; 
          }
          input, select, button { 
            background: #1E1412 !important; 
            border: 1px solid #C5A059 !important; 
            color: white !important; 
            border-radius: 8px; 
            padding: 12px; 
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
