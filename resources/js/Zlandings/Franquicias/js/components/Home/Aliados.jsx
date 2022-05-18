import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";

const imgs = [1,2,3,4,5,6,7,8,9,10];

export const Aliados = () => {
    return (
        <section className='Aliados__main'>
            <div className='Aliados__content'>
                <h5 className='Aliados__title'>Aliados <span>estratégicos</span></h5>
                <p className='Aliados__paragraf'>Nuestro modelo de negocio viene acompañado de calidad, efectividad y respaldo de aliados con gran prestigio. Invierte en una compañía que trabaja de la mano con marcas reconocidas y elegidas por todos los colombianos</p>
                <p className='Aliados__subtitle'>¡Hacer negocios será mucho más fácil!</p>

                <div className='Aliados__logos'>
                    <Swiper
                        className=""
                        spaceBetween={5}
                        slidesPerView={3}
                        mousewheel={true}
                        loop={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                          }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            "@0.00": {
                              slidesPerView: 1,
                              spaceBetween: 10,
                            },
                            "@0.75": {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            "@1.00": {
                              slidesPerView: 3,
                              spaceBetween: 40,
                            }
                          }}
                        modules={[Autoplay,Mousewheel, Pagination]}
                    >
                        {imgs.map(img => (
                            <SwiperSlide key={img} className='history-item'>
                                <img src={`/img/aliados/${img}.webp`} alt="aliados" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
