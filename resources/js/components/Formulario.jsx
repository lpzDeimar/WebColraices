import React, { useState, useContext } from "react";
import { ActiveContext } from "./ActiveContext";
import toast, { Toaster } from "react-hot-toast";

const scriptURL =
    "https://script.google.com/macros/s/AKfycbx57y419piaWgHTOiCAKMvPD-3xVOqsbHmx0bi7Zfoa_yPVquxlwMmwNkIZhxSlY7wyAg/exec";
export const Formulario = () => {
    const { activeModalForm, activarModalForm } = useContext(ActiveContext);
    const [contactoInfo, setContactoInfo] = useState({
        nombre: "",
        correo: "",
        whatsapp: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactoInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

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
                activarModalForm();
                if (r.status === 200) {
                    toast("!Hemos recibido tu solicitud!", { icon: "🏠" });
                    e.target.reset();
                    console.log(r.status);
                }
            }
        );
    };

    return (
        <div>
            <Toaster
                containerStyle={{ zIndex: 10000000 }}
                position="top-right"
            />
            {activeModalForm && (
                <article className="formulario-modal-main">
                    <div className="header-modal-formulario">
                        <h3 className="formulario-modal-title">
                            ¡Un asesor se pondrá
                            <span> en contacto contigo!</span>
                        </h3>
                        <button onClick={activarModalForm} className="cerrar">
                            X
                        </button>
                    </div>

                    <section>
                        <div className="contenido-modal">
                            <form
                                onSubmit={sendData}
                                className="form-formulario"
                                action=""
                            >
                                <label className="info-contacto">
                                    <span>Nombre completo</span>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="nombre"
                                        placeholder="¿Cúal es tu nombre?"
                                        autoComplete="off"
                                        required
                                    />
                                </label>
                                <label className="info-contacto">
                                    <span>Correo electrónico</span>
                                    <input
                                        onChange={handleChange}
                                        type="email"
                                        name="correo"
                                        placeholder="Indicanos tu correo"
                                        autoComplete="off"
                                        required
                                    />
                                </label>
                                <label className="info-contacto">
                                    <span>WhatsApp</span>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="whatsapp"
                                        placeholder="+ 57 300 565 3890"
                                        autoComplete="off"
                                        required
                                    />
                                </label>
                                <label className="info-contacto">
                                    <span>Mensaje</span>
                                    <textarea
                                        onChange={handleChange}
                                        name="mensaje"
                                        placeholder="Cuentanos como podemos asesorarte..."
                                        autoComplete="off"
                                        required
                                    ></textarea>
                                </label>

                                <button type="submit">Contactar asesor</button>
                            </form>
                        </div>
                    </section>
                </article>
            )}
        </div>
    );
};
