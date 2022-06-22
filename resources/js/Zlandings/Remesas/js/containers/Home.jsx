import React from 'react'
import { Avanzas } from '../components/Avanzas';
import { Banner } from '../components/Banner';
import { Casa } from '../components/Casa';
import { Futuro } from '../components/Futuro';
import { Header } from '../components/Header';
import {ActiveContext} from '../../../../components/ActiveContext'
import useModal from '../../../../components/hooks/useModal'
import { Meta } from '../components/Meta';
import { Riqueza } from '../components/Riqueza';

export const Home = () => {  

  const[,,,,activeModalForm,activarModalForm,]=useModal();

  return (
    <>
    <ActiveContext.Provider value={{activeModalForm,activarModalForm}}>
      <Header/>
      <Banner/>
      <Futuro/>
      <Riqueza/>
      <Casa/>
      <Meta/>
      <Avanzas/>
    </ActiveContext.Provider>
    </>
  )
}
