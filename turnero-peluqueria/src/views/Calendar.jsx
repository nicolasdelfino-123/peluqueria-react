import { useState, useEffect } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useTurnos } from "../context/TurnosContext";
import { Card } from "react-bootstrap";

function Calendar() {
  const [date, setDate] = useState(new Date());
  const { agregarTurno } = useTurnos();
  const [viewMode, setViewMode] = useState("month");

  // Deshabilitar lunes (1) y domingos (0)
  const disableDays = ({ date }) => date.getDay() === 0 || date.getDay() === 1;

  // Eliminar subrayado punteado de los días de la semana
  useEffect(() => {
    // Eliminar atributos title de los elementos abbr del calendario
    const removeUnderlines = () => {
      const abbrElements = document.querySelectorAll(
        ".react-calendar abbr[title]"
      );
      abbrElements.forEach((element) => {
        element.removeAttribute("title");
      });
    };

    // Ejecutar después de que el componente se monte y cuando se actualice
    removeUnderlines();

    // También ejecutar después de un breve retraso para asegurar que el DOM esté actualizado
    const timeoutId = setTimeout(removeUnderlines, 100);

    // Asegurarse que el botón central no permite cambio de vista
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
    // Siempre forzar vista de mes
    if (view !== "month") {
      setViewMode("month");
      return false;
    }
    return true;
  };

  const handleReservar = () => {
    agregarTurno(date);
    alert(`Turno reservado para el ${date.toLocaleDateString()}`);
  };

  return (
    <div className="container mt-4">
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
              onClickYear={(value, event) => {
                event.preventDefault();
                event.stopPropagation();
                return false;
              }}
              formatShortWeekday={(locale, date) => {
                const weekdays = [
                  "Dom",
                  "Lun",
                  "Mar",
                  "Mié",
                  "Jue",
                  "Vie",
                  "Sab",
                ];
                return weekdays[date.getDay()];
              }}
              formatMonthYear={(locale, date) => {
                return date
                  .toLocaleDateString("es-ES", {
                    month: "long",
                    year: "numeric",
                  })
                  .replace(" de", "");
              }}
              // Deshabilitar navegación de año completamente
              prev2Label={null}
              next2Label={null}
              nextLabel={<i class="bi bi-caret-right-fill"></i>}
              prevLabel={<i class="bi bi-caret-left-fill"></i>}
              minDetail="month" // Importante: nunca mostrar la vista de año
              maxDetail="month" // Importante: nunca mostrar la vista de año
            />
          </div>
          <div className="text-center mt-3">
            <p>Fecha seleccionada: {date.toLocaleDateString()}</p>
            <button
              className="btn btn-success px-4 py-2"
              onClick={handleReservar}
            >
              Confirmar Turno
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Calendar;
