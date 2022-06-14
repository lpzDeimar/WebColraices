import React from 'react'

export const Casa = () => {
  return (
    <section className='Casa' id='propiedad'>

      <div className='Futuro__top' style={{ height: "150px", overflow: "hidden" }} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}><path d="M0.00,119.70 C54.17,107.85 338.59,93.05 500.00,134.50 L500.56,151.27 L-0.56,151.27 Z" style={{ stroke: "none", fill: "#e9e9e9" }}></path></svg></div>

      <div className='Casa__main'>

        <div className='Casa__img'>
          <img src="./img/remesas/casa.webp" alt="" />
        </div>

        <div className='Casa__content'>

          
            <h4 className='Casa_title--main'>El momento de tener <span>casa propia es ahora</span></h4>
            <p className='Casa_title--sub'>Bancolombia y Colraices unidos para cumplir tus metas</p>
          

          <p className='Casa_paragraf'>
            Nuestros 17 años de experiencia te ayudaránaser el propietario
            <br />de la casa que siempre imaginaste y en tu ciudad favorita.
            <br />Contamos con el apoyo de reconocidas constructoras y
            <br />trabajamos de la mano con los mejores aliados financieros.
          </p>

          <p className='Casa_paragraf--sub'>
            Conoce más sobre todo lo que tu
            <br />remesa puede hacer
          </p>
          <a href="./pdf/remesas.pdf" target="_blank" download>
            <button type='button' className='Casa--btn'>¡Descarga aquí el pdf!</button>
          </a>

        </div>

      </div>


    </section>
  )
}
