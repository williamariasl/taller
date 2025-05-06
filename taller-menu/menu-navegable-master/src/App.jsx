import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Inicio';
import Carros from './pages/Vehiculos';
import Conductores from './pages/Choferes';
import Configuracion from './pages/Ajustes';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carros" element={<Carros />} />
          <Route path="/conductores" element={<Conductores />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
