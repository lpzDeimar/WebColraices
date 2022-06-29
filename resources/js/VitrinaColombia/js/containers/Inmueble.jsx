import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AtributInmueble } from '../molecules/AtributInmueble';
import { DesInmuebles } from '../molecules/DesInmuebles';
import { ItemMap } from '../molecules/ItemMap';
import { ItemFormulario } from '../molecules/ItemFormulario';
import { ItemPlano } from '../molecules/ItemPlano';
import { PrecioInmueble } from '../molecules/PrecioInmueble';
import { PropInmuebles } from '../molecules/PropInmuebles';
import { TitleInmueble } from '../molecules/TitleInmueble';
import { BannerInmueble } from '../Templates/BannerInmueble';
import { InmSimilares } from '../Templates/InmSimilares';
import { ItemFormInm } from '../molecules/ItemFormInm';
import { titleReact } from "../titleReact";
import { metaReact } from "../metaReact";

export const Inmueble = () => {

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


    const { inmuebleSlug } = useParams();

    const [inmueble, setInmueble] = useState([]);
    const [loading, setLoading] = useState(false);
    const [similaresRegion, setSimilaresRegion] = useState([]);

    useEffect(() => {
        setLoading(false);

        scroll(0, 0);


        const inmuebleData = async () => {
            const resp = await fetch(`https://vc.colraices.com/api/v1/properties/${inmuebleSlug}`);
            const data = await resp.json();
            setInmueble(data.data);
            setSimilaresRegion(data.similares_region);

            titleReact(`${data.data.tipo_inmueble} en venta en ${data.data.ciudad} | ${data.data.title}`);

            setLoading(true);
        }

        inmuebleData();

        metaReact('El mejor sitio para comprar tu casa en Colombia desde el exterior');

    }, [inmuebleSlug])


    const { titulo, descripcion, precio, baños, habitaciones, garajes, area_const, fecha_const, pro_ser, region, ciudad, like, imagenes, planos, tipo_inmueble } = inmueble;


    return (
        <>
            {loading ?
                <>

                    <BannerInmueble imagenes={imagenes} />

                    <section className='inmueblee'>

                        <div className='inmueble__grid'>

                            <main className='inmueble__main'>
                                <TitleInmueble
                                    titulo={titulo}
                                    region={region}
                                    ciudad={ciudad}
                                    tipo_inmueble={tipo_inmueble}
                                />
                                {screen.width <= 940 &&
                                    <PrecioInmueble
                                        inmueble={inmueble}
                                    />
                                }
                                <PropInmuebles
                                    fecha={fecha_const}
                                    habitaciones={habitaciones}
                                    baños={baños}
                                    area_const={area_const}
                                    garajes={garajes}
                                />
                                <DesInmuebles
                                    title={titulo}
                                    description={descripcion}
                                />
                                <AtributInmueble
                                    pro_ser={pro_ser}
                                />

                                {planos.length > 0 &&
                                    <ItemPlano
                                        planos={planos}
                                        titulo={titulo}
                                    />
                                }

                                <ItemMap
                                    lat={Number(inmueble.coordenadas.lat)}
                                    lng={Number(inmueble.coordenadas.lng)}
                                />
                                {similaresRegion.length > 0 &&
                                    <InmSimilares
                                        similares={similaresRegion}
                                    />
                                }

                            </main>

                            <section>
                                {screen.width >= 940 &&
                                    <PrecioInmueble
                                        inmueble={inmueble}
                                    />
                                }
                                <div className='inmueble__formularios'>
                                    <ItemFormulario />
                                    <ItemFormInm />
                                </div>
                            </section>

                        </div>

                    </section>
                </>
                :
                <div className='loading'>
                    <img src="/img/logo.webp" alt="Vitrina Colombia" />
                    <ThemeProvider theme={theme}>
                        <Box sx={{ width: '50%' }}>
                            <LinearProgress color='primary' />
                        </Box>
                    </ThemeProvider>
                </div>
            }
        </>
    )
}
