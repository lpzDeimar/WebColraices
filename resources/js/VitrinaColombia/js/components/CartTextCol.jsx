import React from 'react'

export const CartTextCol = (props) => {
  return (
    <article className='cartTextCol'>
        <h3 className='cartTextCol-title'>{props.title}</h3>
        <p className='cartTextCol-paragraf'>{props.children}</p>
    </article>
  )
}
