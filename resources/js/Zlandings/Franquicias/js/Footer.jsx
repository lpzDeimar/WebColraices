import React from 'react'

export const Footer = () => {

    return (
        <div className='footer-main'>

            <footer>

                <section className='footer-title'>
                    <h4>Casa en Colombia con <span>Colraices</span></h4>
                </section>
                <section className='footer-nav'>
                    <nav>
                        <ul>
                            <li><a href='https://colraices.com/credito' target="_blank" rel="noreferrer">Crédito para comprar casa en Colombia</a></li>
                            <li><a href='https://colraices.com/leasing-habitacional' target="_blank" rel="noreferrer">Leasing Habitacional</a></li>
                            <li><a href='https://colraices.com/plan-de-ahorro' target="_blank" rel="noreferrer">¿Cómo hacer un plan de ahorro?</a></li>
                            <li><a href='https://proyectos.colraices.com/proyectosdeviviendaencolombiadesdeelexterior' target="_blank" rel="noreferrer">Portal inmobiliario - Vitrina Colombia</a></li>
                            <li><a href='https://colraices.com/blog' target="_blank" rel="noreferrer">El blog para colombianos en el exterior</a></li>
                            <li><a href='https://colraices.com/contacto' target="_blank" rel="noreferrer">Atención telefónica para compra de casa en Colombia desde el exterior</a></li>
                        </ul>
                    </nav>
                </section>
                <section className='footer-redes'>
                    <ul>
                        <li>Colraices - Oficina principal Bogotá, Colombia</li>
                        <li><a href="https://www.google.com/maps/search/Calle+100+#+13+-+41+Oficina:+102">Calle 100 # 13 - 41 Oficina: 102</a></li>
                        <li><a href="tel:+5713288939">Tel. (+57 1) 3288939</a></li>

                        <li className='redes'>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/colraices" target="_blank" >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/colraices" target="_blank" >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                <a href="https://www.linkedin.com/company/colraices/mycompany" target="_blank" >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/c/Colraicesserviciosinmobiliariosfinancieros" target="_blank" >
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={"https://api.whatsapp.com/send/?phone=+573105653998"} target="_blank" >
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>Política de privacidad</li>
                        <li>Mapa del sitio</li>
                        <li>{new Date().getFullYear()} <a href="https://momentumdigital.com.co/" target="_blank">Momentum</a> </li>
                    </ul>
                </section>

            </footer>
        </div>
    )
}
