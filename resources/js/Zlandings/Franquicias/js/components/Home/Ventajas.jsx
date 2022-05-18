import React from 'react'

export const Ventajas = () => {
  return (
    <section className='Ventajas'>
        <div className='Ventajas__content'>
            <h4 className='Ventajas__content-title'>Ventajas <span>de ser un aliado</span> Colraices</h4>
            <p className='Ventajas__content-subtitle'>Invertir en un negocio probado y posicionado</p>
            <div>
                <ul>
                    <li>Alcanzar tu libertad económica. </li>
                    <li>Hacer crecer tus finanzas.</li>
                    <li>Manejar tu tiempo.</li>
                    <li>Generar riqueza y construir patrimonio.</li>
                    <li>Ser parte de un emprendimiento respaldado por reconocidas marcas colombianas.</li>
                </ul>
                <p>Sé un embajador Colraices desde donde estés.</p>
                <button type='button'>
                ¡Conviértete en aliado ahora!
                </button>
            </div>
        </div>
        <div className='Ventajas__img'>
            <img src="/img/ventajas.webp" alt="" />
        </div>
    </section>
  )
}
