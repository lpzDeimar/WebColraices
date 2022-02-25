import React, { useEffect } from 'react';
import { Formulario } from '../components/contacto/Formulario';
import { Blogmin } from '../components/Blogmin';
import { Soluciones } from '../components/Soluciones';
import { titleReact } from '../titleReact'


export const Contacto = () => {
    useEffect(() => {
        scrollTo(0, 0);
        titleReact('Recibe ayuda de un asesor para comprar casa en Colombia - Colraices');
    }, [])

  return (
    <>
        <Formulario />
        <Blogmin />
        <Soluciones />
    </>
  )
}
