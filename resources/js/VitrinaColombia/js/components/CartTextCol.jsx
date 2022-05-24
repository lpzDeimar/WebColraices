import React from 'react'

export const CartTextCol = (props) => {
  return (
    <article className='cartTextCol' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <h3 className='cartTextCol-title'>{props.title}</h3>
        <p className='cartTextCol-paragraf'>{props.children}</p>
    </article>
  )
}
