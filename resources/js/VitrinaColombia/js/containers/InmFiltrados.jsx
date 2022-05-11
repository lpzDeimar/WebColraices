import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import { LayoutInmuebles } from '../Templates/LayoutInmuebles';

import { titleReact } from "../titleReact";
import { metaReact } from "../metaReact";

export const InmFiltrados = () => {

    const {p,city,baths,rooms,area } = useParams();

    const pre =  p.split('-');

    const [p1,p2] = pre;

    let urlApi;

    if(rooms === '0' && baths === '0' && area === '0'){
        urlApi = `https://vc.colraices.com/api/v1/filtro?p1=${p1}&p2=${p2}&city=${city}`;
    }else{
        urlApi = `https://vc.colraices.com/api/v1/filtro?p1=${p1}&p2=${p2}&city=${city}&baths=${baths}&rooms=${rooms}&area=${area}`;
    }



    const [inmuebles, setInmuebles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inm, setInm] = useState(false);

    useEffect(() => {

        scrollTo(0,0);
        titleReact('Compra tu casa en Colombia desde el exterior');
        metaReact('El mejor sitio para comprar tu casa en Colombia desde el exterior');

        const fetchData = async () => {
            setInm(false);
            setLoading(false);
            const response = await fetch(urlApi);
            const data = await response.json();

            if(data.data.length > 0){
                setInmuebles(data.data);
            }else{
                const resp = await fetch('https://vc.colraices.com/api/v1/regions-properties?region=colombia');
                const data = await resp.json();
                setInmuebles(data.data)
                setInm(true);
            }
            setLoading(true);
        }

        fetchData();

    }, [urlApi]);

  return (
    <LayoutInmuebles
        loading={loading}
        inmuebles={inmuebles}
        Notion={true}
        inm={inm}
    />
  )
}
