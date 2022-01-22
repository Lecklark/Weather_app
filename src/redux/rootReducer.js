import { combineReducers } from 'redux'
import { weatherReducer } from './reducers/weatherReducer';
import { appReducer } from './reducers/appReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    weather: weatherReducer,
})