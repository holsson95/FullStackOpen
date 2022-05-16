import React, { useState, useEffect } from 'react';
import axios from 'axios';

//bug due to useState when changing country in search
const Country = ({country, weather}) => {
    console.log(weather)
    const languages = Object.values(country.languages)
    const flag = country.flags.png
    const capital = country.capital
    

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
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