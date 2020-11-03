import React from 'react';
import "./Result.scss";

const Result = props => {

    const {feels, description, icon, humidity, city, sunrise, sunset, temp, tempMin, tempMax, pressure, wind, err} = props.weather;

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
            <section className='result__container'>

                <article className="result__element">
                    <div className='result__el el--info'>Informacje pogodowe dla:</div>
                    <div className='result__el el--city'>{city}</div>
                </article>

                <article className="result__element elements--temp">
                    <div className='result__el el--temp'>{tempRound} &#176;C</div>
                    <div className='result__el el--info'>Odczuwalna: {feelsRound} &#176;C</div>
                    <div className="result__box">
                        <div className='result__el box--el'>min: {tempMinRound} &#176;C</div>
                        <div className='result__el box--el'>max: {tempMaxRound} &#176;C</div>
                    </div>
                    <div className='result__element'>
                        <img className='result__el icon--el' src={iconWeather} alt=''/>
                        <div className='result__el description'>{description}</div>
                    </div>
                </article>

                <article className="result__elements">
                    <div className="result__box">
                        <div className='result__el el--sun'><i className="fas fa-sort-up"></i><i className="far fa-sun"></i> {sunriseTime}</div>
                        <div className='result__el el--sun'><i className="far fa-sun"></i><i className="fas fa-sort-down"></i> {sunsetTime}</div>
                    </div>
                    <div className='result__el el--sun'>Ciśnienie: {pressure} hPa</div>
                    <div className="result__el el--sun">Wilgotność: {humidity} %</div>
                    <div className='result__el el--wind el--sun'><i className="fas fa-wind"></i> {wind} m/s</div>
                </article>
            </section>
        )
    }

    return (
        <div className="result">
            {err ? `Nie ma takiego Miasta: ${city}` : content}
        </div>
    )
}

export default Result;