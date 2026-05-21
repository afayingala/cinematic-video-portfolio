import { useState } from 'react';

const services = [
  { label: 'Short-form Reel / TikTok / Story Edit', price: '15 000 F' },
  { label: 'YouTube / Long-form Edit — up to 10 min', price: '45 000 F' },
  { label: 'YouTube / Long-form Edit — 10 to 30 min', price: '80 000 F' },
  { label: 'Color Grading', price: '20 000 F' },
  { label: 'Motion Graphics & Intro Animation', price: '35 000 F' },
  { label: 'Wedding Highlight Film', price: '120 000 F' },
  { label: 'Corporate / Event Video', price: '150 000 F' },
  { label: 'Full Shoot + Edit Package', price: '250 000 F' },
];

function PricingRow({ label, price, index }: { label: string; price: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '1.25rem',
        padding: '1.25rem 1rem',
        borderBottom: '1px solid #1a1a1a',
        backgroundColor: hovered ? '#141414' : 'transparent',
        transform: hovered ? 'translateX(6px)' : 'translateX(0)',
        transition: 'background-color 0.25s ease, transform 0.25s ease',
        cursor: 'default',
        opacity: 0,
        animation: 'fadeUp 0.5s ease-out forwards',
        animationDelay: `${index * 0.07}s`,
      }}
    >
      {/* Index number */}
      <span
        style={{
          fontFamily: 'Space Grotesk',
          fontSize: '0.65rem',
          color: hovered ? '#525252' : '#2e2e2e',
          letterSpacing: '0.1em',
          minWidth: '1.8rem',
          transition: 'color 0.25s ease',
          userSelect: 'none',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Service label */}
      <span
        style={{
          fontFamily: 'Space Grotesk',
          fontSize: '0.9rem',
          color: hovered ? '#F2F2F2' : '#A3A3A3',
          letterSpacing: '0.02em',
          transition: 'color 0.25s ease',
          flexShrink: 0,
        }}
      >
        {label}
      </span>

      {/* Leader dots */}
      <span
        style={{
          flexGrow: 1,
          borderBottom: '1px dashed #2a2a2a',
          marginBottom: '4px',
          opacity: hovered ? 1 : 0.5,
          transition: 'opacity 0.25s ease',
        }}
      />

      {/* Price */}
      <span
        style={{
          fontFamily: 'Space Grotesk',
          fontSize: '0.85rem',
          color: hovered ? '#e5e5e5' : '#525252',
          letterSpacing: '0.08em',
          whiteSpace: 'nowrap',
          transition: 'color 0.25s ease',
        }}
      >
        {price}
      </span>
    </div>
  );
}

export default function Pricing() {
  return (
    <section style={{ padding: '8rem 1.5rem', backgroundColor: '#0E0E0E' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        <h2
          style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: '#737373',
            marginBottom: '4rem',
            fontFamily: 'Space Grotesk',
          }}
        >
          Pricing
        </h2>

        <div style={{ borderTop: '1px solid #1a1a1a' }}>
          {services.map((s, idx) => (
            <PricingRow key={idx} index={idx} label={s.label} price={s.price} />
          ))}
        </div>

        <p
          style={{
            marginTop: '2.5rem',
            fontSize: '0.7rem',
            color: '#3a3a3a',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Custom projects — get in touch for a quote.
        </p>

      </div>
    </section>
  );
}
