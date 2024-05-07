import { Box } from "@mui/material";
import Hover from "@/components/Buttons/Hover";

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
	rowGap: 1,
	p: 1
};
