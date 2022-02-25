import React, { useContext } from 'react';
import { ActiveContext } from '../ActiveContext';
import { MiVivienda } from '../MiVivienda';

export const Como = () => {

    const {activarModalVivienda} = useContext(ActiveContext);

    return (
        <section className='como-main'>

            <section className='como-img'>
                <img src="./img/bn2.webp" alt="Compra casa en colombia" />
            </section>

            <section className='como-text'>
                <h3>¿Cómo quieres tu casa <span>en Colombia?</span></h3>

                <div className='como-content'>
                    <p>La casa que buscas en Colombia es única... <span>¡Como tú!</span></p>
                    <p>Por eso queremos que nos cuentes cómo te la imaginas, con cuántas habitaciones, si la quieres en Cali, Cartagena, Bogotá o en otra ciudad...</p>

                    <div className='como-botones'>
                        <button onClick={() => activarModalVivienda()}>¡La encontraremos por ti!</button>
                    </div>
                </div>
                <MiVivienda />
            </section>
        </section>
    )
}
