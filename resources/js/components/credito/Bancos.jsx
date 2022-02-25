import React from 'react';

export const Bancos = () => {
    return (
        <section className='bancos-main'>
            <section className="bancos-container">
                <h3>Contamos con los mejores <span>bancos de Colombia</span></h3>
                <section className="bancos-aliados">
                    <img src="./img/entidades/davivienda.webp" alt="casa en colombia con davivienda" />
                    <img src="./img/entidades/bbva.webp" alt="casa en colombia con bbva" />
                    <img src="./img/entidades/bancolombia.webp" alt="casa en colombia con bancolombia" />
                    <img src="./img/entidades/girosyfinanzas.webp" alt="casa en colombia con giros y finanzas" />
                </section>
            </section>
            <section className="bancos-content">
                <div className="content-requisitos">
                    <h4>Requisitos generales</h4>
                    <div className='line'></div>
                    <ul>
                        <li>Ser colombiano residente en el exterior o extranjero con relación de primer grado con un colombiano.</li>
                        <li>Tener entre 18 y 74 años.</li>
                        <li>Tener ingresos demostrables en el exterior.</li>
                        <li>Contar con la capacidad de pago de la cuota de tu crédito.</li>
                    </ul>
                    <p>¿No cumples todos los requisitos?</p>
                    <span>No te preocupes</span>
                    {/* <button>Nosotros te guiaremos para encontrar tu mejor opción</button> */}
                    <button>Encuentra tu mejor opción</button>
                </div>

                <div className="content-beneficios">
                    <h4><span>Beneficios</span></h4>
                    <div className='line'></div>
                    <ul>
                        <li>Te beneficias con la tasa de cambio porque la cuota de tu crédito será en pesos colombianos.</li>
                        <li>Tienes la opción de tomar un plazo máximo de hasta de 30 años, pero siempre podrás prepagar tu crédito parcial o totalmente sin penalidades.</li>
                        <li>Si tienes la disponibilidad, podrás hacer abonos a capital y reducir tu cuota o el plazo del crédito.</li>
                        <li>Desde el exterior, puedes aplicar a los subsidios del gobierno, para comprar casa o para reducir la cuota de tu crédito, que se ajusten a tu situación.</li>
                    </ul>
                    <button>Conoce más beneficios</button>
                </div>
            </section>
        </section>
    )
}
