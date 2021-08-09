import React from "react";
import CounterNumber from "../../components/common/CounterNumber";

function StateCounter() {
  const stateCounters = [
    {
      id: 1,
      datacount: 150,
      title: "이번 달 심리상담예약",
    },
    {
      id: 2,
      datacount: 230,
      title: "현재 진행 중인 내담자 수",
    },
    {
      id: 3,
      datacount: 7,
      title: "심리상담사 수",
    },
  ];
  return stateCounters.map((stateCount) => (
    <div className="shortcode-counter">
      <CounterNumber key={stateCount.id} stateCount={stateCount} />
    </div>
  ));
}

export default StateCounter;
