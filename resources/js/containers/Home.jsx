import React, { useEffect } from 'react'
import { createCanonical } from '../canonicalReact'
import { Blogmin } from '../components/Blogmin'
import { Alcanze } from '../components/home/Alcanze'
import { Banner } from '../components/home/Banner'
import { Como } from '../components/home/Como'
import { Historys } from '../components/home/Historys'
import { Metas } from '../components/home/Metas'
import { Mision } from '../components/home/Mision'
import { metaReact } from '../metaReact'
import { titleReact } from '../titleReact'

export const Home = () => {

    useEffect(() => {
        scrollTo(0, 0);
        titleReact('Comprar casa en Colombia desde el exterior ▷ Colraices');
        metaReact("Compra de vivienda en Colombia desde el exterior | Compra tu casa en Colombia desde cualquier parte del mundo | colombianos en el exterior | Colraices");
        createCanonical("https://colraices.com");
        /*
        <link rel="canonical" href="https://colraices.com">
        */
    }, [])

    return (

        <div>
            <Banner />
            <Mision />
            <Alcanze />
            <Como />
            <Metas />
            <Historys />
            <Blogmin />
        </div>
    )
}
