import React, { useContext } from "react";
import { ActiveContext } from "../ActiveContext";
import { Suscripcion } from "../Suscripcion";

export const Inde = () => {
    const { activarModalBlog } = useContext(ActiveContext);

    return (
        <>
            <section className="inde-main">
                <button onClick={() => activarModalBlog()}>
                    ¡Suscríbete al newsletter!
                </button>
                <section className="inde-content">
                    <ul>
                        <li>
                            <a href="#articulos">Artículos</a>
                        </li>
                        <li>
                            <a href="#videos">Videos</a>
                        </li>
                        <li>
                            <a href="#">Infografía</a>
                        </li>
                        <li>
                            <a href="#">Podcast</a>
                        </li>
                    </ul>
                </section>
            </section>
            <Suscripcion />
        </>
    );
};
