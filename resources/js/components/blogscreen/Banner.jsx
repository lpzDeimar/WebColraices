import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Banner = memo(() => {



    const [lastBlog, setLastBlog] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        const blogs = async () => {
            const resp = await fetch('https://blog.colraices.com/api/v1/last');
            const blogs = await resp.json();
            setLastBlog(blogs);
            setLoading(true);
        }

        blogs();
    }, [])

    const { titulo, extracto, imagen, slug,alt } = lastBlog.data ?? {};

    return (
        <>
            {loading ?
                <section className='blogscreen-banner' data-aos="fade-up" data-aos-duration="1100" >
                    <h2>El blog para colombianos <span>en el exterior</span></h2>
                    <div className='border'></div>
                    <article className='blogscreen-item'>
                        <img src={imagen} alt={alt} />
                        <article className='blogscreen-text'>
                            <h1>{titulo}</h1>
                            <div dangerouslySetInnerHTML={{ __html: extracto }} />
                            <Link to={`/blog/${slug}`}><button>Leer</button></Link>
                        </article>
                    </article>
                </section>
                :
                <div>
                    <h1>Loading</h1>
                </div>
            }
        </>

    )
}
)
