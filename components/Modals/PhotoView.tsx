import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { theme } from "@/theme";

export default ({ item }: { item: { images?: string[] } }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box>
			<Button
				variant="outlined"
				color="info"
				size="large"
				onClick={handleOpen}>
				View all {item?.images?.length} photos
			</Button>
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					<Box sx={sliderWrapperStyles}>
						<IconButton
							onClick={handleClose}
							sx={closeButtonStyles}>
							<CloseIcon sx={{ width: 50, height: 50 }} />
						</IconButton>
						<Swiper
							navigation={true}
							modules={[Navigation, Pagination]}
							pagination={{
								clickable: true
							}}
							loop>
							{item?.images?.map((el) => (
								<SwiperSlide key={el}>
									<Box sx={slideWrapperStyles}>
										<Box className="slider-image-container" />
										<Image
											src={el}
											alt={el}
											objectFit="cover"
											layout="fill"
										/>
									</Box>
								</SwiperSlide>
							))}
						</Swiper>
					</Box>
				</Box>
			</Modal>
		</Box>
	);
};

const sliderWrapperStyles = {
	".swiper": {
		width: "100vw",
		height: "100vh",
		position: "relative"
	},
	".swiper-button-prev": {
		backgroundImage: "url(/icons/images/back.png)",
		backgroundPosition: "50%",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		top: "50%",
		left: 0,
		width: 50,
		height: 50,
		position: "absolute",
		zIndex: 10000,
		transform: "translateY(-50%)",
		cursor: "pointer"
	},
	".slider-image-container": {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background:
			"linear-gradient(to right, rgba(255,255,255,0.3) 25px, rgba(0, 0, 0, 0) calc(50% - 25px), rgba(0, 0, 0, 0) calc(50% + 25px), rgba(255,255,255,0.3) calc(100% - 25px))",

		zIndex: 9
	},
	".swiper-button-next": {
		backgroundImage: "url(/icons/images/next.png)",
		backgroundPosition: "50%",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		top: "50%",
		right: 0,
		width: 50,
		height: 50,
		position: "absolute",
		transform: "translateY(-50%)",
		zIndex: 10000,
		cursor: "pointer"
	},

	".swiper-pagination-bullet": {
		background: theme.palette.common.white,
		border: `2px solid ${theme.palette.common.black}`,
		width: 10,
		height: 10
	},
	".swiper-pagination-bullet-active": {
		background: theme.palette.secondary.main,
		border: `2px solid ${theme.palette.secondary.main}`
	},
	position: "relative"
};

const slideWrapperStyles = {
	position: "relative",
	width: "100%",
	height: "100%"
};

const style = {
	position: "absolute" as "absolute",
	top: 0,
	left: 0
};

const closeButtonStyles = {
	position: "absolute",
	top: 10,
	right: 10,
	zIndex: 10001
};
