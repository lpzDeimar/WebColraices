import React, { useContext } from 'react'
import { ActiveContext } from '../../../../components/ActiveContext'
import { Formulario } from '../../../../components/Formulario'

export const Avanzas = () => {

  const {activarModalForm} = useContext(ActiveContext)

  return (
    <section className='Avanzas__main'>

      <div className='Avanza__title'>
        <h5 className='Avanza__title--main'>Colombia crece <span>mientras tú avanzas</span></h5>
        <button className='Avanza__title--btn' onClick={() => activarModalForm()}>
          ¡Invierte ya!
        </button>

      </div>

      <div className='Avanaza__footer'>
        <a href="" className='Avanza__logo'>
          <img src="./img/remesas/LogoBancolombia.webp" alt="" />
        </a>
        <a href="" className='Avanza__logo'>
          <img src="./img/remesas/LogosColraices.webp" alt="" />
        </a>
      </div>

      <Formulario/>
    </section>
  )
}
