import React from 'react'

let likeDi = 1;

export const handelLike = (inmueble) => {

    if (likeDi < 10) {

        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

        const setLike = async () => {
            const resp = await fetch(`https://vc.colraices.com/api/v1/properties/${inmueble.slug}?like=1`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        }

        if (!favoritos.map(inm => inm?.slug).includes(inmueble.slug)) {
            const newFavoritos = [...favoritos, inmueble];
            localStorage.setItem('favoritos', JSON.stringify(newFavoritos));
            setLike();
            likeDi++;
        }


    }
}

export const handelDelete = (inmueble) => {

    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if(favoritos.map(inm => inm?.slug).includes(inmueble.slug)){
        const newFavoritos = favoritos.filter(inm => inm.slug !== inmueble.slug);
        localStorage.setItem('favoritos', JSON.stringify(newFavoritos));
    }

}

