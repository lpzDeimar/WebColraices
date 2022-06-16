import React from 'react'

export const Futuro = () => {
  return (
    <section className='Futuro__main' id='casa'>

      <div className='Futuro__top' style={{ height: "150px", overflow: "hidden" }} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}><path d="M0.00,119.70 C54.17,107.85 338.59,93.05 500.00,134.50 L500.56,151.27 L-0.56,151.27 Z" style={{ stroke: "none", fill: "#e9e9e9" }}></path></svg></div>

      <div className='Futuro__content'>

        <div className='Futuro__text'>
          <h3 className='Futuro__title'>Compra tu casa y<span>asegura tu futuro</span></h3>
        </div>

        <div className='Futuro__component'>

          <div className='Futuro__paragraf'>
            <p>
              Cada vez más colombianos se suman a nuestra lista de propietarios.
              <br />¿Quieres ser parte de este grupo? Solo tienes que invertir de manera
              <br />inteligente el valor de tu remesa y pronto tendrás la casa que siempre
              <br />planeaste. Hazlo juntoalos mejores, Bancolombia y Colraices.
            </p>
            <p className='Futuro__paragraf--footer'>Construye un mejor futuro para ti y tu familia.</p>
          </div>

          <button className='Futuro__btn' onClick={()=>{window.open("https://api.whatsapp.com/send/?phone=573105653998")}}>¡Empieza ahora!</button>
        </div>

      </div>

      <div className='Futuro__bottom' style={{ height: "150px", overflow: "hidden" }} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" tyle={{ height: '100%', width: '100%' }}><path d="M0.00,17.07 C286.11,11.15 325.61,12.13 500.00,19.03 L500.56,-0.68 L-0.56,-2.65 Z" style={{ stroke: "none", fill: "#e9e9e9" }}></path></svg></div>

    </section>
  )
}
``