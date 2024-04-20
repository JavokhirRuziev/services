import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { slider_arr } from "../../public/data/slider_data";
import { Autoplay, FreeMode, Mousewheel, Pagination } from "swiper/modules";
import { Box } from "@mui/material";

export default () => {
  return (
    <Box
      sx={{
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
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 9,
        },

        ".swiper-pagination-bullet": {
          backgroundColor: "#f5f5f5",
          marginBottom: "24px !important",
          width: "15px",
          height: "15px",
        },

        ".swiper-pagination-bullet-active": {
          background: "#3f88b5",
        },
      }}
    >
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        grabCursor
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        freeMode={true}
        modules={[Autoplay, FreeMode, Mousewheel, Pagination]}
      >
        {slider_arr.map((el) => (
          <SwiperSlide key={el?.img}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
              position="relative"
              width="100%"
              height="100%"
            >
              <Box className="slider-image-container" />
              <Image
                src={el?.img}
                alt={el?.name}
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
