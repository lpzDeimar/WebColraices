import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="credito">Crédito</NavLink></li>
                <li><NavLink to="leasing-habitacional">Leasing Habitacional</NavLink></li>
                <li><a href="https://proyectos.colraices.com/proyectosdeviviendaencolombiadesdeelexterior" target="_blank">Portal Inmobiliario</a></li>
                <li><NavLink to="plan-de-ahorro">Plan de ahorro</NavLink></li>
                <li><NavLink to="blog">Blog</NavLink></li>
                <li><NavLink to="contacto">Contacto</NavLink></li>
            </ul>
        </nav>
    )
}
