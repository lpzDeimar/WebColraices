import React, { useEffect } from 'react'
import { Aliados } from '../components/leasing/Aliados'
import { Banner } from '../components/leasing/Banner'
import { Beneficios } from '../components/leasing/Beneficios'
import { Soluciones } from '../components/Soluciones'
import { Simulador } from '../components/leasing/Simulador'
import { titleReact } from '../titleReact'
import { metaReact } from '../metaReact'
import { createCanonical } from '../canonicalReact'

export const Leasing = () => {

    useEffect(() => {
        scrollTo(0, 0);
        titleReact('Leasing habitacional en Colombia ▷ Simulador crédito leasing');
        metaReact('Leasing habitacional para comprar casa en Colombia | Compra tu casa con el arriendo que pagas mes a mes | Simulador crédito leasing habitacional');
        createCanonical("https://colraices.com/leasing-habitacional");
        /*
        <link rel="canonical" href="https://colraices.com/leasing-habitacional">
        */
    }, [])

    return (
        <div>
            <Banner />
            <Beneficios />
            <Simulador />
            <Aliados />
            <Soluciones />
        </div>
    )
}
