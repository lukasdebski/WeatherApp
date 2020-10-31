import React from 'react';
import "./Result.scss";

const Result = props => {

    const {time, feels, description, icon, humidity, city, sunrise, sunset, temp, tempMin, tempMax, pressure, wind, err} = props.weather;

    // wyswietli pusta informacje poniewaz null.
    let content = null;
    // warunek : odwrotnosc bledu i prawidlowa nazwa miasta
    if (!err && city) {
        // musimy pomnozyc przez 1000ms inaczej poda nam dziwna wartosc zamiast wlasciwego czasu.
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        const tempRound = Math.round(temp);
        const tempMinRound = Math.round(tempMin);
        const tempMaxRound = Math.round(tempMax);
        const feelsRound = Math.round(feels)
        const iconWeather = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        content = (
            <div className='result__element'>
                <div className='element--el'>Informacje pogodowe dla: <span className='el--city'>{city}</span></div>
                <div className='element--el el--temp'><span className='el-temp'>{tempRound} &#176;C</span></div>
                <div className='element--el'>min: {tempMinRound} &#176;C</div>
                <div className='element--el'>max: {tempMaxRound} &#176;C</div>
                <div className='element--el'><img className='icon' src={iconWeather}/></div>
                <div className='element--el'>{description}</div>
                <div className='element--el'>godzina: {time}</div>
                <div className='element--el'>odczuwalna: {feelsRound} &#176;C</div>
                <div className="element--el">wilgotność: {humidity} %</div>
                <div className='element--el'>Wschód slońca: {sunriseTime}</div>
                <div className='element--el'>Zachód slońca: {sunsetTime}</div>
                <div className='element--el'>ciśnienie: {pressure} hPa</div>
                <div className='element--el'>siła wiatru: {wind} m/s</div>
            </div>
        )
    }

    return (
        <div className="result">
            {err ? `Nie ma takiego Miasta: ${city}` : content}
        </div>
    )
}

export default Result;