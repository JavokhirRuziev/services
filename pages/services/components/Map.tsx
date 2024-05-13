import { Map, Marker, NavigationControl, GeolocateControl } from "react-map-gl";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";
import { theme } from "@/theme";
import TooltipContent from "./TooltipContent";
import { useState } from "react";
import breakpoints from "@/utils/breakpoints";
import MarkerLocation from "@/public/icons/MarkerLocation";

const MAPBOX_ACCESS_TOKEN =
	"pk.eyJ1IjoiamFtZXNhdG9tIiwiYSI6ImNsdXh5bzV5cDB1NmEycG52OWhkcjJkYWEifQ._8rm2H-2gwkbKgtX5pbz0w";
const initialViewState = {
	longitude: 69.27976554916285,
	latitude: 41.31123758475188,
	zoom: 13
};

export default ({ arr, hoveredCardId, height }: any) => {
	const { mobile } = breakpoints();
	const [open, setOpen] = useState(false);

	const handleTooltipOpen = () => {
		setOpen(true);
	};

	const handleTooltipClose = () => {
		setOpen(false);
	};
	return (
		arr && (
			<Map
				mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
				{...{ initialViewState }}
				style={{
					width: "100%",
					height: height || "100vh",
					position: "sticky",
					top: 0
				}}
				mapStyle="mapbox://styles/mapbox/streets-v10"
				// onClick={handleMapClick}
			>
				{arr?.map((el: any, index: number) => (
					<Marker
						longitude={el?.position[0]}
						latitude={el?.position[1]}>
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
								sx={{
									...markerStyles,
									...markerIconStyles(hoveredCardId, el.id)
								}}
								{...(mobile && { onClick: handleTooltipOpen })}>
								<MarkerLocation content={index + 1} />
							</Box>
						</Tooltip>
					</Marker>
				))}

				<Box style={{ position: "absolute", top: 10, right: 10 }}>
					<NavigationControl />
					<GeolocateControl />
				</Box>
			</Map>
		)
	);
};

const markerStyles = {
	position: "relative",
	cursor: "pointer",
	":hover": {
		".icon": {
			border: `5px solid ${theme.palette.error.main}`,
			color: theme.palette.common.white
		},
		".order-text": {
			color: theme.palette.error.main
		}
	}
};

const markerIconStyles = (hoveredCardId: any, id: any) => ({
	transition: "0.3s",
	":hover": {
		path: {
			fill: theme.palette.common.white,
			stroke: "#A0DAFB"
		},
		text: {
			fill: "#A0DAFB"
		}
	},
	path: {
		fill: hoveredCardId === id ? theme.palette.common.white : "error.main",
		stroke: hoveredCardId === id ? "#A0DAFB" : theme.palette.common.white
	},
	text: {
		fill: hoveredCardId === id ? "#A0DAFB" : theme.palette.common.white,
		fontSize: "17px",
		fontFamily: '"PoppinsRegular", sans-serif',
		textAnchor: "middle"
	}
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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
