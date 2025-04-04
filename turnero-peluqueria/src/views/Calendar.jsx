import { useState, useEffect } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useTurnos } from "../context/TurnosContext";
import { Card, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Calendar() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const { agregarTurno } = useTurnos();
  const [viewMode, setViewMode] = useState("month");

  // Deshabilitar lunes (1) y domingos (0)
  const disableDays = ({ date }) => date.getDay() === 0 || date.getDay() === 1;

  // Eliminar subrayado punteado de los días de la semana
  useEffect(() => {
    const removeUnderlines = () => {
      const abbrElements = document.querySelectorAll(
        ".react-calendar abbr[title]"
      );
      abbrElements.forEach((element) => {
        element.removeAttribute("title");
      });
    };

    removeUnderlines();
    const timeoutId = setTimeout(removeUnderlines, 100);

    const preventViewChange = () => {
      const labelButton = document.querySelector(
        ".react-calendar__navigation__label"
      );
      if (labelButton) {
        labelButton.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          return false;
        });
      }
    };

    preventViewChange();
    setTimeout(preventViewChange, 100);

    return () => clearTimeout(timeoutId);
  }, [date]);

  // Prevenir cambio de vista a año
  const onViewChange = ({ view }) => {
    if (view !== "month") {
      setViewMode("month");
      return false;
    }
    return true;
  };

  // Función para redirigir según la selección
  const handleSelectTurno = (turno) => {
    const formattedDate = date.toISOString().split("T")[0]; // Formato YYYY-MM-DD
    if (turno === "mañana") {
      navigate(`/turnos-manana?fecha=${formattedDate}`);
    } else if (turno === "tarde") {
      navigate(`/turnos-tarde?fecha=${formattedDate}`);
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "720px" }}>
      <Card className="p-3 shadow">
        <Card.Header className="bg-primary text-white text-center">
          <h2>Selecciona tu turno</h2>
        </Card.Header>
        <Card.Body>
          <div className="calendar-container">
            <ReactCalendar
              onChange={setDate}
              value={date}
              locale="es-ES"
              className="custom-calendar mx-auto mb-4"
              tileDisabled={disableDays}
              view={viewMode}
              onViewChange={onViewChange}
              formatShortWeekday={(locale, date) => {
                const weekdays = [
                  "Dom",
                  "Lun",
                  "Mar",
                  "Mié",
                  "Jue",
                  "Vie",
                  "Sáb",
                ];
                return weekdays[date.getDay()];
              }}
              formatMonthYear={(locale, date) =>
                date
                  .toLocaleDateString("es-ES", {
                    month: "long",
                    year: "numeric",
                  })
                  .replace(" de", "")
              }
              prev2Label={null}
              next2Label={null}
              nextLabel={<i className="bi bi-caret-right-fill"></i>}
              prevLabel={<i className="bi bi-caret-left-fill"></i>}
              minDetail="month"
              maxDetail="month"
            />
          </div>
          <div className="text-center mt-3">
            <p>Fecha seleccionada: {date.toLocaleDateString()}</p>

            {/* Dropdown para seleccionar turno */}
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Selecciona Turno
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSelectTurno("mañana")}>
                  Mañana
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelectTurno("tarde")}>
                  Tarde
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Calendar;
