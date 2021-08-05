import React from "react";
import { Spin } from "../../node_modules/antd/lib/index";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import Slider from "../../components/common/Swiper";
import useSwrFetch from "../../hook/useSwrFetch";

function BestReview() {
  const { swrdata, mutate, isLoading } = useSwrFetch("/api/product/comment/");
  const antLoadingIcon = (
    <Loading3QuartersOutlined style={{ fontSize: 120 }} spin />
  );
  return isLoading ? (
    <Spin tip="Loading..." size="large" indicator={antLoadingIcon} />
  ) : (
    <Slider item={swrdata} multiSlider={false} />
  );
}

export default BestReview;
