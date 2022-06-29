import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ActiveContext } from './ActiveContext'
import { AiFillFacebook,AiFillInstagram,AiFillLinkedin,AiFillYoutube,AiOutlineWhatsApp } from "react-icons/ai";

export const Footer = () => {

    const {contr} = useContext(ActiveContext);

    return (
        <div className='footer-main'>

            <footer>

                <section className='footer-title'>
                    <h4>Casa en Colombia con <span>Colraices</span></h4>
                </section>
                <section className='footer-nav'>
                    <nav>
                        <ul>
                            <li><Link to="credito">Crédito para comprar casa en Colombia</Link></li>
                            <li><Link to="leasing-habitacional">Leasing Habitacional</Link></li>
                            <li><Link to="plan-de-ahorro">¿Cómo hacer un plan de ahorro?</Link></li>
                            <li><a href="vitrina-colombia" target="_blank">Portal inmobiliario - Vitrina Colombia</a></li>
                            <li><Link to="derechos">Politicas de seguridad y tratamiento de datos</Link></li>
                            <li><Link to="blog">El blog para colombianos en el exterior</Link></li>
                            <li><a href="">Atención telefónica para compra de casa en Colombia desde el exterior</a></li>
                        </ul>
                    </nav>
                </section>
                <section className='footer-redes'>
                    <ul>
                        <li>Colraices - {contr.oficine}</li>
                        <li><a href="">{contr.location}</a></li>
                        <li><a href={"tel:"+contr.anumber}>Tel.  {contr.number}</a></li>

                        <li className='redes'>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/colraices" target="_blank" >
                                        <i><AiFillFacebook/></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/colraices" target="_blank" >
                                        <i><AiFillInstagram/></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/colraices/mycompany" target="_blank" >
                                        <i><AiFillLinkedin/></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/c/Colraicesserviciosinmobiliariosfinancieros" target="_blank" >
                                        <i><AiFillYoutube/></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={"https://api.whatsapp.com/send/?phone="+contr.anumber} target="_blank" >
                                        <i><AiOutlineWhatsApp/></i>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li><Link to="derechos">Política de privacidad</Link></li>
                        <li>Mapa del sitio</li>
                        <li>{new Date().getFullYear()} <a href="https://momentumdigital.com.co/" target="_blank">Momentum</a> </li>
                    </ul>
                </section>

            </footer>
        </div>
    )
}
