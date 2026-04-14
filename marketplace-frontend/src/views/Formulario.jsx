import { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const [error, setError] = useState("");
  
  const { addProduct } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !precio || !descripcion || !imagen) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const success = await addProduct({ nombre, precio: Number(precio), descripcion, imagen });

    if (success) {
      alert("¡Producto publicado exitosamente!");
      navigate("/marketplace"); // Volvemos a la tienda para ver el nuevo producto
    } else {
      setError("Error al publicar el producto. Reintenta.");
    }
  };

  return (
    <Container className="my-5">
      <Card className="shadow-lg border-0 p-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 className="text-center mb-4 text-success fw-bold">Vender un Producto</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del Producto</Form.Label>
            <Form.Control type="text" placeholder="Ej: Monitor Gamer" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio (CLP)</Form.Label>
            <Form.Control type="number" placeholder="Ej: 150000" value={precio} onChange={(e) => setPrecio(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe tu producto..." value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>URL de la Imagen</Form.Label>
            <Form.Control type="text" placeholder="https://imagen.com/foto.jpg" value={imagen} onChange={(e) => setImagen(e.target.value)} />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100 fw-bold py-2">Publicar Ahora</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Formulario;
