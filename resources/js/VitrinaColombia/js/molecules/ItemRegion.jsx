import React from 'react'

export const ItemRegion = ({img,title,list}) => {
  return (
    <div  style={{ backgroundImage: `${img}` }} data-aos="fade-up"
    data-aos-anchor-placement="top-center">
            <p className='region__title'>{title}</p>
            <p className='region__list'>{list}</p>
    </div>
  )
}
