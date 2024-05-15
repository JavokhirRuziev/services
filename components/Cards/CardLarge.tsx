import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { theme } from "@/theme";
import Student from "@/public/icons/Student";
import Sale from "@/public/icons/Sale";
import ButtonGradient from "../Buttons/ButtonGradient";
import { useRouter } from "next/router";

const CardComponent = ({
	el,
	isCheap,
	sale,
	cashback,
	voucher,
	setHoveredCardId,
	isHoverAble
}: any) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const { push } = useRouter();
	const [shadowPosition, setShadowPosition] = React.useState({ x: 0, y: 0 });

	const handleMouseEnter = () => {
		setHoveredCardId(el.id);
	};
	const handleMouseLeave = () => {
		setHoveredCardId(null);
	};

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (containerRef.current) {
			const { left, top } = containerRef.current.getBoundingClientRect();
			const xOffset = (event.clientX - left) / 30;
			const yOffset = (event.clientY - top) / 30;
			setShadowPosition({ x: xOffset, y: yOffset });
		}
	};

	const handleClick = (id: string | number) => push(`/services/${id}`);

	const cardStyles = {
		":hover": {
			boxShadow: `${shadowPosition.x}px ${shadowPosition.y}px 50px -5px ${theme.palette.grey[400]}`
		},
		transition: "none",
		border: `2px solid ${theme.palette.grey[200]}`,
		maxWidth: 360,
		position: "relative",
		width: "100%",
		cursor: "pointer",
		borderRadius: "10px"
	};

	return (
		<Card
			ref={containerRef}
			data-testid="suggestion-card"
			sx={cardStyles}
			{...(isHoverAble && {
				onMouseEnter: handleMouseEnter,
				onMouseLeave: handleMouseLeave
			})}
			onMouseMove={handleMouseMove}
			onClick={() => handleClick(el?.id)}>
			<CardMedia
				component="img"
				height="195"
				image={el?.img}
				alt={el?.img}
			/>
			{voucher && (
				<Box sx={voucherStyles}>
					<Typography
						variant="body2"
						color={"common.white"}
						sx={{ zIndex: -1 }}>
						$100 Uber voucher
					</Typography>
				</Box>
			)}

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
					)}
					<Typography
						component={"span"}
						variant="subtitle1"
						color={"warning.main"}>
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
					<ButtonGradient {...buttonProps}>
						Cheapest in the past 10 months
					</ButtonGradient>
				)}
			</CardContent>
		</Card>
	);
};

export default function CardLarge({
	el,
	isCheap,
	sale,
	cashback,
	voucher,
	setHoveredCardId,
	isHoverAble
}: any) {
	return (
		<Box sx={{ width: "100%", maxWidth: 360 }}>
			<CardComponent
				{...{
					el,
					isCheap,
					sale,
					cashback,
					voucher,
					setHoveredCardId,
					isHoverAble
				}}
			/>
		</Box>
	);
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
		color: "common.white",
		boxShadow: "none"
	}
};

const voucherStyles = {
	opacity: 0.5,
	height: 32,
	position: "absolute",
	top: 163,
	right: 0,
	left: 0,
	bgcolor: "secondary.main",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
};

const buttonProps = {
	size: "small",
	disableElevation: true,
	disableFocusRipple: true,
	disableRipple: true,
	disableTouchRipple: true,
	sx: cheapStyles
};
