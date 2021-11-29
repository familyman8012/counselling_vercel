import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  consulting: [
    {
      id: 1,
      title: "나를 사랑하게 되는 자존감 코칭",
      text: "높은 자존감을 갖고 싶지만 방법을 모르는 사람, 낮은 자존감 때문에 내면의 불화와 갈등을 겪는 분들을 위해 건강한 자존감을 회복하도록 돕고 있습니다.",
      link: "products/1",
      imgUrl: "/images/about_us/owl/tip101t036126.jpg",
      alt: "자존감",
    },
    {
      id: 2,
      title: "연인관계",
      text: "이별위기, 이혼위기, 트러블, 이별극복, 부부싸움, 재회, 성격차이극복등에 관한 도움을 드리고 있습니다.",
      link: "products/2",
      imgUrl: "/images/about_us/owl/tip034t034276.jpg",
      alt: "연애, 이별, 재회, 이혼, 트러블",
    },
    {
      id: 3,
      title: "가족관계",
      text: "가정에서의 다양한 불화 및 문제를 해결할 수 있는 최선의 방법을 알려드리고 있습니다.",
      link: "products/3",
      imgUrl: "/images/about_us/owl/tip101t009186.jpg",
      alt: "가정불화해결",
    },
    {
      id: 4,
      title: "사회/직장관계",
      text: "사회와 직장에서의 어려움을 겪고 있는 분들을 위해 맞춤 상담이 이루어지고 있습니다.",
      link: "products/4",
      imgUrl: "/images/about_us/owl/tip239t000982.jpg",
      alt: "직장문제,직장스트레스",
    },

    {
      id: 5,
      title: "우울, 불안, 번아웃, 스트레스를 이기는 멘탈관리 프로젝트",
      text: "명상, 긍정심리학, 감성지능등을 활용한 18가지 회복탄력성 실전 프로젝트",
      link: "products/5",
      imgUrl: "/images/about_us/owl/tip113t000740.jpg",
      alt: "번아웃, 스트레스 해결",
    },
    {
      id: 6,
      title: "발표력 향상, 발표불안, 무대공포증 극복, 사회성개선, 스피치",
      text: "심리학과 스피치트레이닝 둘 다에 능통한 전문가로부터의 도움을 받을 수 있습니다.",
      link: "products/6",
      imgUrl: "/images/about_us/owl/tip114t005618.jpg",
      alt: "스피치트레이닝,발표력",
    },
    {
      id: 7,
      title: "성공으로 이끄는 당신의 이미지변화, 이미지컨설팅",
      text: "성공에 있어서 긍정적 인상을 전달하는 것은 매우 중요합니다.  전체적인 이미지메이킹이 진행됩니다.",
      link: "products/7",
      imgUrl: "/images/about_us/owl/tip114t002546_l.jpg",
      alt: "이미지메이킹",
    },
    {
      id: 8,
      title: "8주 성공습관/감정관찰",
      text: "인생은 매일 반복되는 습관들의 루틴으로 결정됩니다. 성공으로 이끄는 습관 루틴을 만드는 법을 코칭합니다.",
      link: "products/8",
      imgUrl: "/images/about_us/owl/tc00480000250.jpg",
      alt: "성공습관",
    },
  ],
  priceItem: [
    {
      id: 1,
      title: "기본상담",
      price: "100",
      payUrl: "http://b2p.ooo/o/oy",
    },
    {
      id: 2,
      title: "심층상담",
      price: "450000",
      payUrl: "http://b2p.ooo/o/oy",
    },
    {
      id: 3,
      title: "Reborn I",
      price: "700000",
      payUrl: "http://b2p.ooo/o/oz",
    },
    {
      id: 4,
      title: "Reborn II",
      price: "800000",
      payUrl: "http://b2p.ooo/o/oA",
    },
    {
      id: 5,
      title: "VIP",
      price: "1300000",
      payUrl: "http://b2p.ooo/o/oB",
    },
    {
      id: 6,
      title: "Premium",
      price: "3000000",
      payUrl: "http://b2p.ooo/o/oB",
    },
    {
      id: 7,
      title: "Lightning",
      price: "5000000",
      payUrl: "http://b2p.ooo/o/oB",
    },
  ],
  isModal: false,
  detailInfo: null,
  selectPrice: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadDetail: (state, action) => {
      state.detailInfo = state.consulting.filter(
        (product) => product.id === Number(action.payload)
      );
    },
    priceSelect: (state, action) => {
      if (action.payload !== 0) {
        state.selectPrice = state.priceItem.filter(
          (price) => price.id === Number(action.payload)
        );
        state.isModal = !state.isModal;
      } else {
        state.selectPrice = null;
        state.isModal = false;
      }
    },
    onisModal: (state) => {
      state.isModal = !state.isModal;
    },
  },
});

export const { loadDetail, priceSelect, onisModal } = productSlice.actions;
export default productSlice.reducer;
