import React from 'react';
import Country from './country';

const Display = ({countryList, setCountries}) => {
    console.log(countryList.length)
    if(countryList.length>10 && countryList.length<250) {
        return (
        <div>Too many, please refine your search</div>
        )
    } else if(countryList.length<=10 && countryList.length>2 || countryList.length===0){
        return ( 
            <div>
                {countryList.map(
                    (country, i) => <div key = {i}>
                    {country.name.common} <button onClick={()=>setCountries([country])}>Show</button>
                </div>
                )}
            </div>
            )
    } else {
        return(
            <Country country = {countryList[0]} />
        )
    } 
}
export default Display;