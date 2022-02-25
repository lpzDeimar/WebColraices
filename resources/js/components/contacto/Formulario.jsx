import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const scriptURL =
    "https://script.google.com/macros/s/AKfycbx57y419piaWgHTOiCAKMvPD-3xVOqsbHmx0bi7Zfoa_yPVquxlwMmwNkIZhxSlY7wyAg/exec";

export const Formulario = () => {
    const [contactoInfo, setContactoInfo] = useState({
        nombre: "",
        correo: "",
        whatsapp: "",
        mensaje: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setContactoInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    console.log(contactoInfo);
    const sendData = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nombre", contactoInfo.nombre);
        formData.append("correo", contactoInfo.correo);
        formData.append("whatsapp", contactoInfo.whatsapp);
        formData.append("mensaje", contactoInfo.mensaje);

        fetch(scriptURL, { method: "POST", body: formData }).then(
            (response) => {
                const r = response;
                if (r.status === 200) {
                    toast("!Hemos recibido tu solicitud!", { icon: "🏠" });
                    e.target.reset();
                }
            }
        );
    };

    return (
        <section className="contact-main" data-aos="fade-up" data-aos-duration="1120" >
            <Toaster
                containerStyle={{ zIndex: 10000000 }}
                position="top-right"
            />
            <h1>
                 Háblemos
                <span>Un experto se pondrá en contacto </span>
            </h1>
            <article className="formulario-contacto-main">
                <section className="contacto-numeros">
                    <h2>Información adicional de contacto</h2>
                    <div>
                        <p>
                            Visitanos en cualquiera de nuestras redes sociales
                        </p>
                        <ul>
                            <li>
                                <a
                                    href="https://facebook.com/colraices"
                                    target="_blank"
                                    title="Facebook"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/colraices"
                                    target="_blank"
                                    title="Instagram"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://www.linkedin.com/company/colraices"
                                    target="_blank"
                                    title="LinkedIn"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>Escribenos a nuestra línea directa de WhatsApp</p>
                        <a
                            href="https://api.whatsapp.com/send/?phone=+573105653998"
                            target="_blank"
                            title="WhatsApp"
                        >
                            <i className="fab fa-whatsapp"></i> +57 310 565 3998
                        </a>
                    </div>
                    <div>
                        <p>
                            Escribenos a nuestra dirección de correo electrónico
                        </p>
                        <a
                            href="mailto:info@colraices.com"
                            target="_blank"
                            title="Correo electrónico"
                        >
                            info@colraices.com
                        </a>
                    </div>
                    <div>
                        <p>Países en los que está Colraices</p>
                        <span>Colombia - España - EEUU - Reino Unido</span>
                    </div>
                </section>
                <section className="formulario">
                    <h2>Ponerme en contacto</h2>
                    <form onSubmit={sendData}>
                        <label>
                            <span>Tu nombre</span>
                            <input
                                type="text"
                                name="nombre"
                                onChange={handleInput}
                                placeholder="Nombre completo"
                                required
                                autoComplete="off"
                            />
                        </label>
                        <label>
                            <span>Correo electrónico</span>
                            <input
                                type="email"
                                name="correo"
                                onChange={handleInput}
                                placeholder="correo@correo.com"
                                required
                                autoComplete="off"
                            />
                        </label>
                        <label>
                            <span>WhatsApp</span>
                            <input
                                type="text"
                                name="whatsapp"
                                onChange={handleInput}
                                placeholder="Tu numero de contacto"
                                required
                                autoComplete="off"
                            />
                        </label>
                        <label>
                            <span>Solicitud</span>
                            <textarea
                                name="mensaje"
                                onChange={handleInput}
                                placeholder="Escribe aquí tu solicitud..."
                                required
                                autoComplete="off"
                            ></textarea>
                        </label>

                        <button type="submit">Envíanos tu solicitud</button>
                    </form>
                </section>
            </article>
        </section>
    );
};
