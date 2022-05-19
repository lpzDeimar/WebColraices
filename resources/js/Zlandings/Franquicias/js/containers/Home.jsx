import React from 'react'
import { Aliados } from '../components/Home/Aliados'
import { Banner } from '../components/Home/Banner'
import { Ciudades } from '../components/Home/Ciudades'
import { Colombianos } from '../components/Home/Colombianos'
import { Emprender } from '../components/Home/Emprender'
import { Familia } from '../components/Home/Familia'
import { Franquicias } from '../components/Home/Franquicias'
import { Mapa } from '../components/Home/Mapa'
import { Pilares } from '../components/Home/Pilares'
import { Rentabilidad } from '../components/Home/Rentabilidad'
import { Soporte } from '../components/Home/Soporte'
import { Ventajas } from '../components/Home/Ventajas'
import { Layout } from '../Layout'

export const Home = () => {
  return (
    <>
    <Layout>
        <Banner/>
        <Colombianos/>
        <Mapa/>
        <Ciudades/>
        <Ventajas/>
        <Franquicias/>
        <Aliados/>
        <Pilares/>
        <Rentabilidad/>
        <Soporte/>
        <Emprender/>
        <Familia/>
    </Layout>
    </>
  )
}
