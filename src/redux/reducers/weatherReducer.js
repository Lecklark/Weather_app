import { CHANGE_DEGREES, CHANGE_LOCATION, CHANGE_WEATER_DATA } from "../types"

const initialState = {
    degrees: "°C",
    location: "Samara",
    data: null,
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DEGREES: return { ...state, degrees: action.payload }
        case CHANGE_LOCATION: return { ...state, location: action.payload }
        case CHANGE_WEATER_DATA: return { ...state, data: action.payload }
        default: return state
    }
}