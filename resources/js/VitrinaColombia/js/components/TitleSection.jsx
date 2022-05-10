import React from 'react'

export const TitleSection = (props) => {
  return (
    <section className='TitleSection'>
        <h4 className='TitleSection-title'>{props.title}</h4>
        <p className='TitleSection-paragraf'>{props.children}</p>
    </section>
  )
}
