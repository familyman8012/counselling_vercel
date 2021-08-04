import React from "react";
import Slider from "../../components/common/Swiper";

function BestReview() {
  const reviews = [
    {
      cont: `
          “마지막이다라는 심정으로 남자친구와 커플심리상담을
                        신청하고, 혹시나 하는 마음으로 찾아갔습니다만 왜
                        지금까지 반복된 싸움으로 다투며 힘들어했었는지 진작
                        알았으면 얼마나 좋았을까 생각이 들었습니다. 선생님들의
                        말씀대로 하나씩 하나씩 저희 커플이 지켜나가며 다시
                        사랑을 만들어나가 드디어 결혼해요. 설레임긍정심리센터는
                        저에게 잊혀지지 않는 곳이 될 것같습니다.”
      `,
      imgUrl: "images/shortcodes/users/user_02.jpg",
      userName: "김혜정",
      joinCalss: "연인관계 종합 심리상담 솔루션",
    },
    {
      cont: `
          “직장을 잃고 여자친구와 헤어진 후 자존감을 잃고 방황하며 헤매던
          제게 한줄기의 빛이 되준 윤은석 선생님에게 감사인사드립니다.
          단순히 고통에서 벗어나는 것을 넘어 행복한 삶으로 인도해주셨고,
          그 결과 지금 그 전보다 더 좋은 직장에서 내 자신답게 일하며 높은 평가를 받고 있습니다.”
      `,
      imgUrl: "images/shortcodes/users/user_01.jpg",
      userName: "이지성",
      joinCalss: "나를 사랑하게 되는 자존감 코칭 졸업자",
    },
    {
      cont: `
          “우리 아이가 달라졌어요. 항상 말썽을 피우던 아들로
                        인해서 너무 걱정됐는데, 긍정심리학은 정말 대단한 것
                        같아요. 아들이 젠틀해졌을 뿐 아니라 스스로 공부도 열심히
                        하고 삶에 대해 긍정적으로 바라보며 열정을 갖게 되었어요.
                        믿어지지 않는 결과, 역시 최고의 선생님들!”
      `,
      imgUrl: "images/shortcodes/users/user_03.jpg",
      userName: "진미숙",
      joinCalss: "가족관계 컨설팅",
    },
  ];
  return <Slider item={reviews} multiSlider={false} />;
}

export default BestReview;
