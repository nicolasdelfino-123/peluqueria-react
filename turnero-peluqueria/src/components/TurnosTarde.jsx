import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function TurnosTarde() {
  const location = useLocation();
  const [turnos, setTurnos] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fechaStr = params.get("fecha");

    if (fechaStr) {
      setFechaSeleccionada(fechaStr);

      // Convertimos la fecha para asegurar formato YYYY-MM-DD
      const [year, month, day] = fechaStr.split("-").map(Number);
      const fechaObj = new Date(year, month - 1, day);
      const diaSemana = fechaObj.getDay(); // 6 = Sábado

      let horarios = [];

      if (diaSemana >= 2 && diaSemana <= 6) {
        // Martes a Sábado: 17:30 - 20:30
        horarios = [
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
          "20:30",
        ];
      }

      setTurnos(horarios.map((hora) => ({ hora, disponible: true })));
    }
  }, [location]);

  return (
    <Container className="mt-4">
      <Card className="p-3 shadow">
        <Card.Header className="bg-primary text-white text-center">
          <h2>Turnos Tarde</h2>
        </Card.Header>
        <Card.Body>
          <p className="text-center">Fecha seleccionada: {fechaSeleccionada}</p>
          <Row className="g-3">
            {turnos.length > 0 ? (
              turnos.map((turno, index) => (
                <Col key={index} xs={6} md={4} lg={3}>
                  <Card className="text-center p-2 shadow-sm">
                    <Card.Body>
                      <h5>{turno.hora}</h5>
                      <Button variant="success" disabled={!turno.disponible}>
                        Seleccionar
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="text-center text-danger fw-bold">
                No hay turnos disponibles para esta fecha.
              </p>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TurnosTarde;
