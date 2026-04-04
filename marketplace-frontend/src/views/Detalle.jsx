import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const Detalle = () => {
  const { id } = useParams();
  const { products } = useContext(UserContext);
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-5">Cargando producto...</p>;

  return (
    <Container className="mt-5">
      <Card className="shadow border-0">
        <Row className="g-0">
          <Col md={5}>
            <Card.Img src={product.img} className="h-100" style={{ objectFit: 'cover' }} />
          </Col>
          <Col md={7}>
            <Card.Body className="p-5">
              <h2 className="fw-bold">{product.nombre}</h2>
              <hr />
              <h3 className="text-success">${product.precio.toLocaleString('es-CL')}</h3>
              <p className="my-4 text-muted">Descripción detallada del producto artesanal local.</p>
              <Button variant="dark" onClick={() => navigate(-1)}>Volver</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Detalle;