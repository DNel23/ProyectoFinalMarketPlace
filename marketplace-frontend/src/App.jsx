import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react'; 
import { UserContext } from './context/UserProvider'; 

import Navigation from './components/Navigation';
import Home from './views/Home';
import Registro from './views/Registro';
import Login from './views/Login';
import Marketplace from './views/Marketplace';
import Detalle from './views/Detalle';
import Perfil from './views/Perfil';
import Formulario from './views/Formulario';

function App() {
  const { user } = useContext(UserContext); 

  return (
    <BrowserRouter>
      <Navigation />
      <div className="container-fluid p-0">
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/producto/:id" element={<Detalle />} />

          {/* Rutas Protegidas */}
          <Route 
            path="/perfil" 
            element={user ? <Perfil /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/publicar" 
            element={user ? <Formulario /> : <Navigate to="/login" />} 
          />

          {/* Ruta Comodín */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;