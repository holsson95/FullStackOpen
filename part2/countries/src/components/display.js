import React from 'react';
import Country from './country';

const Display = ({countryList}) => {
    console.log(countryList.length)
    const list = countryList.map(
        country => <div key = {countryList.indexOf(country)}>{country.name.common}</div>
        )
    if(countryList.length>10 && countryList.length<250) {
        return (
        <div>Too many, please refine your search</div>
        )
    } else if(countryList.length == 1){
        return(
            <Country country = {countryList[0]} />
        )
    } else if(countryList.length<=10 && countryList.length>0){
        return ( 
            <div>
                {list}
            </div>
            )
    }
    else {
        return ( 
        <div>Type a country</div>
        )}
}
export default Display;