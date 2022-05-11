import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { isNull } from 'lodash';

import { titleReact } from "../titleReact";
import { metaReact } from "../metaReact";
import { LayoutInmuebles } from '../Templates/LayoutInmuebles';



export const InmFavoritos = () => {

    const [favoritos, setFavoritos] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        scrollTo(0, 0);
        titleReact('Compra tu casa en Colombia desde el exterior');
        metaReact('El mejor sitio para comprar tu casa en Colombia desde el exterior');
    }, []);

    useEffect(() => {
        const dataInmFavoritos = () => {
            const response = localStorage.getItem('favoritos');

            if (!isNull(response)) {
                const data = JSON.parse(response);
                setFavoritos(data);
            } else {
                navigate(-1);
            }
            setLoading(true);
        }

        dataInmFavoritos();


    }, [localStorage.getItem('favoritos')]);

return (
    <LayoutInmuebles
        loading={loading}
        inmuebles={favoritos}
        Notion={false}
        Elim={true}
    />
)
}
