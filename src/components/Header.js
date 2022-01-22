import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changeDegrees, changeLocation } from './../redux/actions';



const Header = () => {

    const dispatch = useDispatch();
    const changeTypeOfDegree = (e) => {
        dispatch(changeDegrees(e.target.value))
        e.target.classList.add("active")
    };

    return (
        <header className="header">
            <nav className="header__nav nav">
                <NavLink className="nav__link" to='/'>Today</NavLink>
                <NavLink className="nav__link" to='/3_days'>3 days</NavLink>
            </nav>
            <div className="header__buttons">
                <button value="°C" className="header__btn active" onClick={(e) => changeTypeOfDegree(e)}>°C</button>
                <button value="°F" className="header__btn" onClick={(e) => changeTypeOfDegree(e)}>°F</button>
            </div>
        </header >
    )
};

export default Header;