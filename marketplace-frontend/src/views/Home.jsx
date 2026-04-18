import { Container, Button, Row, Col, Form, InputGroup, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

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
                Los mejores productos directo de tus <span className="highlight-green">vecinos</span> a tu mesa
              </h1>

              {/* BOTÓN VER PRODUCTOS (Ahora arriba) */}
              <Button 
                variant="success" 
                className="btn-main-action mb-5"
                onClick={() => navigate('/marketplace')}
              >
                Ver Productos
              </Button>
              
              {/* BARRA DE BÚSQUEDA */}
              <div className="search-wrapper mb-5">
                <InputGroup className="custom-search-bar">
                  <InputGroup.Text className="bg-white border-0 ps-4">
                    <i className="bi bi-search text-muted"></i> {/* Asegúrate de tener bootstrap-icons */}
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Busca frutas, herramientas, abarrotes..."
                    className="border-0 shadow-none"
                  />
                  <Button variant="success" className="btn-search">
                    Buscar
                  </Button>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECCIÓN CATEGORÍAS */}
      <section className="categories-section py-5">
        <Container>
          <h2 className="text-center mb-5 section-subtitle">Categorias populares</h2>
          <Row className="g-4">
            {/* Categoría 1 */}
            <Col lg={4} md={6}>
              <Card className="category-horizontal-card border-0 shadow-sm">
                <Row className="g-0 align-items-center">
                  <Col xs={5}>
                    <Card.Img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400" className="img-fluid rounded-start-custom" />
                  </Col>
                  <Col xs={7}>
                    <Card.Body>
                      <Card.Title className="cat-title">Frutas y verduras</Card.Title>
                      <Button variant="success" size="sm" className="btn-ver-mas" onClick={() => navigate('/marketplace')}>
                        Ver mas
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>

            {/* Categoría 2 */}
            <Col lg={4} md={6}>
              <Card className="category-horizontal-card border-0 shadow-sm">
                <Row className="g-0 align-items-center">
                  <Col xs={5}>
                    <Card.Img src="https://images.unsplash.com/photo-1530124560677-bdaea02c9a13?q=80&w=400" className="img-fluid rounded-start-custom" />
                  </Col>
                  <Col xs={7}>
                    <Card.Body>
                      <Card.Title className="cat-title">Herramientas</Card.Title>
                      <Button variant="success" size="sm" className="btn-ver-mas" onClick={() => navigate('/marketplace')}>
                        Ver mas
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>

            {/* Categoría 3 */}
            <Col lg={4} md={6}>
              <Card className="category-horizontal-card border-0 shadow-sm">
                <Row className="g-0 align-items-center">
                  <Col xs={5}>
                    <Card.Img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400" className="img-fluid rounded-start-custom" />
                  </Col>
                  <Col xs={7}>
                    <Card.Body>
                      <Card.Title className="cat-title">Abarrotes</Card.Title>
                      <Button variant="success" size="sm" className="btn-ver-mas" onClick={() => navigate('/marketplace')}>
                        Ver mas
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
