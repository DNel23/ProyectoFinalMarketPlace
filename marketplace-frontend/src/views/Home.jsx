import { Container, Button, Row, Col, Form, InputGroup, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Importante crear este archivo abajo

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      {/* SECCIÓN HERO */}
      <section className="hero-section d-flex align-items-center">
        <Container className="text-center">
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <h1 className="main-title mb-4">
                Los mejores productos directo de tus <span className="text-success fw-bold">vecinos</span> a tu mesa
              </h1>
              
              {/* BARRA DE BÚSQUEDA */}
              <div className="search-container mb-5 shadow-sm">
                <InputGroup size="lg">
                  <Form.Control
                    placeholder="Busca frutas, herramientas, abarrotes..."
                    aria-label="Search"
                    className="border-0 ps-4 rounded-start-pill"
                  />
                  <Button variant="success" className="px-4 rounded-end-pill fw-bold">
                    Buscar
                  </Button>
                </InputGroup>
              </div>

              <Button 
                variant="success" 
                size="lg" 
                className="px-5 py-3 fw-bold shadow-sm mb-5"
                onClick={() => navigate('/marketplace')}
              >
                Ver Productos
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECCIÓN CATEGORÍAS */}
      <section className="categories-section py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold text-dark">Categorias populares</h2>
          <Row className="g-4">
            {/* Categoría 1 */}
            <Col md={4}>
              <Card className="category-card border-0 shadow-sm h-100">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400" className="cat-img" />
                <Card.Body className="text-center p-4">
                  <Card.Title className="fw-bold fs-4">Frutas</Card.Title>
                  <Button variant="success" className="mt-3 px-4 rounded-pill" onClick={() => navigate('/marketplace')}>
                    Ver mas
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Categoría 2 */}
            <Col md={4}>
              <Card className="category-card border-0 shadow-sm h-100">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1530124560677-bdaea02c9a13?q=80&w=400" className="cat-img" />
                <Card.Body className="text-center p-4">
                  <Card.Title className="fw-bold fs-4">Herramientas</Card.Title>
                  <Button variant="success" className="mt-3 px-4 rounded-pill" onClick={() => navigate('/marketplace')}>
                    Ver mas
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Categoría 3 */}
            <Col md={4}>
              <Card className="category-card border-0 shadow-sm h-100">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400" className="cat-img" />
                <Card.Body className="text-center p-4">
                  <Card.Title className="fw-bold fs-4">Abarrotes</Card.Title>
                  <Button variant="success" className="mt-3 px-4 rounded-pill" onClick={() => navigate('/marketplace')}>
                    Ver mas
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
