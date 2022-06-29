import React, { useState, useContext } from "react";
import { ActiveContext } from "./ActiveContext";
import toast, { Toaster } from "react-hot-toast";

const scriptURL =
    "https://script.google.com/macros/s/AKfycbwCSjbT3hQ3iaSLr8VWo0I60Te98xQEdpGr2iVQmhfpytsQv8v47KkEIKITxSnwI8FACA/exec";

export const MiVivienda = () => {
    const { activeModalVivienda, activarModalVivienda } =
        useContext(ActiveContext);

    const [formInfo, setFormInfo] = useState({
        nombre: "",
        correo: "",
        whatsapp: "",
        tipo: "",
        clima: "",
        residente: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const sendData = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nombre", `${formInfo.nombre} ${formInfo.apellido}`);
        formData.append("correo", formInfo.correo);
        formData.append("whatsapp", formInfo.whatsapp);
        formData.append("tipo", formInfo.tipo);
        formData.append("clima", formInfo.clima);
        formData.append("residente", formInfo.residente);

        fetch(scriptURL, { method: "POST", body: formData }).then(
            (response) => {
                const r = response;
                activarModalVivienda();
                if (r.status === 200) {
                    toast("!Hemos recibido tu respuesta!", { icon: "🏠" });
                }
            }
        );
    };

    return (
        <div>
            <Toaster position="top-right" />
            {activeModalVivienda && (
                <article className="vivienda-modal-main">
                    <div className="header-modal-vivienda">
                        <h3 className="vivienda-modal-title">
                            ¡Así quiero mi casa <span>en Colombia!</span>
                        </h3>
                        <button
                            onClick={activarModalVivienda}
                            className="cerrar"
                        >
                            X
                        </button>
                    </div>

                    <section>
                        <div className="contenido-modal">
                            <form
                                onSubmit={sendData}
                                className="form-vivienda"
                                action=""
                            >
                                <label className="info-contacto">
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="nombre"
                                        placeholder="Nombre"
                                        autoComplete="off"
                                        required
                                    />
                                </label>
                                <label className="info-contacto">
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="apellido"
                                        placeholder="Apellido"
                                        autoComplete="off"
                                        required
                                    />
                                </label>
                                <label className="info-contacto">
                                    <input
                                        onChange={handleChange}
                                        type="email"
                                        name="correo"
                                        placeholder="Correo electrónico"
                                        autoComplete="off"
                                        required
                                    />
                                </label>
                                <label className="info-contacto">
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="whatsapp"
                                        placeholder="WhatsApp +57 321 123 4567"
                                        autoComplete="off"
                                        required
                                    />
                                </label>
                                <fieldset>
                                    <legend>
                                        ¿Quieres una casa o un apartamento?
                                    </legend>
                                    <div>
                                        <label>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                name="tipo"
                                                required
                                                value="Casa"
                                            />{" "}
                                            Casa
                                        </label>
                                        <label>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                name="tipo"
                                                required
                                                value="Apartamento"
                                            />
                                            Apartamento
                                        </label>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>
                                        ¿Te gusta la tierra caliente en Colombia
                                        o prefieres el clima frío de lugares
                                        como Boyacá y Bogotá?
                                    </legend>
                                    <div>
                                        <label>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                name="clima"
                                                required
                                                value="Caliente"
                                            />
                                            Caliente
                                        </label>
                                        <label>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                name="clima"
                                                required
                                                value="Frío"
                                            />
                                            Frío
                                        </label>
                                        <label>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                name="clima"
                                                required
                                                value="Templado"
                                            />
                                            Templado
                                        </label>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>
                                        ¿Vivirías tú o un familiar en el
                                        inmueble o lo pondrías en arriendo?
                                    </legend>
                                    <div>
                                        <label>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                name="residente"
                                                required
                                                value="Arriendo"
                                            />
                                            Arriendo
                                        </label>
                                        <label>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                name="residente"
                                                required
                                                value="Yo"
                                            />
                                            Yo
                                        </label>
                                        <label>
                                            <input
                                                onChange={handleChange}
                                                type="radio"
                                                name="residente"
                                                required
                                                value="Familiar"
                                            />
                                            Familiar
                                        </label>
                                    </div>
                                </fieldset>
                                <button type="submit">
                                    Envíanos tus respuestas
                                </button>
                            </form>
                        </div>
                    </section>
                </article>
            )}
        </div>
    );
};
