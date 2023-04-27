import { createContext, useState } from "react";
import { weatherForecastRequest } from "../Services/get";

export const Context = createContext({})


export function Provider({ children }) {


    const [city, setCity] = useState({})

    async function getWeatherForecast(city) {
        try {
            const response = await weatherForecastRequest(city)
            const icon = response.data.weather[0].icon
            console.log(response.data)
            setCity(response.data)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <Context.Provider value={{
            city,
            getWeatherForecast
        }}>{children}</Context.Provider>
    )
}
