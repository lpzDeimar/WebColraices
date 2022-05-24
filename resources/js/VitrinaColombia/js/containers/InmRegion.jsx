import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { LayoutInmuebles } from '../Templates/LayoutInmuebles';

import { titleReact } from "../titleReact";
import { metaReact } from "../metaReact";

export const InmRegion = () => {

  const { region } = useParams();

  const [inmRegiones, setInmRegiones] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    scrollTo(0, 0);
    titleReact('Compra tu casa en Colombia desde el exterior');
        metaReact('El mejor sitio para comprar tu casa en Colombia desde el exterior');

    const dataInmRegiones = async () => {
      const response = await fetch(`https://vc.colraices.com/api/v1/regions-properties?region=${region}`);
      const data = await response.json()
      setInmRegiones(data.data);
      setLoading(true);
    }
    dataInmRegiones();

  }, [])

  return (
    <LayoutInmuebles
        loading={loading}
        inmuebles={inmRegiones}
        Notion={true}
    />
  )
}
