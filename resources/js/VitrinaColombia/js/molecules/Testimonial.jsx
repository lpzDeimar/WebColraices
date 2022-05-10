import React from "react";
import { VscStarFull } from "react-icons/vsc";

export const Testimonial = ({ testimonial }) => {
    const { nombre, imagen, atributo, testimonio, ocupacion } = testimonial;
    return (
        <article className="t-card">
            <div className="header-card">
                <img src={imagen} alt="Foto cliente satisfecho" />
                <p>{atributo}</p>
                <span style={{ color: "#ffc662" }}>
                    <VscStarFull />
                    <VscStarFull />
                    <VscStarFull />
                    <VscStarFull />
                    <VscStarFull />
                </span>
            </div>
            <div className="body-card">
                <blockquote>{testimonio}</blockquote>
            </div>
            <div className="footer-card">
                <p>
                    {nombre}, <span>{ocupacion}</span>
                </p>
            </div>
        </article>
    );
};
