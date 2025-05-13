function Choferes() {
  const choferesMock = [
    'Carlos Ramírez',
    'Luis Fernández',
    'Andrés López',
    'Jorge Martínez',
    'Felipe Torres',
    'Diego Vargas',
    'Héctor Salinas',
  ];

  const containerStyle = {
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '1.5rem',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#2d3748',
    marginBottom: '1.5rem',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '1.5rem',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '1.2rem',
    borderRadius: '10px',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
    fontSize: '1.1rem',
    color: 'red',
    textAlign: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🚌 Lista de Choferes Registrados</h2>
      <div style={gridStyle}>
        {choferesMock.map((nombre, idx) => (
          <div
            key={idx}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = cardHoverStyle.transform;
              e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = cardStyle.boxShadow;
            }}
          >
            {nombre}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Choferes;
