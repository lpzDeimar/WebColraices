import React from "react";
import { GoogleMap, InfoBox, LoadScript, Marker } from "@react-google-maps/api";
import mapViewStyles from "../mapViewStyles";
import { VscCallIncoming, VscHome, VscMail } from "react-icons/vsc";
export const Mapa = () => {

    const mapStyles = {
        height: "60vh",
        minHeight: "38rem",
        maxHeight: "51rem",
        width: "100%",
    };
    const defaultCenter = {
        lat: 4.6838337,
        lng: -74.0467066,
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyBofVHM82g0vcJLSg-iUY4GONz4VvezvII">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}
                options={{ styles: mapViewStyles }}
            >
                <Marker position={defaultCenter} />
                <div className="mapa-info">
                    <div>
                        <p className="mapa__title">¿Como ponerme en contacto?</p>
                        <ul className="info-contacto">
                            <li>
                                <VscCallIncoming /> +57 310 565 3998
                            </li>
                            <li>
                                <VscMail /> administracion@colraices.com
                            </li>
                            <li>
                                <VscHome /> Ac. 100 ## 13 -41 Oficina 102, Bogotá
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mapa__title">Horario de atención</p>
                        <ul className="info-horario">
                            <li>
                                Lunes a Viernes <span>08:00AM - 05:30PM</span>
                            </li>
                            <li>
                                Sábado <span>08:00Am - 01:00PM</span>
                            </li>
                            <li>
                                Domingo <span>Cerrado</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </GoogleMap>
        </LoadScript>
    );
};
