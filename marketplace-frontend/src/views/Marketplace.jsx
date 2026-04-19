import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import './Marketplace.css'; 

const Marketplace = () => {
  const { products } = useContext(UserContext); 

  return (
    <div className="marketplace-page">
      {/* BANNER PROMOCIONAL (Mockup) */}
      <section className="promo-banner mb-5">
        <Container>
          <div className="banner-content d-flex align-items-center justify-content-between">
            <div className="banner-text-side p-4 p-lg-5">
              <h1 className="banner-slogan">
                Productos Frescos y de primera calidad ofrecidos por tus vecinos.
              </h1>
            </div>
            <div className="banner-image-side d-none d-md-block">
              {/* Aquí insertas la imagen de la persona que extraigas */}
              <img src="/src/assets/banner-person.png" alt="Promo" className="img-fluid" />
            </div>
          </div>
        </Container>
      </section>

      {/* GRILLA DE PRODUCTOS */}
      <Container className="pb-5">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map((p) => (
            <Col key={p.id}>
              <ProductCard product={p} /> 
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Marketplace;
