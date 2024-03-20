import { useState } from "react";
import "../Country/Country.css";
export const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, capital, area, population } = country;
  //   console.log(flags.png);

  const [visited, setVisited] = useState(false);

  function handleVisited() {
    setVisited(!visited);
  }

  // function returnCountry() {}

  return (
    <div className="country">
      <div className="right">
        <h1>Name: {name.common} </h1>
        <img src={flags.png} alt="Country img" />
      </div>
      <hr />
      <div className="left">
        <h1>Official Name: {name.official} </h1>
        <h1>Capital: {capital}</h1>
        <h1>Area: {area}</h1>
        <h1>Population: {population}</h1>
        <button onClick={handleVisited} style={{ background: visited ? "green" : "" }}>
          {visited ? "Visited" : "Going to"}
        </button>
        <span style={{ marginLeft: "10px" }}>{visited ? "Explore this country" : "I Want to visit"}</span>

        <button onClick={() => handleVisitedCountries(country)}>Add visited List</button>
      </div>
    </div>
  );
};
