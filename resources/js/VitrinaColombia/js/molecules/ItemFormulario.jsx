import React, { useRef, useState } from 'react';
import { ImWhatsapp } from "react-icons/im";
import { IoCallSharp } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';

export const ItemFormulario = () => {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzL-JGydP4j-mM1qQev56Zd8pvRdOPT_bxE6J63CHv2n38aMjxErHwyQfTZuIpf4Ls8JQ/exec';

    const [menssage, setMenssage] = useState('');
    const men = useRef(null);

    const handleMessage = () => {
        setMenssage(men.current.value);
    }

    const sendData = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nombre", e.target.nombre.value);
        formData.append("email", e.target.email.value);
        formData.append("telefono", e.target.telefono.value);
        formData.append("pais", e.target.pais.value);
        formData.append("mensaje", e.target.mensaje.value);
        formData.append("fecha", new Date().toLocaleString());
        formData.append("tipo", "contacto");

        fetch(scriptURL, { method: "POST", body: formData }).then(
            (response) => {
                const r = response;
                if (r.status === 200) {
                    toast('!Hemos recibido tu solicitud! ',
                        {
                            duration: 4000,
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                            icon: '🏠👏',
                        }
                    );
                    e.target.reset();
                }
            }
        );

    }



    return (
        <section className='itemFormulario'>
            <Toaster
                containerStyle={{ zIndex: 10000000 }}
                position="top-right"
            />
            <form onSubmit={sendData}>
                <fieldset className='itemFormulario__form'>

                    <legend>Tienes una duda?</legend>
                    <input className='itemFormulario__input' name='nombre' type="text" placeholder='Nombre' required/>
                    <input className='itemFormulario__input' name='email' type="email" placeholder='Correo' required/>
                    <input className='itemFormulario__input' name='telefono' type="tel" placeholder='+57 321 123 3213' required/>
                    <input className='itemFormulario__input' name='pais' type="text" placeholder='Pais en el que reside' required/>

                    <textarea className='itemFormulario__textarea' name='mensaje' onChange={handleMessage} ref={men}
                        cols="30" rows="6" placeholder='Deja tu mensaje y un asesor te ayudará'>
                    </textarea>

                    <button type='submit' className='itemFormulario__button'>Enviar</button>

                    <div className='itemFormulario__cta'>

                        <button onClick={() => {
                            window.open('tel:876 8876 8766'), '_blank'
                        }} type='button' className='itemFormulario__button'><IoCallSharp /> Llamar</button>

                        <button type='button' onClick={() => {
                            window.open(`https://api.whatsapp.com/send?phone=+573186915160&text=Hola,%20quiero%20una%20consulta%20sobre%20el%20inmueble%20 ${menssage}`, '_blank');
                        }}
                            className='itemFormulario__button'><ImWhatsapp /> WhatsApp</button>

                    </div>

                </fieldset>
            </form>
        </section>
    )
}
