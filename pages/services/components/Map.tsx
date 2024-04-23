import { Map, Marker, NavigationControl, GeolocateControl } from "react-map-gl";
import {
  Box,
  Tooltip,
  Typography,
  Zoom,
  styled,
  tooltipClasses,
} from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useEffect, useState } from "react";
import axios from "axios";
import LensIcon from "@mui/icons-material/Lens";
import { theme } from "@/theme";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiamFtZXNhdG9tIiwiYSI6ImNsdXh5bzV5cDB1NmEycG52OWhkcjJkYWEifQ._8rm2H-2gwkbKgtX5pbz0w";
const DIRECTIONS_API_URL = `https://api.mapbox.com/directions/v5/mapbox/driving/${-122.4},${37.9};${-122.3},${37.8}?alternatives=true&geometries=polyline6&language=en&overview=full&steps=true`;

export default () => {
  const [start, setStart] = useState([-122.4, 37.8]); // Starting point coordinates
  const [end, setEnd] = useState([-122.3, 37.9]); // Ending point coordinates
  const [route, setRoute] = useState(null); // Route data

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
      <Marker longitude={start[0]} latitude={start[1]}>
        <Tooltip
          sx={{ maxWidth: 350 }}
          title={
            <Box sx={{ width: 250, height: 250 }}>
              <Typography>
                This is tooltip there will be all information about some service
              </Typography>
            </Box>
          }
          placement="top-end"
          arrow
          TransitionComponent={Zoom}
        >
          <Box
            sx={{
              position: "relative",
              cursor: "pointer",
              ":hover": {
                ".icon": {
                  border: `5px solid ${theme.palette.error.main}`,
                  color: "white",
                },
                ".order-text": {
                  color: theme.palette.error.main,
                },
              },
            }}
          >
            <LensIcon
              className="icon"
              sx={{
                borderRadius: 9999999,
                color: "error.main",
                transition: "0.3s",
                border: `5px solid ${theme.palette.primary.contrastText}`,
              }}
            />
            <Typography
              className="order-text"
              sx={{
                position: "absolute",
                top: "42%",
                left: "51%",
                transform: "translateX(-50%) translateY(-50%)",
                color: "white",
                fontWeight: "bold",
              }}
            >
              2
            </Typography>
          </Box>
        </Tooltip>
      </Marker>
      <>
        <div style={{ position: "absolute", top: 10, right: 10 }}>
          <NavigationControl />
          <GeolocateControl />
        </div>
      </>
    </Map>
  );
};

// <Source id="my-data" type="geojson" data={geojson}>
//   <Layer {...layerStyle} />
// </Source>

// const geojson: FeatureCollection = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: { type: "Point", coordinates: [-122.4, 37.8] },
//       properties: {}, // Add an empty properties object
//     },
//   ],
// };

// const layerStyle: CircleLayer = {
//   id: "point",
//   type: "circle",
//   paint: {
//     "circle-radius": 10,
//     "circle-color": "#007cbf",
//   },
// };
