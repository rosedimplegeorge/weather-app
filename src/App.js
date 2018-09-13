import React, { Component } from 'react';
import './App.css';
import TitleComponent from './components/TitleComponent';
import FormComponent from './components/FormComponent';
import WeatherComponent from './components/WeatherComponent';

const API_KEY = "fbe0fc01ade9685431f288319bf881d3"

class App extends Component {

  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY} `);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.main.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  }

  render() {
    return (
      <div className="App">
        <TitleComponent />
        <FormComponent getWeather={this.getWeather}/>
        <WeatherComponent 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
