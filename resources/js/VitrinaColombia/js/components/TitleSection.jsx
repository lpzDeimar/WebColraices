import React from 'react'

export const TitleSection = (props) => {
  return (
    <section className='TitleSection' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="111" data-aos-offset="0">
        <h4 className='TitleSection-title'>{props.title}</h4>
        <p className='TitleSection-paragraf'>{props.children}</p>
    </section>
  )
}
