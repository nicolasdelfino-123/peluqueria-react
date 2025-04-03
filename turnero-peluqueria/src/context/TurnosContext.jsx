import { createContext, useContext, useState } from "react";

// Crear el contexto
const TurnosContext = createContext();

// Proveedor del contexto
export function TurnosProvider({ children }) {
  const [turnos, setTurnos] = useState([]);

  // Función para agregar un turno
  const agregarTurno = (nuevoTurno) => {
    setTurnos([...turnos, nuevoTurno]);
  };

  return (
    <TurnosContext.Provider value={{ turnos, agregarTurno }}>
      {children}
    </TurnosContext.Provider>
  );
}

// Hook para usar el contexto
export function useTurnos() {
  return useContext(TurnosContext);
}
