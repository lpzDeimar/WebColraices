import React, { useContext } from "react";
import { ActiveContext } from "../ActiveContext";

export const Banner = () => {
    const { apiW } = useContext(ActiveContext);

    return (
        <section className='banner-main-ahorro'>
            <article className='banner-text'>
                <h2>Cómo hacer un <span>plan de ahorro en Colombia</span> </h2>
                <p>¡Con una buena planificación y la ayuda de expertos!</p>
                <button onClick={apiW} className="banner-boton">
                    Nosotros te ayudamos
                </button>
            </article>
            <section className='banner-img'>
                <img src="/img/ah1.webp" alt="plan de ahorro en Colombia" />
            </section>
        </section>
    )
}
