import React from 'react';

export const Mision = () => {
    return (
        <main className='mision-main'>
            <h2>Compra tu casa en Colombia</h2>
            <p>desde cualquier parte del mundo</p>
            <button>¡Sin moverte de donde estés!</button>
            <div className='line'></div>
            <section className='mision-items'>
                <article className='mision-item'>
                    <img src="./img/home.webp" alt="" />
                    <p><span>Contamos con los mejores aliados </span>
                        para que encuentres tu casa ideal con la
                        mejor financiación.</p>
                </article>
                <article className='mision-item'>
                    <img src="./img/global.webp" alt="" />
                    <p><span>Sin viajar a Colombia, compras tu casa desde
                        el exterior.</span> Te acompañamos en todo el
                        proceso, desde la búsqueda hasta la entrega.</p>
                </article>
            </section>
            <section className='aliados'>
                <img src="./img/entidades/davivienda.webp" alt="casa en colombia con davivienda" />
                <img src="./img/entidades/bbva.webp" alt="casa en colombia con bbva" />
                <img src="./img/entidades/bancolombia.webp" alt="casa en colombia con bancolombia" />
                <img src="./img/entidades/girosyfinanzas.webp" alt="casa en colombia con giros y finanzas" />
            </section>
            <div className='line'></div>
            <h4>Nos llena de orgullo contar una historia de 16 años</h4>
            <p className='foot'>junto a los colombianos en el exterior.</p>
        </main>
    );
};
