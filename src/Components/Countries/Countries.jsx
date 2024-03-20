import { useEffect } from "react";
import { useState } from "react";
import { Country } from "../Country/Country";
import "../Countries/Countries.css";

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  return (
    <div>
      <h2>Countris: {countries.length}</h2>

      <div className="listed">
        <h2>Here Your Country</h2>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country country={country} key={country.cca3} handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div>
    </div>
  );
};
