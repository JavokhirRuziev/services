import { theme } from "@/theme";

export default ({ border, content, color }: any) => {
	return (
		<svg
			width="41"
			height="41"
			viewBox="0 0 41 41"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.18418 14.5037C9.54959 -0.290453 31.4675 -0.273369 34.8158 14.5208C36.7804 23.1991 31.3821 30.545 26.65 35.0891C23.2163 38.4033 17.7838 38.4033 14.3329 35.0891C9.61793 30.545 4.21959 23.182 6.18418 14.5037Z"
				fill="url(#paint0_linear_144_529)"
				stroke={border || theme.palette.common.white}
				strokeWidth="2.5625"
			/>
			<text x="20.5" y="24.5">
				{content}
			</text>
			<defs>
				<linearGradient
					id="paint0_linear_144_529"
					x1="20.5"
					y1="-13.0055"
					x2="20.5"
					y2="48.3039"
					gradientUnits="userSpaceOnUse">
					<stop offset="0.140112" stopColor="#A0DAFB" />
					<stop offset="1" stopColor="#0A8ED9" />
				</linearGradient>
			</defs>
		</svg>
	);
};
