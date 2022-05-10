import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Like } from '../Context/Like';
import { BarBig } from './BarSearch/BarBig';
import { BarSmall } from './BarSearch/BarSmall';



export const BarSearch = React.memo(() => {

    const [filter, setFilter] = useState(false);
    const [filterCl, setFilterCl] = useState(false);

    const handleFilters = () => {
        setFilter(!filter);
    }

    const navigate = useNavigate ();

    const setData = (e) => {

        e.preventDefault();

        const precio = e.target.precio.value || '120000000-900000000';
        const city = e.target.city.value || '0';
        const rooms = e.target.rooms.value || '0';
        const baths = e.target.baths.value || '0';
        const area = e.target.area.value || '0';

        navigate(`/precio=${precio}&city=${city}&rooms=${rooms}&baths=${baths}&area=${area}`);

        setFilterCl(!filterCl);
        if (filter) {
            setFilter(!filter);
        }
    }

    const {ciudades} = useContext(Like)



    return (
        <div className={`barSearch`}>
            <form onSubmit={setData}>
                {screen.width >= 940
                    ?
                    <BarBig
                        ciudades={ciudades}
                        filter={filter}
                        handleFilters={handleFilters}
                    />
                    :
                    <BarSmall
                        ciudades={ciudades}
                        filterCl={filterCl}
                        setFilterCl={setFilterCl}
                    />
                }
            </form>
        </div>
    )
})
