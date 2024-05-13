import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import ButtonGradient from "../Buttons/ButtonGradient";

export default () => {
	const [open, setOpen] = React.useState(true);
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box>
			{open && (
				<ButtonGradient
					onClick={handleClose}
					sx={{
						position: "absolute",
						top: "45%",
						left: "45%",
						transform: "translateX(-50%),translateY(-50%)",
						zIndex: 99999
					}}>
					Check Map Details
				</ButtonGradient>
			)}
			<Backdrop
				sx={{
					zIndex: (theme) => theme.zIndex.drawer + 1,
					position: "absolute",
					top: 0,
					right: 0,
					left: 0,
					bottom: 0,
					backdropFilter: "blur(5px)",
					bgcolor: "transparent"
				}}
				open={open}
				onClick={handleClose}></Backdrop>
		</Box>
	);
};
