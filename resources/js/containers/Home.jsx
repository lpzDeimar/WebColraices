import React, { useEffect } from 'react'
import { Blogmin } from '../components/Blogmin'
import { Alcanze } from '../components/home/Alcanze'
import { Banner } from '../components/home/Banner'
import { Como } from '../components/home/Como'
import { Historys } from '../components/home/Historys'
import { Metas } from '../components/home/Metas'
import { Mision } from '../components/home/Mision'
import { titleReact } from '../titleReact'

export const Home = () => {

    useEffect(() => {
        scrollTo(0, 0);
        titleReact('Compra tu casa en Colombia desde el exterior - Colraices');
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
