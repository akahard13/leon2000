import React from "react";
import "./clientes.css";
import imagen8 from "../../assets/imagen8.jpg";
import imagen9 from "../../assets/imagen9.jpg";
import imagen10 from "../../assets/imagen10.jpg";

const Clientes = () => {
    
  return (
    
    <div class="cards" id="clientes">
     
      <article class="information [ card ]">
        <p class="info">
          <h2 class="title">Luz Marina Quiroz Traña</h2>
          <img class="img" src={imagen8} alt="imagen8" />
            Es cliente de LEON 2000 IMF, S.A. desde hace más de 10 años.
        </p>
        <button class="button">
          <span>Saber más</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="none"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
              fill="currentColor"
            />
          </svg>
        </button>
      </article>

      <article class="information [ card ]">
        <p class="info">
          <h2 class="title">Auxiliadora Venegas Mártinez</h2>
          <img class="img" src={imagen9} alt="imagen9" />
          Agradezco a LEON2000 durante este tiempo, que he logrado diversificar mi producto de dulces tradicionales.
        </p>
        <button class="button">
          <span>Saber más</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="none"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
              fill="currentColor"
            />
          </svg>
        </button>
      </article>
      <article class="information [ card ]">
        <p class="info">
          <h2 class="title">José Salomón López Parajón</h2>
          <img class="img" src={imagen10} alt="imagen10" />
            Me integré a LEON 2000 IMF quienes me brindaron financiamiento para materia prima.
        </p>
        <button class="button">
          <span>Saber más</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="none"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
              fill="currentColor"
            />
          </svg>
        </button>
      </article>
      
    </div>
  );
};

export default Clientes;