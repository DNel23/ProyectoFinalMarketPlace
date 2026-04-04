import { Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img variant="top" src={product.img} alt={product.nombre} className="p-3" style={{ height: '200px', objectFit: 'contain' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-capitalize">{product.nombre}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">
          Precio: <span className="fw-bold text-dark">${product.precio.toLocaleString('es-CL')}</span>
        </Card.Text>
        <div className="mb-3">
          <Badge bg={product.stock > 0 ? "success" : "danger"}>
            {product.stock > 0 ? `Stock: ${product.stock}` : "Agotado"}
          </Badge>
        </div>
        <Button 
          variant="success" 
          onClick={() => navigate(`/producto/${product.id}`)}
          className="w-100"
        >
          Ver Detalle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;