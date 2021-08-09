import React from "react";
import useSwrFetch from "../hook/useSwrFetch";

import Moment from "react-moment";
import BbsList from "../components/bbs/BbsList";

function Counselling() {
  // crud
  const { swrdata, mutate } = useSwrFetch(`/api/post/post?category=상담사연`);
  return (
    <div className="wrap_bbs">
      <div className="area_mvis">
        <h2>심리상담 사연작성</h2>
        <p>진단을 위해 꼼꼼하게 사연을 작성해주시기 바랍니다.</p>
      </div>
      <div className="wrap_cont">
        <div className="notice">
          <h3>[본격적인 심리상담 시작 전 분석을 위해 필수적인 과정입니다.] </h3>
          <p>
            상담사연 작성 후, 카톡으로 사연작성 완료했다고 알려주시면 진단과정에{" "}
            들어갑니다. <br />
            사연작성 전에 내담자는 아래의 글들을 꼼꼼하게 읽어주시기 바랍니다.
            마인드케어의 상담은 어떤 상담인지 알고 시작해야겠죠?
          </p>
          <ul>
            <li>
              1) 심리상담, 마인드케어센터에서 확실하게!
              <br />
              https://seolleim.kr/notice/?idx=1628424&bmode=view
            </li>
            <li>
              2) 심리상담, 오해와 이해. 상담받기 전 꼭 알아두세요!
              <br />
              https://seolleim.kr/notice/?idx=1628424&bmode=view
            </li>
            <li>
              3) 심리상담, 다시 행복해질 수 있을까?
              <br />
              https://seolleim.kr/notice/?idx=1628424&bmode=view
            </li>
          </ul>
          <h2 className="tit_board">심리상담</h2>
          <BbsList swrdata={swrdata} category="상담사연" />
        </div>
      </div>
    </div>
  );
}

export default Counselling;
