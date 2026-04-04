import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const Marketplace = () => {
  const { products } = useContext(UserContext); 

  return (
    <Container className="my-5">
      <h2 className="text-center text-success mb-5 fw-bold">Galería de Productos</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((p) => (
          <Col key={p.id}>
            <ProductCard product={p} /> 
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Marketplace;