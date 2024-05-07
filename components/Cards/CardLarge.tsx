import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Card, Box, Button, Divider } from "@mui/material";
import { theme } from "@/theme";
import Student from "@/public/icons/Student";
import Sale from "@/public/icons/Sale";

const CardComponent = ({ el, isCheap, sale, cashback }: any) => {
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
		maxWidth: 360,
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
				<Typography variant="body3" mb={1}>
					{el?.author_name}
				</Typography>
				<Typography
					variant="body4"
					component={"div"}
					color={"grey.600"}
					mb={1}>
					From{" "}
					<Typography
						component={"span"}
						variant="body3"
						color={"primary.main"}>
						$322
					</Typography>{" "}
					/ week
				</Typography>
				{sale && (
					<Box sx={directionStyles}>
						<Sale />
						<Typography
							variant="body2"
							color={"primary.main"}
							fontWeight={600}>
							30% OFF
						</Typography>
					</Box>
				)}
				{cashback && (
					<Box sx={directionStyles}>
						<Sale />
						<Typography
							variant="body2"
							color={"primary.main"}
							fontWeight={600}>
							$500 cashback
						</Typography>
					</Box>
				)}
				<Box sx={{ ...directionStyles, mb: 2 }}>
					<Student />
					<Typography variant="body2">
						London Metropolitan University
					</Typography>
					<Divider
						orientation="vertical"
						flexItem
						sx={{ bgcolor: "black" }}
					/>
					<Typography variant="body2">21 min</Typography>
				</Box>

				{isCheap && (
					<Button size="small" color="secondary" sx={cheapStyles}>
						Cheapest in the past 10 months
					</Button>
				)}
			</CardContent>
		</Card>
	);
};

export default function SuggestionsCard({ el, isCheap, sale, cashback }: any) {
	return <CardComponent {...{ el, isCheap, sale, cashback }} />;
}

const directionStyles = {
	display: "flex",
	alignItems: "center",
	columnGap: 1
};

const cheapStyles = {
	cursor: "auto",
	boxShadow: "none",
	":hover": {
		bgcolor: "secondary.main",
		color: "white",
		boxShadow: "none"
	}
};