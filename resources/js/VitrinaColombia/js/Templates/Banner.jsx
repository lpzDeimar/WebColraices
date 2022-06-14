import React, { useEffect, useRef, useState } from 'react'
import { BarSearch } from '../molecules/BarSearch'

export const Banner = (props) => {

    const [fid, setFid] = useState(false)
    const video = useRef(null)

    const observar = useRef(new IntersectionObserver(function (entries) {
        setFid(entries[0].isIntersecting);
    }, { root: null }))

    useEffect(() => {

        video.current.play();
        observar.current.observe(document.querySelector('.banner'));

        const bar = document.querySelector('.barSearch');

        fid ? bar.classList.remove('fijo') : bar.classList.add('fijo');

        return () => {
            observar.current && observar.current.disconnect();
        }

    }, [fid]);

    return (
        <section>
            <div className={`banner ${!props.main && 'bannermin'}`} >

                <div className='video'>
                        <video autoPlay muted loop ref={video}>
                            <source src={props.main ? "/video/banner.mp4" : "/video/banner2.mp4"} type="video/mp4" />
                        </video>
                </div>


                <div className='banner-content'>
                    <div className='banner__text'>
                        <img src="/img/logobl.webp" alt="colraices logo" />
                        <p className='banner__text-paragraf'>Es el momento de escoger tu vivienda ideal</p>
                    </div>
                    {screen.width >= 940 && <BarSearch />}
                </div>

            </div>
            {screen.width < 940 && <BarSearch />}
        </section>
    )
}
