import React from 'react'

export const Avanzas = () => {
  return (
    <section className='Avanzas__main'>

      <div className='Avanza__title'>
        <h5 className='Avanza__title--main'>Colombia crece <span>mientras tú avanzas</span></h5>
        <button onClick={()=>{window.open("https://api.whatsapp.com/send/?phone=573105653998")}} className='Avanza__title--btn'>¡Invierte ya!</button>
      </div>

      <div className='Avanaza__footer'>
        <a href="" className='Avanza__logo'>
          <img src="./img/remesas/LogoBancolombia.webp" alt="" />
        </a>
        <a href="" className='Avanza__logo'>
          <img src="./img/remesas/LogosColraices.webp" alt="" />
        </a>
      </div>

    </section>
  )
}
