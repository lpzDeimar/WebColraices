import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './Nav';
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
                    <Link to="/">
                        <img src="https://col.colraices.com/img/colraices.webp" alt="colraices logo" />
                    </Link>
                </div>

                <Nav />

            </header>

        </>
    )
}
