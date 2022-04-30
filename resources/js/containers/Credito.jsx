import React, { useEffect } from 'react'
import { Banner } from '../components/credito/Banner'
import { Pasos } from '../components/credito/Pasos'
import { Bancos } from '../components/credito/Bancos'
import { Simulador } from '../components/credito/Simulador'
import { Soluciones } from '../components/Soluciones'
import { titleReact } from '../titleReact'
import { metaReact } from '../metaReact'


export const Credito = () => {

    useEffect(() => {
        scrollTo(0, 0);
        titleReact('Crédito para comprar casa en Colombia desde el exterior');
        metaReact('Créditos para comprar vivienda en Colombia desde el exterior | Calcula tu cuota en tiempo real | Crédito para remodelar tu casa | ¡Solicita tu crédito!');
        /*
        <link rel="canonical" href="https://colraices.com/credito">
        */
    }, [])

    return (
        <div>
            <Banner />
            <Pasos />
            <Bancos />
            <Simulador />
            <Soluciones />
        </div>
    )
}
