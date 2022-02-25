import React from 'react';

export const Aliados = () => {
    return (
        <section className='aliados-main' >
            <section className="aliados-container">
                <h3>Contamos con los mejores <span>bancos de Colombia</span></h3>
                <section className="aliados-aliados">
                    <img src="./img/entidades/davivienda.webp" alt="casa en colombia con davivienda" />
                    <img src="./img/entidades/bbva.webp" alt="casa en colombia con bbva" />
                    <img src="./img/entidades/bancolombia.webp" alt="casa en colombia con bancolombia" />
                    <img src="./img/entidades/girosyfinanzas.webp" alt="casa en colombia con giros y finanzas" />
                </section>
            </section>
            <section className="aliados-content">
                <div className="content-aliados-beneficios" data-aos="fade-up" data-aos-duration="1000">
                    <h4>Beneficios</h4>
                    <hr />
                    <ul className="beneficios">
                        <li>Te beneficias con la tasa de cambio porque la cuota de tu crédito será en pesos colombianos.</li>
                        <li>Tienes la opción de tomar un plazo máximo de hasta de 30 años, pero siempre podrás prepagar tu crédito parcial o totalmente sin penalidades.</li>
                        <li>Si tienes la disponibilidad, podrás hacer abonos a capital y reducir tu canon o el plazo de término del leasing habitacional.</li>
                        <li>Desde el exterior, puedes aplicar a los subsidios del gobierno, para comprar casa o para reducir la cuota de tu crédito, que se ajusten a tu situación.</li>
                    </ul>
                </div>

                <div className="content-aliados-requisitos" data-aos="fade-up" data-aos-duration="1200">
                    <h4><span>Requisitos</span></h4>
                    <hr />
                    <ul className="requisitos">
                        <li>Ser colombiano residente en el exterior o extranjero con relación de primer grado con un colombiano.</li>
                        <li>Tener entre 18 y 74 años.</li>
                        <li>Tener ingresos demostrables en el exterior</li>
                        <li>Contar con la capacidad de pago de la cuota de tu crédito.</li>
                    </ul>
                </div>
            </section>
        </section>
    )
}
