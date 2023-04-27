import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Context } from '../../Provider';
import { BackSideStyle, CardStyle, ContainerStyle, FrontSideStyle, InnerCardStyle, TitleStyle } from './index.styled';

export const WeatherCard = ({ date, icon, temperature, description }) => {

    const { city } = useContext(Context)

    const dataAtual = new Date();
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0'); const ano = dataAtual.getFullYear();

    return (
        <div>
            {city?.name && (
                <ContainerStyle>
                    <div style={{ width: '100%' }}>
                        <TitleStyle>{city.name} - {city.sys.country}</TitleStyle>
                        <span>{dia}/{mes}/{ano}</span>
                    </div>

                    <CardStyle>
                        <h3>Temperatura<br />{city.main.temp} °C</h3>
                    </CardStyle>
                    <CardStyle>
                        <h3>Sensação Térmica<br />{city.main.feels_like} °C</h3>
                    </CardStyle>
                    <CardStyle>
                        <h3>Velocidade do Vento<br />{city.wind.speed} km/h</h3>
                    </CardStyle>
                    <CardStyle>
                        <h3>{city.weather[0].description}</h3>
                        <img src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} alt="Icone" />
                    </CardStyle>
                </ContainerStyle>
            )}
        </div>
    );
};
