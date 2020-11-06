import React, {Component} from 'react';
import './App.scss';
import NavTop from "../../components/NavTop/NavTop";
import Header from '../../components/Header/Header';
import Form from "../../components/Header/Form";
import Result from "../../components/Body/Result";
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Burger/Menu';
import Contact from "../../components/Burger/Contact";
import Weather from "../../components/Burger/Weather";
import Login from "../../components/Burger/Login";
import Map from "../../components/Burger/Map";
import AboutMe from "../../components/Burger/AboutMe";
import {HashRouter, Route, Switch} from 'react-router-dom';

class App extends Component {

    state = {
        value: '',
        date: '',
        feels: '',
        description: '',
        icon: '',
        time: '',
        humidity: '',
        city: '',
        sunrise: '', // wshod
        sunset: '', // zachod
        temp: '',
        tempMin: '',
        tempMax: '',
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
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=15c11e0907b11a6332c8aed3de1d5753&units=metric&lang=pl`;

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
                // przekazuje funckje ktora zwroci nam obiekt z aktualnymi danymi.
                this.setState(prev => ({
                    // prev - aktualny obiekt state.
                    description: data.weather[0].description,
                    icon: data.weather[0].icon,
                    city: prev.value,
                    sunrise: data.sys.sunrise, // wshod
                    sunset: data.sys.sunset, // zachod
                    feels: data.main.feels_like,
                    tempMin: data.main.temp_min,
                    tempMax: data.main.temp_max,
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
                <HashRouter>
                <div className="App">
                    <div className="App__container">
                        <NavTop weather={this.state}/>
                        <Menu/>
                        <Switch>
                            <Route path='/login' component={Login}/>
                            <Route path='/weather' component={Weather}/>
                            <Route path='/map' component={Map}/>
                            <Route path='/contact' component={Contact}/>
                            <Route path='/aboutme' component={AboutMe}/>
                        </Switch>
                        <Header/>
                        <Form value={this.state.value}
                              change={this.handleInputChange}
                              submit={this.handleCitySubmit}
                        />
                        <Result weather={this.state}/>
                        <Footer/>
                    </div>
                </div>
                </HashRouter>
            </>
        );
    }
}

export default App;
