import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { slider_arr } from "../../public/data/slider_data";
import { Box, Button, Typography } from "@mui/material";
import { theme } from "@/theme";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
import { useRouter } from "next/router";

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
      opacity: number;
    };
  };

  let activeBulletStyles: ActiveBulletStyles = {
    ".swiper-pagination-bullet": {
      position: "relative",
      backgroundColor: "#fff",
      width: "10px",
      height: "50px",
      pointerEvents: "auto",
      borderRadius: 10,
      overflow: "hidden",
      opacity: 0.8,
    },
  };

  for (let i = 1; i <= completedSlides; i++) {
    activeBulletStyles[`.swiper-pagination-bullet:nth-child(${i - 1})`] = {
      position: "relative",
      backgroundColor: theme.palette.secondary.main,
      width: "10px",
      height: "50px",
      pointerEvents: "auto",
      borderRadius: 10,
      overflow: "hidden",
      opacity: 0.8,
    };
  }

  return (
    <Box sx={{ ...sliderWrapperStyles, ...activeBulletStyles }}>
      <Swiper
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        freeMode={true}
        modules={[Autoplay, Pagination]}
        direction="vertical"
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
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
              <Box sx={sliderTextStyles}>
                <Typography
                  variant="h1"
                  fontWeight={"bold"}
                  color={"white"}
                  maxWidth={400}
                >
                  {el?.description}
                </Typography>
                <Box>
                  <Button
                    onClick={() => handleGoToLink(el?.link)}
                    color="secondary"
                  >
                    {el?.buttonText}
                  </Button>
                </Box>
              </Box>
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
    pointerEvents: "none",
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

  ".swiper-vertical > .swiper-pagination-bullets, .swiper-pagination-vertical.swiper-pagination-bullets":
    {
      left: 10,
      maxWidth: 890,
      mx: "auto",
    },

  ".swiper-pagination-bullet-active": {
    poaition: "relative",
    backgroundColor: "rgba(255,255,255,0.8)",
  },

  ".swiper-pagination-bullet-active::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    background: `${theme.palette.secondary.main}`,
    animation: "progressAnimation 2200ms linear",
    transformOrigin: "top",
    borderRadius: 10,
    opacity: 0.8,
  },

  "@keyframes progressAnimation": {
    "0%": {
      transform: "scaleY(0)",
    },
    "100%": {
      transform: "scaleY(1)",
    },
  },
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
  maxWidth: 840,
  width: "100%",
};

const slideWrapperStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
};
