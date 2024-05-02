import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Menu from "@/public/icons/Menu";

type Anchor = "right";

export default function HeaderDrawer({ children }: any) {
	const [state, setState] = React.useState({
		right: false
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

	const list = () => (
		<Box sx={{ width: 350, mt: "20px", mx: 1 }} role="presentation">
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					mb: 2
				}}>
				<Box />
				<Button
					onClick={toggleDrawer("right", false)}
					color="secondary"
					variant={"contained"}
					size="small">
					<Menu color="white" />
				</Button>
			</Box>
			{children}
		</Box>
	);

	return (
		<>
			<Button
				onClick={toggleDrawer("right", true)}
				color="secondary"
				variant={"outlined"}
				size="small">
				<Menu />
			</Button>
			<Drawer
				anchor={"right"}
				open={state["right"]}
				onClose={toggleDrawer("right", false)}>
				{list()}
			</Drawer>
		</>
	);
}
