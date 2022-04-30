import React, { useEffect } from 'react';
import { Formulario } from '../components/contacto/Formulario';
import { Blogmin } from '../components/Blogmin';
import { Soluciones } from '../components/Soluciones';
import { titleReact } from '../titleReact'
import { metaReact } from '../metaReact';


export const Contacto = () => {
    useEffect(() => {
        scrollTo(0, 0);
        titleReact('Recibe ayuda de un asesor para comprar casa en Colombia');
        metaReact('¿Buscas invertir en una casa en Colombia? Recibe ayuda de un asesor para comprar casa en Colombia desde el exterior ▷ Alcanza tus metas con nosotros | Colraices');
        /*
        <link rel="canonical" href="https://colraices.com/contacto">
        */
    }, [])

  return (
    <>
        <Formulario />
        <Blogmin />
        <Soluciones />
    </>
  )
}
