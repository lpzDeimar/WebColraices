import React, { useEffect } from "react";
import { Banner } from "../Templates/Banner";
import { Regiones } from "../Templates/Regiones";
import { Eligenos } from "../Templates/Eligenos";
import { InmRecomend } from "../Templates/InmRecomend";
import { InmReciente } from "../Templates/InmReciente";
import { Mapa } from "../Templates/Mapa";
import { Testimoniales } from "../Templates/Testimoniales";
import { titleReact } from "../titleReact";
import { metaReact } from "../metaReact";

export const Home = () => {

    useEffect(() => {
        scrollTo(0, 0);
        titleReact('Compra tu casa en Colombia desde el exterior');
        metaReact('El mejor sitio para comprar tu casa en Colombia desde el exterior');
    }, []);

    return (
        <>
            <Banner main/>
            <InmReciente />
            <InmRecomend />
            <Regiones />
            <Eligenos />
            <Testimoniales />
            <Mapa />
        </>
    );
};
