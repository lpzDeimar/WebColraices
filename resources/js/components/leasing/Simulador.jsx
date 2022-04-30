import React from "react";
import { Leasing } from "../simuladores/Leasing";

export const Simulador = () => {
    return (
        <article className="simulador-main bg" id="simulador-leasing">
            <section className="simulador-pasos">
                <div className="simulador-title">
                    <p>
                        ¡Haz <span>cuentas!</span>{" "}
                    </p>
                    <div className="line"></div>
                    <h1>Simulador crédito leasing habitacional</h1>
                </div>
                <div className="simulador-content">
                    <article className="paso-item">
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
                                    20%
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
                    <Leasing />
                </article>
                <small>
                    *Los valores de Cuota inicial (mínimo 20%), Plazo (60 a 240
                    meses) y Amortización (ﬁja en pesos o UVR) pueden ajustarse
                    según la necesidad e interés del cliente. El valor de la
                    cuota del leasing habitacional es aproximada, corresponde a
                    una estimación. La tasa de interés será la vigente al
                    momento del desembolso.
                </small>
            </div>
        </article>
    );
};
