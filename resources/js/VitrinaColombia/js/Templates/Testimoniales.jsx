import React from "react";
import { TitleSection } from "../components/TitleSection";
import { Testimonial } from "../molecules/Testimonial";
import { testimonios } from "../testimoniales";

export const Testimoniales = () => {
    const testimoniales = testimonios;

    return (
        <section className="testimoniales">
            <TitleSection title={"Experiencias"}>
            Estamos para apoyarte a que logres tu objetivo, invirtiendo de la forma más confiable y segura en tu futuro, en tu patrimonio familiar.
            </TitleSection>
            <section className="testimoniales-cards">
                {testimoniales.map((testimonial) => (
                    <Testimonial
                        key={testimonial.id}
                        testimonial={testimonial}
                    />
                ))}
            </section>
        </section>
    );
};
