// src/assets/components/FeaturedWork.tsx
import VideoCard from './VideoCard';

const videos = [
  {
    id: 1,
    title: 'Cinematic Storytelling',
    role: 'Color Grading | Smooth Cuts',
    src: '/videos/video1.mp4',
  },
  {
    id: 2,
    title: 'Social Media Edit',
    role: 'Quick Cuts | Engaging Pacing',
    src: '/videos/video2.mp4',
  },
  {
    id: 3,
    title: 'Interview & Dialogue Edit',
    role: 'Narrative Flow | Audio Sync | Subtle Transitions',
    src: '/videos/video3.mp4',
  },
  {
    id: 4,
    title: 'Motion Graphics & Branding',
    role: 'Visual Effects | Text Overlays | Branding',
    src: '/videos/video4.mp4',
  },
];

export default function FeaturedWork() {
  return (
    <section style={{ padding: '8rem 1.5rem', backgroundColor: '#0E0E0E' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        
        {/* Section label */}
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
          Selected Work
        </h2>

        {/* Editorial grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '3rem', // IMPORTANT: air = cinematic
          }}
        >
          {videos.map((v, idx) => (
            <div
              key={v.id}
              style={{
                opacity: 0,
                animation: 'fadeUp 0.6s ease-out forwards',
                animationDelay: `${idx * 0.15}s`,
              }}
            >
              <VideoCard {...v} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
