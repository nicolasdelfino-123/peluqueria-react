import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Contenedor centrado con ancho fijo */}
      <div
        className="container d-flex flex-column min-vh-100"
        style={{ maxWidth: "720px", height: "411.6px" }}
      >
        {/* Imagen ajustada al ancho del contenedor */}
        <div className="foto-header w-100">
          <img src="pelu.jpg" alt="Peluquería" className="w-100 h-auto" />
        </div>
        <div className="container-titulo">
          <h1 className="titulo">Ivan Belotti Salón Masculino </h1>
        </div>
        <hr />
        <div className="container d-flex ">
          <div className="column info text-start mt-4">
            <p>
              <i className="fa-solid fa-location-dot me-2" /> Vélez Sarsfield
              410 - Local 4 | Las Varillas, Córdoba
            </p>
            <p>
              <i className="fa-regular fa-calendar me-2" /> Martes a Viernes:
              8:30 - 12:00 | Sábados: 8:30 - 13:00 & 17:30 - 20:30
            </p>
            <p>
              <i className="fa-brands fa-whatsapp me-2" />
              3533 438227
            </p>
          </div>
        </div>
        <hr />
        <div className="boton">
          <button className="btn btn-primary px-4 py-2 rounded-pill shadow-lg fw-bold">
            <i className="fa-solid fa-calendar-check me-2"></i> Reservar Turno
          </button>
        </div>
      </div>
      <footer className="mt-auto bg-light py-3">
        <div className="container d-flex align-items-center justify-content-center whatsapp">
          <span>
            <i className="fa-brands fa-lg fa-instagram me-2"></i> ivanbelloti78
          </span>
        </div>
      </footer>
    </>
  );
}
export default App;
