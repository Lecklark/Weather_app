import React from "react";

const WeatherCard = ({ title, img, maxTemp, minTemp }) => {

    return (
        <div className="weather-card">
            <div className="weather-card__title">{title}</div>
            <img className="weather-card__img" src={img} alt="Weather Icon" />
            <div className="weather-card__temps"><span>{maxTemp}</span><span>{minTemp}</span></div>
        </div>
    )
}

export default WeatherCard;
