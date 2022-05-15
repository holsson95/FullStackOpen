import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = (props) => {
    const [weather, setWeather] = useState([])
    
    const languages = Object.values(props.country.languages)
    const flag = props.country.flags.png
    const capital = props.country.capital
    const api_key = process.env.REACT_APP_API_KEY
    

    useEffect(() => {
        
        axios
        .get(` http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${capital}`)
        .then(response => {
            console.log('promise fulfilled')
            setWeather(response.data)
        
        })
    }, [])

    console.log(weather)
    return (
        <div>
            <h1>{props.country.name.common}</h1>
            <p>capital {props.country.capital}</p>
            <p>area {props.country.area}</p>
            <h2>Languages:</h2>
            <ul>
                {languages.map(e=>
                    <li key = {e}>{e}</li>
                )}
            </ul>
            <img src={flag} alt="Country Flag"></img>
            <h2>Weather in {capital}</h2>
            <img src={weather.current.condition.icon} alt="Weather Icon"></img>
            <p>temperature {weather.current.temp_c} Celcius</p>
            <p>wind {weather.current.wind_kph} kph</p>
        </div>
    )
}

export default Country;