import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { slider_arr } from "../../public/data/slider_data";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { theme } from "@/theme";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
import { useRouter } from "next/router";
import Search from "@/public/icons/Search";

export default () => {
	const { push } = useRouter();
	const [completedSlides, setCompletedSlides] = useState(0);
	const handleGoToLink = (link: string) => {
		push(link);
	};

	const handleSlideChange = (swiper: any) => {
		setCompletedSlides(swiper.realIndex + 1);
	};

	type ActiveBulletStyles = {
		[key: string]: {
			position: string;
			backgroundColor: string;
			width: string;
			height: string;
			pointerEvents: string;
			borderRadius: number;
			overflow: string;
			opacity: number | string;
		};
	};

	let activeBulletStyles: ActiveBulletStyles = {
		".swiper-pagination-bullet": {
			position: "relative",
			backgroundColor: `rgba(255,255,255,0.4)`,
			width: "10px",
			height: "90px",
			pointerEvents: "auto",
			borderRadius: 10,
			overflow: "hidden",
			opacity: 1
		}
	};

	for (let i = 1; i <= completedSlides; i++) {
		activeBulletStyles[`.swiper-pagination-bullet:nth-child(${i - 1})`] = {
			position: "relative",
			backgroundColor: theme.palette.common.white,
			width: "10px",
			height: "90px",
			pointerEvents: "auto",
			borderRadius: 10,
			overflow: "hidden",
			opacity: 1
		};
	}

	return (
		<Box sx={{ ...sliderWrapperStyles, ...activeBulletStyles }}>
			<Swiper
				data-testid="slider"
				loop={true}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				freeMode={true}
				modules={[Autoplay, Pagination]}
				direction="vertical"
				pagination={{
					clickable: true
				}}
				onSlideChange={(swiper) => handleSlideChange(swiper)}>
				{slider_arr.map((el) => (
					<SwiperSlide key={el?.img}>
						<Box sx={slideWrapperStyles}>
							<Box className="slider-image-container" />
							<Image
								src={el?.img}
								alt={el?.img}
								objectFit="cover"
								layout="fill"
							/>
						</Box>
						<Box sx={sliderTextStyles}>
							<Typography
								variant="h1"
								fontWeight={"bold"}
								color={"white"}
								maxWidth={600}>
								{el?.description}
							</Typography>
							<Box>
								<Button
									onClick={() => handleGoToLink(el?.link)}
									color="secondary"
									size="large"
									startIcon={<Search />}>
									{el?.buttonText}
								</Button>
							</Box>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

const sliderWrapperStyles = {
	position: "sticky",
	top: 0,
	zIndex: -1,
	".swiper": {
		width: "100%",
		height: "80vh",
		pointerEvents: "none",
		minHeight: 682
	},

	".slider-image-container": {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background:
			"linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
		zIndex: 9
	},

	".swiper-vertical > .swiper-pagination-bullets, .swiper-pagination-vertical.swiper-pagination-bullets":
		{
			left: 10,
			maxWidth: 1200,
			mx: "auto"
		},

	".swiper-pagination-bullet-active": {
		background: `${theme.palette.common.white}`
	},

	".swiper-pagination-bullet-active::before": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		zIndex: 1,
		background: `${theme.palette.common.white}`,
		animation: "progressAnimation 4200ms linear",
		transformOrigin: "top",
		borderRadius: 10
	},
	"@keyframes progressAnimation": {
		"0%": {
			transform: "scaleY(0)"
		},
		"100%": {
			transform: "scaleY(1)"
		}
	}
};

const sliderTextStyles = {
	display: "flex",
	flexDirection: "column",
	rowGap: "30px",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: "translateX(-50%) translateY(-50%)",
	zIndex: 9999,
	maxWidth: 1140,
	width: "100%"
};

const slideWrapperStyles = {
	position: "relative",
	width: "100%",
	height: "100%"
};
