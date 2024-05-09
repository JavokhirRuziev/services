import TooltipClick from "@/components/Tooltips/TooltipClick";
import ArrowBottom from "@/public/icons/ArrowBottom";
import { theme } from "@/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default ({ el }: any) => {
	const [open, setOpen] = useState(false);
	const handleTooltipClose = () => {
		setOpen(false);
	};

	const handleTooltipOpen = () => {
		setOpen(true);
	};
	return (
		<TooltipClick
			placement={"bottom"}
			{...{
				open: open,
				handleTooltipClose: handleTooltipClose,
				content: el?.content
			}}>
			<Box sx={dropDownStyles} onClick={handleTooltipOpen}>
				<Typography variant="body2" color={"grey.700"}>
					{el?.name}
				</Typography>
				<ArrowBottom color="black" />
			</Box>
		</TooltipClick>
	);
};

const dropDownStyles = {
	display: "flex",
	alignItems: "center",
	columnGap: "2px",
	cursor: "pointer",
	path: { fill: theme.palette.grey[700] },
	border: `1px solid ${theme.palette.grey[100]}`,
	borderRadius: "4px",
	p: "6px 12px"
};
