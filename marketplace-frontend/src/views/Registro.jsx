import { useState, useContext } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider"; // Verifica que esta ruta sea la correcta

const Registro = () => {
  const [nombre, setNombre] = useState(""); // Nuevo: requerido por tu DB
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(""); 
  
  const { registerUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // 1. Validaciones básicas
    if (!nombre.trim() || !email.trim() || !password.trim() || !confirm.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // 2. Envío a la API en Render
    // Enviamos nombre y un avatar por defecto para cumplir con el script.sql
    const success = await registerUser({ 
      nombre, 
      email, 
      password, 
      avatar: "https://via.placeholder.com/150" 
    });

    if (success) {
      alert("¡Registro exitoso! Tus datos están en la nube.");
      navigate("/login"); 
    } else {
      setError("Error al registrar. Puede que el correo ya esté en uso.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Card style={{ width: "450px" }} className="shadow-lg border-0 p-4">
        <Card.Body>
          <h2 className="text-center mb-4 text-success fw-bold">Crear Cuenta</h2>
          
          {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}

          <Form onSubmit={handleRegister}>
            {/* Campo de Nombre - Obligatorio para tu Backend */}
            <Form.Group className="mb-3">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Juan Pérez" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>

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
