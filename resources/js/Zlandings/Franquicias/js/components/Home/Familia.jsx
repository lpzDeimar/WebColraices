import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const Familia = () => {


    const scriptURL = 'https://script.google.com/macros/s/AKfycbytoKcUFtW8YODErGc6oCcVgYNFUxxNfB1mT-fRtQWM9ASnZgdH3XEISc1Ll34tKIJy/exec';


    const sendData = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nombre", e.target.nombre.value);
        formData.append("email", e.target.email.value);
        formData.append("telefono", e.target.telefono.value);
        formData.append("pais", e.target.pais.value);
        formData.append("fecha", new Date().toLocaleString());
        formData.append("tipo", "contacto");

        fetch(scriptURL, { method: "POST", body: formData }).then(
            (response) => {
                const r = response;
                if (r.status === 200) {
                    toast('!Hemos recibido tu mensaje! ',
                        {
                            duration: 4000,
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                            icon: '👏',
                        }
                    );
                    e.target.reset();
                }
            }
        );

    }



    return (
        <section className='Familia'>
            <Toaster
                containerStyle={{ zIndex: 10000000 }}
                position="top-right"
            />

            <div className='Familia__content'>
                <h5 className='Familia__title'>Sé parte de la familia Colraices, <span>minimiza riesgos y evoluciona</span></h5>

                <div className='Familia__box'>

                    <div className='Familia__box--text'>
                        <h6 className='Familia__box--title'>¡Únete ya a las <span>franquicias Colraices!</span></h6>
                        <div className='line'></div>
                    </div>

                    <div className='Familia__box--form'>
                        <img src="https://col.colraices.com/img/colraices.webp" alt="Colraices" />
                        <form onSubmit={sendData}>
                            <input type="text" name='nombre' placeholder='Nombre:' />
                            <input type="email" name='email' placeholder='E-mail:' />
                            <input type="tel" name='telefono' placeholder='Telefono: +57 321 231 1232' />
                            <input type="text" name='pais' placeholder='País de residencia:' />
                            <button type='submit'>Enviar</button>
                        </form>
                    </div>

                </div>
            </div>

        </section>
    )
}
