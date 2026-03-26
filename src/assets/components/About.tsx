// src/components/About.tsx
export default function About() {
  return (
    <section
      style={{
        padding: '6rem 1.5rem',
        backgroundColor: '#0E0E0E',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Headline */}
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#fff',
            marginBottom: '1.5rem',
          }}
        >
          About Me
        </h2>

        {/* Paragraph */}
        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: '#A3A3A3',
            fontWeight: 400,
          }}
        >
          With a background in technology and a passion for cinematic storytelling, I create videos that capture attention and communicate ideas effectively. From concept to final cut, I focus on crafting visuals that resonate, evoke emotion, and leave a lasting impact.
        </p>

        {/* Skills / Tools */}
        <p
          style={{
            marginTop: '2rem',
            color: '#cddbdc',
            fontWeight: '600',
            fontSize: '1rem',
          }}
        >
          Capcut | After Effects | DaVinci Resolve | Motion Graphics 
        </p>
      </div>
    </section>
  );
}