import React from 'react'
import { Avanzas } from '../components/Avanzas';
import { Banner } from '../components/Banner';
import { Casa } from '../components/Casa';
import { Futuro } from '../components/Futuro';
import { Meta } from '../components/Meta';
import { Riqueza } from '../components/Riqueza';

export const Home = () => {  

  return (
    <>
      <Banner/>
      <Futuro/>
      <Riqueza/>
      <Casa/>
      <Meta/>
      <Avanzas/>
    </>
  )
}
