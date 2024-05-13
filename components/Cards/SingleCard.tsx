import HeartOutlined from "@/public/icons/HeartOutlined";
import { theme } from "@/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonGradient from "../Buttons/ButtonGradient";
import Divider from "@mui/material/Divider";
import Image from "next/image";

export default () => {
	return (
		<Box sx={wrapperStyles}>
			<Box sx={priceWrapper}>
				<Typography variant="h4" color={"grey.200"}>
					From{" "}
					<Typography
						component={"span"}
						variant="h3"
						color={"warning.main"}>
						£285
					</Typography>{" "}
					/week
				</Typography>
				<HeartOutlined />
			</Box>
			<Divider sx={{ bgcolor: "grey.200", my: 2 }} />
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<Box display={"flex"}>
					<Typography
						variant="subtitle2"
						color={"secondary.main"}
						sx={longStayStyles}>
						Long stay
					</Typography>
				</Box>
				<ButtonGradient fullwidth>Book Now</ButtonGradient>
			</Box>
			<Divider sx={{ bgcolor: "grey.200", mt: 3, mb: 2 }} />
			<Typography variant="h5">Popular!</Typography>
			<Box sx={{ display: "flex", alignItems: "flex-end" }}>
				<Typography variant="h5" color={"grey.400"}>
					89 students saved this property to their wishlist
				</Typography>
				<Box sx={{ position: "relative", width: 60, height: 60 }}>
					<Image
						src={"/images/singleCardImg.png"}
						objectFit="cover"
						layout="fill"
						alt="singleCardImg"
					/>
				</Box>
			</Box>
		</Box>
	);
};

const wrapperStyles = {
	border: `1px solid ${theme.palette.grey[200]}`,
	borderRadius: "10px",
	p: "14px",
	maxWidth: 318,
	width: "100%"
};

const priceWrapper = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between"
};

const longStayStyles = {
	border: `1px solid ${theme.palette.secondary.main}`,
	p: "1px 3px",
	borderRadius: "2px",
	background: "rgba(0, 178, 255, 0.10)",
	mb: 4
};
