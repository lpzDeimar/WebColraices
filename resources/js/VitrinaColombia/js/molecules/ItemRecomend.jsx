import React, { useContext, useState } from 'react';
import { BiBath, BiExpand, BiBed } from "react-icons/bi";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { Like } from '../Context/Like';
import { useCurrency } from '../hooks/useCurrency';

export const ItemRecomend = ({ inmuebleRec }) => {

    const {id, titulo, precio, descripcion, habitaciones, baños, area_const, thumbnail, like, estado, tipo, ciudad, region,num_img,slug } = inmuebleRec;

    const [formatePrice] = useCurrency();
    const [likes, setLikes] = useState(like);
    const [favorites, setFavorites] = useState(false);
    const {handelLike} = useContext(Like);

    const handleFavorite = (inmueble) => {
        setFavorites(!favorites);

        favorites ? setLikes(Number(likes) - 1) : setLikes(Number(likes) + 1);
        handelLike(inmueble);
    }

    const createMarkup = (element) => {
        return { __html: element };
    }

    return (
        <article className='itemRecomend' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="111" data-aos-offset="0">
            <Link className='item__itemRecomend' to={slug}>
                <div className='item__img' style={{ backgroundImage: `url(${thumbnail})` }}></div>

                <div className='itemRecomed__header'>
                    <p>{estado}</p>
                    <p>
                        <span>{tipo}</span>
                        <span className='bgred'>{ciudad}</span>
                    </p>
                </div>

                <div className="itemRecomed__footer">
                        <p>{region}</p>
                        <span>{num_img}</span>
                </div>

            </Link>
            <div className='item__text'>
                <div className='item__paragraf'>
                    <h4 className='name'>{titulo}</h4>
                    <p className='precio'>Desde: {formatePrice(precio)}</p>
                    <div className='paragraf' dangerouslySetInnerHTML={createMarkup(descripcion)}>{}</div>
                </div>
                <div className='icons-item'>
                    <div className='icons-atributos'>
                        <p><i><BiBed /></i> {habitaciones}</p>
                        <p><i><BiBath /></i> {baños}</p>
                        <p><i><BiExpand /></i> {area_const} &#13217;</p>
                    </div>
                    <div className='favorite'>
                        <button onClick={() => { handleFavorite(inmuebleRec) }}>
                            {favorites ?
                                <TiHeartFullOutline /> :
                                <TiHeartOutline />
                            }
                        </button>
                        <p>
                            {likes}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}
