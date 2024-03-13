import React from "react";
import "./historia.css";
import imagen5 from "../../assets/imagen5.jpg";
import imagen6 from "../../assets/imagen6.jpg";
import imagen7 from "../../assets/imagen7.png";

const Historia = () => {
    
  return (
    
    <div class="cards" id="historia">
     
      <article class="information [ card ]">
        <span class="tag">Fundación</span>
        <p class="info">
          <h2 class="title">Fundación LEON2000</h2>

          Fundación LEON2000 Inició operaciones en el departamento de León en el año de 1993, constituyendose legalmente el 20 de junio de 1994 como una organización sin fines de lucro.
        </p>
        <img class="img" src={imagen5} alt="imagen5" />
      </article>

      <article class="information [ card ]">
        <span class="tag">Surgimiento</span>
        <h2 class="title">2011 Nace LEON 2000 IMF, S.A.</h2>
        <p class="info">
            Como consecuencia de los estragos provocados con la crisis económica internacional. La institución actualizó sus objetivos estratégicos y así; el 23 de septiembre del 2011 fue creada LEON 2000 IMF, S.A. la cual se encarga exclusivamente de servicios fiancieros.
        </p>
        <img class="img" src={imagen6} alt="imagen6" />
      </article>
      <article class="information [ card ]">
        <span class="tag">Inscripción</span>
        <h2 class="title">2012 Inscripción de LEON 2000 IMF, S.A. ante la CONAMI</h2>
        <p class="info">
            Continuando con el proceeso de formalización, el 26 de noviembre del 2012 fue inscrita ante la comisión internacional de microfinanzas (CONAMI), quedando autorizada para operar como una Institución de Microfinanzas.
        </p>
        <img class="img" src={imagen7} alt="imagen7" />
      </article>
    </div>
  );
};

export default Historia;