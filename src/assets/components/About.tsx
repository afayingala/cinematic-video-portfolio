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
        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: '#A3A3A3',
            fontWeight: 400,
          }}
        >
          Video editor focused on storytelling,
          <br />
          rhythm, and visual mood.
        </p>
      </div>
    </section>
  );
}
