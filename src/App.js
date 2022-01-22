import React, { useEffect } from "react";
import Header from "./components/Header";
import CurrentWeather from './components/CurrentWeather';
import { useSelector, useDispatch } from "react-redux";
import { getDataAboutLocation } from './redux/actions';
import Loader from "./UI/Loader";
import MainPart from './components/MainPart';

function App() {

  const location = useSelector(state => state.weather.location);
  const loading = useSelector(state => state.app.loader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAboutLocation(location))
  }, [dispatch, location])

  return (
    <div className="app">
      <Header />
      {loading ? <div className="loader"><Loader /></div> : <CurrentWeather />}
      {loading || <MainPart />}
    </div>
  )
}

export default App;
