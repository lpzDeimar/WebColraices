import React, { useContext, useState } from 'react'
import { useCurrency } from '../hooks/useCurrency';
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { RWebShare } from "react-web-share";
import { BsShare, BsPrinter } from "react-icons/bs";
import { Like } from '../Context/Like';

export const PrecioInmueble = ({ inmueble }) => {

    const { precio,titulo,descripcion } = inmueble;

    const [formatePrice] = useCurrency();
    const [favorites, setFavorites] = useState(false);

    const handleFavorite = () => {
        setFavorites(true);
        handelLike(inmueble);
    }

    const {handelLike} = useContext(Like);

    return (
        <div className='precioinmueble'>
            <h2 className='precioinmueble__title'>Desde: <span>{formatePrice(precio)}</span></h2>
            <section className='precioinmueble__buttons'>
                <RWebShare
                    sites={["facebook", "whatsapp", "mail", "telegram"]}
                    data={{
                        text: `${titulo}  ${descripcion}`,
                        url: `${window.location.href}`,
                        title: "Vitrina Colombia",
                    }}
                    onClick={() => console.log("shared successfully!")}
                >
                    <button><BsShare /> Compartir</button>
                </RWebShare>
                <button onClick={() => { handleFavorite() }}>
                    {favorites ?
                        <TiHeartFullOutline /> :
                        <TiHeartOutline />
                    }
                    Favorito
                </button>
                <button>
                    <BsPrinter/> Imprimir
                </button>
            </section>
        </div>
    )
}
