import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

export const Emprender = () => {
  return (
    <section className='Emprender'>

        <div className='Emprender__img'>
            <img src="/img/emprender.webp" alt="emprender franquicia" />
        </div>

        <div className="Emprender__main">
            <div className='Emprender__main--text'>
                <h5 className='Emprender__main--title'>¿Qué necesitas para <span>emprender con nosotros</span></h5>
                <p>en el mercado financiero e inmobiliario?</p>
            </div>

            <div className='Emprender__main--box'>
                <ul>
                    <li><i><IoIosArrowForward/></i> Debes contar con un permiso de trabajo en tu país de residencia.</li>
                    <li><i><IoIosArrowForward/></i> Mínimo 2 años de antigüedad en tu ciudad de residencia.</li>
                    <li><i><IoIosArrowForward/></i> Un capital entre 5.000 y 10.000 dólares.</li>
                    <li><i><IoIosArrowForward/></i> Conocimiento o experiencia en el área financiera, administrativa, mercado, negocio, entre otros.</li>
                </ul>
            </div>

            <p className='Emprender__main--subtitle'>Haz inversiones inteligentes, alcanza tus metas <br/>y llega al siguiente nivel.</p>

            <button type='button'>¡Haz clic para conocer más! </button>
        </div>
    </section>
  )
}
