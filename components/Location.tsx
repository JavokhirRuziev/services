// components/Location.js
import React, { useState, useEffect } from "react";
import LocationModal from "./LocationModal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Location = () => {
	const [location, setLocation] = useState<{
		latitude: number;
		longitude: number;
	} | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		setModalOpen(true);
	}, []);

	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setLocation({ latitude, longitude });
					setError(null);
				},
				(error) => {
					setError(error.message);
					setLocation(null);
				}
			);
		} else {
			setError("Geolocation is not supported by this browser.");
		}
	};

	const handleModalConfirm = () => {
		setModalOpen(false);
		getLocation();
	};

	return (
		<Box>
			{location && (
				<Box>
					<Typography>Latitude: {location.latitude}</Typography>
					<Typography>Longitude: {location.longitude}</Typography>
				</Box>
			)}
			{error && <Typography>Error: {error}</Typography>}

			<LocationModal
				open={modalOpen}
				handleClose={() => setModalOpen(false)}
				handleConfirm={handleModalConfirm}
			/>
		</Box>
	);
};

export default Location;
