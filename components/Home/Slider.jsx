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
import { slideWrapperStyles, sliderWrapperStyles } from "./components/styles";

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
