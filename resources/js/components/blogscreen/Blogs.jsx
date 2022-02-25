import React, { memo, useContext, useEffect, useState } from 'react'
import { ActiveContext } from '../ActiveContext';
import { BlogItem } from '../BlogItem';
import { Suscripcion } from '../Suscripcion';

export const Blogs = memo(() => {

    const [page, setPage] = useState(1);
    const [blogs, setBlogs] = useState([]);
    const [meta, setMeta] = useState([]);

    const api = `https://blog.colraices.com/api/v1/all?page=${page}`;

    useEffect(() => {

        const blog = async () => {
            const resp = await fetch(api);
            const blog = await resp.json();
            setBlogs(blog.data);
            setMeta(blog.meta);
        }
        blog();

    }, [page])

    const maxPages = Math.ceil(meta.total / 6);

    const { activarModalBlog } = useContext(ActiveContext);

    return (
        <>
            <section className='blogmin-main blogs' id='articulos'>
                <h4>Lee nuestros <span>artículos</span></h4>
                <section className='blog-content'>
                    {blogs.map((blogmin) => (
                        <BlogItem blogmin={blogmin} key={blogmin.id} />
                    ))
                    }
                </section>

                <div className='buttons'>
                    {maxPages !== 1 &&
                        <>
                            <button onClick={() => { page > 1 && setPage(page - 1) }}>
                                Antarior
                            </button>
                            <p>{page} <span>/</span> {maxPages}</p>
                            <button onClick={() => { page < maxPages && setPage(page + 1) }}>
                                Seguiente
                            </button>
                        </>
                    }
                </div>

                <button onClick={() => activarModalBlog()} className='suscript'>¡Suscríbete a nuestro boletín!</button>
            </section>
            <Suscripcion />
        </>
    )
})
