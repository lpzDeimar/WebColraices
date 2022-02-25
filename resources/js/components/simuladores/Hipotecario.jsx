import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { plazosCredito, plazosInicial, formatoPeso } from "../../data/plazos";
import { ActiveContext } from "../ActiveContext";

const plazosI = plazosInicial;
const plazosC = plazosCredito;
const peso = formatoPeso;

export const Hipotecario = () => {
    const { apiW } = useContext(ActiveContext);

    const [number, setNumber] = useState({
        valorInmueble: "",
        cuotaInicial: 0,
        plazoCredito: "",
    });

    const [plazoInicial, setPlazoInicial] = useState("12");
    const [plazoFinal, setPlazoFinal] = useState("60");

    const [treitaPorCiento, setTreitaPorCiento] = useState();
    const [cuotaMensualInicial, setCuotaMensualInicial] = useState();

    useEffect(() => {
        const { valorInmueble, cuotaInicial } = number;
        setTreitaPorCiento(Number(valorInmueble) * 0.3);
        setCuotaMensualInicial(
            Math.ceil(Number(cuotaInicial) / Number(plazoInicial))
        );
    }, [number, plazoInicial]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNumber({ ...number, [name]: value });
    };
    const inicial = number.valorInmueble * 0.3;
    const valorFinanciar =
        number.valorInmueble - (number.cuotaInicial || treitaPorCiento);
    const cuotaMensulaCredito = Math.ceil(
        (valorFinanciar * (0.1025 / 12)) /
            (1 - (1 + 0.1025 / 12) ** -plazoFinal)
    );

    return (
        <>
            <section className="simulador-title">
                <p>Cuota hipotecario</p>
                <h4>
                    Calcula tu cuota <span>en tiempo real</span>
                </h4>
            </section>
            <section className="input-group">
                <div>
                    <label>Valor inmueble</label>
                    <input
                        type="number"
                        onChange={handleChange}
                        name="valorInmueble"
                        value={number.valorInmueble}
                        placeholder={peso.format(466000000)}
                    />
                </div>
            </section>

            <section className="input-group">
                <div>
                    <label>Cuota inicial</label>
                    <div className="range">
                        <input
                            type="range"
                            step={1000000}
                            min={treitaPorCiento}
                            max={number.valorInmueble}
                            onChange={handleChange}
                            name="cuotaInicial"
                            value={number.cuotaInicial}
                            placeholder=""
                        />
                        {number.cuotaInicial == "" ? (
                            <p>{peso.format(inicial)}</p>
                        ) : (
                            <p>{peso.format(number.cuotaInicial)}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label>Plazo cuota inicial</label>
                    <select
                        value={plazoInicial}
                        onChange={(e) => {
                            const selectedPlazoInicial = e.target.value;
                            setPlazoInicial(selectedPlazoInicial);
                        }}
                    >
                        {plazosI.map((plazo) => (
                            <option key={plazo.id} value={plazo.id}>
                                {plazo.name}
                            </option>
                        ))}
                    </select>
                </div>
                <section>
                    <p>Valor cuota mensual</p>{" "}
                    <span>{peso.format(cuotaMensualInicial || 0)}</span>
                </section>
            </section>

            <section className="input-group">
                <div>
                    <label>Valor a financiar</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={peso.format(valorFinanciar)}
                    />
                </div>
                <div>
                    <label>Plazo</label>
                    <select
                        value={plazoFinal}
                        onChange={(e) => {
                            const selectedPlazoFinal = e.target.value;
                            setPlazoFinal(selectedPlazoFinal);
                        }}
                    >
                        {plazosC.map((plazo) => (
                            <option key={plazo.id} value={plazo.id}>
                                {plazo.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Amortización</label>
                    <input type="text" defaultValue="Fija en pesos" disabled />
                </div>
                <section className="resultado">
                    <p>Valor cuota mensual</p>{" "}
                    <span>{peso.format(cuotaMensulaCredito || 0)}</span>
                </section>
            </section>

            <div className="botones">
                <button onClick={apiW}>¡Solicita tu crédito!</button>
                <Link to="/leasing-habitacional">
                    Financia aquí hasta un 80%
                </Link>
            </div>
        </>
    );
};
