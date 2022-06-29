import React from 'react'

export const ArticleDerechos = ({title, children}) => {
  return (
    <article className='derechos__item'>
          <p className='title_derechos'>{title}</p>
          <p className='text_derechos'>
            {children}
          </p>
        </article>
  )
}
