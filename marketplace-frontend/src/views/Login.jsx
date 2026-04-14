import { useState, useContext } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider"; // 1. Importar el contexto

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  // 2. Extraer la función login del contexto
  const { login } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Email y contraseña son obligatorios.");
      return;
    }

    // 3. Llamada asíncrona a tu backend en Render
    const success = await login({ email, password });

    if (success) {
      alert("¡Inicio de sesión exitoso!");
      // Al navegar a /perfil, App.jsx re-evaluará el estado 'user'
      navigate("/perfil"); 
    } else {
      setError("Credenciales incorrectas o problema de conexión con el servidor.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Card style={{ width: "400px" }} className="shadow-lg border-0 p-4">
        <Card.Body>
          <h2 className="text-center mb-4 text-primary fw-bold">Iniciar Sesión</h2>
          
          {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="tu@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Tu contraseña" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 fw-bold py-2">
              Ingresar al Marketplace
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
