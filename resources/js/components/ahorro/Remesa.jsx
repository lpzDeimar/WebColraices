import React, { useContext } from "react";
import { ActiveContext } from "../ActiveContext";

export const Remesa = () => {
    const { apiW } = useContext(ActiveContext);

    return (
        <section className='remesa-main'>
            <article className='remesa-content'>
                <h4>Un lugar seguro<span>para tu remesa</span></h4>
                <p>La apertura de una cuenta de ahorros en Colombia es la mejor opción para que guardes ese dinero que le envías a tu familia.</p>
                <section className='remesa-items'>
                    <article className='remasa-item' data-aos="fade-up" data-aos-duration="1220"><p>Envía tus remesas a Colombia y <span>ten el control de tu dinero desde el exterior</span> descargando la aplicación en tu teléfono.</p></article>
                    <article className='remasa-item' data-aos="fade-up" data-aos-duration="1120"><p>Desde tu cuenta de ahorros, <span>paga la cuota de tu crédito y las obligaciones que tengas en Colombia</span>  (servicios públicos, mercado, …)</p></article>
                    <article className='remasa-item' data-aos="fade-up" data-aos-duration="1000"><p>Inscribe cuentas de terceros y <span>haz transferencias o recibe giros desde el exterior.</span> </p></article>
                </section>
                <p className='beneficios'>Beneficios</p>
                <button onClick={apiW}>Abre tu cuenta de ahorro</button>
            </article>
            <section className='remesa-img'>
                <img src="/img/ah2.webp" alt="remesa en colombia" />
            </section>
        </section>
    )
}
