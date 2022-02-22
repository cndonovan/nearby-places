import { useState } from "react";
import { LOCATIONS } from "./constants";
import "index.css";

// We might change our mind about what should be initially selected, so including this code for that flexibility.
const initialLocationName = "Malibu, CA";
const initialLocation = LOCATIONS.find((l) => l.name === initialLocationName);

function Form({ setResults }) {
  const [location, setLocation] = useState(initialLocation);
  const [keyword, setKeyword] = useState("");

  console.log({ location, keyword });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/nearby-places", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keyword: keyword,
          lat: location.lat,
          long: location.long,
        }),
      });
      const body = await response.json();
      console.log({ body });
      setResults(body.results || []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form>
      <h2>Select a location</h2>
      {LOCATIONS.map((currentLocation) => {
        const { id, name } = currentLocation;
        const isSelected = currentLocation.id === location.id;
        return (
          <div key={id}>
            <input
              type="radio"
              id={id}
              checked={isSelected}
              onChange={() => setLocation(currentLocation)}
            />
            <label htmlFor={id}>{name}</label>
          </div>
        );
      })}

      <h2>Search</h2>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={onSubmit}>Search</button>
    </form>
  );
}

export default Form;
