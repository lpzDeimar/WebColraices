import React from 'react'

export const Banner = () => {
  return (
    <section className='Banner_franquicias'>
        <div className='Banner_franquicias_content'>
            <h2 className='Banner_franquicias--title'>Franquicias<span>Colraices</span></h2>
            <p className='Banner_franquicias--subtitle'>Las fronteras no existen cuando de grandes negocios se trata</p>
            <div className='Banner_franquicias--paragraf'>
                <p>Emprende desde cualquier lugar del mundo, mientras construyes tu libertad financiera y ganas independencia.</p>
                <p>Gracias a nuestros 17 años de experiencia, podrás aprender a generar riqueza por medio de un mercado sólido que produce rentabilidad, libertad de tiempo y crecimiento constante.</p>
            </div>
            <p className='Banner_franquicias--footer'>Invierte con estrategia, invierte con Colraices.</p>
            <button type='button'>
                ¡Abre tu franquicia ahora!
            </button>
        </div>
        <div className='Banner_franquicias_img'>
            <img src="/img/bannerFran.webp" alt="Invierte con estrategia, invierte con Colraices"/>
        </div>
    </section>
  )
}
