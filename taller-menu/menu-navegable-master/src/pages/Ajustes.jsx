function Ajustes() {
  const layoutStyle = {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    fontFamily: 'Arial, sans-serif',
    color: '#1a202c',
  };

  const titleStyle = {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b6cb0',
  };

  const sectionStyle = {
    marginBottom: '1.5rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#4a5568',
  };

  const selectStyle = {
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1px solid #cbd5e0',
    fontSize: '1rem',
    width: '100%',
    boxSizing: 'border-box',
  };

  const checkboxContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '0.5rem',
  };

  const checkboxStyle = {
    transform: 'scale(1.2)',
    cursor: 'pointer',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '12px',
    backgroundColor: '#2b6cb0',
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2c5282',
  };

  return (
    <div style={layoutStyle}>
      <h2 style={titleStyle}>🛠️ Panel de Ajustes</h2>
      <form>
        <div style={sectionStyle}>
          <label style={labelStyle}>Seleccionar idioma preferido</label>
          <select style={selectStyle}>
            <option value="es">Español</option>
            <option value="en">Inglés</option>
          </select>
        </div>
        <div style={sectionStyle}>
          <label style={labelStyle}>Preferencias:</label>
          <div style={checkboxContainerStyle}>
            <input type="checkbox" style={checkboxStyle} />
            <span>Habilitar alertas por correo</span>
          </div>
        </div>
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default Ajustes;
