import React from "react";

export const Banner = () => {
    return (
        <section className="banner-leasing">
            <article
                className="banner-leasing-text"
                data-aos="fade-up"
                data-aos-duration="1100"
            >
                <h1>
                    <span>Leasing habitacional</span> para comprar casa{" "}
                    <span>en Colombia</span>
                </h1>

                <div className="banner-leasing-content">
                    <p>
                        Con el leasing habitacional puedes comprar tu casa con
                        el arriendo que pagas mes a mes y accedes a cuotas más
                        bajas que las de un un crédito hipotecario.
                    </p>
                </div>
            </article>
            <section className="banner-leasing-img">
                <img src="./img/leasing/lea1.webp" alt="Leasing habitacional para comprar casa en Colombia" />
            </section>
        </section>
    );
};
