import React, { useEffect } from 'react'
import { Aliados } from '../components/leasing/Aliados'
import { Banner } from '../components/leasing/Banner'
import { Beneficios } from '../components/leasing/Beneficios'
import { Soluciones } from '../components/Soluciones'
import { Simulador } from '../components/leasing/Simulador'
import { titleReact } from '../titleReact'

export const Leasing = () => {

    useEffect(() => {
        scrollTo(0, 0);
        titleReact('Conoce sobre el leasing habitacional en Colombia - Colraices');
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
