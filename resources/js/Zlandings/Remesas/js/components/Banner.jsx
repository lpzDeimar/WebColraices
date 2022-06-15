import React, { useEffect, useRef} from 'react'

export const Banner = () => {

  const vd = useRef(null)

  useEffect(() => {
    vd.current.play();
  }, []);

  return (
    <section className='Banner__main'>

      <div className='Banner__text'>
          <h2 className='Banner__title'>Convierte tu remesa<span>en riqueza</span>juntoaColraices</h2>
          <button className='Banner__btn' onClick={()=>{window.open("https://api.whatsapp.com/send/?phone=573105653998")}}>¡Invierte ahora!</button>
      </div>

      <div className='Banner__content'>
          <div className='Banner__video'>
            <video loop ref={vd} controls>
              <source src="./video/remesas.mp4" type="video/mp4"/>
            </video>
          </div>
      </div>

    </section>
  )
}
