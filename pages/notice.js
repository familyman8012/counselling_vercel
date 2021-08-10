import React from "react";
import useSwrFetch from "../hook/useSwrFetch";

import Moment from "react-moment";
import BbsList from "../components/bbs/BbsList";
import { NextSeo } from "next-seo";

function Notice() {
  // crud
  const { swrdata, mutate } = useSwrFetch(`/api/post/post?category=새로운소식`);

  return (
    <>
      <NextSeo
        canonical="https://mindcarecenter.org/notice"
        title="새로운 소식과 이야기 | 심리상담센터 마인드케어센터"
        description="심리상담센터 마인드케어센터를 사랑해주시는 분들에게 전달하는 이야기"
        openGraph={{
          type: "website",
          title: "새로운 소식과 이야기 | 심리상담센터 마인드케어센터",
          description: `심리상담센터 마인드케어센터를 사랑해주시는 분들에게 전달하는 이야기`,
          url: "https://mindcarecenter.org/notice",
          // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next
          images: [
            {
              url: "https://mindcarecenter.org/images/seo/123.jpg",
              width: 1200,
              height: 630,
              alt: "심리상담센터 마인드케어센터 소개 홍보이미지",
            },
          ],
          site_name: "심리상담센터 마인드케어센터",
        }}
      />
      <div className="wrap_bbs">
        <div className="area_mvis bg_notice">
          <h2>새로운 소식과 이야기</h2>
          <p>
            심리상담센터 마인드케어센터를 사랑해주시는 분들에게 전달하는 이야기
          </p>
        </div>
        <div className="wrap_cont">
          <div className="notice">
            <h3>[마인드 케어 최신 소식과 관련공지입니다.] </h3>
            <h2 className="tit_board">새로운 소식</h2>
            <BbsList swrdata={swrdata} category="새로운소식" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Notice;
