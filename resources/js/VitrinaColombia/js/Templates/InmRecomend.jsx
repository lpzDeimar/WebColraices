import React, { useEffect, useState } from 'react'
import { TitleSection } from '../components/TitleSection'
import { ItemRecomend } from '../molecules/ItemRecomend'

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const InmRecomend = React.memo(() => {

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

    const [inmueblesReco, setInmueblesReco] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const inmueblesRec = async () => {
            const resp = await fetch("https://vc.colraices.com/api/v1/likes");
            const data = await resp.json();
            setInmueblesReco(data.data);
            setLoading(true);
        }

        inmueblesRec();

    }, []);

    return (
        <section className='inmRecomend'>

            <TitleSection title={'Inmuebles recomendados'}>
                Tenemos algunas recomendaciones para ti. Aquí tienes una lista de inmuebles con excelentes precios, increíbles ubicaciones y una gran distribución.
            </TitleSection>

            {loading ?
                <section className='inmRecomend__grid'>

                    {inmueblesReco.map((inmuebleRec) => (
                        <ItemRecomend key={inmuebleRec.id} inmuebleRec={inmuebleRec} />
                    ))}

                </section>
                :
                <ThemeProvider theme={theme}>
                    <Box sx={{ width: '70%', margin: '4rem auto' }}>
                        <LinearProgress color='primary' />
                    </Box>
                </ThemeProvider>
            }
        </section>
    )
}
)
