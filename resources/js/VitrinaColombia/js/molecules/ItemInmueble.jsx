import React, { useContext, useState } from "react";
import { BiBath, BiExpand, BiBed } from "react-icons/bi";
import { BsShareFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { RWebShare } from "react-web-share";
import { Link, useNavigate } from "react-router-dom";
import { useCurrency } from "../hooks/useCurrency";
import { Like } from "../Context/Like";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast, { Toaster } from 'react-hot-toast';

export const ItemInmueble = ({ ItemInmueble, Elim ,Notion}) => {


    const { titulo, descripcion, precio, estado, tipo, baños, habitaciones, area_const, region, ciudad, slug, thumbnail, num_img } = ItemInmueble;

    const [like, setLike] = useState(false);
    const [formatePrice] = useCurrency();
    const navigate = useNavigate();
    const { handelLike, handelDelete } = useContext(Like);


    const handelDeleteInm = (ItemInmueble) => {
        handelDelete(ItemInmueble);
        navigate("/vitrina-colombia/favoritos");
    }


    const handelLikeInmueble = () => {
        setLike(true);
        handelLike(ItemInmueble);
        toast('!Añadido a favoritos! ',
            {
                duration: 4000,
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
                icon: '💙',
            }
        );
    }

    const createMarkup = (element) => {
        return { __html: element };
    }


    return (
        <article className="itemReciente__main" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="111" data-aos-offset="0">
            {Notion &&
                <Toaster
                    containerStyle={{ zIndex: 10000000 }}
                    position="top-right"
                />
            }
            <Link to={`/vitrina-colombia/${slug}`}>
                <div className="itemReciente__img">

                    <div className="itemReciente__img--header">
                        <div className="itemReciente__img--header--content">
                            <p className="itemReciente__img--header--icon itemReciente__img--header--icon--sec">
                                {estado}
                            </p>
                            <div className="itemReciente__img--header-div">
                                <p className="itemReciente__img--header--icon">
                                    {tipo}
                                </p>
                                <p className="itemReciente__img--header--icon bgred">
                                    {ciudad}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="itemReciente__img--img">
                        <img src={`${thumbnail}`} alt={titulo} />
                    </div>

                    <picture className="itemReciente__img--footer">
                        <div className="itemReciente__img--footer--content" >
                            <p className="itemReciente__img--footer--icon">{region}</p>
                            <p className="itemReciente__img--footer--icon">{num_img}</p>
                        </div>
                    </picture>

                </div>
            </Link>
            <div className="itemReciente__content">

                <div className="itemReciente__content--main">
                    <Link to={`/vitrina-colombia/${slug}`}><h3 className="itemReciente__content--main--title">{titulo}</h3></Link>
                    <h2 className="itemReciente__content--main--subtitle">{tipo} en venta en {ciudad}</h2>
                    <p className="itemReciente__content--main--precio"><span>Desde:</span> {formatePrice(precio)}</p>
                    <div className="itemReciente__content--main--description" dangerouslySetInnerHTML={createMarkup(descripcion.replace(/(<([^>]+)>)/ig, ''))}></div>

                    <div className="itemReciente__content--main--footer">
                        <p className="itemReciente__content--footer--icon"><BiBed /> <span>{habitaciones}</span> </p>
                        <p className="itemReciente__content--footer--icon"><BiBath /> <span>{baños}</span> </p>
                        <p className="itemReciente__content--footer--icon"><BiExpand /> <span>{area_const} &#13217;</span></p>
                    </div>
                </div>
            </div>

            <div className="itemReciente__content--actions">
                <div className="itemReciente__content--actions--content" >
                    <RWebShare
                        sites={["facebook", "whatsapp", "mail", "telegram"]}
                        data={{
                            text: `${titulo}  ${descripcion}`,
                            url: `${window.location.href}${slug}`,
                            title: "Vitrina Colombia",
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                        <button><BsShareFill /></button>
                    </RWebShare>
                    <button onClick={() => { handelLikeInmueble() }}>
                        {!like ?
                            <BsSuitHeart /> :
                            <BsSuitHeartFill />
                        }
                    </button>
                    {Elim &&
                        <button onClick={() => { handelDeleteInm(ItemInmueble) }}>
                            <RiDeleteBin6Line />
                        </button>
                    }
                </div>
            </div>

        </article>
    );
};
