import React, { useEffect } from 'react'
import { Banner } from '../components/credito/Banner'
import { Pasos } from '../components/credito/Pasos'
import { Bancos } from '../components/credito/Bancos'
import { Simulador } from '../components/credito/Simulador'
import { Soluciones } from '../components/Soluciones'
import { titleReact } from '../titleReact'


export const Credito = () => {

    useEffect(() => {
        scrollTo(0, 0);
        titleReact('Conoce sobre los créditos para compra de casa en Colombia - Colraices');
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
