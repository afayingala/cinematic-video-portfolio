// src/assets/components/VideoCard.tsx
type Props = {
  src: string;
  title: string;
  role: string;
};

export default function VideoCard({ src, title, role }: Props) {
  return (
    <article style={{ cursor: 'pointer' }}>
      
      {/* Video frame */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '0.25rem',
          paddingBottom: '56.25%', // ✅ 16:9
          backgroundColor: '#111',
        }}
      >
        <video
          src={src}
         
          loop
          playsInline
          preload="metadata"
        //   poster="/poster.jpg" // OPTIONAL but STRONGLY recommended
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.9,
            transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.play();
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.style.opacity = '0.9';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </div>

      {/* Meta row — OUTSIDE video */}
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
        }}
      >
        <h3
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: '1rem',
            fontWeight: 500,
            color: '#e5e5e5',
          }}
        >
          {title}
        </h3>

        <span
          style={{
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#737373',
          }}
        >
          {role}
        </span>
      </div>
    </article>
  );
}
