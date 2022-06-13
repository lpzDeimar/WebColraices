import React from 'react'

export const Futuro = () => {
  return (
    <section className='Futuro__main'>

      <div className='Futuro__top' style={{height: "150px", overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height:'100%', width: '100%'}}><path d="M0.00,124.63 C14.67,124.63 58.68,97.00 501.69,140.42 L501.12,152.27 L0.00,150.00 Z" style={{stroke: "none", fill: "#e9e9e9"}}></path></svg></div>

      <div className='Futuro__content'>

      <div className='Futuro__text'>
        <h3 className='Futuro__title'>Compra tu casa y<span>asegura tu futuro</span></h3>
      </div>

      <div className='Futuro__component'>

        <div className='Futuro__paragraf'>
          <p>
          Cada vez más colombianos se sumananuestra lista de propietarios.
          <br/>¿Quieres ser parte de este grupo? Solo tienes que invertir de manera
          <br/>inteligente el valor de tu remesa y pronto tendrás la casa que siempre
          <br/>planeaste. Hazlo juntoalos mejores,Bancolombia y Colraices.
          </p>
          <p className='Futuro__paragraf--footer'>Construye un mejor futuro para ti y tu familia.</p>
        </div>

        <button className='Futuro__btn'>¡Empieza ahora!</button>
      </div>

      </div>

      <div className='Futuro__bottom' style={{height: "150px", overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" tyle={{height:'100%', width: '100%'}}><path d="M0.00,13.12 C20.87,15.08 301.91,-12.52 500.00,15.08 L500.00,0.28 L0.00,-3.65 Z" style={{stroke: "none", fill: "#e9e9e9"}}></path></svg></div>

    </section>
  )
}
``