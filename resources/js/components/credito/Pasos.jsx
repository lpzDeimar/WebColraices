import React from "react";

export const Pasos = () => {
    return (
        <section className="pasos-main">
            <h3>
                Tu crédito <span>en 4 pasos</span>
            </h3>

            <section className="pasos-credito">
                <div className="paso-container">
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
                </div>

                <div className="paso-container">
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
                </div>

                <div className="paso-container">
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
                </div>

                <div className="paso-container">
                    <div className="paso">
                        <h4>4</h4>
                        <div className="line"></div>
                        <p>
                            <span>Legalización del inmueble y</span> desembolso.
                        </p>
                    </div>
                </div>
            </section>
            <button>Empieza tu proceso</button>
        </section>
    );
};
