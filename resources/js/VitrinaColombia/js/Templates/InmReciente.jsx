import React, { useEffect, useState } from "react";
import { TitleSection } from "../components/TitleSection";
import { ItemInmueble } from "../molecules/ItemInmueble";
import { Swiper, SwiperSlide } from "swiper/react";

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const InmReciente = React.memo(() => {

    const [inmueblesRecionetes, setInmueblesRecionetes] = useState([]);
    const [loading, setLoading] = useState(false);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#354676'
            },
            secondary: {
                main: '#CAA55E',
            },
        },
    });

    useEffect(() => {
      const inmueblesRes = async() => {
        const resp = await fetch("https://vc.colraices.com/api/v1/properties");
        const data = await resp.json();
        setInmueblesRecionetes(data.data);
        setLoading(true);
      }

      inmueblesRes();

    }, [])


    return (
            <section className="slider-recientes">
                <TitleSection title={"Nuevas propiedades"}>
                Los mejores proyectos en nuestro país los encuentras aquí, con diferentes tipos de inmuebles, en las mejores ciudades de Colombia.
                </TitleSection>

                {loading ?
                    <Swiper
                        navigation={true}
                        pagination={{ dynamicBullets: true }}
                        modules={[Pagination, Navigation]}
                        slidesPerView={1}
                        spaceBetween={8}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 8,
                            },
                            930: {
                                slidesPerView: 3,
                                spaceBetween: 8,
                            },
                        }}
                    >
                        {inmueblesRecionetes.map((inmuebleRecionete)=>(
                            <SwiperSlide key={inmuebleRecionete.id} className="mySlide">
                                <ItemInmueble ItemInmueble={inmuebleRecionete}/>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    :
                    <ThemeProvider theme={theme}>
                            <Box sx={{ width: '70%', margin: '4rem auto' }}>
                                <LinearProgress color='primary' />
                            </Box>
                    </ThemeProvider>
                }


            </section>

    );
}
);
