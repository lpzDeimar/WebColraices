import React from 'react'

export const Familia = () => {
  return (
    <section>
        <div>
            <h5>Sé parte de la familia Colraices, <span>minimiza riesgos y evoluciona</span></h5>
            <div>
                <div>
                    <h6>¡Únete ya a las <span>franquicias Colraices!</span></h6>
                </div>
                <div>
                    <img src="" alt="" />
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
