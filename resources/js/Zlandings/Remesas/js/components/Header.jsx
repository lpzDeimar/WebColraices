import React, { useRef } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";

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
                    <i ref={icon}><HiMenuAlt3/></i>
                </button>
            </div>


            <header ref={nav} className='header-container animate__animated animate__fadeInDown' onClick={handleMenu}>

                <div className='header-logo'>
                    <a href='#'>
                        <img src="https://col.colraices.com/img/colraices.webp" alt="colraices logo" />
                    </a>
                </div>
                <div className='header-logo header-logo-dist'>
                    <a href='#'>
                        <img src="./img/remesas/lgbancolombia.webp" alt="colraices logo" />
                    </a>
                </div>

                <nav>
            <ul>
                <li>
                    <a href="#casa">Mi casa en Colombia</a>
                </li>
                <li>
                    <a href="#remesa">Mi remesa</a>
                </li>
                <li>
                    <a href="#propiedad">Colombianos propietarios</a>
                </li>
                
            </ul>
        </nav>

        </header>

        </>
    )
}
