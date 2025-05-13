function Inicio() {
  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
    backgroundColor: '#e2e8f0', // Changed color
    fontFamily: 'Segoe UI, sans-serif',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '20px',
    margin: '20px',
  };

  const textStyle = {
    fontSize: '2rem',
    color: '#2c5282',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const emojiStyle = {
    fontSize: '3rem',
    marginBottom: '10px',
  };

  return (
    <div style={boxStyle}>
      <div style={emojiStyle}>👋</div>
      <p style={textStyle}>¡Hola! Estás en la plataforma principal</p>
    </div>
  );
}

export default Inicio;
