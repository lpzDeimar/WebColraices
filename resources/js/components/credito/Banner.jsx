import React from 'react'

export const Banner = () => {


    return (
        <section className='banner-credito'>
            <article className='banner-credito-text' data-aos="fade-down" data-aos-duration="1100" >
                <h1>
                    Crédito para comprar <span>casa en Colombia</span>
                </h1>

                <div className='banner-credito-content'>
                    <p>Crédito para remodelar.</p>
                    <p>Crédito de libre inversión.</p>
                    <h2>Conoce nuestras <span>opciones, beneficios y requisitos.</span> </h2>
                </div>

            </article>
            <section className='banner-credito-img'>
                <img src="./img/credito/cre1.webp" alt="Credito de vivienda para colombianos en el exterior" />
            </section>

        </section>
    )
}
