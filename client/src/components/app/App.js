import { useState } from "react";
import Form from "components/form/Form.jsx";
import NearbyPlaceRow from "components/nearby-place-row/NearbyPlaceRow";
import "index.css";

function App() {
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  return (
    <div className="pageWidth">
      <Form setNearbyPlaces={setNearbyPlaces} />
      <h2>Results</h2>
      {nearbyPlaces.length === 0 ? (
        "No results"
      ) : (
        <>
          {nearbyPlaces.map((nearbyPlace) => (
            <NearbyPlaceRow
              key={nearbyPlace.place_id}
              nearbyPlace={nearbyPlace}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
