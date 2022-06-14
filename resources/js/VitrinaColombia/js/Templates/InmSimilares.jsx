import React from 'react'
import { ItemInmueble } from '../molecules/ItemInmueble'

export const InmSimilares = ({ similares }) => {
    return (
        <section className='inmSimilares'>

            <ItemInmueble ItemInmueble={similares[0]} key={ItemInmueble.id} />
            <ItemInmueble ItemInmueble={similares[1]} key={ItemInmueble.id} />

        </section>
    )
}
