import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => { 
  const navigate = useNavigate();

  return (
    <div className="bg-light vh-100 d-flex align-items-center">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="display-3 fw-bold text-success mb-4"> Mi Tiendita de Barrio</h1>
            <p className="lead text-muted mb-5">
              La plataforma de gestión donde los vecinos de Puente Alto encuentran los mejores productos locales. 
              Fácil, rápido y directo de la huerta a tu mesa.
            </p>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <Button variant="success" size="lg" className="px-5 fw-bold shadow" onClick={() => navigate('/marketplace')}>
                Ver Productos
              </Button>
              <Button variant="outline-success" size="lg" className="px-5 fw-bold" onClick={() => navigate('/registro')}>
                Unirse como Vendedor
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home; 