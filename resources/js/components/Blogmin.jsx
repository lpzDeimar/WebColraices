import React, { memo, useEffect, useState, useContext } from 'react';
import { ActiveContext } from './ActiveContext';
import { Suscripcion } from '../components/Suscripcion';
import { BlogItem } from './BlogItem';


export const Blogmin = memo(() => {

    const {activarModalBlog} = useContext(ActiveContext);

    const [blogm, setBlogm] = useState([]);

    useEffect(() => {
        const blogs = async () => {
            const resp = await fetch('https://blog.colraices.com/api/v1/posts');
            const blogs = await resp.json();
            setBlogm(blogs.data);
        }
        blogs();
    }, [])

    return (
        <section className='blogmin-main'>
            <h4>El blog de los colombianos <span>en el exterior</span></h4>
            <section className='blog-content'>
                {blogm.map((blogmin) => (
                    <BlogItem blogmin={blogmin} key={blogmin.id}/>
                ))
                }
            </section>
            <button onClick={() => activarModalBlog()} className='suscript'>¡Suscríbete a nuestro boletín!</button>
            <Suscripcion />
        </section>
    );
})
