import React, { useContext } from "react";
import { ActiveContext } from "../ActiveContext";

export const Pasos = () => {
    const { apiW } = useContext(ActiveContext);

    return (
        <section className="pasos-main">
            <h3>
                Tu crédito <span>en 4 pasos</span>
            </h3>

            <section className="pasos-credito">
                <article data-aos="fade-up" data-aos-duration="1000" className="paso-container">
                    <div className="paso">
                        <h4>1</h4>
                        <div className="line"></div>
                        <p>
                            Análisis inicial y <span>cupo de crédito.</span>
                        </p>
                    </div>
                    <figure>
                        <img src="img/credito/Separador.png" alt="Análisis" />
                    </figure>
                </article>

                <article data-aos="fade-up" data-aos-duration="1100" className="paso-container">
                    <div className="paso">
                        <h4>2</h4>
                        <div className="line"></div>
                        <p>
                            Estudio de crédito y <span>documentos.</span>
                        </p>
                    </div>
                    <figure>
                        <img src="img/credito/Separador.png" alt="Estudio de crédito" />
                    </figure>
                </article>

                <article data-aos="fade-up" data-aos-duration="1200" className="paso-container">
                    <div className="paso">
                        <h4>3</h4>
                        <div className="line"></div>
                        <p>
                            Radicación y <span>aprobación final.</span>
                        </p>
                    </div>
                    <figure>
                        <img src="img/credito/Separador.png" alt="aprobación" />
                    </figure>
                </article>

                <article data-aos="fade-up" data-aos-duration="1300" className="paso-container">
                    <div className="paso">
                        <h4>4</h4>
                        <div className="line"></div>
                        <p>
                            <span>Legalización del inmueble y</span> desembolso.
                        </p>
                    </div>
                </article>
            </section>
            <button onClick={apiW}>Empieza tu proceso</button>
        </section>
    );
};
