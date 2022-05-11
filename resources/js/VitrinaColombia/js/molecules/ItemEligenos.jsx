import React from 'react'
import { CartTextCol } from '../components/CartTextCol'

export const ItemEligenos = ({title,img,children,inp}) => {
  return (
    <>
        <article className={`eligenos__item ${inp ? 'eligenos__item-in' : ''}`}>
            <CartTextCol title={title}>
              {children}
            </CartTextCol>
          </article>
        <div className={`eligenos__img ${inp ? 'eligenos__img-in' : ''}`} style={{backgroundImage: `${img}`}}></div>
    </>
  )
}
