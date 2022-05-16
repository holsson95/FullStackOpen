import React from 'react';

const Display = ({countriesToShow, handleClick}) => {
    if(countriesToShow.length<=10){
        return ( 
            <div>
                {countriesToShow.map(
                    (country, i) => <div key = {i}>
                    {country.name.common} <button onClick={handleClick}>Show</button>
                </div>
                )}
            </div>
            )
    } else {
        return(
            <p>Too many countries please specify your search</p>
        )
    } 
}
export default Display;