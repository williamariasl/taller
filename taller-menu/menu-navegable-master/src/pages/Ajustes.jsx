function Ajustes() {
  const layoutStyle = {
    maxWidth: '700px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#edf2f7',
    borderRadius: '8px',
    fontFamily: 'Tahoma, sans-serif',
    color: '#2d3748',
  };

  const titleStyle = {
    fontSize: '1.7rem',
    marginBottom: '1rem',
    borderBottom: '2px solid #cbd5e0',
    paddingBottom: '0.5rem',
  };

  const sectionStyle = {
    marginBottom: '1.2rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.4rem',
    fontSize: '1rem',
    fontWeight: '600',
  };

  const selectStyle = {
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #a0aec0',
    fontSize: '1rem',
    width: '250px',
  };

  const checkboxStyle = {
    marginRight: '10px',
    transform: 'scale(1.2)',
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
          <label>
            <input type="checkbox" style={checkboxStyle} />
            Habilitar alertas por correo
          </label>
        </div>
      </form>
    </div>
  );
}

export default Ajustes;
