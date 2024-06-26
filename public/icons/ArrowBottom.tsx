import { theme } from "@/theme";

export default ({ color }: { color: any }) => {
	return (
		<svg
			width="18"
			height="20"
			viewBox="0 0 18 20"
			fill={color || theme.palette.common.white}
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.99989 14C8.47489 14 7.94989 13.775 7.55239 13.3333L2.66239 7.9C2.44489 7.65833 2.44489 7.25834 2.66239 7.01667C2.87989 6.775 3.23989 6.775 3.45739 7.01667L8.34739 12.45C8.70739 12.85 9.29239 12.85 9.65239 12.45L14.5424 7.01667C14.7599 6.775 15.1199 6.775 15.3374 7.01667C15.5549 7.25834 15.5549 7.65833 15.3374 7.9L10.4474 13.3333C10.0499 13.775 9.52489 14 8.99989 14Z"
				fill={color || theme.palette.common.white}
			/>
		</svg>
	);
};
