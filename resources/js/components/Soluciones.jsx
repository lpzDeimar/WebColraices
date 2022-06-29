import React from 'react';
import { Link } from 'react-router-dom'


export const Soluciones = () => {
    return (
        <section className="soluciones-main">
            <h3>!Tenemos más <span>soluciones para ti!</span></h3>

            <section className='soluciones-contenedor'>
                <div className="soluciones-item">
                    <figure>
                        <img src="img/soluciones/Credito.webp" alt="Crédito hipotecario" />
                    </figure>
                    <p>Crédito hipotecario</p>
                    <Link to="/credito">Clic aquí</Link>
                </div>
                <div className="soluciones-item">
                    <figure>
                        <img src="img/soluciones/Portal.webp" alt="Portal inmobiliario" />
                    </figure>
                    <p>Portal inmobiliario</p>
                    <a href="https://colraices.com/vitrina-colombia" target="_blank">Clic aquí</a>
                </div>
                <div className="soluciones-item">
                    <figure>
                        <img src="img/soluciones/Ahorro.webp" alt="Plan de ahorro" />
                    </figure>
                    <p>Plan de ahorro</p>
                    <Link to="/plan-de-ahorro">Clic aquí</Link>
                </div>
                <div className="soluciones-item">
                    <figure>
                        <img src="img/soluciones/Remodelar.webp" alt="Crédito para remodelar" />
                    </figure>
                    <p>Crédito para remodelar</p>
                    <Link to="/credito">Clic aquí</Link>
                </div>
                <div className="soluciones-item">
                    <figure>
                        <img src="img/soluciones/Credito-libre.webp" alt="Crédito libre inversión" />
                    </figure>
                    <p>Crédito libre inversión</p>
                    <Link to="/credito">Clic aquí</Link>
                </div>
                <div className="soluciones-item">
                    <figure>
                        <img src="img/soluciones/Blog.webp" alt="Leasing Habitacional" />
                    </figure>
                    <p>Leasing Habitacional</p>
                    <Link to="/leasing-habitacional">Clic aquí</Link>
                </div>
            </section>
        </section>
    )
}
