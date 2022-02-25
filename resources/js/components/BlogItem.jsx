import React from 'react'
import { Link } from 'react-router-dom';

export const BlogItem = ({blogmin}) => {
    return (
        <article className='blog-item'>
            <img src={blogmin.imagen} alt={blogmin.titulo} />
            <div>
                <h3>{blogmin.titulo}</h3>
                <Link to={`/blog/${blogmin.slug}`}><button>Leer</button></Link>
            </div>
        </article>
    )
}
