import React from 'react';
import "./Result.scss";

const Result = props => {

    const {date, time, feels, humidity, city, sunrise, sunset, temp, pressure, wind, err} = props.weather;

    // wyswietli pusta informacje poniewaz null.
    let content = null;
    // warunek : odwrotnosc bledu i prawidlowa nazwa miasta
    if (!err && city) {
        // musimy pomnozyc przez 1000ms inaczej poda nam dziwna wartosc zamiast wlasciwego czasu.
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <div className='result__element'>
                <div className='element--el'>Informacje pogodowe dla: <span className='el--city'>{city}</span></div>
                <div className='element--el el--temp'><span className='el-temp'>{temp} &#176;C</span></div>
                <div className='element--el'>data: {date}</div>
                <div className='element--el'>godzina: {time}</div>
                <div className='element--el'>odczuwalna temp: {feels} &#176;C</div>
                <div className="element--el">wilgotnosc powietrza: {humidity} %</div>
                <div className='element--el'>Wschod slonca: {sunriseTime}</div>
                <div className='element--el'>Zachod slonca: {sunsetTime}</div>
                <div className='element--el'>cisnienie: {pressure} hPa</div>
                <div className='element--el'>sila wiatru: {wind} m/s</div>
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