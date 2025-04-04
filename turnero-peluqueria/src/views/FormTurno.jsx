import React from "react";

const FormTurno = () => {
  return (
    <div className="container text-start" style={{ maxWidth: "720px" }}>
      <div class="mb-3">
        <label for="exampleFormControlInput" class="form-label py-2 pb-0">
          Nombre y Apellido
        </label>
        <input
          type="name"
          class="form-control"
          id="exampleFormControlInput"
          placeholder=""
        />
        <label for="exampleFormControlInput1" class="form-label py-2 pb-0">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="nombre@example.com"
        />
        <div data-mdb-input-init class="form-outline">
          <label class="form-label py-3" for="typePhone">
            Teléfono
          </label>
          <input type="tel" id="typePhone" class="form-control" />
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Comentarios
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success px-4 py-2 mt-3">
            Confirmar Turno
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormTurno;
