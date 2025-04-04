import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function TurnosMañana() {
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

      if (diaSemana >= 2 && diaSemana <= 5) {
        // Martes a Viernes: 08:30 - 12:00
        horarios = [
          "08:30",
          "09:00",
          "09:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
        ];
      } else if (diaSemana === 6) {
        // Sábados: 08:30 - 13:00
        horarios = [
          "08:30",
          "09:00",
          "09:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
        ];
      }

      setTurnos(horarios.map((hora) => ({ hora, disponible: true })));
    }
  }, [location]);
  console.log("Turnos en el render:", turnos);
  return (
    <Container className="mt-4">
      <Card className="p-3 shadow">
        <Card.Header className="bg-success text-white text-center">
          <h2>Turnos Mañana</h2>
        </Card.Header>
        <Card.Body>
          <p className="text-center">Fecha seleccionada: {fechaSeleccionada}</p>

          <Row className="g-3">
            {turnos.length > 0 ? (
              turnos.map((turno) => (
                <Col key={turno.hora} xs={6} md={4} lg={3}>
                  <Card className="text-center p-2 shadow-sm">
                    <Card.Body className="d-flex flex-column align-items-center">
                      <h5>{turno.hora}</h5>
                      <Button
                        variant="success"
                        disabled={!turno.disponible}
                        className="seleccionar btn-sm w-100 text-nowrap px-3 d-flex justify-content-center align-items-center"
                      >
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

export default TurnosMañana;
