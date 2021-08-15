import React from "react";
import { PolicySeo } from "../components/common/seoData";

function Policy() {
  return (
    <>
      <PolicySeo />
      <div className="wrap_yakwan">
        <h1>환불정책 : 시행일자 : 2021.08.16</h1>
        <div className="modal-body">
          <div className="BaseTypography__TextElement-sc-8ucuwh-0 ixguTs">
            <br />
            안녕하세요. 심리상담센터 마인드케어센터입니다.
            <br />
            마인드케어센터 환불정책(이하 ‘이 정책’)은 마인드케어센터 서비스
            이용과 관련하여 환불 기준에 관한 내용을 담고 있습니다.
            <br />
            마인드케어센터 서비스 이용 전 꼭 확인하여 주세요.
            <br />
            <br />
            <br />
            <h4 className="BaseTypography__TextElement-sc-8ucuwh-0 bhViCI">
              1. 상담환불정책
            </h4>
            <br />
            <table className="privacypolicy sty2">
              <thead>
                <tr>
                  <th>환불요청일</th>
                  <th>환불금액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>상담 이전 환불</td>
                  <td>결제대금 전액</td>
                </tr>
                <tr>
                  <td>상담시간 및 기간의 1/4 진행시</td>
                  <td>결제대금의 3/4</td>
                </tr>
                <tr>
                  <td>상담시간 및 기간의 1/3 진행시</td>
                  <td>결제대금의 2/3</td>
                </tr>
                <tr>
                  <td>상담시간 및 기간의 1/2 진행시</td>
                  <td>결제대금의 1/4</td>
                </tr>
                <tr>
                  <td>상담시간 및 기간의 1/2 경과후</td>
                  <td>환불 불가</td>
                </tr>
              </tbody>
            </table>
            <h4
              className="BaseTypography__TextElement-sc-8ucuwh-0 bhViCI"
              style={{ marginTop: "50px" }}
            >
              2. 정책의 개정
            </h4>
            <br />■ 회사는 「약관의 규제에 관한 법률」, 「전자상거래 및
            소비자보호에 관한 법률」 등 관계 법령을 위배하지 아니하는 범위
            내에서 이 정책을 개정할 수 있습니다.
            <br />
            <br />
            <br />■ 회사가 이 정책을 개정하는 경우 회원에게 주요 개정내용과
            시행일 등을 명시하여 시행일로부터 7일 전에 전자적 방법으로
            알려드리겠습니다. 다만, 회원에게 불리한 내용이 포함되는 경우
            시행일로부터 30일 전에 알려드리겠습니다.
          </div>
        </div>
      </div>
    </>
  );
}

export default Policy;
