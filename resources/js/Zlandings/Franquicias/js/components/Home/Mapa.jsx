import React from 'react'

export const Mapa = () => {
  return (
    <section className='Mapa_main'>

        <p className='Mapa_main--title'><span>Geografía</span> a tu favor</p>
        <div className='line'></div>
        <p className='Mapa_main--subtitle'>Ofrecemos una cobertura de servicios que abarca más de 25 países.</p>

        <div className='Mapa_main-mapa'>
        </div>

        <section className='Mapa_main-grid'>

            <article className='Mapa_main-item'>
                <p className='Mapa_main-item--title'>América</p>
                <div className='line'></div>
                <p>Argentina, Brasil, Canadá, Chile, Costa Rica, Ecuador, Estados Unidos, México, Panamá, Paraguay, Perú, Puerto Rico, Uruguay, Colombia, Guatemala.</p>
            </article>

            <article className='Mapa_main-item'>
                <p className='Mapa_main-item--title'>Europa </p>
                <div className='line'></div>
                <p>Alemania, Austria, Bélgica, España, Francia, Holanda, Italia, Portugal, Reino Unido, Suiza.</p>
            </article>

            <article className='Mapa_main-item'>
                <p className='Mapa_main-item--title'>Oceanía</p>
                <div className='line'></div>
                <p>Australia, Nueva Zelanda</p>
                <p className='Mapa_main-item--title'>Asia</p>
                <div className='line'></div>
                <p>Emiratos Árabes</p>
            </article>

        </section>
        <button type='button'>
            ¡Elige tu plaza!
        </button>
    </section>
  )
}
