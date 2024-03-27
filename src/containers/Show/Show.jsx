import React, { useState } from 'react';
import './show.css';
import image1 from '../../assets/img1.jpg'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img3.jpg'
import image4 from '../../assets/img4.jpg'
import image5 from '../../assets/img5.jpg'
import image6 from '../../assets/img6.jpg'
import image7 from '../../assets/img7.jpg'

const Show = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSelectChange = (event) => {
    const index = parseInt(event.target.value, 10);
    setActiveIndex(index);
  };

  return (
    <section className="contenedor_seccion container show">
      <article>
        <div className="selecting">
          <h3>Tipos de créditos</h3>
          <div className="row">
            <div className="col-md-2">
              <select name="select_credit" id="credit" onChange={handleSelectChange}>
                <option value="">Seleccione una opción</option>
                <option value="0">Comercio</option>
                <option value="1">Servicios</option>
                <option value="2">Pequeña Industria</option>
                <option value="3">Mejoramiento y ampliación de viviendas</option>
                <option value="4">Vivienda hipotecaria</option>
                <option value="5">Consumo</option>
                <option value="6">Personales</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 infocolumn">
            {activeIndex !== null && (
              <div className="tab-content vertical">
                {activeIndex === 0 && (
                  <div className="tab-pane fade in show active" role="tabpanel">
                    <h4>Comercio</h4>
                    Brindamos financiamiento a las actividades comerciales, o ideas de negocio que tengan, como: compra y venta de mercadería en general, pulperías, tiendas, venta de ropa, cosméticos, compra y venta de granos básicos, agencia de gas licuado, venta de llantas, librerías, farmacias, etc.
                  </div>
                )}
                {activeIndex === 1 && (
                  <div className="tab-pane fade in show" role="tabpanel">
                    <h4>Servicios</h4>
                    Brindamos financiamiento para: reparación o mantenimiento de vehículos privados, taxis, traslado de mercadería, materia prima, capital de trabajo de talleres, enderezado y pintura, ofreciéndoles bajas tasas de interés, plazos de acuerdo a su actividad y capacidad de pago, atención personalizada e individual; en LEON 2000 IMF, S.A. estamos para servirle.
                  </div>
                )}
                {activeIndex === 2 && (
                  <div className="tab-pane fade in show" role="tabpanel">
                    <h4>Pequeña Industria</h4>
                    Con nuestro Financiamiento tiene la oportunidad de fortalecer tu panadería, taller de carpintería, taller de costura, elaboración de manualidades, elaboración de artesanía, policereales, mermeladas, aderezos, elaboración de cosa de horno, procesadora de lácteos, compra de vehículo para comercializar o trasladar la materia prima. Puedes invertir en actualizar los equipos, mejorar las condiciones de las instalaciones que permita producir con mayor calidad y amplíe el mercado actual.
                  </div>
                )}
                {activeIndex === 3 && (
                  <div className="tab-pane fade in show" role="tabpanel">
                    <h4>Mejoramiento y ampliación de viviendas</h4>
                    Contenido de la pestaña 4.
                  </div>
                )}
                {activeIndex === 4 && (
                  <div className="tab-pane fade in show" role="tabpanel">
                    <h4>Vivienda hipotecaria</h4>
                    Contenido de la pestaña 5.
                  </div>
                )}
                {activeIndex === 5 && (
                  <div className="tab-pane fade in show" role="tabpanel">
                    <h4>Consumo</h4>
                    Contenido de la pestaña 6.
                  </div>
                )}
                {activeIndex === 6 && (
                  <div className="tab-pane fade in show" role="tabpanel">
                    <h4>Personales</h4>
                    Contenido de la pestaña 7.
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="col-md-4">
            {activeIndex !== null && (
              <div className="tab-content vertical">
                {activeIndex === 0 && (
                  <div className="tab-pane fade in show active" role="tabpanel">
                    <img src={image1} alt="" />
                  </div>
                )}
                {activeIndex === 1 && (
                  <div className="tab-pane fade in show active" role="tabpanel">
                    <img src={image2} alt="" />
                  </div>
                )}
                {activeIndex === 2 && (
                  <div className="tab-pane fade in show active" role="tabpanel">
                    <img src={image3} alt="" />
                  </div>
                )}
                {activeIndex === 3 && (
                  <div className="tab-pane fade in show active" role="tabpanel">
                    <img src={image4} alt="" />
                  </div>
                )}
                {activeIndex === 4 && (
                  <div className="tab-pane fade in show active" role="tabpanel">
                    <img src={image5} alt="" />
                  </div>
                )}
                {activeIndex === 5 && (
                  <div className="tab-pane fade in show active" role="tabpanel">
                    <img src={image6} alt="" />
                  </div>
                )}
                {activeIndex === 6 && (
                  <div className="tab-pane fade in show active" role="tabpanel">
                    <img src={image7} alt="" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </article>
    </section>
  );
}

export default Show;
