import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";

const Perfil = () => {
  const { user } = useContext(UserContext);

  // Protección extra: Si el usuario es null o no tiene datos aún
  if (!user) return <h2 className="text-center mt-5 text-muted">Cargando perfil...</h2>;

  // Usamos una constante para el nombre con un respaldo por si viene vacío
  const nombreUsuario = user?.nombre || "Usuario";

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-success text-white py-4 text-center">
              <h3 className="mb-0">Mi Perfil de Gestión</h3>
            </Card.Header>
            <Card.Body className="p-4 text-center">
              <div className="mb-4">
                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm" style={{ width: '100px', height: '100px', fontSize: '2.5rem' }}>
                  {/* El .charAt(0) ahora es seguro porque nombreUsuario nunca es undefined */}
                  {nombreUsuario.charAt(0).toUpperCase()}
                </div>
              </div>
              <h4 className="fw-bold">{nombreUsuario}</h4>
              <p className="text-muted mb-3">{user?.email}</p>
              <Badge bg="info" className="px-3 py-2 mb-4">
                Rol: Vendedor Local
              </Badge>
              
              <hr />
              
              <div className="d-grid gap-2 mt-4">
                <p className="small text-muted">Desde aquí podrás gestionar tus publicaciones en el siguiente hito.</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Perfil;
