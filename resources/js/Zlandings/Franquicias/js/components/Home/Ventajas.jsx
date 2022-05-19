import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export const Ventajas = () => {
  return (
    <section className='Ventajas'>

        <div className='Ventajas__content'>
            <h4 className='Ventajas__content-title'>Ventajas <span>de ser un aliado</span> Colraices</h4>
            <p className='Ventajas__content-subtitle'>Invertir en un negocio probado y posicionado</p>
            <div className='Ventajas__content-box'>

                <div className='Ventajas__content--list'>
                    <ul >
                        <li><i><IoIosArrowForward/></i> Alcanzar tu libertad económica. </li>
                        <li><i><IoIosArrowForward/></i> Hacer crecer tus finanzas.</li>
                        <li><i><IoIosArrowForward/></i> Manejar tu tiempo.</li>
                        <li><i><IoIosArrowForward/></i> Generar riqueza y construir patrimonio.</li>
                        <li><i><IoIosArrowForward/></i> Ser parte de un emprendimiento respaldado por <br/>reconocidas marcas colombianas.</li>
                    </ul>
                    <p>Sé un embajador Colraices desde donde estés.</p>
                </div>

                <p>Emprende con seguridad y respaldo.</p>
                <button type='button'>
                ¡Conviértete en aliado ahora!
                </button>
            </div>
        </div>

        <div className='Ventajas__img'>
            <img src="/img/ventajas.webp" alt="" />
        </div>
    </section>
  )
}
