import React, { useContext } from 'react'
import { ActiveContext } from '../ActiveContext';

export const Metas = () => {

    const {contr} = useContext(ActiveContext)

    const pais = contr.contry;
    const number = contr.colex;
    return (
        <section className='metas-main'>
            <article className='metas-content'>
                <h3 className='metas-title'>¡Cada colombiano tiene <span>algo que contar!</span></h3>
                <div className='line'></div>
                <section className='metas-text'>
                    <p>Haces parte de los <span>{number}</span> colombianos en <span>{pais}</span> que trabajan por su bienestar y el de sus familias...</p>
                    <p>¡Por eso queremos conocer tu historia! </p>
                    <p>Cuéntanos lo que te apasiona, eso por lo que madrugas todos los días.</p>
                </section>
                <button>¡Alcancemos tus metas!</button>
            </article>
        </section>
    )
}
