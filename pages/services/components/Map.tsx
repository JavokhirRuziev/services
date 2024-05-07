import { Map, Marker, NavigationControl, GeolocateControl } from "react-map-gl";
import { Box, Tooltip, Typography, Zoom } from "@mui/material";
import LensIcon from "@mui/icons-material/Lens";
import { theme } from "@/theme";
import TooltipContent from "./TooltipContent";
import { useState } from "react";
import breakpoints from "@/utils/breakpoints";

const MAPBOX_ACCESS_TOKEN =
	"pk.eyJ1IjoiamFtZXNhdG9tIiwiYSI6ImNsdXh5bzV5cDB1NmEycG52OWhkcjJkYWEifQ._8rm2H-2gwkbKgtX5pbz0w";
const initialViewState = {
	longitude: 69.27976554916285,
	latitude: 41.31123758475188,
	zoom: 13
};

export default ({ arr, hoveredCardId }: any) => {
	const { mobile } = breakpoints();
	const [open, setOpen] = useState(false);

	const handleTooltipOpen = () => {
		setOpen(true);
	};

	const handleTooltipClose = () => {
		setOpen(false);
	};
	return (
		<Map
			mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
			{...{ initialViewState }}
			style={{
				width: "100%",
				height: "100vh",
				position: "sticky",
				top: 0
			}}
			mapStyle="mapbox://styles/mapbox/streets-v10"
			// onClick={handleMapClick}
		>
			{arr?.map((el: any, index: number) => (
				<Marker longitude={el.position[0]} latitude={el.position[1]}>
					<Tooltip
						sx={{ maxWidth: 350 }}
						title={<TooltipContent {...{ el }} />}
						placement="top-end"
						arrow
						TransitionComponent={Zoom}
						{...(mobile && {
							open: open,
							onClose: handleTooltipClose
						})}>
						<Box
							sx={markerStyles}
							{...(mobile && { onClick: handleTooltipOpen })}>
							<LensIcon
								className="icon"
								sx={markerIconStyles(hoveredCardId, el.id)}
							/>
							<Typography
								className="order-text"
								sx={markerTextStyles(hoveredCardId, el.id)}>
								{index + 1}
							</Typography>
						</Box>
					</Tooltip>
				</Marker>
			))}

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

const markerIconStyles = (hoveredCardId: any, id: any) => ({
	borderRadius: 9999999,
	color: hoveredCardId === id ? "white" : "error.main",
	transition: "0.3s",
	border:
		hoveredCardId === id ? `5px solid ${theme.palette.error.main}` : `none`
});

const markerTextStyles = (hoveredCardId: any, id: any) => ({
	position: "absolute",
	top: "42%",
	left: "51%",
	transform: "translateX(-50%) translateY(-50%)",
	color: hoveredCardId === id ? theme.palette.error.main : "white",
	fontWeight: "bold"
});

// LATER NEED

// 69.28272670791242 long
// 41.3085539488724 lat

// const [viewport, setViewport] = useState(initialViewState);
// const handleMapClick = (event: any) => {
// 	const { lng, lat } = event.lngLat;
// 	setViewport({
// 		...viewport,
// 		longitude: lng,
// 		latitude: lat
// 	});
// };

// const { longitude, latitude } = viewport;

// console.log(viewport);

{
	/* <Marker longitude={longitude} latitude={latitude}>
<Tooltip
	sx={{ maxWidth: 350 }}
	title={<TooltipContent text={"el.description"} />}
	placement="top-end"
	arrow
	TransitionComponent={Zoom}
	{...(mobile && {
		open: open,
		onClose: handleTooltipClose
	})}>
	<Box
		sx={markerStyles}
		{...(mobile && { onClick: handleTooltipOpen })}>
		<LensIcon
			className="icon"
			sx={markerIconStyles(hoveredCardId, 1)}
		/>
		<Typography
			className="order-text"
			sx={markerTextStyles(hoveredCardId, 1)}>
			{1}
		</Typography>
	</Box>
</Tooltip>
</Marker> */
}
