import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Mousewheel, Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";

import Historyss from '../../historias.js';

export const Historys = () => {

    return (
        <section className='historys-main'>
            <h3>¡Historias que <span>inspiran!</span></h3>
            <div className='historys-content'>
                <p className='keys' >{"{"}</p>
                <Swiper
                    className="history"
                    spaceBetween={5}
                    slidesPerView={1}
                    mousewheel={true}
                    loop={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                      }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay,Mousewheel, Pagination]}
                >
                    {Historyss.historys.map(histor => (

                        <SwiperSlide key={histor.id} className='history-item'>
                            <article>
                                <img src={histor.img} alt="" />
                                <p className='history-text'>{histor.history}</p>
                                <p className='history-name'>{histor.name}</p>
                            </article>
                        </SwiperSlide>

                    ))}

                </Swiper>
                <p className='keys' >{"}"}</p>
            </div>
        </section>
    );
};
