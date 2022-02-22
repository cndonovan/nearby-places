import * as React from "react";
import { locations } from "./constants";
import "index.css";

function Form() {
  return (
    <form className="pageWidth">
      <h2>Select a location</h2>

      {locations.map((location) => (
        <>
          <input
            type="radio"
            id={location.name}
            value={location.name}
            key={location.name}
          />
          <label>{location.name}</label>
        </>
      ))}
      <h2>Search</h2>
    </form>
  );
}

export default Form;
