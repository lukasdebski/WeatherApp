import React, {Component} from 'react';
import './App.scss';
import Header from '../../components/Header/Header';
import Form from "../../components/Header/Form";
import Result from "../../components/Body/Result";

class App extends Component {

    state = {
        value: '',
        date: '',
        feels: '',
        time: '',
        humidity: '',
        city: '',
        sunrise: '', // wshod
        sunset: '', // zachod
        temp: '',
        pressure: '',
        wind: '',
        err: false,
    }



    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleCitySubmit = (e) => {
        e.preventDefault();
        // console.log('zapytanie...')
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=15c11e0907b11a6332c8aed3de1d5753&units=metric`;

        fetch(API)
            // response.ok - zwroci nam true if true, zwroci false jesli not true.
            .then(response => {
                if(response.ok) {
                    return response
                }
                  throw Error("Nie ma takiego Miasta...");
            })
            .then(response => response.json())
            .then(data => {
                const date = new Date().toLocaleDateString();
                const time = new Date().toLocaleTimeString();
                // przekazuje funckje ktora zwroci nam obiekt z aktualnymi danymi.
                this.setState(prev => ({
                    // prev - aktualny obiekt state.
                    date: date,
                    time: time,
                    city: prev.value,
                    sunrise: data.sys.sunrise, // wshod
                    sunset: data.sys.sunset, // zachod
                    feels: data.main.feels_like,
                    humidity: data.main.humidity,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    err: false,
                }))
            })
            .catch(err => {
                this.setState(prev => {
                    return {
                        err: true,
                        city: prev.value
                    }

                })
            })
    }

    render() {
        return (
            <>
                <div className="App">
                    <div className="App__container">
                        <Header/>
                        <Form value={this.state.value}
                              change={this.handleInputChange}
                              submit={this.handleCitySubmit}
                        />
                        <Result weather={this.state}/>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
