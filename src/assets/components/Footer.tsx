export default function Footer() {
  return (
    <footer
      style={{
        padding: '4rem 1.5rem 3rem',
        textAlign: 'center',
        backgroundColor: '#0E0E0E',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
        }}
      >
        {/* Contact links */}
        <nav
          style={{
            display: 'flex',
            gap: '1.5rem',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            color: '#737373',
          }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=afayingala67@gmail.com"
             target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            email
          </a>

          <a
            href="https://instagram.com/your.ad.creator"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            instagram
          </a>

          <a
            href="https://wa.me/237678867307?text=Hello%20Divine,%20I%20saw%20your%20portfolio"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            whatsapp
          </a>

          <a
            href="tel:+237678867307"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            call
          </a>
        </nav>

        {/* Signature */}
        <p
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: '#525252',
            opacity: 0.7,
          }}
        >
          edited with intention.
        </p>
      </div>
    </footer>
  );
}
