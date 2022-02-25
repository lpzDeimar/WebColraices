import React, {useState, useContext} from 'react';
import { ActiveContext } from './ActiveContext';
import toast, { Toaster } from 'react-hot-toast';

const scriptURL = 'https://script.google.com/macros/s/AKfycbypp_cISMN0sS2HtTk4x1zBBEPkzxLA4scNy9eboDT9OcjFp0V228K5upysOj9IoLZidA/exec'


export const Suscripcion =() => {
    const {activeModalBlog, activarModalBlog} = useContext(ActiveContext);

    const [formInfo, setFormInfo] = useState({nombre: '', correo: '', whatsapp: ''});

    const handleChange = e => {
        const {name, value} = e.target;
        setFormInfo(prevState => ({
            ...prevState, [name]: value
        }))
    }
    const sendData = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nombre', formInfo.nombre);
        formData.append('correo', formInfo.correo);
        formData.append('whatsapp', formInfo.whatsapp);

        fetch(scriptURL, {method: 'POST', body: formData})
            .then(response => {
                const r = response;
                activarModalBlog();
                if (r.status === 200) {
                    toast('!Te has suscrito a nuestro blog!', { icon: '📝'});
                }
            })
    }

    return (
        <div>
            <Toaster position='top-right'/>
            {activeModalBlog &&
            <article className='suscripcion-modal-main'>

                <section>
                    <div className="header-modal">
                        <h3>Suscríbete a nuestro boletín</h3>
                    </div>
                    <div className="line"></div>
                    <button onClick={activarModalBlog} className="cerrar">X</button>

                    <div className="contenido-modal">
                        <form onSubmit={sendData} className="form-suscripcion" action="">
                            <label>
                                Nombre
                                <input onChange={handleChange} type="text" name="nombre" placeholder="Nombre" autoComplete='off' required/>
                            </label>
                            <label>
                                Email
                                <input onChange={handleChange} type="email" name="correo" placeholder="Correo electrónico" autoComplete="off" required/>
                            </label>
                            <label>
                                WhatsApp
                                <input onChange={handleChange} type="text" name="whatsapp" placeholder="WhatsApp" autoComplete="off" required/>
                            </label>
                            <button type="submit">Suscribirme</button>
                        </form>
                    </div>
                </section>
            </article>
            }
        </div>

    )
}
