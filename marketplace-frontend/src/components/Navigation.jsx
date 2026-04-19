import { NavLink, useNavigate } from 'react-router-dom'; 
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider'; 
import './Navigation.css'; 

const Navigation = () => {
  const { user, logout } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  return (
    <Navbar expand="lg" className="custom-navbar sticky-top">
      <Container>
        {/* LOGO (Icono verde de la imagen) */}
        <Navbar.Brand as={NavLink} to="/" className="navbar-logo">
          <div className="logo-icon"></div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* Si quieres mantener Home y Tienda, se verán aquí. 
                Si quieres exacto al diseño, puedes comentarlos. */}
            <NavLink className="nav-link-custom me-3" to="/">home</NavLink>
            <NavLink className="nav-link-custom me-3" to="/marketplace">tienda</NavLink>

            {user ? (
              <>
                <NavLink className="nav-link-custom me-3" to="/perfil">mi perfil</NavLink>
                <NavLink className="nav-link-custom me-3" to="/publicar">publicar</NavLink>
                <Button variant="link" onClick={handleLogout} className="nav-link-custom text-danger border-0">
                  salir
                </Button>
              </>
            ) : (
              <>
                {/* Elemento decorativo del punto verde que se ve en la imagen */}
                <span className="status-dot d-none d-lg-inline"></span>
                <NavLink className="nav-link-custom me-4" to="/login">login</NavLink>
                <Button 
                  as={NavLink} 
                  to="/registro" 
                  className="btn-register-pill"
                >
                  Registrate
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
