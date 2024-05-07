import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Card, Box, Button } from "@mui/material";
import Rating from "@/components/Rating";
import { theme } from "@/theme";
import Walk from "@/public/icons/Walk";
import Car from "@/public/icons/Car";
import TransPort from "@/public/icons/Transport";

const CardComponent = ({ el }: any) => {
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
		// maxHeight: 300,
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
					From{" "}
					<Typography
						component={"span"}
						variant="subtitle1"
						color={"primary.main"}>
						$322
					</Typography>{" "}
					/ week
				</Typography>
				<Button
					size="small"
					color="secondary"
					disableElevation
					disableFocusRipple
					disableRipple
					disableTouchRipple
					sx={cheapStyles}>
					Cheapest in the past 10 months
				</Button>
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

export default function SuggestionsCard({ el }: any) {
	return <CardComponent {...{ el }} />;
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

const star = ({ el }: any) => (
	<Box sx={{ display: "flex", m: "10px" }}>
		<Rating rating={el?.review} />
	</Box>
);
