import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import TherapiesSwiper from "../container/main/TherapiesSwiper";
import StateCounter from "../container/main/StateCounter";
import BestReview from "../container/main/BestReview";
import VideoPlay from "../components/common/VideoPlay";
import Link from "next/link";
import { IndexSeo } from "../components/common/seoData";
import { KakaoMapLauncher } from "../components/common/KakaoMap";

export default function Home() {
  useEffect(() => {
    {
      KakaoMapLauncher("map-canvas", 37.48456819620618, 126.88059249796527);
    }
  });

  return (
    <div>
      <IndexSeo />

      <main className="content-row wrap_index_main">
        <div className="img-box-02">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-left mainvis_area">
                <p className="subtitle-07">
                  우리는 현실에서의 다양한 심리적인 어려움에 대한 해결을 필요로
                  하는 분들을 위한 심리상담센터입니다
                </p>
                <h2 className="title-06">
                  <span>긍정 심리학은</span>
                  <br />
                  당신의 삶을 행복으로
                  <br /> 이끌 것입니다.
                </h2>

                <a
                  className="btn-com btn-04"
                  target="_blank"
                  href="https://blog.naver.com/mindcarecenter/222471868697"
                  rel="noopner noreferrer"
                >
                  우리에 대하여
                </a>
                <span
                  className="btn-com btn-05 cursor"
                  onClick={() => ChannelIO("show")}
                >
                  예약하기
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="banners-promo-wrapp">
          <div className="banners-promo-wrapp-row">
            <div className="banners-promo-01">
              <h3 className="banners-promo-01__title title-comm">
                관계문제를 위한
              </h3>
              <div className="banners-promo-01__text">
                <p>
                  관계에서의 어려움을 겪고 있다면 경험이 풍부한 당사의
                  상담사들의 도움을 통해 해결할 수 있습니다.
                </p>
              </div>
              <ul className="banners-promo-01__list">
                <li>연인 관계</li>
                <li>가족관계</li>
                <li>사회/직장관계</li>
                <li>친구관계</li>
                <li>그외 모든 관계</li>
              </ul>
            </div>
            <div className="banners-promo-02">
              <h3 className="banners-promo-02__title title-comm">
                감정문제를 위한
              </h3>
              <div className="banners-promo-02__text">
                <p>
                  자존감/자신감 상실, 스트레스, 무기력, 좌절감 등 감정적으로
                  힘들때 저희와 함께 한다면 큰 도움을 얻으실 수 있습니다.
                </p>
              </div>
              <ul className="banners-promo-02__list">
                <li>자존감/자신감 상실</li>
                <li>걱정/불안</li>
                <li>스트레스</li>
                <li>무기력</li>
                <li>좌절감</li>
              </ul>
            </div>
            <div className="banners-promo-03">
              <h3 className="banners-promo-03__title title-comm">
                비지니스 문제를 위한
              </h3>
              <div className="banners-promo-03__text">
                <p>
                  직장, 직업, 성취에서의 성공을 막는 심리적 장애를
                  해결해드림으로써 성공적인 비지니스를 할 수 있도록
                  도와드립니다.
                </p>
              </div>
              <ul className="banners-promo-03__list">
                <li>발표력 향상, 발표불안,무대공포 극복</li>
                <li>성공으로 이끄는 당신의 이미지변화, 이미지컨설팅</li>
                <li>사회성 개선 / 화술트레이닝</li>
                <li>8주 성공습관/감정관찰</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-box-01 pad-top-95 pad-bt-110">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <VideoPlay videoUrl="https://cultureplace.s3.ap-northeast-2.amazonaws.com/videoplayback.mp4" />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="about-us-content-01">
                  <p className="subtitle-01">Who we are</p>
                  <h3 className="title-02 title-comm">
                    <span>
                      최고의 심리상담을 제공하는 심리상담센터 - 마인드케어센터
                    </span>
                  </h3>
                  <div className="about-us-text-01 mar-bt-27">
                    <p>
                      우리는 엄격한 심사를 통과한 심리학과 석사이상 출신의
                      심리상담사들 및 현실에서의 문제를 해결할 수 있는 다양한
                      분야의 전문가들로 구성된 심리상담센터입니다. 현실에서의
                      문제를 해결하기 위해 경험이 많고 유능한 분들이 가치와
                      비젼을 함께 공유하며 내담자 분들을 위해 최선을 다하고
                      있습니다.
                    </p>
                  </div>
                  <a href="#" className="btn-04 btn-com">
                    우리에 대하여
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-box-02 pad-top-60 pad-bt-80 wrap_offer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="subtitle-01 text-center">What we offer for you</p>
                <h3 className="title-03 text-center mar-bt-50 title-comm">
                  <strong>심리상담센터 프로그램 안내</strong>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <TherapiesSwiper />
              </div>
            </div>
          </div>
        </div>
        <div className="parallax parallax-01">
          <div className="container">
            <div className="row">
              <StateCounter />
            </div>
          </div>
        </div>
        <div className="content-box-02 pad-top-87 pad-bt-78">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <p className="subtitle-01">FREE COUNSULTING</p>
                <h3 className="title-02 title-comm">
                  유료상담 전 <span>정식상담 문의</span>
                </h3>
                <div className="counselling-text-01">
                  <p>
                    본격적인 상담에 앞서, 내담자가 가지고 있는 문제상황을 미리
                    파악하고, 보다 효과적인 상담방법을 적용하기 위해 정식상담
                    문의를 진행합니다. 나의 삶을 긍정적으로 이끌고 행복을 찾고
                    싶으시다면 정식상담 문의부터 받아보세요!
                    <br />
                    <span style={{ fontSize: "15px" }}>
                      *정식상담 문의는은 카톡으로 신청되며, 약 10분간 유선상으로
                      진행됩니다.
                    </span>
                  </p>
                </div>
                <span
                  className="counselling-btn cursor"
                  onClick={() => ChannelIO("show")}
                >
                  정식 상담 문의
                </span>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="counselling-img-01">
                  <a
                    href="http://pf.kakao.com/_aFQms/chat"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <img
                      src="images/counselling/counselling_01.png"
                      alt="심리상담센터 마인드케어센터 카카오톡 채널"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-box-01 pad-top-78 pad-bt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h6 className="subtitle-01 text-center">Insights and News</h6>
                <h3 className="title-03 title-03--mr-01 text-center title-comm">
                  <span>칼럼</span>
                </h3>
              </div>
            </div>
            <div className="row">
              <div
                className="text-xs-center col-sm-4 col-md-4 col-lg-4 cursor"
                onClick={() => alert("8월 18일 칼럼이 오픈됩니다.")}
              >
                <div className="featured-post-01">
                  <figure className="featured-post-01__img">
                    <img
                      src="images/shortcodes/featured_post/featured_post_01.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="featured-post-01__content">
                    <h3 className="featured-post-01__content-title">
                      긍정심리학은 무엇일까? 어둠의 터널에서 행복으로..
                    </h3>
                    <ul className="featured-post-01__content-list">
                      <li>8/18, 2021</li>
                      {/* <li>
                        <a href="#">Infographics</a>
                      </li> */}
                    </ul>
                    <div className="featured-post-01__content-text">
                      <p>
                        긍정심리학은 행복과 강점에 초점을 두고 그것을
                        강화시킴으로써...
                      </p>
                    </div>
                    <a className="featured-post-01__content-btn">Learn more</a>
                  </div>
                </div>
              </div>
              <div
                className="text-xs-center col-sm-4 col-md-4 col-lg-4 cursor"
                onClick={() => alert("8월 20일 칼럼이 오픈됩니다.")}
              >
                <div className="featured-post-01">
                  <figure className="featured-post-01__img">
                    <img
                      src="images/shortcodes/featured_post/featured_post_02.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="featured-post-01__content">
                    <h3 className="featured-post-01__content-title">
                      성공을 이끄는 멘탈관리 6가지 방법
                    </h3>
                    <ul className="featured-post-01__content-list">
                      <li>8/20, 2021</li>
                      {/* <li>
                        <a href="#">Infographics</a>
                      </li> */}
                    </ul>
                    <div className="featured-post-01__content-text">
                      <p>
                        목표한 바를 이루는 데에 있어서 목표를 명료하게 세우는
                        것부터, 목표한 바를 끈기있게..
                      </p>
                    </div>
                    <a className="featured-post-01__content-btn">Learn more</a>
                  </div>
                </div>
              </div>
              <div
                className="text-xs-center col-sm-4 col-md-4 col-lg-4 cursor"
                onClick={() => alert("8월 23일 칼럼이 오픈됩니다.")}
              >
                <div className="featured-post-01">
                  <figure className="featured-post-01__img">
                    <img
                      src="images/shortcodes/featured_post/featured_post_03.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="featured-post-01__content">
                    <h3 className="featured-post-01__content-title">
                      불안 장애: 나에게 맞는 치료법은?
                    </h3>
                    <ul className="featured-post-01__content-list">
                      <li>8/23, 2021</li>
                      {/* <li>
                        <a href="#">Infographics</a>
                      </li> */}
                    </ul>
                    <div className="featured-post-01__content-text">
                      <p>
                        불안 장애는 매우 흔하게 볼 수 있는 증상이지만 방치하면
                        시간이 지날 수록...
                      </p>
                    </div>
                    <a className="featured-post-01__content-btn">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax parallax-02 bestReview">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="testimonials__subtitle">Testimonials</p>
                <h3 className="testimonials__title title-comm">
                  <span>COUNSELLING REVIEW</span>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="owl-carousel-01 owl-theme-01">
                  <BestReview />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-box-03">
          <div className="faq-content-02">
            <div className="faq-content-02__wrapp">
              <h6 className="subtitle-03">Contacts</h6>
              <h3 className="title-04 title-comm">찾아오는 길</h3>
              <div className="faq-content-02__text">
                <p>
                  예약 상담 시, &#39;강남, 홍대, 신촌&#39; 등 서울의 편한 곳에서
                  <br />
                  선생님들과 직접 상담이 가능합니다.
                </p>
              </div>
              <p className="faq-content-02__location">
                가산디지털 코오롱 디지털 센터
              </p>
              <a
                className="faq-content-02__email"
                href="mailto:companyname@gmail.com"
              >
                mindcarecenter777@gmail.com
              </a>
              <p className="faq-content-02__phone">
                Call:
                <span>010 6807 8707</span>
              </p>
            </div>
          </div>
          <div className="faq-content-03">
            <div className="contacts_map">
              <div id="map-canvas"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
