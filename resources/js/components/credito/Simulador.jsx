import React from "react";
import { Hipotecario } from "../simuladores/Hipotecario";

export const Simulador = () => {
    return (
        <article className="simulador-main bg">
            <section className="simulador-pasos">
                <div className="simulador-title">
                    <p>
                        ¡Haz <span>cuentas!</span>{" "}
                    </p>
                    <div className="line"></div>
                    <h1>Simulador crédito hipotecario</h1>
                </div>
                <div className="simulador-content">
                    <article
                        className="paso-item"
                        data-aos="fade-up"
                        data-aos-duration="1100"
                    >
                        <ul>
                            <li>
                                <p>
                                    <span>1.</span> Ingresa el valor de tu
                                    inmueble.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>2.</span> Selecciona el valor de tu
                                    cuota inicial, recuerda que es mínimo del
                                    30%
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>3.</span> Si no tienes tu cuota
                                    inicial...{" "}
                                    <strong>¡No hay problema!</strong> Puedes
                                    pagarla poco a poco: indícanos el plazo en
                                    meses.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>4.</span> Como paso final, selecciona
                                    el plazo en el que pagarás tu crédito.
                                </p>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
            <div className="simulador-container">
                <article>
                    <Hipotecario />
                </article>
                <small>
                    *Los valores de Cuota inicial (mínimo 30%), Plazo (60 a 240
                    meses) y Amortización (ﬁja en pesos o UVR) pueden ajustarse
                    según la necesidad e interés del cliente. El valor de la
                    cuota del crédito hipotecario es aproximada, corresponde a
                    una estimación. La tasa de interés será la vigente al
                    momento del desembolso.
                </small>
            </div>
        </article>
    );
};
