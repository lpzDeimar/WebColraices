import React, { useEffect, useRef} from 'react'

export const Banner = () => {

  const vd = useRef(null)

  useEffect(() => {
    vd.current.play();
  }, [])

  return (
    <section className='Banner__main'>

      <div className='Banner__text'>
          <h2 className='Banner__title'>Convierte tu remesa<span>en riqueza</span>juntoaColraices</h2>
          <button className='Banner__btn'>¡Invierte ahora!</button>
      </div>

      <div className='Banner__content'>
          <div className='Banner__video'>
            <video loop ref={vd}>
              <source src="https://leasingdavivienda.colraices.com/assets/video/leasing.mp4" type="video/mp4"/>
            </video>
          </div>
      </div>

    </section>
  )
}
