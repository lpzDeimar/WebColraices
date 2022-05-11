import React from 'react'
import { CartTextCol } from '../components/CartTextCol'
import { TitleSection } from '../components/TitleSection'
import { ItemEligenos } from '../molecules/ItemEligenos';

export const Eligenos = () => {

  return (
    <main className='eligenos'>
      <div className='eligenos__container'>

        <TitleSection title={'Por qué elegirnos'}>
        Encontrarás un servicio de calidad que te acompañará de forma personalizada en el proceso de comprar tu casa en Colombia desde el exterior. Te ofrecemos las mejores oportunidades para invertir y crecer económicamente.
        </TitleSection>
        <div className='eligenos__grid'>

            <ItemEligenos title={'Nuestras constructoras aliadas'} img={'url(/img/eligenos/aliados.webp)'}>
            Para ofrecer los mejores inmuebles a nuestros colombianos en el exterior, contamos con importantes constructoras aliadas que cuentan una larga trayectoria en nuestro país, con multitud de proyectos de calidad en diferentes ciudades, para que tu inversión sea confiable y segura.
            </ItemEligenos>

            <ItemEligenos title={'Viviendas con las mejores condiciones'} img={'url(/img/eligenos/inmuebles.webp)'} inp>
            Todos los inmuebles nuevos y usados que ofertamos en nuestro portal son verificados previamente para que cumplan con la calidad necesaria para nuestros clientes, así como las características específicas deseables. Así tienes confianza y seguridad al momento de realizar tu inversión.
            </ItemEligenos>

            <ItemEligenos title={'Nuestros aliados financieros'} img={'url(/img/eligenos/constructoras.webp)'}>
            Para nuestros colombianos en el exterior es muy sencillo acceder a los créditos de nuestros aliados bancarios, los cuales tienen un gran reconocimiento y trayectoria a nivel nacional e internacional por el apoyo que han brindado a nuestros compatriotas con sus diferentes beneficios y créditos.
            </ItemEligenos>

        </div>
      </div>
    </main>
  )
}
