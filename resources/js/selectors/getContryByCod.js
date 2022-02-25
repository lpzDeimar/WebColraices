import { contrykey } from '../data/contry'

export const getContryByCod = (cod) => {
    const data = contrykey.find(contry => contry.cod === cod);

    if (data) {
        return data;
    } else {
        const  datas = {
            'id': '0',
            'cod': 'DF',
            'contry': "el exterior",
            'colex': '4.700.000',
            'oficine': 'Oficina principal Bogotá, Colombia',
            'location': 'Calle 100 # 13 - 41 Oficina: 102',
            'number': '(+57 1) 3288939'
        }

        return datas
    }
}
