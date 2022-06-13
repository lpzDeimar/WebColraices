import React, { useEffect } from 'react'
import { createCanonical } from '../canonicalReact'
import { Banner } from '../components/blogscreen/Banner'
import { Blogs } from '../components/blogscreen/Blogs'
import { Inde } from '../components/blogscreen/Inde'
import { Videos } from '../components/blogscreen/Videos'
import { titleReact } from '../titleReact'

export const BlogScreen = () => {

    useEffect(() => {
        scrollTo(0, 0);
        titleReact('El blog de los colombianos en el exterior  - Colraices');
        createCanonical("https://colraices.com/blog");
        /*
        <link rel="canonical" href="https://colraices.com/blog">
        */
    }, [])

    return (
        <>
        <Banner/>
        <Inde/>
        <Blogs/>
        <Videos/>
        </>
    )
}
