export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0E0E0E', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h1 className="hero-name">Ayuk Divine</h1>
        <p className="hero-role mt-2">video editor</p>
        <div style={{
          marginTop: '2rem',
          width: '6rem',
          height: '1px',
          backgroundColor: '#737373',
          opacity: 0.6
        }} />
      </div>
    </section>
  );
}