import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { theme } from "@/theme";
import Walk from "@/public/icons/Walk";
import Car from "@/public/icons/Car";
import TransPort from "@/public/icons/Transport";
import ButtonGradient from "../Buttons/ButtonGradient";

const CardComponent = ({ el, voucher }: any) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const [shadowPosition, setShadowPosition] = React.useState({ x: 0, y: 0 });

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (containerRef.current) {
			const { left, top } = containerRef.current.getBoundingClientRect();
			const xOffset = (event.clientX - left) / 30;
			const yOffset = (event.clientY - top) / 30;
			setShadowPosition({ x: xOffset, y: yOffset });
		}
	};

	const cardStyles = {
		maxWidth: 263,
		":hover": {
			boxShadow: `${shadowPosition.x}px ${shadowPosition.y}px 50px -5px ${theme.palette.grey[400]}`
		},
		transition: "none",
		border: `2px solid ${theme.palette.grey[200]}`,
		width: "100%"
	};

	return (
		<Card
			ref={containerRef}
			data-testid="suggestion-card"
			sx={cardStyles}
			onMouseMove={handleMouseMove}>
			<CardMedia
				component="img"
				height="160"
				image={el?.img}
				alt={el?.img}
			/>
			<CardContent sx={{ p: "10px 16px 0px" }}>
				<Typography variant="subtitle1" mb={1}>
					{el?.author_name}
				</Typography>
				<Typography
					variant="subtitle2"
					component={"div"}
					color={"grey.600"}
					mb={1}>
					{voucher && (
						<>
							From{" "}
							<Typography
								component={"span"}
								variant="subtitle2"
								color={"grey.600"}
								sx={{ textDecoration: "line-through" }}>
								200${" "}
							</Typography>
						</>
					)}{" "}
					<Typography
						component={"span"}
						variant="subtitle1"
						color={"warning.main"}>
						$322
					</Typography>{" "}
					/ week
				</Typography>
				<ButtonGradient {...buttonProps}>
					Cheapest in the past 10 months
				</ButtonGradient>
			</CardContent>
			<CardActions sx={{ p: "0px 16px 16px" }}>
				<Box sx={cardActionsWrapperStyles}>
					{actions_arr.map((el, index) => (
						<Box
							key={index}
							sx={{
								display: "flex",
								alignItems: "center",
								columnGap: "4px"
							}}>
							{el?.icon}
							<Typography
								variant="body2"
								fontSize={"12px !important"}>
								{el?.text}
							</Typography>
						</Box>
					))}
				</Box>
			</CardActions>
		</Card>
	);
};

export default function CardBase({ el, voucher }: any) {
	return (
		<Box>
			<CardComponent {...{ el, voucher }} />
		</Box>
	);
}

const cardActionsWrapperStyles = {
	display: "flex",
	width: "100%",
	p: 0,
	justifyContent: "space-between"
};

const cheapStyles = {
	mb: 2,
	cursor: "auto",
	boxShadow: "none",
	":hover": {
		bgcolor: "secondary.main",
		color: "white",
		boxShadow: "none"
	}
};

const actions_arr = [
	{ icon: <Walk />, text: "67 mins" },
	{ icon: <Car />, text: "16 mins" },
	{ icon: <TransPort />, text: "23 mins" }
];

const buttonProps = {
	size: "small",
	color: "secondary",
	disableElevation: true,
	disableFocusRipple: true,
	disableRipple: true,
	disableTouchRipple: true,
	sx: cheapStyles
};
