import { theme } from "@/theme";

export default ({ size }: { size?: number | string }) => {
	return (
		<svg
			width={size || "14"}
			height={size || "14"}
			viewBox="0 0 14 14"
			fill={"none"}
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.04742 1.65088H4.95242C3.49992 1.65088 3.17909 2.37421 2.99242 3.26088L2.33325 6.41671H11.6666L11.0074 3.26088C10.8208 2.37421 10.4999 1.65088 9.04742 1.65088Z"
				stroke="#2D2E2F"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.8276 11.5616C12.8918 12.2441 12.3434 12.8333 11.6434 12.8333H10.5468C9.91676 12.8333 9.82926 12.565 9.71842 12.2325L9.60176 11.8825C9.43842 11.4041 9.33342 11.0833 8.49342 11.0833H5.50676C4.66676 11.0833 4.54426 11.445 4.39842 11.8825L4.28176 12.2325C4.17092 12.565 4.08342 12.8333 3.45342 12.8333H2.35676C1.65676 12.8333 1.10842 12.2441 1.17259 11.5616L1.49926 8.00913C1.58092 7.13413 1.75009 6.41663 3.27842 6.41663H10.7218C12.2501 6.41663 12.4193 7.13413 12.5009 8.00913L12.8276 11.5616Z"
				fill="#2D2E2F"
				stroke="#2D2E2F"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.33333 4.66663H1.75"
				stroke="#2D2E2F"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.2501 4.66663H11.6667"
				stroke="#2D2E2F"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7 1.75V2.91667"
				stroke="#2D2E2F"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.125 2.91663H7.875"
				stroke="#2D2E2F"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.5 8.75H5.25"
				stroke={theme.palette.common.white}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.75 8.75H10.5"
				stroke={theme.palette.common.white}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
