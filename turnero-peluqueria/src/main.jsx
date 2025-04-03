import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TurnosProvider } from "./context/TurnosContext";

import Calendar from "./views/Calendar.jsx";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TurnosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/calendario" element={<Calendar />} />
        </Routes>
      </Router>
    </TurnosProvider>
  </StrictMode>
);
