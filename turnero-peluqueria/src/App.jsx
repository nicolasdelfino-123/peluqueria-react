import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Calendly from "./components/Calendly";
import Calendar from "./views/Calendar";

function App() {
  const navigate = useNavigate();

  return (
    // Contenedor principal que ocupa toda la altura de la ventana
    <div
      className="container d-flex flex-column"
      style={{ height: "95vh", maxWidth: "720px" }}
    >
      {/* Contenido principal */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Imagen ajustada al ancho del contenedor */}
        <div className="foto-header w-100">
          <img src="pelu.jpg" alt="Peluquería" className="w-100 h-auto" />
        </div>
        <div className="container-titulo">
          <h1 className="titulo">Ivan Belotti Salón Masculino </h1>
        </div>
        <hr />
        {/* DIRECCIÓN, HORARIOS, TELÉFONO */}
        <Info />
        <hr />
        {/*  <Calendar /> */}
        <Calendly />
        <div className="boton">
          <button
            className="btn btn-primary px-4 py-2 rounded-pill shadow-lg fw-bold mt-3"
            onClick={() => navigate("/calendario")}
          >
            <i className="fa-solid fa-calendar-check me-2"></i> Reservar Turno
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
