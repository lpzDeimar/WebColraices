import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createCanonical } from '../canonicalReact';
import { Blogs } from '../components/blogscreen/blogs';
import { metaReact } from '../metaReact';
import { titleReact } from '../titleReact';

export const Blog = () => {

    const { blogSlug } = useParams();

    const api = `https://blog.colraices.com/api/v1/posts/${blogSlug}`;
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect((blogSlug = '') => {

        scrollTo(0, 0);

        const blog = async () => {
            const resp = await fetch(api);
            const blog = await resp.json();
            setBlog(blog);
            setLoading(true);
            titleReact(blog.data.meta_title);
            metaReact(blog.data.description);
            createCanonical(`https://colraices.com/blog/${blog.data.slug}`);
        }

        blog();
    }, [blogSlug]);

    const { titulo, extracto, imagen, contenido, categoria, autor, creacion,alt} = blog.data ?? {};

    const navigate = useNavigate();

    return (
        <>
            <section className='blog-main'>
                <h3>El blog para colombianos <span>en el exterior</span></h3>
                {loading ?
                    <article className='blog-content'>
                        <div className='blog-head'>
                            <img src={imagen} alt={alt} />
                            <section className='blog-img'>
                                <div className='blog-cred'>
                                    <p><span>Creado</span> {creacion}</p>
                                    <p><span>Categoria</span> {categoria}</p>
                                </div>
                                <h1>{titulo}</h1>
                                <div className='line'></div>
                                <div className='paragraf' dangerouslySetInnerHTML={{ __html: extracto }} />
                            </section>
                        </div>
                        <article className='blog-body'>
                            <div className='paragraf' dangerouslySetInnerHTML={{ __html: contenido }} />
                            <div className='blog-footer'>
                                <button onClick={() => { navigate(-1) }}>Atras</button>
                                <p className='autor'><span>Autor</span> {autor}</p>
                            </div>
                        </article>
                    </article>
                    :
                    <h3>Cargando...</h3>
                }
            </section>
            <Blogs />
        </>
    )
}
