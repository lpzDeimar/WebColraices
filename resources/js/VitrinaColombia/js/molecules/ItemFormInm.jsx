import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Like } from '../Context/Like';
import Select from 'react-select';

const optionsPrecio = [
    { value: '120000000-170000000', label: '$100 millones - $120 millones' },
    { value: '120000000-170000000', label: '$120 millones - $170 millones' },
    { value: '170000000-220000000', label: '$170 millones - $220 millones' },
    { value: '220000000-270000000', label: '$220 millones - $270 millones' },
    { value: '270000000-320000000', label: '$270 millones - $320 millones' },
    { value: '320000000-370000000', label: '$320 millones - $370 millones' },
    { value: '370000000-420000000', label: '$370 millones - $420 millones' },
    { value: '420000000-470000000', label: '$420 millones - $470 millones' },
    { value: '470000000-520000000', label: '$470 millones - $520 millones' },
    { value: '520000000-1.000.000.000', label: '$520 millones - $570 millones' },
];

const optionsNumber = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' }
];

const optionsArea = [
    { value: '20', label: '20m² - 40m²' },
    { value: '40', label: '40m² - 60m²' },
    { value: '60', label: '60m² - 80m²' },
    { value: '80', label: '80m² - 100m²' },
    { value: '100', label: '100m² - 120m²' },
    { value: '120', label: '120m² - 140m²' },
    { value: '140', label: '140m² - 160m²' },
    { value: '160', label: '160m² - 180m²' },
    { value: '180', label: 'Más de 200m²' },
];


export const ItemFormInm = () => {

    const { ciudades } = useContext(Like);

    const navigate = useNavigate();

    const optionsCiudad = ciudades.map(city => ({ value: city?.id, label: city?.nombre_ciudad }))

    optionsCiudad.unshift({ value: '0', label: 'Colombia' })

    const setData = (e) => {

        e.preventDefault();

        const precio = e.target.precio.value || '120000000-900000000';
        const city = e.target.city.value || '0';
        const rooms = e.target.rooms.value || '2';
        const baths = e.target.baths.value || '1';
        const area = e.target.area.value || '0';

        navigate(`/precio=${precio}&city=${city}&rooms=${rooms}&baths=${baths}&area=${area}`);

    }


    return (
        <article className='itemFormInm'>
            <form onSubmit={setData} >
                <fieldset className='itemFormInm__content'>

                    <legend>Aplicar filtro</legend>

                    <Select
                        placeholder="Rango de precio"
                        name='precio'
                        defaultValue={'120000000-1000000000'}
                        options={optionsPrecio}
                    />

                    <Select
                        placeholder="Ciudad"
                        name='city'
                        defaultValue={'1'}
                        options={optionsCiudad}
                    />

                    <Select
                        placeholder="Num Habitaciones"
                        name='rooms'
                        defaultValue={'2'}
                        options={optionsNumber}
                    />

                    <Select
                        placeholder="Num Baños"
                        name='baths'
                        defaultValue={'1'}
                        options={optionsNumber}
                    />

                    <Select
                        placeholder="Área"
                        name='area'
                        defaultValue={'1'}
                        options={optionsArea}
                    />

                    <div className='itemFormInm__boton'>
                        <button type='submit' className='btn'>
                            Buscar
                        </button>
                    </div>

                </fieldset>
            </form>
        </article>
    )
}
