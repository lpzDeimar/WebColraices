import React, { useContext } from "react";
import { ActiveContext } from "../ActiveContext";
import { Formulario } from "../Formulario";

export const Finanzas = () => {
    const { activarModalForm } = useContext(ActiveContext);

    return (
        <>
            <section className='finanzas-main'>
                <h4>¡Dale un respiro <span>a tus finanzas!</span></h4>
                <div className='finanzas-text'>
                    <p>Con nuestra compra de cartera organiza el pago de tus deudas según tus capacidades.</p>
                    <p>¡Es un gran paso hacia la compra de tu casa en Colombia!</p>
                </div>
                <section className='finanzas-content'>
                    <article className='finanzas-item' data-aos="fade-up" data-aos-duration="1050">
                        <p>Financia <span>desde</span></p>
                        <div className='line'></div>
                        <p>15<span>millones</span></p>
                    </article>
                    <article className='finanzas-item' data-aos="fade-up" data-aos-duration="1250">
                        <p>Tasa y <span>cuotas</span></p>
                        <div className='line'></div>
                        <p>Fijas</p>
                    </article>
                    <article className='finanzas-item' data-aos="fade-up" data-aos-duration="1050">
                        <p>Plazos <span>de hasta</span></p>
                        <div className='line'></div>
                        <p>14<span>cuotas</span></p>
                    </article>
                </section>
                <button onClick={() => activarModalForm()}>
                    ¡Quiero saber más!
                </button>
            </section>
            <Formulario />
        </>

    )
}
