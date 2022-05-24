import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ItemFormInm } from '../molecules/ItemFormInm';
import { ItemFormulario } from '../molecules/ItemFormulario';
import { ItemInmueble } from '../molecules/ItemInmueble';
import { Banner } from '../Templates/Banner';


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

export const LayoutInmuebles = ({ loading, inmuebles, Notion, Elim, inm }) => {

  return (
    <>
      {
        loading ?
          <>
            < Banner />
            <section className='inmRegion'>
              <div className='inmRegion__grid'>

                <section className='inmRegion__grid__inm'>
                  {inm &&
                    <p style={{ color: 'gray' }}>No hay resultados para tu busqueda pero mira estos proyectos</p>
                  }
                  {inmuebles.map(inmueble => (
                    <ItemInmueble key={inmueble.id} ItemInmueble={inmueble} Notion={Notion} Elim={Elim} />
                  ))}
                </section>

                <section>
                  <ItemFormulario />
                  <ItemFormInm />
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
          </div>}
    </>
  )
}


LayoutInmuebles.propTypes = {
  loading: PropTypes.bool.isRequired,
  inmuebles: PropTypes.array.isRequired
}
