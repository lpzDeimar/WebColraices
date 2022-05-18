import React from 'react'

export const Colombianos = () => {
  return (
    <section className='Colombianos-franquicias' >
        <div className='Colombianos_franquicias_img' >
            <img src="/img/colombianos.webp" alt="Más de 6 millones de colombianos en el exterior" />
        </div>
        <div className='Colombianos_franquicias_content' >
            <div className='Colombianos_franquicias_content--top'>
                <h3 className='Colombianos_franquicias--title'>Más de 6 millones<span>de colombianos</span>en el exterior</h3>
                <p className='Colombianos_franquicias--subtitle'>Un universo de posibilidades para hacer negocios en el sector inmobiliario y financiero.</p>
            </div>
            <div className='Colombianos_franquicias_content--center'>

                <article className='Colombianos_franquicias_content--center--item'>
                    <div className='item__number'>
                        <p>Más de<span>30.000</span>viviendas</p>
                    </div>
                    <p className='item__paragraf'>
                    al año son compradas por colombianos en el exterior.
                    </p>
                </article>

                <article className='Colombianos_franquicias_content--center--item'>
                    <div className='item__number'>
                        <p>Más de<span>15.000</span></p>
                    </div>
                    <p className='item__paragraf'>
                    créditos para vivienda otorgados a colombianos en el exterior anualmente.
                    </p>
                </article>

                <article className='Colombianos_franquicias_content--center--item'>
                    <div className='item__number'>
                        <p><span>US$8.597</span>millones</p>
                    </div>
                    <p className='item__paragraf'>
                    en remesas enviadas por colombianos en el exterior para vivienda y gastos de familia.
                    </p>
                </article>

            </div>
            <div className='Colombianos_franquicias_content--bottom'>
                    <p className='bottom--title'>Haz parte de un negocio con grandes oportunidades para la venta de inmuebles en Colombia desde el exterior. Únete a un modelo de inversión que te permitirá ganar y progresar mientras ayudas a otros.</p>
                    <button type='button'>
                    ¡Únete ahora!
                    </button>
            </div>
        </div>
    </section>
  )
}
