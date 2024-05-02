import { Map, Marker, NavigationControl, GeolocateControl } from "react-map-gl";
import { Box, Tooltip, Typography, Zoom } from "@mui/material";
import LensIcon from "@mui/icons-material/Lens";
import { theme } from "@/theme";
import TooltipContent from "./TooltipContent";

const MAPBOX_ACCESS_TOKEN =
	"pk.eyJ1IjoiamFtZXNhdG9tIiwiYSI6ImNsdXh5bzV5cDB1NmEycG52OWhkcjJkYWEifQ._8rm2H-2gwkbKgtX5pbz0w";
const position = [69.27976554916285, 41.31123758475188];
const initialViewState = {
	longitude: 69.27976554916285,
	latitude: 41.31123758475188,
	zoom: 15
};

export default () => {
	return (
		<Map
			mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
			{...{ initialViewState }}
			style={{ width: "100%", height: "100%" }}
			mapStyle="mapbox://styles/mapbox/streets-v10">
			<Marker longitude={position[0]} latitude={position[1]}>
				<Tooltip
					sx={{ maxWidth: 350 }}
					title={<TooltipContent />}
					placement="top-end"
					arrow
					TransitionComponent={Zoom}>
					<Box sx={markerStyles}>
						<LensIcon className="icon" sx={markerIconStyles} />
						<Typography
							className="order-text"
							sx={markerTextStyles}>
							2
						</Typography>
					</Box>
				</Tooltip>
			</Marker>
			<Box style={{ position: "absolute", top: 10, right: 10 }}>
				<NavigationControl />
				<GeolocateControl />
			</Box>
		</Map>
	);
};

const markerStyles = {
	position: "relative",
	cursor: "pointer",
	":hover": {
		".icon": {
			border: `5px solid ${theme.palette.error.main}`,
			color: "white"
		},
		".order-text": {
			color: theme.palette.error.main
		}
	}
};

const markerIconStyles = {
	borderRadius: 9999999,
	color: "error.main",
	transition: "0.3s",
	border: `5px solid ${theme.palette.primary.contrastText}`
};

const markerTextStyles = {
	position: "absolute",
	top: "42%",
	left: "51%",
	transform: "translateX(-50%) translateY(-50%)",
	color: "white",
	fontWeight: "bold"
};
