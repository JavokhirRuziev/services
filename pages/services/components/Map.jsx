import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tooltip, Zoom } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { GeolocateControl, Map, Marker, NavigationControl } from "react-map-gl";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiamFtZXNhdG9tIiwiYSI6ImNsdXh5bzV5cDB1NmEycG52OWhkcjJkYWEifQ._8rm2H-2gwkbKgtX5pbz0w";
const DIRECTIONS_API_URL = `https://api.mapbox.com/directions/v5/mapbox/driving/${-122.4},${37.9};${-122.3},${37.8}?alternatives=true&geometries=polyline6&language=en&overview=full&steps=true`;

const MarkerComponent = React.memo(({ longitude, latitude, tooltipTitle }) => (
  <Marker longitude={longitude} latitude={latitude}>
    <Tooltip
      title={tooltipTitle}
      placement="top"
      arrow
      TransitionComponent={Zoom}
    >
      <FmdGoodIcon sx={{ cursor: "pointer" }} />
    </Tooltip>
  </Marker>
));

export default function Home() {
  const [start, setStart] = useState([-122.4, 37.8]); // Starting point coordinates
  const [end, setEnd] = useState([-122.3, 37.9]); // Ending point coordinates

  useEffect(() => {
    fetchDirections();
  }, [start, end]);

  const fetchDirections = async () => {
    try {
      const response = await axios.get(DIRECTIONS_API_URL, {
        params: {
          access_token: MAPBOX_ACCESS_TOKEN,
        },
      });
      setRoute(response.data.routes[0]);
    } catch (error) {
      console.error("Error fetching directions:", error);
    }
  };

  return (
    <Map
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 11,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v10"
    >
      <MarkerComponent
        longitude={start[0]}
        latitude={start[1]}
        tooltipTitle="Starting Point"
      />
      <MarkerComponent
        longitude={end[0]}
        latitude={end[1]}
        tooltipTitle="Ending Point"
      />
      <div style={{ position: "absolute", top: 10, right: 10 }}>
        <NavigationControl />
        <GeolocateControl />
      </div>
    </Map>
  );
}
