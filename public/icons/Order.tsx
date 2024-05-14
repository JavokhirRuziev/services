import { theme } from "@/theme";

export default () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<circle cx="12" cy="12" r="10" fill="#44CF9D" />
			<path
				d="M6 14L9.5 11L11 13L9 15L8 16V14H6Z"
				fill={theme.palette.common.white}
				stroke={theme.palette.common.white}
				strokeWidth="0.5"
			/>
			<path
				d="M18 14L14.5 11L13 13L15 15L16 16V14H18Z"
				fill={theme.palette.common.white}
				stroke={theme.palette.common.white}
				strokeWidth="0.5"
			/>
			<circle
				cx="12"
				cy="10"
				r="3.85"
				fill={theme.palette.common.white}
				stroke="#44CF9D"
				strokeWidth="0.3"
			/>
		</svg>
	);
};
