import React from 'react';
import { TiLocation } from "react-icons/ti";

export const TitleInmueble = ({titulo,region,ciudad,tipo_inmueble}) => {
  return (
    <article className='title__inmueble'>
        <h3 className='title__inmueble__title'>{titulo}</h3>
        <h2 className='title__inmueble__subtitle'>{tipo_inmueble} en venta en {ciudad}</h2>
        <div className='title__inmueble__location'>
            <TiLocation/>
            <p>{ciudad}</p>
            <p>{region}</p>
        </div>
    </article>
  )
}
