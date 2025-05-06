function Inicio() {
  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
    backgroundColor: '#f9fafb',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const textStyle = {
    fontSize: '1.8rem',
    color: '#2d3748',
    textAlign: 'center',
  };

  return (
    <div style={boxStyle}>
      <p style={textStyle}>👋 ¡Hola! Estás en la plataforma principal</p>
    </div>
  );
}

export default Inicio;
