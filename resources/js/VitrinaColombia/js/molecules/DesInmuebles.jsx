import React from 'react'

export const DesInmuebles = ({ title, description }) => {

    const createMarkup = (element) => {
        return { __html: element };
    }

    return (
        <article className='desInmuebles'>
            <p className='desInmuebles__title'>{title}</p>
            <div className='desInmuebles__description' dangerouslySetInnerHTML={createMarkup(description)}></div>
        </article>
    )
}
