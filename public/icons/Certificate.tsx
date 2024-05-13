import { theme } from "@/theme";

export default () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<rect
				x="1"
				y="12.3137"
				width="16"
				height="16"
				transform="rotate(-45 1 12.3137)"
				fill="#44CF9D"
			/>
			<rect
				x="4.31372"
				y="4.72791"
				width="16"
				height="16"
				fill="#44CF9D"
			/>
			<path
				d="M16 10L11.4969 14.8617C11.326 15.0461 11.049 15.0461 10.8781 14.8617L9 12.834"
				stroke={theme.palette.common.white}
				stroke-linecap="round"
			/>
		</svg>
	);
};
