import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "../components/Layout";
import { Ahorro } from "../containers/Ahorro";


import { Home } from '../containers/Home';
import { Leasing } from "../containers/Leasing";
import { NotFound } from '../containers/NotFound';
import { Credito } from "../containers/Credito";
import { BlogScreen } from "../containers/BlogScreen";
import { Blog } from "../containers/Blog";
import { ActiveContext } from "../components/ActiveContext";
import useModal from "../components/hooks/useModal";
import { Contacto } from "../containers/Contacto";
import { getContryByCod } from "../selectors/getContryByCod";
import AOS from 'aos';
import 'aos/dist/aos.css';

const contry = document.querySelector('#contry').value;

export const App = () => {

    const [activeModalBlog, activarModalBlog, activeModalVivienda, activarModalVivienda, activeModalForm, activarModalForm, apiW] = useModal();

    const [contr, setContr] = useState([])

    useEffect(() => {
        setContr(getContryByCod(contry));
        AOS.init();
    }, [contry])


    return (

        <ActiveContext.Provider value={{ activeModalBlog, activarModalBlog, activeModalVivienda, activarModalVivienda, activeModalForm, activarModalForm, contr, apiW}}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='credito' element={<Credito />} />
                        <Route path='leasing-habitacional' element={<Leasing />} />
                        <Route path='plan-de-ahorro' element={<Ahorro />} />
                        <Route path='blog' element={<BlogScreen />}/>
                        <Route path='blog/:blogSlug' element={<Blog />} />
                        <Route path='contacto' element={<Contacto />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ActiveContext.Provider>

    )
}

