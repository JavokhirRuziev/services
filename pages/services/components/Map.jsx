import { Box } from "@mui/material";
import { Map, NavigationControl, GeolocateControl } from "react-map-gl";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiamFtZXNhdG9tIiwiYSI6ImNsdXh5bzV5cDB1NmEycG52OWhkcjJkYWEifQ._8rm2H-2gwkbKgtX5pbz0w";
const DIRECTIONS_API_URL = `https://api.mapbox.com/directions/v5/mapbox/driving/${41.31123758475188},${69.27976554916285};${41.31123758475188},${69.27976554916285}?alternatives=true&geometries=polyline6&language=en&overview=full&steps=true`;

export default function Home() {
  return (
    <Map
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: 69.27976554916285,
        latitude: 41.31123758475188,
        zoom: 14,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v10"
    >
      <Box sx={{ position: "absolute", top: 10, right: 10 }}>
        <NavigationControl />
        <GeolocateControl />
      </Box>
    </Map>
  );
}
