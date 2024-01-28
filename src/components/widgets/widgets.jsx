import { useState, useEffect } from "react";
import s from "./widgets.module.css";

function Widget() {

    const [date, setDate] = useState(new Date());
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const updateDate = () => {
            setDate(new Date(), 1000);
        };
        const timer = setInterval(updateDate, 1000 * 60);

        const cleanUp = () => {
            clearInterval(timer);
        }
        return cleanUp;
    }, []);

    useEffect(() => {
        const getWeatherData = async (locationData) => {
            const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY; // Accessing the environment variable
            console.log(`${apiKey}, ${locationData.coords.latitude}, ${locationData.coords.longitude}`);
            const respose = await fetch(`https://api.weatherapi.com/v1/current.json?key=23b426e03b054d299ef181419242701&q=colombo&aqi=no
            `); // API Key must be included in the  URL, but it gives an error when I include it
            const data = await respose.json();
            console.log(data);
            setWeatherData(data);
        };
        const coords = navigator.geolocation.getCurrentPosition(getWeatherData);
    }, []);

    return (
        <div>
            <h1 className={s.widget_timer}>
                {date.getHours() + ":" + date.getMinutes()}
            </h1>
            <h4 className={s.widget_date}>{date.toDateString()}</h4>
            <div className={s.widget_weather}>
                <p className={s.widget_weather_temp}>Temperature</p>
                {/* Adding the values manually since the api expires in 3 days */}
                <p className={s.widget_weather_temp}>{!weatherData ? "29" : weatherData.current.temp_c}</p>
                <p className={s.widget_weather_humidity}>Humidity</p>
                <p className={s.widget_weather_humidity}>{!weatherData ? "70" : weatherData.current.humidity}</p>
            </div>
        </div>
    );
}
export default Widget;