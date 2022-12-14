import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../containers/Home';
import { Inmueble } from '../containers/Inmueble';
import { InmRegion } from '../containers/InmRegion';
import { Like } from '../Context/Like';
import { handelLike, handelDelete } from '../Context/setLike';
import { InmFavoritos } from '../containers/InmFavoritos';
import { InmFiltrados } from '../containers/InmFiltrados';
import { Layout } from '../Templates/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const App = () => {

    const [ciudades, setCiudades] = useState([]);



    useEffect(() => {
        const ciudadData = async () => {
            const resp = await fetch("https://vc.colraices.com/api/v1/cities");
            const data = await resp.json();
            setCiudades(data.data);
        }

        ciudadData();
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <BrowserRouter>
            <Like.Provider value={{ handelLike, ciudades, handelDelete }}>
                <Layout>
                    <Routes>
                        <Route path='/vitrina-colombia/' element={<Home />} />
                        <Route path='/vitrina-colombia/region=:region' element={<InmRegion />} />
                        <Route path='/vitrina-colombia/favoritos' element={<InmFavoritos />} />
                        <Route path='/vitrina-colombia/region=:region/:inmuebleSlug' element={<Inmueble />} />
                        <Route path='/vitrina-colombia/:inmuebleSlug' element={<Inmueble />} />
                        <Route path='/vitrina-colombia/precio=:p&city=:city&rooms=:rooms&baths=:baths&area=:area' element={<InmFiltrados />} />
                    </Routes>
                </Layout>
            </Like.Provider>
        </BrowserRouter>
    )
}
