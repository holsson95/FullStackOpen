import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Filter from './components/filter';
import Display from './components/display';
import Country from './components/country';


const App = () => {
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState([])
  const [filterCountry, setFilter] = useState('')  

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filterCountry.toLowerCase()))
  console.log(countriesToShow)
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
      const API_KEY = process.env.REACT_APP_API_KEY
      if (countriesToShow.length === 1){
        const country = countriesToShow[0]
        const capital = country.capital[0]
        axios
          .get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${capital}`)
          .then(response => {
              console.log('promise fulfilled')
              setWeather(response.data)
          })
      }
  }, [countries, filterCountry])

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    setFilter(event.target.name)
  }
  console.log(weather)
  return (
    <div>
      <Filter value = {filterCountry} onChange = {handleFilter} />
      {countriesToShow.length !== 1 ? <Display countriesToShow={countriesToShow} handleClick={handleClick} /> : <Country country={countriesToShow[0]} weather={weather} />}
    </div>
  );
}

export default App;
