import React from 'react'

export const Meta = () => {
  return (
    <section className='Mate__main'>

      <h4 className='Meta__title'>Resuelve tus dudas <span>y alcancemos juntos tu meta</span> </h4>

      <div className='Meta__grid'>

        <article className='Meta__item'>
          <img src="./img/remesas/meta1.webp" alt="" />
          
          <div className='Meta__item-paragraf'>
            <p>
              ¿Cuáles son los
              <br />beneficiosalos que
              <br />puedo acceder?
            </p>
          </div>
        </article>

        <article className='Meta__item'>
          <img src="./img/remesas/meta2.webp" alt="" />
          <div className='Meta__item-paragraf Meta__item-paragraf-dif'>
            <p>
            ¿Cómo puedo
            <br />materializar mi meta?
            </p>
          </div>
        </article>

        <article className='Meta__item'>
          <img src="./img/remesas/meta3.webp" alt="" />
          <div className='Meta__item-paragraf'>
            <p>
            ¿Dónde puedo
            <br />contactarme con ustedes?
            </p>
          </div>
        </article>

      </div>
      <div className='Futuro__bottom' style={{ height: "150px", overflow: "hidden" }} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" tyle={{ height: '100%', width: '100%' }}><path d="M0.00,17.07 C286.11,11.15 325.61,12.13 500.00,19.03 L500.56,-0.68 L-0.56,-2.65 Z" style={{ stroke: "none", fill: "#F5F5F5" }}></path></svg></div>
    </section>
  )
}
