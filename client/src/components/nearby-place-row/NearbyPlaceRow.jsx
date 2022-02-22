import * as React from "react";
import "index.css";

function NearbyPlaceRow({ nearbyPlace }) {
  return (
    <div className="nearbyPlace">
      <div className="nearbyPlace-left">
        <h3>{nearbyPlace.name}</h3>
        <p>{nearbyPlace.vicinity}</p>
      </div>
      <div className="nearbyPlace-right">Rating - {nearbyPlace.rating}</div>
    </div>
  );
}

export default NearbyPlaceRow;
