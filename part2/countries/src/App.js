import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Filter from './components/filter';
import Display from './components/display';


const App = () => {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [filterCountry, setFilter] = useState('')  

  const handleFilter = (event) => {
    setFilter(event.target.value)
    if (filterCountry){
      const countryList = () => allCountries.filter(
      country => country.name.common.toLowerCase().match(filterCountry.toLowerCase()))
      setCountries(countryList)
    }
  }
  console.log(countries)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setAllCountries(response.data)
      })
  }, [])
  
  return (
    <div>
      <Filter value = {filterCountry} onChange = {handleFilter} />
      <Display countryList = {countries} setCountries = {setCountries} />
    </div>
  );
}

export default App;
