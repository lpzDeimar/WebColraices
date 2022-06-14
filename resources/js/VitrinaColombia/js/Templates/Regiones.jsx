import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { TitleSection } from '../components/TitleSection'
import { ItemRegion } from '../molecules/ItemRegion'

export const Regiones = () => {

    const [regions, setRegions] = useState([]);

    useEffect(() => {

        const dataRegiones = async () => {
            const response = await fetch('https://vc.colraices.com/api/v1/regions')
            const data = await response.json()
            setRegions([...data.data,data.colombia]);
        }
        dataRegiones();

    }, []);





    return (
        <section className='region'>

            <TitleSection title={'Regiones'}>
                Escoge tu vivienda ideal en cualquiera de estas increíbles regiones de nuestro país, con los mejores paisajes y la mejor ubicación para vivir.
            </TitleSection>

            <section className='region__grid'>

            {regions.map(region => (
                <Link key={`regiones-${region.slug}${region.id}`} className='region__item' to={`region=${region.slug}`}>
                    <ItemRegion
                        img={`${region.img}`}
                        title={`${region.nombre_region}`}
                        list={`${region.cant_inmuebles} Proyectos`}
                    />
                </Link>
            ))}

            </section>
        </section>
    )
}
