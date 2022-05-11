import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ActiveContext } from "../ActiveContext";

export const Banner = () => {

    const {contr, apiW} = useContext(ActiveContext)
    const NombrePaís = contr.contry;

    return (
        <section className='banner-main-home'>
            <article className='banner-text' data-aos="fade-down" data-aos-duration="1100">
                <h1>
                    <span>¡Sí</span>, puedes comprar <br /> casa en Colombia
                    <br /> desde <span>{NombrePaís}!</span>
                </h1>

                <div className='banner-content'>
                    <p>Has trabajado para llegar a donde estás.</p>
                    <p>Ahora es tiempo de ir por más...</p>
                </div>

                <div className='banner-botons'>
                    <Link to="/credito"><button type='button'>Voy por mi crédito</button></Link>
                    <button type='button' onClick={apiW}>Voy por mi casa y crédito</button>
                </div>

            </article>
            <section className='banner-img'>
                <img src="http://colraices.test/img/bn1.webp" alt="Compra tu casa en Colombia" />
            </section>
        </section>
    )
}
