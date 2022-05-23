import React from 'react'

export const Banner = () => {
  return (
    <section className='banner-main-home'>

        <article className='banner-text'>

            <h1 className='banner-text--title' >Franquicias<span>Colraices</span></h1>
            <p className='banner-text--subtitle'>Las fronteras no existen cuando de <br/> grandes negocios se trata</p>

            <div className='banner-content'>
                <p>Emprende desde cualquier lugar del mundo, mientras construyes tu libertad financiera y ganas independencia.</p>
                <p>Gracias a nuestros 17 años de experiencia, podrás aprender a generar riqueza por medio de un mercado sólido que produce rentabilidad, libertad de tiempo y crecimiento constante.</p>
            </div>

            <p className='banner-text--subtitle- banner-text--subtitle-P'>Invierte con estrategia, invierte con Colraices.</p>

            <div className='banner-botons'>
                <button type='button' onClick={()=>{window.open("https://api.whatsapp.com/send/?phone=573105653998");}}>
                    ¡Abre tu franquicia ahora!
                </button>
            </div>
        </article>

        <section className='banner-img'>
            <img src="/img/bannerFran.webp" alt="Invierte con estrategia, invierte con Colraices"/>
        </section>

    </section>
  )
}
