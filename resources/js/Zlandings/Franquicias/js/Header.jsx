import React, { useRef } from 'react'

export const Header = () => {


    const menu = useRef(null);
    const icon = useRef(null);
    const nav = useRef(null);

    const handleMenu = () => {

        if (window.innerWidth < 930) {

            if (icon.current.classList.contains('fa-times')) {
                menu.current.style.padding = '16px 16px 32px 32px';
                icon.current.classList.remove('fa-times');
                icon.current.classList.add('fa-bars');
                nav.current.style.display = 'none';
            } else {
                icon.current.classList.remove('fa-bars');
                icon.current.classList.add('fa-times');
                menu.current.style.padding = '16px 16px 200vw 200vw';
                nav.current.style.display = 'flex';
            }
        }

    }

    return (
        <>

            <div className='header-button' ref={menu} onClick={handleMenu}>
                <button type='button' >
                    <i className="fas fa-bars" ref={icon}></i>
                </button>
            </div>


            <header ref={nav} className='header-container animate__animated animate__fadeInDown' onClick={handleMenu}>

                <div className='header-logo'>
                    <a href='/'>
                        <img src="https://col.colraices.com/img/colraices.webp" alt="colraices logo" />
                    </a>
                </div>

                <nav>
            <ul>
                <li>
                    <a href="credito">Crédito</a>
                </li>
                <li>
                    <a href="leasing-habitacional">
                        Leasing Habitacional
                    </a>
                </li>
                <li>
                    <a
                        href="https://proyectos.colraices.com/proyectosdeviviendaencolombiadesdeelexterior"
                        target="_blank"
                    >
                        Portal Inmobiliario
                    </a>
                </li>
                <li>
                    <a href="plan-de-ahorro">Plan de ahorro</a>
                </li>
                <li>
                    <a href="blog">Blog</a>
                </li>
                <li>
                    <a href="contacto">Contacto</a>
                </li>
            </ul>
        </nav>

            </header>

        </>
    )
}
