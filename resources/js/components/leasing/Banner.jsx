import React from 'react';

export const Banner = () => {

    return (
        <section className="banner-leasing">
            <article className='banner-leasing-text'>
                <h1>
                    <span>Leasing habitacional</span> para comprar casa <span>en Colombia</span>
                </h1>

                <div className='banner-leasing-content'>
                    <p>Con el leasing habitacional puedes comprar tu casa con el arriendo que pagas
                    mes a mes y disfrutas de intereses más bajos que los de un crédito hipotecario.</p>
                </div>

            </article>
            <section className='banner-leasing-img'>
                <img src="./img/leasing/lea1.webp" alt="Leasing habitacional" />
            </section>
        </section>
    )
}
