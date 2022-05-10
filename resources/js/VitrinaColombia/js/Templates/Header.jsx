import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
/* import { Nav } from './Nav'; */

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

    const favorites = localStorage.getItem('favorites');
    const favoritesArray = JSON.parse(favorites) || [];

    return (
        <>

            <div className='header-button' ref={menu} onClick={handleMenu}>
                <button type='button' >
                    <i className="fas fa-bars" ref={icon}></i>
                </button>
            </div>


            <header ref={nav} className='header-container animate__animated animate__fadeInDown' onClick={handleMenu}>

                <div className='header-logo'>
                    <Link to="/">
                        <img src="./img/logobl.webp" alt="colraices logo" />
                    </Link>
                </div>

                {/* <Nav /> */}
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/favoritos'>Tus favoritos</NavLink>
                        </li>
                    </ul>
                </nav>

            </header>

        </>
    )
}
