function Vehiculos() {
  const vehiculosMock = [
    'Toyota Corolla',
    'Honda Civic',
    'Ford Focus',
    'Chevrolet Malibu',
    'Nissan Sentra',
    'Hyundai Elantra',
    'Kia Forte',
  ];

  const containerStyle = {
    width: '90%',
    maxWidth: '700px',
    margin: '3rem auto',
    background: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#34495e',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const rowStyle = (isOdd) => ({
    backgroundColor: isOdd ? '#f9f9f9' : '#ffffff',
    transition: 'background-color 0.3s',
  });

  const cellStyle = {
    padding: '12px 20px',
    fontSize: '1rem',
    color: '#2c3e50',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const rowHoverStyle = {
    cursor: 'pointer',
    backgroundColor: '#f0f8ff',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🚘 Vehículos Disponibles</h2>
      <table style={tableStyle}>
        <tbody>
          {vehiculosMock.map((v, idx) => (
            <tr
              key={idx}
              style={rowStyle(idx % 2 !== 0)}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = rowHoverStyle.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = rowStyle(idx % 2 !== 0).backgroundColor)}
            >
              <td style={cellStyle}>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vehiculos;
