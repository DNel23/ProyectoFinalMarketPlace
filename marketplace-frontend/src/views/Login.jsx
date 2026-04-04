import { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 

    if (!email.trim() || !password.trim()) {
      setError("Por favor, completa ambos campos.");
      return;
    }

    
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("El formato del correo no es válido.");
      return;
    }

    login({ email, nombre: "Vendedor de Puente Alto", token: "abc-123" });
    alert("¡Sesión iniciada con éxito!");
    navigate("/perfil");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Card style={{ width: "400px" }} className="shadow-lg border-0 p-4">
        <Card.Body>
          <h2 className="text-center mb-4 text-success fw-bold">Entrar al Panel</h2>
          

          {error && <Alert variant="danger" className="py-2 small text-center">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="tu@correo.cl" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Ingresa tu clave" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 fw-bold py-2 shadow-sm">
              Iniciar Sesión
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;