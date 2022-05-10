import React from 'react';
import { GiElevator, GiPoliceOfficerHead, GiWashingMachine, GiTreeSwing, GiDesk } from "react-icons/gi";
import { FaPaintRoller, FaSwimmingPool } from "react-icons/fa";
import { BiBuildingHouse, BiChair } from "react-icons/bi";
import { BsBicycle } from "react-icons/bs";
import { MdPark, MdBalcony, MdElectricalServices } from "react-icons/md";

export const AtributInmueble = ({ pro_ser }) => {

    const createMarkup = (element) => {
        return { __html: element };
    }
    return (
        <article className='atributosInmueble'>
            <p className='atributosInmueble__titel'>Atributos</p>
            <div className='atributosInmueble__icon'>
                {pro_ser.map(product => (
                    product.icon !== null &&
                    <div className='atributosInmueble__icon__item' key={product.id}>
                        {product.icon === "<GiElevator/>" && <><i><GiElevator /></i> <p>{product.attribute_name}</p> </>}
                        {product.icon === "<GiPoliceOfficerHead/>" && <><i><GiPoliceOfficerHead /></i> <p>{product.attribute_name}</p> </>}
                        {product.icon === "<GiWashingMachine/>" && <><i><GiWashingMachine /></i> <p>{product.attribute_name}</p> </>}
                        {product.icon === "<GiTreeSwing/>" && <><i><GiTreeSwing /></i> <p>{product.attribute_name}</p> </>}
                        {product.icon === "<GiDesk/>" && <><i><GiDesk /></i> <p>{product.attribute_name}</p> </>}
                        {product.icon === "<FaPaintRoller/>" && <><i><FaPaintRoller /></i> <p>{product.attribute_name}</p> </>}
                        {product.icon === "<FaSwimmingPool/>" && <><i><FaSwimmingPool /></i> <p>{product.attribute_name}</p> </>}
                        {product.icon === "<BiBuildingHouse/>" && <><i><BiBuildingHouse /></i> <p>{product.attribute_name}</p> </>}
                        {product.icon === "<BiChair/>" && <><i><BiChair /></i> <p>{product.attribute_name}</p> </>}
                        {product.icon === "<BsBicycle/>" && <><i><BsBicycle /></i> <p>{product.attribute_name}</p> </>}
                        {product.icon === "<MdPark/>" && <><i><MdPark /></i> <p>{product.attribute_name}</p> </>}
                        {product.icon === "<MdBalcony/>" && <><i><MdBalcony /></i> <p>{product.attribute_name}</p> </>}
                        {product.icon === "<MdElectricalServices/>" && <><i><MdElectricalServices /></i> <p>{product.attribute_name}</p> </>}
                    </div>
                ))}
            </div>
            <div className='atributosInmueble__icon--no'>
                {pro_ser.map(product => (
                    product.icon === null &&
                    <div className='atributosInmueble__icon__item' key={product.id}>
                            <p>{product.attribute_name}</p>
                    </div>
                ))}
            </div>
        </article>
    )
}
