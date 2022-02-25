export const plazosCredito = [
    { id: "60", name: "5 Años - 60 Meses" },
    { id: "72", name: "6 Años - 72 Meses" },
    { id: "84", name: "7 Años - 84 Meses" },
    { id: "96", name: "8 Años - 96 Meses" },
    { id: "108", name: "9 Años - 108 Meses" },
    { id: "120", name: "10 Años - 120 Meses" },
    { id: "132", name: "11 Años - 132 Meses" },
    { id: "144", name: "12 Años - 144 Meses" },
    { id: "156", name: "13 Años - 156 Meses" },
    { id: "168", name: "14 Años - 168 Meses" },
    { id: "180", name: "15 Años - 180 Meses" },
    { id: "192", name: "16 Años - 192 Meses" },
    { id: "204", name: "17 Años - 204 Meses" },
    { id: "216", name: "18 Años - 216 Meses" },
    { id: "228", name: "19 Años - 228 Meses" },
    { id: "240", name: "20 Años - 240 Meses" },
];

export const plazosInicial = [
    { id: "12", name: "1 Año - 12 Meses" },
    { id: "24", name: "2 Años - 24 Meses" },
    { id: "36", name: "3 Años - 36 Meses" },
];

export const formatoPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
});
