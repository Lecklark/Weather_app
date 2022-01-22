import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import searhIcon from "../assets/searchIcon.png"
import windIcon from "../assets/wind.png"
import { changeLocation } from './../redux/actions';

const CurrentWeather = () => {

    const dispatch = useDispatch();
    const [location, setLocation] = useState("")

    const saveLocation = () => {
        dispatch(changeLocation(location));
        setLocation("");
    }

    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    const data = useSelector(state => state.weather.data);
    const degrees = useSelector(state => state.weather.degrees);
    const date = new Date(data.location.localtime);

    return (
        <div className="main-left">
            <div className="header__search">
                <button onClick={saveLocation}><img src={searhIcon} alt="Searh Icon" /></button>
                <input type="text" value={location} placeholder="Search places" onChange={(e) => setLocation(e.target.value)} />
            </div>

            <div className="main-left__temp">{degrees === "°C" ? <span>{data.current.temp_c} °C</span> : <span>{data.current.temp_f} °F</span>}</div>
            <div className="main-left__date">{days[date.getDay()]}, <span>{date.getHours()}:{date.getMinutes()}</span></div>
            <div className="main-left__text"><img src={data.current.condition.icon} alt="" />{data.current.condition.text}</div>
            <div className="main-left__text--wind"><img src={windIcon} alt="" />{(data.current.wind_kph * 1000 / 3600).toFixed(1)} m/s</div>
        </div>

    )
}

export default CurrentWeather;
