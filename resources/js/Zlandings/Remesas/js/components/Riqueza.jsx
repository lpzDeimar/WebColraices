import React from "react";

export const Riqueza = () => {
  return (
    <section className="Riqueza" id="remesa">

      <div className="Riqueza__main">

        <div className="Riqueza__content">

          <div className="Riqueza__title">
            <h4 className="Riqueza__title--main">
              Convierte tu remesa <span>en riqueza</span>
            </h4>
            <p className="Riqueza__title--sub">Invierte tu dinero en tu casa ideal</p>
          </div>

          <div className="Riqueza__paragraf">
            <p className="Riqueza__paragraf--main">
              ¡Todos pueden comprar! No importa si eres quien recibeo
              <br /> envía la remesa.En Colraices te ofrecemos la
              oportunidad
              <br /> de convertirte en propietario y pagar tu casa
              gracias a las
              <br /> opciones de financiación que te ofrece
              Bancolombia.
              <br /> Aprovecha tu remesaytransforma tu vida ..
            </p>
            <p className="Riqueza__paragraf--sub">Vitrina Colombia cuenta con múltiples proyectos
              <br /> inmobiliarios para ti en las mejores ciudades del país.</p>
          </div>

          <button className="Riqueza__btn" onClick={()=>{window.open("https://api.whatsapp.com/send/?phone=573105653998")}} >¡Contáctanos!</button>

        </div>

        <div className="Riqueza__img">
          <img src="./img/remesas/bancolombia.webp" alt="Invierte en casa" />
        </div>

      </div>

    </section>
  );
};
