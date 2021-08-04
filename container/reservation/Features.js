import React from "react";
import FeaturesItem from "../../components/reservation/FeaturesItem";

function Features() {
  const Feautres = [
    {
      title: "안심비밀정책",
      text: "상담내용은 담당 선생님하고만의 비밀로 유지됩니다.  안심하고 상담하세요.",
      imgUrl: "/images/services/icon/services_icon_01.png",
    },
    {
      title: "언제 어디서나, 최대한 신속하게",
      text: "온라인, 유선상담, 오프라인 상담으로 당신이 필요로 할때 최대한 신속한 도움을 드립니다.",
      imgUrl: "/images/services/icon/services_icon_02.png",
    },
    {
      title: "성장하는 행복한심리상담센터",
      text: "수백, 수천건의 성공적 사례를 바탕으로, 저희는 매일 매달 매년 발전하고 있습니다.",
      imgUrl: "/images/services/icon/services_icon_03.png",
    },
    {
      title: "전문성",
      text: "오랫동안의 심리학에 대한 높은 헌신을 바탕으로 한 학술적 노력과 연구, 실제 풍부한 상담 경험을 가진 분들만이 함께 하고 있습니다.",
      imgUrl: "/images/services/icon/services_icon_04.png",
    },
    {
      title: "경력,경험",
      text: "각 구성원들마다 최소 수백 건의 상담경험이 있는 분들만이 행복한 심리상담센터의 구성원이 될 수 있습니다.",
      imgUrl: "/images/services/icon/services_icon_05.png",
    },
    {
      title: "신뢰",
      text: "어렵고 힘든 시기에  여러분들이 의자하고 잘 버틸 수 있도록, 극복하고 행복으로 나아갈 수 있도록 도움을 드리고 있습니다.",
      imgUrl: "/images/services/icon/services_icon_06.png",
    },
  ];

  return Feautres.map((item) => <FeaturesItem item={item} />);
}

export default Features;
