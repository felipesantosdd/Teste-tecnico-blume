import { api } from "./api";

export async function weatherForecastRequest(cidade) {
    const key = '834c78e7ec2e61f04ac39ff0e151245a';

    console.log('ola');
    const response = await api.get(`weather?q=${cidade}&units=metric&appid=${key}&lang=pt_br`);

    return response;
}
