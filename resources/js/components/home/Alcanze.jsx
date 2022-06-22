import React from 'react'
import { Formulario } from '../Formulario'

export const Alcanze = () => {

    return (
        <section className='alcanze-main'>
            <h3 data-aos="fade-down" data-aos-duration="1000">Alcanza tus metas <span>con nosotros</span></h3>

            <section className='alcanze-counter'>
                <article data-aos="zoom-in-up" data-aos-duration="1000" >
                    <h4>16</h4>
                    <p>Años de experiencia</p>
                    <div className='cuadrado'></div>
                </article>
                <article data-aos="zoom-in-up" data-aos-duration="1050" >
                    <h4>77 <span>mil</span></h4>
                    <p>Colombianos asesorados en todo el mundo</p>
                    <div className='cuadrado'></div>
                </article>
                <article data-aos="zoom-in-up" data-aos-duration="1150" >
                    <h4>1400</h4>
                    <p>Casas entregadas</p>
                    <div className='cuadrado'></div>
                </article>
                <article data-aos="zoom-in-up" data-aos-duration="1200" >
                    <h4>5700</h4>
                    <p>Créditos desembolsados</p>
                    <div className='cuadrado'></div>
                </article>
            </section>

            <h4>También contamos con el apoyo de <span>las mejores constructoras de Colombia.</span></h4>
            <Formulario/>
        </section>
    )
}
