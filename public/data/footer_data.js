import Box from "@mui/material/Box";
import Hover from "@/components/Buttons/Hover";

export const footer_links_arr = [
	{
		title: "About Us",
		children: [
			{ name: "About SolveMe", link: "/" },
			{ name: "Careers", link: "/" },
			{ name: "Press", link: "/" },
			{ name: "Investor Relations", link: "/" },
			{ name: "Trust & Safety", link: "/" },
			{ name: "Content & Guidlines", link: "/" }
		]
	},
	{
		title: "Discover",
		children: [
			{ name: "About SolveMe", link: "/" },
			{ name: "Careers", link: "/" },
			{ name: "Content & Guidlines", link: "/" },
			{ name: "Press", link: "/" },
			{ name: "Investor Relations", link: "/" },
			{ name: "Trust & Safety", link: "/" }
		]
	},
	{
		title: "CityShahar for Business",
		children: [
			{ name: "About SolveMe Business", link: "/" },
			{ name: "Investor Relations", link: "/" },
			{ name: "Trust & Safety", link: "/" },
			{ name: "Content & Guidlines", link: "/" }
		]
	}
];

export const actions_arr = ({ selectedState, handleSetState }) => [
	{
		title: "Languages",
		children: selectedState["lang"],
		content: (
			<Box sx={tooltipContentStyles}>
				{["Русский", "English", "O'zbekcha"].map((el) => (
					<Hover
						onClick={() => handleSetState("lang", el)}
						key={el}
						text={el}
					/>
				))}
			</Box>
		),
		action: "lang"
	},
	{
		title: "Countries",
		children: selectedState["countries"],
		content: (
			<Box sx={tooltipContentStyles}>
				{["United states", "Brazil", "Uzbekistan", "India"].map(
					(el) => (
						<Hover
							onClick={() => handleSetState("countries", el)}
							key={el}
							text={el}
						/>
					)
				)}
			</Box>
		),
		action: "countries"
	}
];

const tooltipContentStyles = {
	width: 200,
	display: "flex",
	flexDirection: "column",
	rowGap: 1
};
