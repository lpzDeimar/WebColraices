import React, { useContext } from "react";
import { ActiveContext } from "../ActiveContext";
import { Formulario } from "../Formulario";

export const Bancos = () => {
    const { activarModalForm, apiW } = useContext(ActiveContext);

    return (
        <>
        <section className='bancos-main'>
            <section className="bancos-container" data-aos="fade-up" data-aos-duration="1100">
                <h3>Contamos con los mejores <span>bancos de Colombia</span></h3>
                <section className="bancos-aliados">
                    <img src="./img/entidades/davivienda.webp" alt="Credito hipotecario Colombianos en el exterior" />
                    <img src="./img/entidades/bbva.webp" alt="Créditos para comprar vivienda en Colombia desde el exterior" />
                    <img src="./img/entidades/bancolombia.webp" alt="Calcula tu cuota en tiempo real" />
                    <img src="./img/entidades/girosyfinanzas.webp" alt="Crédito para remodelar tu casa" />
                </section>
            </section>
            <section className="bancos-content">
                <div className="content-requisitos">
                    <h4>Requisitos generales</h4>
                    <div className='line'></div>
                    <ul>
                        <li>Ser colombiano residente en el exterior o extranjero con relación de primer grado con un colombiano.</li>
                        <li>Tener entre 18 y 74 años.</li>
                        <li>Tener ingresos demostrables en el exterior.</li>
                        <li>Contar con la capacidad de pago de la cuota de tu crédito.</li>
                    </ul>
                    <p>¿No cumples todos los requisitos?</p>
                    <span>No te preocupes</span>
                    <button onClick={apiW}>Encuentra tu mejor opción</button>
                </div>

                <div className="content-beneficios">
                    <h4><span>Beneficios</span></h4>
                    <div className='line'></div>
                    <ul>
                        <li>Te beneficias con la tasa de cambio porque la cuota de tu crédito será en pesos colombianos.</li>
                        <li>Tienes la opción de tomar un plazo máximo de hasta de 30 años, pero siempre podrás prepagar tu crédito parcial o totalmente sin penalidades.</li>
                        <li>Si tienes la disponibilidad, podrás hacer abonos a capital y reducir tu cuota o el plazo del crédito.</li>
                        <li>Desde el exterior, puedes aplicar a los subsidios del gobierno, para comprar casa o para reducir la cuota de tu crédito, que se ajusten a tu situación.</li>
                    </ul>
                    <button onClick={() => activarModalForm()}>Conoce más beneficios</button>
                </div>
            </section>
        </section>
        <Formulario />
        </>
    )
}
