function Choferes() {
  const choferesMock = [
    'Santiago Pérez',
    'Martín González',
    'Camilo Herrera',
    'Oscar Medina',
    'Sebastián Ruiz',
    'Pedro Valdés',
    'Iván Castaño',
  ];

  const containerStyle = {
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    fontFamily: 'Verdana, sans-serif',
  };

  const headingStyle = {
    fontSize: '1.6rem',
    color: '#1a202c',
    marginBottom: '1.2rem',
    textAlign: 'left',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1rem',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '6px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    fontSize: '1rem',
    color: '#2d3748',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🚌 Lista de Choferes Registrados</h2>
      <div style={gridStyle}>
        {choferesMock.map((nombre, idx) => (
          <div key={idx} style={cardStyle}>
            {nombre}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Choferes;
