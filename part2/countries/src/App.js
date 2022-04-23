import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Filter from './components/filter';
import Display from './components/display';


const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountry, setFilter] = useState('')

  const countryList = countries.filter(country => country.name.common.toLowerCase().match(filterCountry.toLowerCase()))

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <Filter value = {filterCountry} onChange = {handleFilter} />
      <Display countryList = {countryList} />
    </div>
  );
}

export default App;
