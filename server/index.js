const express = require("express");
const axios = require("axios");

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/nearby-places", async (req, res) => {
  const { keyword, lat, long } = req.body;
  const googleResponse = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${long}&keyword=${keyword}&radius=50000&key=AIzaSyDIb6tuC5IBX5yf8pYBMs_hLkZicqDHZ9k`
  );
  console.log(googleResponse.data);
  res.json(googleResponse.data);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
