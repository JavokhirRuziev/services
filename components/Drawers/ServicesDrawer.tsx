import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { theme } from "@/theme";
import Filter from "@/public/icons/Filter";
import Typography from "@mui/material/Typography";

type Anchor = "left";

export default function ServicesDrawer({ children }: any) {
	const [state, setState] = React.useState({
		left: false
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	return (
		<Box>
			<Box sx={dropDownStyles} onClick={toggleDrawer("left", true)}>
				<Filter />
				<Typography variant="body2" color={"grey.700"}>
					Filter
				</Typography>
			</Box>
			<Drawer
				anchor={"left"}
				open={state["left"]}
				onClose={toggleDrawer("left", false)}>
				{children}
			</Drawer>
		</Box>
	);
}

const dropDownStyles = {
	display: "flex",
	alignItems: "center",
	columnGap: 0.5,
	cursor: "pointer",
	path: { fill: theme.palette.grey[700] },
	border: `1px solid ${theme.palette.grey[100]}`,
	borderRadius: "4px",
	p: "6px 12px"
};
