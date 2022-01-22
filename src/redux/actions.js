import { CHANGE_DEGREES, CHANGE_LOCATION, SHOW_LOADER, HIDE_LOADER, CHANGE_WEATER_DATA } from './types';
import axios from "axios";

export const showLoader = () => ({ type: SHOW_LOADER, })

export const hideLoader = () => ({ type: HIDE_LOADER, })


export function changeDegrees(typeOfDegree) {
    return {
        type: CHANGE_DEGREES,
        payload: typeOfDegree,
    }
}

export function changeLocation(location) {
    return {
        type: CHANGE_LOCATION,
        payload: location,
    }
}

export function getDataAboutLocation(location) {
    return async dispatch => {
        dispatch(showLoader());

        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: { q: location, days: '3' },
            headers: {
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
                'x-rapidapi-key': 'fe95b0bc10msh7af262499a6abdap1e23abjsn101b9736acef'
            }
        };

        await axios.request(options)
            .then(function (response) {

                dispatch({ type: CHANGE_WEATER_DATA, payload: response.data })
                dispatch(hideLoader())
            })
            .catch(function (error) {
                dispatch(hideLoader())
                console.error(error);
            });
    }
}

