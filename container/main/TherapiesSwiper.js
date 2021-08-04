import React from "react";
import Slider from "../../components/common/Swiper";
import { useSelector } from "react-redux";

function TherapiesSwiper() {
  const { consulting } = useSelector((state) => state.product);
  const sliderOption = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <Slider item={consulting} breakPoint={sliderOption} multiSlider={true} />
  );
}

export default TherapiesSwiper;
