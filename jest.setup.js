import "@testing-library/jest-dom";
jest.mock("swiper/react", () => ({
  Swiper: () => null,
  SwiperSlide: () => null,
}));
// jest.setup.js
module.exports = require("identity-obj-proxy");
