import React, { useContext } from "react";
import { ActiveContext } from "../ActiveContext";

export const Mision = () => {
    const { apiW } = useContext(ActiveContext);

    return (
        <main className='mision-main'>
            <h2>Compra tu casa en Colombia</h2>
            <p>desde cualquier parte del mundo</p>
            <button data-aos="fade-right" data-aos-duration="1100" onClick={apiW}>¡Sin moverte de donde estés!</button>
            <div className='line'></div>
            <section className='mision-items'>
                <article className='mision-item' data-aos="fade-up" data-aos-duration="1200" >
                    <img src="./img/home.webp" alt="" />
                    <p><span>Contamos con los mejores aliados </span>
                        para que encuentres tu casa ideal con la
                        mejor financiación.</p>
                </article>
                <article className='mision-item' data-aos="fade-up" data-aos-duration="1300">
                    <img src="./img/global.webp" alt="" />
                    <p><span>Sin viajar a Colombia, compras tu casa desde
                        el exterior.</span> Te acompañamos en todo el
                        proceso, desde la búsqueda hasta la entrega.</p>
                </article>
            </section>
            <section className='aliados'>
                <img data-aos="zoom-in" src="./img/entidades/davivienda.webp" alt="casa en colombia con davivienda" />
                <img data-aos="zoom-in" src="./img/entidades/bbva.webp" alt="casa en colombia con bbva" />
                <img data-aos="zoom-in" src="./img/entidades/bancolombia.webp" alt="casa en colombia con bancolombia" />
                <img data-aos="zoom-in" src="./img/entidades/girosyfinanzas.webp" alt="casa en colombia con giros y finanzas" />
            </section>
            <div className='line'></div>
            <h4>Nos llena de orgullo contar una historia de 16 años</h4>
            <p className='foot'>junto a los colombianos en el exterior.</p>
        </main>
    );
};
