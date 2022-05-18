import React from 'react'

export const Soporte = () => {
  return (
    <section className='Soporte_main'>
        <h5 className='Soporte_main--title'>Soporte continuo</h5>
        <div className='line'></div>
        <section className='Soporte_main--grid'>

            <article className='Soporte_main--item'>
                <h6 className='item--title'>Marketing y publicidad</h6>
                <div className='item--img'>
                    <img src="/img/icon/start.webp" alt="Marketing y publicidad" />
                </div>
                <p className='item--paragraf'>No tendrás que preocuparte por la publicidad y la promoción de tu negocio. Tu inversión incluye todo el material inicial para generar una comunicación efectiva. Tendrás el apoyo de una agencia especializada en marketing digital, contarás con estrategias de comunicación y campañas que te permitirán alcanzar tus metas. </p>
            </article>

            <article className='Soporte_main--item'>
                <h6 className='item--title'>Herramientas de gestión </h6>
                <div className='item--img'>
                    <img src="/img/icon/time.webp" alt="Herramientas de gestión" />
                </div>
                <p className='item--paragraf'>Tendrás a tu servicio plataformas modernas, que facilitarán tu gestión comercial y administrativa, ahorrarás tiempo y recursos valiosos que podrás invertir en otras labores que impulsen tu crecimiento como empresario.</p>
            </article>

            <article className='Soporte_main--item'>
                <h6 className='item--title'>BackOffice</h6>
                <div className='item--img'>
                    <img src="/img/icon/person.webp" alt="BackOffice" />
                </div>
                <p className='item--paragraf'>Nuestro  grupo operativo de gestores especializados en análisis, documentación, radicación y legalización, se encargarán de tramitar todos tus negocios ante nuestros aliados financieros e inmobiliarios, así podrás enfocar tus esfuerzos en el crecimiento de tu franquicia.</p>
            </article>

        </section>
    </section>
  )
}
