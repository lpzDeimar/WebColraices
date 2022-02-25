import React from "react";

export const Beneficios = () => {
    return (
        <article className="beneficios-main">
            <h1>Beneficios <span>Leasing Habitacional</span> </h1>

            <section className='beneficios-container'>
                <div className='beneficio-container'>
                    <div className='beneficio'>
                        <p>Financia<span>hasta un</span></p>
                        <div className="line"></div>
                        <h4 className="porcentaje">80%</h4>
                    </div>
                    <figure>
                        <img src="img/credito/Separador.png" alt="Financia" />
                    </figure>
                </div>
                <div className='beneficio-container'>
                    <div className='beneficio'>
                        <p>Cuota<span>en</span></p>
                        <div className="line"></div>
                        <h4 className="moneda">Pesos<span> o UVR</span></h4>
                    </div>
                    <figure>
                        <img src="img/credito/Separador.png" alt="Cuota" />
                    </figure>
                </div>
                <div className='beneficio-container'>
                    <div className='beneficio'>
                        <p>Plazos<span>de hasta</span></p>
                        <div className="line"></div>
                        <h4 className="plazo">30<span>años</span></h4>
                    </div>
                    <figure>
                        <img src="img/credito/Separador.png" alt="Plazos" />
                    </figure>
                </div>
                <div className='beneficio-container'>
                    <div className='beneficio'>
                        <p>Intereses<span>más</span></p>
                        <div className="line"></div>
                        <h4 className='interes'>BAJOS</h4>
                    </div>
                </div>
            </section>
            <button>Compra con el arriendo</button>
        </article>
    )
}
