import { useState } from "react";

 const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  // console.log( country);

  const {name, flags, population, area, cca3} = country;

  // Host korbe
  const [visited, setViseted] = useState(false);
  // Handle korbe
  const handleVisited = () => { 
     setViseted(!visited);
  }

  // const passWithParams = () => handleVisitedCountry(country);
  

   return (
    <div className= {`country ${visited ?'visited' : 'non-visited'}`} >
      <h4 style={{color: visited ? 'yellow' : 'purple'}}>Name: {name?.common} </h4>
      <img src={flags.png} alt="" />
      <p>Population: {population} </p>
      <p>Area: {area} </p>
      <p>Code: {cca3}</p>
      <button onClick={() => handleVisitedCountry(country)}>Matk Visited</button> <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button> <br />
      {/* Triger korbe */}
      <button onClick={handleVisited}> {visited ? 'Already Visited' : 'Will Go'} </button> 
      {/* {visited && 'I have visited the country.'} */}
      {visited ? 'I have visited the country.' : 'I want to visit.'} 
    
    </div>
  );
};

export default Country;
