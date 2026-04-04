import { NavLink, useNavigate } from 'react-router-dom'; 
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider'; 

const Navigation = () => {
  const { user, logout } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  const setActiveClass = ({ isActive }) => (isActive ? "nav-link active fw-bold text-success" : "nav-link");

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top shadow">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-success">
          🛒 Mi Tiendita
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={setActiveClass} to="/">Home</NavLink>
            <NavLink className={setActiveClass} to="/marketplace">Tienda</NavLink>
          </Nav>

          <Nav>
            {user ? (
              <>
                <NavLink className={setActiveClass} to="/perfil">Mi Perfil</NavLink>
                <NavLink className={setActiveClass} to="/publicar">Publicar</NavLink>
                <Button variant="outline-danger" size="sm" onClick={handleLogout} className="ms-lg-3">
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <NavLink className={setActiveClass} to="/login">Login</NavLink>
                <NavLink className={setActiveClass} to="/registro">Registrarse</NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;