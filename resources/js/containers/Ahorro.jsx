import React, { useEffect } from 'react'
import { Banner } from '../components/ahorro/Banner'
import { Inversion } from '../components/ahorro/Inversion'
import { Riqueza } from '../components/ahorro/Riqueza'
import { Remesa } from '../components/ahorro/Remesa'
import { Blogmin } from '../components/Blogmin'
import { Finanzas } from '../components/ahorro/Finanzas'
import { titleReact } from '../titleReact'

export const Ahorro = () => {



    useEffect(() => {
        scrollTo(0, 0);
        titleReact('Como ahorrar para comprar tu casa en Colombia  - Colraices');
    }, [])

    return (
        <div>
            <Banner/>
            <Riqueza/>
            <Inversion/>
            <Remesa/>
            <Finanzas/>
            <Blogmin/>
        </div>
    )
}
