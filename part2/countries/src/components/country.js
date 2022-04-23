import React from 'react';

const Country = (props) => {
    const languages = Object.values(props.country.languages)
    const flag = props.country.flags.png
    console.log(flag)
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
        </div>
    )
}

export default Country;