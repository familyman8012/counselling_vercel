import React from "react";

function Freebanner() {
  return (
    <div className="action-box-01">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="action-box-01__wrapp">
              <h3 className="action-box-01__title title-comm2">
                정식 상담 문의!{" "}
                <span className="title-comm2 blockel">
                  마인드케어센터 카톡채널
                </span>
              </h3>
              <p className="action-box-01__subtitle">
                최고의 심리상담과 심리코칭을 통해 내담자 분들이 진정한 행복을
                얻을 수 있는 변화를 이끄는 것이 우리의 사명입니다.
              </p>
            </div>
            <div className="action-box-01__btn-wrapp">
              <span
                className="action-box-01__btn cursor"
                onClick={() => ChannelIO("show")}
              >
                정식상담 문의
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Freebanner;
