import React from "react";
import useSwrFetch from "../hook/useSwrFetch";

import Moment from "react-moment";
import BbsList from "../components/bbs/BbsList";

function Notice() {
  // crud
  const { swrdata, mutate } = useSwrFetch(`/api/post/post?category=새로운소식`);

  return (
    <div className="wrap_bbs">
      <div className="area_mvis bg_notice">
        <h2>새로운 소식과 이야기</h2>
        <p>터닝포인트 마인드 케어를 사랑해주는 분들에게 전달하는 이야기</p>
      </div>
      <div className="wrap_cont">
        <div className="notice">
          <h3>[마인드 케어 최신 소식과 관련공지입니다.] </h3>
          <h2 className="tit_board">새로운 소식</h2>
          <BbsList swrdata={swrdata} category="새로운소식" />
        </div>
      </div>
    </div>
  );
}

export default Notice;
