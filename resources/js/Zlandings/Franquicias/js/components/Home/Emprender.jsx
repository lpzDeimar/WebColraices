import React from 'react'

export const Emprender = () => {
  return (
    <section>

        <div className='Pilares__img'>
            <img src="/img/emprender.webp" alt="emprender franquicia" />
        </div>

        <div className="Pilares__main">
            <div>
                <h5>¿Qué necesitas para <span>emprender con nosotros</span></h5>
                <p>en el mercado financiero e inmobiliario?</p>
            </div>

            <div>
                <ul>
                    <li>Debes contar con un permiso de trabajo en tu país de residencia.</li>
                    <li>Mínimo 2 años de antigüedad en tu ciudad de residencia.</li>
                    <li>Un capital entre 5.000 y 10.000 dólares.</li>
                    <li>Conocimiento o experiencia en el área financiera, administrativa, mercado, negocio, entre otros.</li>
                </ul>
            </div>

            <p>Haz inversiones inteligentes, alcanza tus metas y llega al siguiente nivel.</p>

            <button type='button'>¡Haz clic para conocer más! </button>
        </div>
    </section>
  )
}
