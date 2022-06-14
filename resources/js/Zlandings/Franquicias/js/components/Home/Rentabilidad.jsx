import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

export const Rentabilidad = () => {
  return (
    <section className='Rentabilidad'>
        <div className='lined'></div>
        <h5 className='Rentabilidad_title'>Rentabilidad <span>de la inversión</span>
        </h5>
        <div className='line'></div>
        <ul className='Rentabilidad-list'>
            <li><i><IoIosArrowForward/></i> Puedes obtener una tasa interna de retorno superior al 40%</li>
            <li><i><IoIosArrowForward/></i> Recupera la inversión a los 3 años de haber puesto en marcha tu negocio.</li>
            <li><i><IoIosArrowForward/></i> Exclusividad de plazas para alcanzar los mejores resultados.</li>
        </ul>
        <div className='lined'></div>
    </section>
  )
}
