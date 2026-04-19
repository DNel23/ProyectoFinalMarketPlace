import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Container, Button, Row, Col } from "react-bootstrap";
import './Detalle.css'; // Importamos los nuevos estilos

const Detalle = () => {
  const { id } = useParams();
  const { products } = useContext(UserContext);
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className="loading-screen">Cargando producto...</div>;

  return (
    <div className="detalle-wrapper">
      <Container className="py-5">
        <Row className="align-items-center min-vh-75">
          {/* COLUMNA IMAGEN */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <div className="product-detail-image-container">
              <img 
                src={product.img} 
                alt={product.nombre} 
                className="img-fluid product-main-img" 
              />
            </div>
          </Col>

          {/* COLUMNA INFORMACIÓN */}
          <Col md={6} className="ps-lg-5">
            <div className="product-info-content">
              <h1 className="product-detail-title">{product.nombre}</h1>
              
              <div className="stock-info mt-4">
                <span className="stock-label">Stock:</span>
                <p className="stock-value">{product.stock || 15}</p> 
              </div>

              <p className="product-detail-description text-muted">
                {product.descripcion || "Descripción detallada del producto artesanal local, fresco y directo de la zona."}
              </p>

              <h2 className="product-detail-price">
                ${product.precio.toLocaleString('es-CL')}
              </h2>

              <div className="detail-actions d-flex align-items-center mt-5">
                <button className="btn-wishlist-detail me-4">
                  <i className="bi bi-heart"></i>
                </button>
                <Button 
                  variant="success" 
                  className="btn-contact-seller"
                  onClick={() => alert('¡Función de contacto próximamente!')}
                >
                  Contacta al vendedor
                </Button>
              </div>
              
              <Button 
                variant="link" 
                className="mt-4 text-muted p-0 text-decoration-none"
                onClick={() => navigate(-1)}
              >
                ← Volver a la tienda
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detalle;
