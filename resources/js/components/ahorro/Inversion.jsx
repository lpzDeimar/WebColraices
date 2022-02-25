import React, { useContext } from "react";
import { ActiveContext } from "../ActiveContext";
import { Formulario } from "../Formulario";

export const Inversion = () => {
    const { activarModalForm } = useContext(ActiveContext);

    return (
        <>
        <section className='inversion-main' data-aos="fade-up" data-aos-duration="1100">
            <h4>Haz que tu remesa<span>sea una inversión</span></h4>
            <div className='inversion-content'>
                <p>Las remesas son fruto de tu esfuerzo para apoyar a tu familia desde el exterior. Les mandas para los estudios e incluso para el arriendo...</p>
                <p>¡Siempre pensando en su bienestar!</p>
                <p>Con nuestro servicio de monetización legalizas el envío de dinero a Colombia.</p>
            </div>
            <button onClick={() => activarModalForm()} >Moneticemos tus remesas a Colombia</button>
        </section>
        <Formulario />
        </>
    )
}
