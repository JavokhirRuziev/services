import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@/components/Rating";
import { theme } from "@/theme";

type cardTypes = {
	el: {
		img: string;
		author_name: string;
		organization_name: string;
		review: number;
		description: string;
		id: number;
	};
	setHoveredCardId: any;
	hoveredCardId: any;
};

export default function MediaControlCard({ el, setHoveredCardId }: cardTypes) {
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
	const handleMouseEnter = () => {
		setHoveredCardId(el.id);
	};
	const handleMouseLeave = () => {
		setHoveredCardId(null);
	};
	return (
		<Box>
			<Card
				sx={{
					display: "flex",
					height: 200,
					cursor: "pointer",
					maxWidth: 750,
					":hover": {
						boxShadow: `${shadowPosition.x}px ${shadowPosition.y}px 50px -5px ${theme.palette.grey[400]}`
					},
					transition: "none"
				}}
				ref={containerRef}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				<CardMedia
					component="img"
					sx={{ width: 251 }}
					image={el?.img}
					alt={el?.img}
				/>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography variant="h4">{el?.author_name}</Typography>
						<Typography variant="h5" color="text.secondary">
							{el?.organization_name}
						</Typography>
						<Rating {...{ rating: el?.review }} />
						<Typography variant="body2" color="text.secondary">
							{el?.description.slice(0, 150)}...
						</Typography>
					</CardContent>
				</Box>
			</Card>
		</Box>
	);
}
