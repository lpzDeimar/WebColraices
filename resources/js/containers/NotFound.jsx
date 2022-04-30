import React, { useEffect } from 'react'
import { titleReact } from '../titleReact';

export const NotFound = () => {
    useEffect(() => {
        titleReact('Not Found 404 - Colraices');
    }, [])

    return (
        <section className='fotFound'>
            <article>
                <img src="/img/404.png" alt="pagina no encontrada" />
            </article>
        </section>
    )
}
