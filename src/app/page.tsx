export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #4c1d95 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '0.5rem',
          fontWeight: 800,
          letterSpacing: '-0.02em'
        }}>
          El Armario
        </h1>
        <p style={{
          fontSize: '1.5rem',
          opacity: 0.9,
          marginBottom: '3rem',
          fontWeight: 300
        }}>
          .com.do
        </p>

        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '3rem 2rem',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            fontWeight: 600
          }}>
            Próximamente
          </h2>
          <p style={{
            fontSize: '1.1rem',
            opacity: 0.8,
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Tu destino de moda en República Dominicana.<br/>
            Ropa, accesorios y estilo único.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="mailto:info@elarmario.com.do"
              style={{
                background: 'white',
                color: '#7c3aed',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              Contáctanos
            </a>
          </div>
        </div>

        <p style={{
          marginTop: '3rem',
          opacity: 0.6,
          fontSize: '0.875rem'
        }}>
          © 2025 El Armario. Todos los derechos reservados.
        </p>
      </div>
    </main>
  )
}
