import React from "react";
import "./ofertas.css";
import { Link } from "react-router-dom";
const Ofertas = () => {
  return (
    <div class="cards" id="ofertas">
      <article class="information [ card ]">
        <span class="tag">Microcréditos</span>
        <p class="info">
          <h2 class="title">Financiamiento con Responsabilidad Social</h2>
          Es el principal Servicio Financiero que brindamos como LEON 2000 IMF
          S.A. a la Micro y Pequeña Empresa de toda Nicaragua; de fácil acceso,
          rápido, oportuno y de acuerdo a la capacidad de pago; nos adecuamos a
          las necesidades de nuestros clientes ya sea a través de la Metodología
          Individual Grupal o Asociaciones Comunales.
        </p>
        <Link to="/1">
        <button class="button">
          <span>Ver más</span>
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
        </Link>
      </article>
      <article class="information [ card ]">
        <span class="tag">Servicios funerarios</span>
        <h2 class="title">LEON 2000 IMF, S.A</h2>
        <p class="info">
          cumpliendo con su misión institucional y apoyando a las familias del
          occidente de Nicaragua, ante la pérdida inesperada de un ser querido
          ofrece su nuevo producto: Servicios Funerarios el que consiste en
          apoyar a la familia ofreciendo toda la coordinación del acto
          funerario.
        </p>
        <Link to="/2">
          <button class="button">
            <span>Ver más</span>
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
        </Link>
      </article>
      <article class="information [ card ]">
        <span class="tag">Microseguros</span>
        <h2 class="title">Financiamiento con Responsabilidad Social</h2>
        <p class="info">
          Es el principal Servicio Financiero que brindamos como LEON 2000 IMF
          S.A. a la Micro y Pequeña Empresa de toda Nicaragua; de fácil acceso,
          rápido, oportuno y de acuerdo a la capacidad de pago; nos adecuamos a
          las necesidades de nuestros clientes ya sea a través de la Metodología
          Individual Grupal o Asociaciones Comunales.
        </p>
        <Link to="/3">
          <button class="button">
            <span>Ver más</span>
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
        </Link>
      </article>
    </div>
  );
};

export default Ofertas;
