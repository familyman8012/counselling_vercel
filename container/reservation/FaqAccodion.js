import React from "react";
import Accordion from "../../components/common/Accordion";

function FaqAccodion() {
  const faqList = [
    {
      title: "마인드케어센터는 다른 상담센터에 비해 무엇이 다른가요?",
      text: (
        <p>
          안녕하세요? 마인드케어센터입니다.
          <br /> 마인드케어센터는 매일 매일 찾아와주시는 내담자 한분 한분에게
          <br />
          진정한 도움을 드리기 위해 최선을 다하고 있습니다.
          <br /> <br />
          저희의 목표는 내담자들의 마음의 짐을 덜어드리는 것만이 아닙니다.
          <br />
          진정한 행복에 대한 추구, 행복한 새로운 삶을 만들어드리는 것이 저희의
          진정한 목표이며, <br /> 그러기 위한 현실에서의 변화가 필요하다면
          현실적 변화의 도움까지
          <br />
          드릴 수 있는 솔루션을 드릴 수 있는 점이 마인드케어만의 장점이라 할 수
          있습니다. <br />
          <br />
          그런 목표가 바로 계속해서 혁신과 변화와 도전을 주저하지 않는
          이유입니다.
          <br />
          다양한 심리학에 대한 현실적 반영은 물론, 필요한 경우, 심리 전문가 뿐
          아니라, <br />
          다양한 분야의 전문가와의 협력을 통해 내담자가 진정 바라는 현실에
          도달할 수 있도록 노력하고 있습니다.
          <br />
          현실에서의 변화, 자그마한 성공적인 변화부터 <br /> 큰 삶의 변화가
          진정한 심리적인 행복에도 크게 도움이 된다고 믿기때문입니다.
        </p>
      ),
    },
    {
      title: "상담 프로그램 및 비용은 어떻게 되나요?",
      text: (
        <p>
          저희는 상담에 있어 저렴한 상담을 추구하지 않습니다. <br />
          치열한 경쟁에 의해, 상담업계에서 점차 간단한 텍스트 상담이 늘어나고
          있지만, <br /> 저렴한 비용의 상담보다는 상담의 퀄리티를 높이는데
          주력하며 프리미엄 상담을 추구하고 있습니다. <br /> <br /> 훌륭한
          선생님들을 모셔오는 데 집중하며, 선생님들의 생활이 안정될 때 <br />
          내담자분들에 대한 상담 역시 전문화, 고급화 된다고 생각하기 때문입니다.{" "}
          <br /> <br /> 저희는 회기당 15만원의 비용으로 진행되며, 종합적인
          도움을 드리는 종한상담I, 종합상담II 및 개인맞춤 상담에서는 <br />
          70~80만원 150만원이 넘는 상담이 이루어지고 있습니다.
          <br />
          <br /> 상담의 질을 높이기 위해 앞으로도 계속해서 국내 최고의
          선생님들을 모시는 데 집중할 예정이며,
          <br /> 상담 비용을 저렴하게 하며 상담의 질을 높이기보다는 상담 비용을
          더 높이더라도
          <br /> 내담자들이 진정으로 큰 도움을 받을 수 있는 프리미엄 상담을
          만들어나갈 예정입니다.{" "}
        </p>
      ),
    },
    {
      title: "정식상담 문의는 무엇인가요?",
      text: (
        <p>
          정식상담에 앞서, 내담자분들은 선생님들이 어떤 분들이신지,
          <br />
          선생님들은 내담자분들이 어떠한 분이신지 서로 알아갈 시간이 필요합니다.
          <br />
          <br />
          어떤 상황에서 찾아오셨는지에 대해 상담선생님들은 아셔야하며,
          <br />
          내담자분들은 어떤 상담을 받을 것인지를 알아야 합니다.
          <br />
          <br />
          이러한 첫 만남이 바로 정식상담 문의입니다.
          <br />
          정식상담 문의을 통해, 서로에 대해 알게 되며 이후 정식상담을 진행할지를
          판단하게 됩니다.
          <br />
          <br />
          정식상담 문의은 비교적 짧은 시간 (15분 ~ 20분)동안 이루어지며, <br />
          현재상황진단, 앞으로의 상담안내에 대한 이야기를 해드리며, <br /> 어떤
          도움을 받으실 수 있을지에 대해 이해하는 시간입니다.
          <br />
          <br />
          이후 정식상담 신청을 통해 본격적으로 도움을 받으실 수 있습니다.
          <br /> 정식상담 문의 진행시, 상담신청게시판에 상담내용을 적어주시고{" "}
          <br />
          (상담내용은 비밀글로 본인과 담당선생님외에는 누구도 볼 수 없게
          저장됩니다.) <br />
          시간약속을 잡고 정식상담 문의가 진행됩니다.
          <br />
          <br />
        </p>
      ),
    },
    {
      title: "선생님들은 어떠한 분들이신가요? 신뢰하실 수 있는 분들이신가요?",
      text: (
        <p>
          저희는 내담자들의 모든 정보들에 대해 절대적으로 보호함과 동시에,
          <br />
          선생님들에 대한 신원도 전면에 걸지 않고 있습니다.
          <br />
          <br />
          내담자가 선택해야하는 지점은 그럴 듯한 구색보다는
          <br /> 자신에게 맞는 진정한 진리를 찾는 것이 좋다고
          생각하기때문입니다.
          <br />
          <br />
          마인드케어센터의 선생님들은, 여느 심리상담센터와 마찬가지로
          <br />
          서울 명문 심리학과 석사이상의 자격을 가진 선생님들이 대부분이지만,
          <br />
          <br />
          다른 심리상담센터와는 다르게 각 상담카테고리에 따라,
          <br />
          <br /> 기존 심리상담센터에서는 만나기 어려웠던 전문 분야의 선생님들도
          삼고초려해서 모신 상황입니다.
          <br /> 저희는 오직 내담자들의 근본적 고민들을 해결하는 데 집중하고
          있으며,
          <br /> 그로써 마음의 평화와 행복을 얻을 수 있도록 안내하는 것만을
          목표로 삼고 있기때문입니다.
        </p>
      ),
    },
    {
      title: "마인드케어센터에서 상담을 받으면 될까요?",
      text: (
        <p>
          상담은 내담자와 상담선생님간의 강력한 유대감을 바탕으로 진행되는 만큼,
          <br />
          자신에게 맞는 선생님을 찾는 것은 매우 중요한 일이라 할 수 있습니다.
          <br />
          <br />
          그런 만큼 힘든 상황이겠지만, 저희에 대해 더 자세하게 알아보고 신청을
          주시기 바랍니다.
          <br />
          저희의 칼럼도 꼼꼼히 읽어보시고, 후기도 꼼꼼히 읽어보시고 저희의 가치,
          <br />
          철학도 살펴보신 후 자신에게 맞을 것 같다고 생각하신 후 신청해주시기
          바랍니다.
        </p>
      ),
    },
    {
      title: "상담을 받으면 도움이 되나요?",
      text: (
        <p>
          저희는 최고의 선생님들만을 모십니다.
          <br />
          만약 내담자가 도움을 원하는 데 저희에게 현재로써 역량이 부족하다
          느낀다면
          <br />
          최고의 선생님을 스카웃을 해서라도, 상담에 꼭 필요한 클래스 및 세션을
          열고 진행을 합니다.
          <br />
          <br />
          여러분들은 오직 다시 행복을 위한 노력만 해주시기 바랍니다.
          <br />그 외의 필요한 것들은 마인드케어센터가 모두 준비하겠습니다.
          <br />
          <br />
          내담자들이 받을 수 있는 최고의 효과,
          <br /> 반드시 최선, 최고라는 단어가 부끄럽지 않은 마인드케어센터가
          되겠습니다.
        </p>
      ),
    },
    {
      title: "어떻게 문의 및 신청을 히면 되나요?",
      text: (
        <p>채널톡으로 말씀주셔도 되고, 카카오톡채널으로 연락주셔도 됩니다.</p>
      ),
    },
  ];
  return <Accordion textList={faqList} />;
}

export default FaqAccodion;
