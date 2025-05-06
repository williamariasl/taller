function Vehiculos() {
  const vehiculosMock = [
    'Mazda 3',
    'Volkswagen Jetta',
    'Renault Logan',
    'Peugeot 208',
    'Fiat Cronos',
    'Suzuki Swift',
    'Seat Ibiza',
  ];

  const containerStyle = {
    width: '90%',
    maxWidth: '700px',
    margin: '3rem auto',
    background: '#f0f8ff',
    border: '2px solid #b0c4de',
    borderRadius: '12px',
    padding: '1.5rem',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '1.2rem',
    color: '#2c3e50',
    textAlign: 'left',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const rowStyle = {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #ccc',
  };

  const cellStyle = {
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#333',
    textAlign: 'left',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🚘 Vehículos Disponibles</h2>
      <table style={tableStyle}>
        <tbody>
          {vehiculosMock.map((v, idx) => (
            <tr key={idx} style={rowStyle}>
              <td style={cellStyle}>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vehiculos;
