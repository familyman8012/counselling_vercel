// import Swiper core and required modules
import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";

// install Swiper modules
SwiperCore.use([Navigation]);

const Slider = ({ item, breakPoint, multiSlider }) => {
  const [domReady, setdomReady] = useState(false);

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      setdomReady(true);
    }
  }, []);

  const [spinLoading, setSpinLoading] = useState(false);
  const router = useRouter();
  const antLoadingIcon = (
    <Loading3QuartersOutlined style={{ fontSize: 120 }} spin />
  );
  const routerMove = (link) => {
    setSpinLoading(true);
    router.push(link);
  };
  return multiSlider ? (
    <>
      {spinLoading && (
        <Spin tip="Loading..." size="large" indicator={antLoadingIcon} />
      )}
      {domReady && (
        <Swiper
          navigation={{
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          }}
          breakpoints={breakPoint}
          className="mySwiper"
        >
          {item.map((slides) => {
            const { link, imgUrl, alt, title, text } = slides;
            return (
              <SwiperSlide key={slides.title}>
                <div
                  className="owl-treatments"
                  onClick={() => routerMove(link)}
                >
                  <figure className="owl-treatments__img">
                    <img src={imgUrl} alt={alt} />
                  </figure>
                  <h4 className="owl-treatments__title">{title}</h4>
                  <div className="owl-treatments__text">
                    <p>{text}</p>
                  </div>
                  <a className="owl-treatments__btn">more</a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      <div className="swiper-btn-prev">prev</div>
      <div className="swiper-btn-next">next</div>
    </>
  ) : (
    <>
      {domReady && (
        <Swiper className="mySwiper">
          {item?.map((slides, i) => {
            const { content, name, reviewTitle } = slides;
            return (
              <SwiperSlide key={slides.reviewTitle + i}>
                <div className="owl-theme-01__item">
                  <div className="owl-theme-01__item-text">
                    <p>{content}</p>
                  </div>
                  <div className="owl-theme-01__item-user">
                    <h3 className="owl-theme-01__item-user-name">{name}</h3>
                    <p className="owl-theme-01__item-user-subtitle">
                      {reviewTitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

export default Slider;
