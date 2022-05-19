import React from 'react'

export const Familia = () => {
  return (
    <section className='Familia'>

        <div className='Familia__content'>
            <h5 className='Familia__title'>Sé parte de la familia Colraices, <span>minimiza riesgos y evoluciona</span></h5>

            <div className='Familia__box'>

                <div className='Familia__box--text'>
                    <h6 className='Familia__box--title'>¡Únete ya a las <span>franquicias Colraices!</span></h6>
                    <div className='line'></div>
                </div>

                <div className='Familia__box--form'>
                    <img src="https://col.colraices.com/img/colraices.webp" alt="Colraices" />
                    <form>
                        <input type="text" name='nombre' placeholder='Nombre:'/>
                        <input type="email" name='email' placeholder='E-mail:'/>
                        <input type="tel" name='telefono' placeholder='Telefono: +57 321 231 1232'/>
                        <input type="text" name='pais' placeholder='País de residencia:'/>
                        <button type='button'>Enviar</button>
                    </form>
                </div>

            </div>
        </div>

    </section>
  )
}
