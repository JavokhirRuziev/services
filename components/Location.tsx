// components/Location.js
import { useState } from "react";

const Location = () => {
	const [location, setLocation] = useState<{
		latitude: number;
		longitude: number;
	} | null>(null);
	const [error, setError] = useState<string | null>(null);

	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setLocation({ latitude, longitude });
					setError(null); // Clear any previous errors
				},
				(error) => {
					setError(error.message);
					setLocation(null); // Clear previous location if error occurs
				}
			);
		} else {
			setError("Geolocation is not supported by this browser.");
		}
	};

	return (
		<div>
			<button onClick={getLocation}>Get Location</button>
			{location && (
				<div>
					<p>Latitude: {location.latitude}</p>
					<p>Longitude: {location.longitude}</p>
				</div>
			)}
			{error && <p>Error: {error}</p>}
		</div>
	);
};

export default Location;
