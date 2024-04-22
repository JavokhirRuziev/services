import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { slider_arr } from "../../public/data/slider_data";
import {
  A11y,
  Autoplay,
  FreeMode,
  Mousewheel,
  Pagination,
} from "swiper/modules";
import { Box } from "@mui/material";
import { theme } from "@/theme";

export default () => {
  return (
    <Box sx={sliderWrapperStyles}>
      <Swiper
        loop={true}
        grabCursor
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        freeMode={true}
        modules={[Autoplay, FreeMode, Mousewheel, Pagination, A11y]}
        direction="vertical"
        pagination
      >
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
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

const sliderWrapperStyles = {
  ".swiper": {
    width: "100%",
    height: "70vh",
  },

  ".slider-image-container": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2))",
    zIndex: 9,
  },

  ".swiper-pagination-bullet": {
    backgroundColor: "#fff",
    width: "20px",
    height: "20px",
    opacity: 0.8,
  },

  ".swiper-vertical > .swiper-pagination-bullets, .swiper-pagination-vertical.swiper-pagination-bullets":
    {
      left: 10,
    },

  ".swiper-pagination-bullet-active": {
    background: `${theme.palette.secondary.main}`,
  },
};

const slideWrapperStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
};
