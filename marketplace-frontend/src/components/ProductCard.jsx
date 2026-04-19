import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="custom-product-item">
      {/* MARCO DE LA IMAGEN CON BORDE VERDE */}
      <div className="product-frame">
        {/* Botón de favoritos (corazón) */}
        <button className="wishlist-icon">
          <i className="bi bi-heart"></i> {/* Requiere bootstrap-icons */}
        </button>

        <div className="product-image-container">
          <img src={product.img} alt={product.nombre} className="main-img" />
          
          {/* Botón flotante al final de la imagen */}
          <Button 
            variant="success" 
            className="btn-hover-action"
            onClick={() => navigate(`/producto/${product.id}`)}
          >
            Ver mas
          </Button>
        </div>
      </div>

      {/* INFORMACIÓN DEBAJO DEL MARCO */}
      <div className="product-details-footer d-flex justify-content-between mt-2 px-1">
        <h6 className="product-title-text m-0">{product.nombre}</h6>
        <span className="product-price-text fw-bold">
          ${product.precio.toLocaleString('es-CL')}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
