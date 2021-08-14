import React from "react";
import useSwrFetch from "../hook/useSwrFetch";
import BbsList from "../components/bbs/BbsList";
import { NoticeSeo } from "../components/common/seoData";
import { Spin } from "antd";

function Notice() {
  // crud
  const { swrdata, isLoading } = useSwrFetch(
    `/api/post/post?category=새로운소식`
  );

  return (
    <>
      <NoticeSeo />
      <div className="wrap_bbs">
        <div className="area_mvis bg_notice">
          <h2>새로운 소식과 이야기</h2>
          <p>
            심리상담센터 마인드케어센터를 사랑해주시는 분들에게 전달하는 이야기
          </p>
        </div>
        <div className="wrap_cont">
          <div className="notice">
            <h3 className="tit_news">
              [마인드 케어 최신 소식과 관련공지입니다.]{" "}
            </h3>
            <h2 className="tit_board">새로운 소식</h2>
            {isLoading ? (
              <div className="bbs_loading">
                <Spin tip="Loading..." />
              </div>
            ) : (
              <BbsList swrdata={swrdata} category="새로운소식" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notice;
