import React from "react";
import ResevationCounter from "../container/reservation/ResevationCounter";
import TotalProgram from "../container/reservation/TotalProgram";
import Freebanner from "../components/Freebanner";
import Features from "../container/reservation/Features";
import StrengthTab from "../container/reservation/StrengthTab";
import Accordion from "../components/common/Accordion";
import FaqAccodion from "../container/reservation/FaqAccodion";
import { ReservationSeo } from "../components/common/seoData";

const reservation = () => {
  return (
    <>
      <ReservationSeo />
      <main className="content-row">
        <div className="page-title-wrapp">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="page-title-01">심리상담예약</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="breadcrumbs">
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>reservation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-box-01 pad-top-38 pad-bt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="serv-img-01">
                  <img src="/images/services/services_img_01.jpg" alt="" />
                </div>
              </div>

              <div className="col-md-12 col-lg-6">
                <p className="subtitle-01 mar-top-83 mar-bt-18 mar-md-top-0">
                  We are here for you
                </p>
                <h3 className="title-02 mar-bt-32">심리상담 진행안내</h3>
                <div className="serv-content-01">
                  <p>
                    심리상담신청 게시판에 상담 신청글을 양식에 맞게 올려주시고,
                    카카오 채널로 말씀주시면, 선생님들이 확인 후 연락을 드리고
                    있습니다. 무료진단 후 정규 상담 및 코칭을 선택, 결제 하시면
                    예약이 완료되며, 선생님과의 시간 조율 후 예약된 시간에 상담
                    및 코칭이 진행됩니다.
                  </p>
                </div>
                <div className="counter-01">
                  <ResevationCounter />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-box-02 pad-top-78">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="subtitle-01 text-center">What we offer for you</p>
                <h3 className="title-03 text-center mar-bt-50">
                  <span>자신에게 맞는 프로그램을 선택해보세요.</span>
                </h3>
              </div>
            </div>
            <div className="row">
              <TotalProgram />
            </div>
          </div>
        </div>
        <Freebanner />
        <div className="parallax parallax-01 pad-top-100 pad-bt-50">
          <div className="container">
            <Features />
          </div>
        </div>
        <div className="content-box-01 pad-top-80 pad-bt-85">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <p className="subtitle-01">What we consulting</p>
                <h3 className="title-02 mar-bt-21">
                  <span>마인드케어센터</span>
                  <br />을 선택해야 하는 이유
                </h3>
                <div className="serv-content-02">
                  <p>
                    우리는 내담자들의 문제에 대해 친절하고 현실적인 접근
                    방식으로 상담을 진행하고 있습니다. 모든 상담 내용은 철저한
                    비밀이 보장되며 안전하고 비판적이지 않은 대화를 통해 답을
                    찾아나갈 수 있도록 돕고 있습니다.
                  </p>
                </div>
                <StrengthTab />
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="chart-wrapp">
                  <p className="subtitle-01">Our benefits</p>
                  <h3 className="title-02 mar-bt-21">성공지표</h3>
                  <figure className="chart-in">
                    <img src="/images/services/chart_in.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-box-01 pad-top-80 pad-bt-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="subtitle-01">FAQ</p>
                <h3 className="title-02 mar-bt-50">
                  자주 묻는
                  <span>질문</span>
                </h3>
              </div>
            </div>
            <FaqAccodion />
          </div>
        </div>
      </main>
    </>
  );
};

export default reservation;
