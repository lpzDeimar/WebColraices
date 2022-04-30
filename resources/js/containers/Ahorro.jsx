import React, { useEffect } from 'react'
import { Banner } from '../components/ahorro/Banner'
import { Inversion } from '../components/ahorro/Inversion'
import { Riqueza } from '../components/ahorro/Riqueza'
import { Remesa } from '../components/ahorro/Remesa'
import { Blogmin } from '../components/Blogmin'
import { Finanzas } from '../components/ahorro/Finanzas'
import { titleReact } from '../titleReact'
import { metaReact } from '../metaReact'

export const Ahorro = () => {



    useEffect(() => {
        scrollTo(0, 0);
        titleReact('Ahorro para vivienda en Colombia para colombianos en el exterior');
        metaReact('Conoce cómo hacer un plan de ahorro en Colombia para adquirir vivienda desde el exterior | Haz que tu remesa sea una inversión | Conoce los beneficios');
        /*
        <link rel="canonical" href="https://colraices.com/plan-de-ahorro">
        */
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
