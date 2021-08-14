import React, { useState } from "react";
import Popout from "react-popout";
import Link from "next/link";

const Footer = () => {
  const [escroPop, setEscroPop] = useState(false);
  return (
    <footer className="wrapp-footer">
      <div className="footer-box-01">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3">
              <a href="./" className="footer-logo">
                <img src="images/logo.png" alt="" />
              </a>
              <div className="widget widget-text">
                <p>
                  마인드케어센터는 주의깊게 선택된 훌륭한 심리상담선생님들과
                  함께하는 심리상담센터입니다.
                </p>
                <ul className="social-list-01">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <div className="widget widget-contacts">
                <h3 className="widget-title">마인드케어센터정보</h3>
                <ul className="widget-contacts__list">
                  <li>
                    상호/대표자명: 윤은석 (설레임)
                    <br /> 사업자등록번호 755-11-01726
                  </li>
                  <li>
                    <a
                      href="http://www.ftc.go.kr/www/bizCommList.do?key=232"
                      target="_blank"
                      rel="noopner noreferrer"
                      style={{ color: "#5c656d" }}
                    >
                      사업자정보확인
                    </a>
                  </li>
                  <li>
                    <a
                      className="contacts-email"
                      href="maito:mindcarecenter777@gmail.com"
                      target="_blank"
                      rel="noopner noreferrer"
                    >
                      mindcarecenter777@gmail.com
                    </a>
                  </li>
                  <li>010 6807 8707</li>
                  <li>
                    주소 : 서울특별시 금천구 가산디지털단지 에스턴타워 14층
                  </li>
                  <li>
                    <div style={{ display: "flex" }}>
                      <span>
                        입금계좌 : KB국민은행
                        <br /> 597337-04-004922
                      </span>
                      <span
                        onClick={() => setEscroPop(true)}
                        style={{ marginLeft: "30px" }}
                      >
                        <img
                          src="http://img1.kbstar.com/img/escrow/escrowcmark.gif"
                          border="0"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </span>
                      {escroPop && (
                        <Popout url="http://escrow1.kbstar.com/quics?page=B009111&cc=b010807%3Ab008491&mHValue=21f382593bf991a2f4bb21f9172d2554" />
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <div className="widget widget-latest-news">
                <h3 className="widget-title">
                  무료진단신청 및 정식상담문의 안내
                </h3>
                <ul className="widget-contacts__list">
                  <li>
                    무료진단신청 및 정식상담문의
                    <br />
                    <span>10.00 AM</span> ~<span>10.00 PM</span>
                    <br />
                    카카오 채널
                    <a
                      href="http://pf.kakao.com/_aFQms/chat"
                      target="_blank"
                      rel="noopner noreferrer"
                    >
                      https://pf.kakao.com/_aFQms/chat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <div className="widget widget-quick-links">
                <h3 className="widget-title">Quick Links</h3>
                <ul className="widget-quick-links__list">
                  <li>
                    <Link href="/">
                      <a>홈</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>심리상담센터소개</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reservation">
                      <a>상담예약</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/counselling">
                      <a>칼럼</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>새로운소식</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/notice">
                      <a>Contacts</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-footer-01">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="copy-footer-01__text">
                <span>&copy; 2021 MINDCARE CENTER. All rights reserved.</span>
                <span className="box_yakwan">
                  <Link href="/yakwan">
                    <a>이용약관</a>
                  </Link>
                  <Link href="/policy">
                    <a>개인정보처리방침</a>
                  </Link>
                  <Link href="/mypage">
                    <a>구매내역 및 내정보</a>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
