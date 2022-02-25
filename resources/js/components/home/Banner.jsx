import React, { useContext } from 'react'
import { ActiveContext } from '../ActiveContext'

export const Banner = () => {

    const {contr} = useContext(ActiveContext)
    const NombrePaís = contr.contry;

    return (
        <section className='banner-main-home'>
            <article className='banner-text'>
                <h1>
                    <span>¡Sí</span>, puedes comprar <br /> casa en Colombia
                    <br /> desde <span>{NombrePaís}!</span>
                </h1>

                <div className='banner-content'>
                    <p>Has trabajado para llegar a donde estás.</p>
                    <p>Ahora es tiempo de ir por más...</p>
                </div>

                <div className='banner-botons'>
                    <button type='button'>Voy por mi crédito</button>
                    <button type='button'>Voy por mi casa y crédito</button>
                </div>

            </article>
            <section className='banner-img'>
                <img src="./img/bn1.webp" alt="Comprar casa en colombia" />
            </section>

        </section>
    )
}
