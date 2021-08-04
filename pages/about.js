import Head from "next/head";
import React, { useState, useEffect } from "react";
import cn from "classnames";
import SkillBar from "../container/about/SkillGraph";
import Freebanner from "../components/Freebanner";

function About() {
  const [baron, setBaron] = useState(false);
  const [videoPaly, setVideoPaly] = useState(false);
  useEffect(() => {
    setBaron(true);
  }, []);

  return (
    <div>
      <Head>
        <title>소개</title>
      </Head>
      <main className="content-row">
        <div className="page-title-wrapp">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="page-title-01">About Us</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="breadcrumbs">
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-box-01 pad-top-38 pad-bt-113">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="about-us-img-01">
                  <img src="images/about_us/about_us_01.jpg" alt="" />
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="about-us-content-01">
                  <p className="subtitle-01">
                    We are Private Psychiatry Clinic
                  </p>
                  <h3 className="title-02">
                    최상의 변화, <span>행복한심리상담센터</span>
                  </h3>
                  <div className="about-us-text-01">
                    <p>
                      &#39;진정한 행복&#39;을 이끄는 행복한심리상담센터에서는
                      누구나 행복을 배울 수 있음에 대한 과학적 근거와 데이터에
                      기반한 긍정심리학을 바탕으로한 심리상담을 제공하고
                      있습니다.
                      <br />
                      피아노연습이나, 운전과 같은 기술과 마찬가지로 꾸준히
                      연습하면 행복 역시 얻어질 수 있으며, 자신의 강점과 미덕을
                      찾아 발휘한다면, &#39;진정한 행복&#39;이 깃든 삶을 살 수
                      있습니다.
                      <br />
                      내담자가 행복해질때까지 행복한심리상담센터가 함께
                      하겠습니다.
                    </p>
                  </div>
                  <div className="module_skills module_skills-process">
                    <div className="module_inner">
                      <div className="shortcode_skills">
                        <SkillBar baron={baron} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-block-01">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="video-block-01__btn-wrapp">
                  <div className="video-block-01__box">
                    <p className="video-block-01__box-text">
                      <span>Video Presentation</span>
                      <a
                        href="#signup"
                        className="video-block-01__btn"
                        onClick={() => setVideoPaly(true)}
                      >
                        Play
                      </a>
                      <span>About Our Clinic</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {videoPaly && (
            <>
              <div id="signup" className="video-block-popup">
                <div className="video-block-video">
                  <iframe
                    className="video-block-video__frame"
                    src="https://www.youtube.com/embed/83Y5UvmNU00?rel=0"
                    allowFullScreen
                  ></iframe>
                  <div
                    className="video-block-close"
                    onClick={() => setVideoPaly(false)}
                  >
                    Close
                  </div>
                </div>
              </div>
              <div className="mask"></div>
            </>
          )}
        </div>
        <div className="content-box-01 pad-top-85 pad-bt-85">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <p className="subtitle-01">
                  내담자들이 &#39;행복한심리상담센터&#39; 를 신뢰하는 이유
                </p>
                <h3 className="title-03 title-03--mr-03">
                  People
                  <span>Trust Us</span>
                </h3>
                <div className="about-us-text-02">
                  <p>
                    경험이 많은 심리상담사 및 심리코치들의 도움을 받을 수 있는
                    행복한 심리상담센터는 모든 내담자 분들의 어려움에 가장
                    효과적인 맞춤형 상담 및 코칭을 통해 문제를 해결해나가고
                    있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="trust-us-01">
                  <figure className="trust-us-01__img">
                    <img src="images/about_us/icon/trust_us_01.png" alt="" />
                  </figure>
                  <h3 className="trust-us-01__title">전문성</h3>
                  <div className="trust-us-01__text">
                    <p>
                      서울 유수의 심리학과 석사이상 및 전문적인 자격을 확보한
                      분들만이 저희와 함께 할 수 있습니다. 경험이 풍부한
                      심리상담사 분들이 함께하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="trust-us-01">
                  <figure className="trust-us-01__img">
                    <img src="images/about_us/icon/trust_us_02.png" alt="" />
                  </figure>
                  <h3 className="trust-us-01__title">세심함</h3>
                  <div className="trust-us-01__text">
                    <p>
                      자칫 비슷한 사례 위주로 이해하고 진행되는 관행에서 벗어나
                      모든 내담자들의 사연을 깊이 있게 듣고 깊이 있게 이해하며,
                      그에 맞춰 상담이 이루어집니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="trust-us-01">
                  <figure className="trust-us-01__img">
                    <img src="images/about_us/icon/trust_us_03.png" alt="" />
                  </figure>
                  <h3 className="trust-us-01__title">행복한 변화</h3>
                  <div className="trust-us-01__text">
                    <p>
                      단순하게 고통을 줄이는 데 집중하는 치료가 아닌, 행복에
                      중점을 둔 긍정심리학을 기반으로 어둠에서 빛으로 나아가는
                      방법을 제시합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-about-box">
          <div className="gallery-about-box__item">
            <figure className="gallery-about-box-img">
              <img src="images/about_us/gallery/gallery_01.jpg" alt="" />
            </figure>
            <div className="gallery-item__content">
              <div className="gallery-item__tbl">
                <div className="gallery-item__row">
                  <div className="gallery-item__cell">
                    <p className="gallery-item__subtitle">심리상담</p>
                    <h4 className="gallery-item__title">부부 상담</h4>
                    <a
                      className="gallery-item__btn-more swipebox"
                      href="images/about_us/gallery/full/gallery_01_full.jpg"
                    >
                      More
                    </a>
                    <a
                      className="gallery-item__btn-link"
                      href="gallery_item.html"
                    >
                      Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-about-box__item">
            <figure className="gallery-about-box-img">
              <img src="images/about_us/gallery/gallery_02.jpg" alt="" />
            </figure>
            <div className="gallery-item__content">
              <div className="gallery-item__tbl">
                <div className="gallery-item__row">
                  <div className="gallery-item__cell">
                    <p className="gallery-item__subtitle">
                      비지니스 문제를 위한
                    </p>
                    <h4 className="gallery-item__title">
                      발표력향상, 발표불안
                    </h4>
                    <a
                      className="gallery-item__btn-more swipebox"
                      href="images/about_us/gallery/full/gallery_02_full.jpg"
                    >
                      More
                    </a>
                    <a
                      className="gallery-item__btn-link"
                      href="gallery_item.html"
                    >
                      Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-about-box__item">
            <figure className="gallery-about-box-img">
              <img src="images/about_us/gallery/gallery_03.jpg" alt="" />
            </figure>
            <div className="gallery-item__content">
              <div className="gallery-item__tbl">
                <div className="gallery-item__row">
                  <div className="gallery-item__cell">
                    <p className="gallery-item__subtitle">해피버스</p>
                    <h4 className="gallery-item__title">
                      자존감향상을 위한 긍정워크샵
                    </h4>
                    <a
                      className="gallery-item__btn-more swipebox"
                      href="images/about_us/gallery/full/gallery_03_full.jpg"
                    >
                      More
                    </a>
                    <a
                      className="gallery-item__btn-link"
                      href="gallery_item.html"
                    >
                      Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-about-box__item">
            <figure className="gallery-about-box-img">
              <img src="images/about_us/gallery/gallery_04.jpg" alt="" />
            </figure>
            <div className="gallery-item__content">
              <div className="gallery-item__tbl">
                <div className="gallery-item__row">
                  <div className="gallery-item__cell">
                    <p className="gallery-item__subtitle">
                      우울, 불안, 번아웃, 스트레스를 이기는
                    </p>
                    <h4 className="gallery-item__title">
                      긍정멘탈관리 프로젝트
                    </h4>
                    <a
                      className="gallery-item__btn-more swipebox"
                      href="images/about_us/gallery/full/gallery_04_full.jpg"
                    >
                      More
                    </a>
                    <a
                      className="gallery-item__btn-link"
                      href="gallery_item.html"
                    >
                      Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Freebanner />
      </main>
    </div>
  );
}

export default React.memo(About);
