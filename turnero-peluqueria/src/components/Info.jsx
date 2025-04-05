import React from "react";

export default function Info() {
  return (
    <div className="container d-flex ">
      <div className="column info text-start mt-4">
        <p>
          <i className="fa-solid fa-location-dot me-2" /> Vélez Sarsfield 410 -
          Local 4 | Las Varillas, Córdoba
        </p>
        <p>
          <i className="fa-regular fa-calendar me-2" /> Martes a Viernes: 8:30 -
          12:00 & 16:00 - 21:00 | Sábados: 8:30 - 13:00 & 17:30 - 20:30
        </p>
        <p>
          <i className="fa-brands fa-whatsapp me-2" />
          3533 438227
        </p>
      </div>
    </div>
  );
}
