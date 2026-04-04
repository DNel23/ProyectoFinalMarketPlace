import { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(""); 
  
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    // 1. Validación: Campos vacios
    if (!email.trim() || !password.trim() || !confirm.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    // 2. Validacion: Formato de Email (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, ingresa un correo electrónico con formato válido.");
      return;
    }


    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres por seguridad.");
      return;
    }


    if (password !== confirm) {
      setError("Las contraseñas no coinciden. Revisa bien.");
      return;
    }

    // Si todo sale bien:
    alert("¡Registro exitoso! Ya eres parte de la comunidad.");
    navigate("/login"); 
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Card style={{ width: "450px" }} className="shadow-lg border-0 p-4">
        <Card.Body>
          <h2 className="text-center mb-4 text-success fw-bold">Crear Cuenta</h2>
          

          {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}

          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="ejemplo@correo.cl" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Mínimo 6 caracteres" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Repite tu contraseña" 
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 fw-bold py-2 shadow-sm">
              Registrarse Ahora
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Registro;