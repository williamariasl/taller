import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const menuItems = [
    { to: '/', label: 'Inicio', icon: '🏠' },
    { to: '/carros', label: 'Carros', icon: '🚗' },
    { to: '/conductores', label: 'Conductores', icon: '🧑‍✈️' },
    { to: '/configuracion', label: 'Configuración', icon: '⚙️' },
  ];

  const navStyle = {
    width: '250px',
    height: '100vh',
    padding: '1.5rem 1rem',
    backgroundColor: '#fff',
    borderRight: '1px solid #ddd',
    boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1000,
  };

  const baseLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '12px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    color: '#333',
    width: '100%',
    marginBottom: '10px',
    transition: 'all 0.3s ease',
  };

  const activeStyle = {
    backgroundColor: '#1976d2',
    color: '#fff',
    fontWeight: 'bold',
  };

  const homeStyle = {
    backgroundColor: '#e3f2fd',
    borderLeft: '4px solid #2196f3',
    fontWeight: 'bold',
    color: '#0d47a1',
  };

  return (
    <nav style={navStyle}>
      {menuItems.map(({ to, label, icon }) => {
        const isActive = location.pathname === to;
        const isHome = to === '/';

        return (
          <Link
            key={to}
            to={to}
            style={{
              ...baseLinkStyle,
              ...(isHome ? homeStyle : {}),
              ...(isActive ? activeStyle : {}),
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>{icon}</span>
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;


