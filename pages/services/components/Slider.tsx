import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Box from "@mui/material/Box";
import { Autoplay, FreeMode, Mousewheel, Navigation } from "swiper/modules";
import Typography from "@mui/material/Typography";
import Location from "@/public/icons/Location";
import Button from "@mui/material/Button";
import PhotoView from "@/components/Modals/PhotoView";

type ItemTypes = {
	item: {
		images?: string[];
		author_name?: string;
		organization_name?: string;
	};
};

export default ({ item }: ItemTypes) => {
	return (
		<Box sx={sliderWrapperStyles}>
			<Swiper
				data-testid="slider"
				loop={true}
				slidesPerView={4}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				freeMode={true}
				navigation
				grabCursor
				modules={[Autoplay, Mousewheel, FreeMode, Navigation]}>
				{item?.images?.map((el) => (
					<SwiperSlide key={el}>
						<Box sx={slideWrapperStyles}>
							<Image
								src={el}
								alt={el}
								style={{ objectFit: "cover" }}
								fill
							/>
						</Box>
					</SwiperSlide>
				))}
				<Box sx={infoWrapperStyles}>
					<Box sx={infoWrapperSecondaryStyles}>
						<Box>
							<Typography variant="h1" color={"common.white"}>
								{item?.author_name}
							</Typography>
							<Typography variant="h4" color={"grey.200"}>
								From{" "}
								<Typography
									component={"span"}
									variant="h3"
									fontWeight={"bold"}
									color={"warning.main"}>
									£285
								</Typography>{" "}
								/week
							</Typography>
							<Typography
								component={"div"}
								variant="h5"
								sx={addressTextStyles}>
								<Location />
								{item?.organization_name}
								<Typography
									component={"span"}
									sx={viewMapStyles}>
									View map
								</Typography>
							</Typography>
						</Box>
						<Box>
							<PhotoView {...{ item }} />
						</Box>
					</Box>
				</Box>
			</Swiper>
		</Box>
	);
};

const sliderWrapperStyles = {
	".swiper": {
		width: "100%",
		height: 426
	},

	".slider-image-container": {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background:
			"linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))",
		zIndex: 1
	},
	position: "relative",
	backdropFilter: "blur(5px)"
};

const slideWrapperStyles = {
	position: "relative",
	width: "100%",
	height: "100%"
};

const addressTextStyles = {
	display: "flex",
	alignItems: "center",
	columnGap: 1,
	mt: 2,
	fontSize: "20px !important",
	color: "common.white"
};

const infoWrapperStyles = {
	zIndex: 9999,
	position: "absolute",
	bottom: 0,
	left: 0,
	right: 0,
	background: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))"
};

const infoWrapperSecondaryStyles = {
	maxWidth: 1117,
	mx: "auto",
	mb: 4,
	mt: 7,
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-end"
};

const viewMapStyles = {
	textDecoration: "underline",
	color: "primary.main",
	cursor: "pointer",
	fontSize: "20px !important"
};
