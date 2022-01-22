import React from "react";
import { useSelector } from 'react-redux';
import WeatherCard from "./WeatherCard";
import { Routes, Route } from 'react-router-dom';

const MainPart = () => {


    const localTime = useSelector(state => state.weather.data.location.localtime)
    let todayForecast = useSelector(state => state.weather.data.forecast.forecastday["0"].hour);
    todayForecast = todayForecast.filter(hour => Date.parse(hour.time) > Date.parse(localTime))
    const degrees = useSelector(state => state.weather.degrees);

    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    const DateInHours = (date) => {
        return date.substr(-5);
    }

    const rightDegrees = (tempC, tempF) => {
        return (degrees === "°C") ? `${tempC}°` : `${tempF}°`;
    }

    return (
        <div className="main-part">
            <Routes>
                <Route path="/" element={<div className="cards-row">
                    {todayForecast.map(hour => <WeatherCard key={hour.time_epoch} title={DateInHours(hour.time)} img={hour.condition.icon} maxTemp={rightDegrees(hour.temp_c, hour.temp_f)} minTemp={""} />)}
                </div>} />
                <Route path="/3_days" element={<div className="cards-row"></div>} />
            </Routes>
        </div>

    )
}

export default MainPart;
