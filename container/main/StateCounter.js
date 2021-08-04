import React from "react";
import CounterNumber from "../../components/common/CounterNumber";

function StateCounter() {
  const stateCounters = [
    {
      id: 1,
      imgUrl: "images/icons/count_icon_01.png",
      datacount: 150,
      title: "이번 달 상담예약",
    },
    {
      id: 2,
      imgUrl: "images/icons/count_icon_02.png",
      datacount: 230,
      title: "현재 진행 중인 내담자 수",
    },
    {
      id: 3,
      imgUrl: "images/icons/count_icon_03.png",
      datacount: 7,
      title: "상담사 수",
    },
    {
      id: 4,
      imgUrl: "images/icons/count_icon_04.png",
      datacount: 2700,
      title: "긍정적인 변화",
    },
  ];
  return stateCounters.map((stateCount) => (
    <div className="col-sm-3 col-md-3 col-lg-3">
      <div className="shortcode-counter counter-02">
        <CounterNumber key={stateCount.id} stateCount={stateCount} />
      </div>
    </div>
  ));
}

export default StateCounter;
