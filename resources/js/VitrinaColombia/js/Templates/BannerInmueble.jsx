import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { VscChromeClose } from "react-icons/vsc";
import { Navigation } from "swiper";


import "swiper/css";
import "swiper/css/navigation";
import { ItemFormulario } from '../molecules/ItemFormulario';


export const BannerInmueble = ({ imagenes }) => {

    const modal = useRef(null);

    const handleImagenSpan = () => {
        modal.current.classList.toggle("no-modal");
    }

    useEffect(() => {
        modal.current.addEventListener('click',handleClose);
        return () => {
            modal.current && modal.current.removeEventListener('click',handleClose);
        }
    }, [])






    const handleClose = (e) => {
        if (e.target === modal.current) {
            handleImagenSpan()
        }
    }


    return (
        <>
            <section className='bannerInmueble'>
                {imagenes.slice(0,5).map((imagen, index) => (
                    <img onClick={() => { handleImagenSpan() }} key={`imagen-${index}`} src={`${imagen}`} alt="imagen" />
                ))}
            </section>

            <section className="modal" ref={modal}>
                <div className='modal-content'>
                    <Swiper
                        navigation={true} modules={[Navigation]} className="mySwiper"
                    >
                        {imagenes.map((imagen, index) => (
                            <SwiperSlide className='bigimg' key={`imagen${index}`}>
                                <img src={`${imagen}`} alt="imagen" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <section className='formular'>
                        <button className='close' type='button' onClick={() => { handleImagenSpan() }}>
                            <VscChromeClose />
                        </button>

                        <ItemFormulario/>

                    </section>

                </div>
            </section>

        </>
    )
}
