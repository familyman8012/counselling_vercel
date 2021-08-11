import React from "react";
import { PolicySeo } from "../components/common/seoData";

function Policy() {
  return (
    <>
      <PolicySeo />
      <div className="wrap_yakwan">
        <div className="Background-sc-1j88w7m-0 gfOHVQ">
          <div className="PrivacyPolicyCollect__Container-sc-1svom9t-0 dSLftU">
            <div className="PrivacyPolicyCollect__Content-sc-1svom9t-1 gNwALr">
              <h2 className="BaseTypography__TextElement-sc-8ucuwh-0 fXDRvv">
                개인정보 수집항목 및 이용 목적
              </h2>
              <div className="BaseTypography__TextElement-sc-8ucuwh-0 ixguTs">
                ① 회사는 서비스 제공을 위한 최소한의 범위 내에서 이용자의 동의
                하에 개인정보를 수집하며, 이용자가 필요한 최소한의 개인정보
                이외의 개인정보를 제공하지 아니한다는 이유로 해당 서비스 제공을
                거부하지 않습니다. 또한 수집한 모든 개인정보는 고지한 목적 범위
                내에서만 사용되며 회사에서 제공하는 서비스 유형에 따라 다음과
                같이 개인정보를 수집 및 이용하고 있습니다.
                <br />
                <br />
                <br />
                <h4 className="BaseTypography__TextElement-sc-8ucuwh-0 bhViCI">
                  &lt;회원가입 및 서비스 이용&gt;
                </h4>
                <table className="privacypolicy">
                  <thead>
                    <tr>
                      <th>
                        <p>수집방법</p>
                      </th>
                      <th>
                        <p>수집항목</p>
                      </th>
                      <th>
                        <p>수집 및 이용목적</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>회원가입</p>
                      </td>
                      <td>
                        <p>[필수] 이름, 이메일주소, 휴대폰번호, 비밀번호</p>
                      </td>
                      <td>
                        <p>
                          본인확인 및 가입의사 확인, 상담 및 문의 처리, 공지사항
                          전달 및 불만처리 등 원활한 의사소통 경로 확보
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>SNS계정 가입</p>
                      </td>
                      <td>
                        <p>[필수 - 카카오] 카카오계정 이메일, 이름</p>
                        <p>
                          [필수 - 네이버] 네이버계정 이메일, 이름 프로필사진
                        </p>
                        {/* <p>[필수 - 페이스북] 이름, 프로필사진</p> */}
                        <p>
                          [필수 - 구글] 구글계정 이메일, 이름, 휴대폰번호,
                          프로필사진
                        </p>
                        {/* <p>[필수 - 애플] 애플계정 이메일</p> */}
                      </td>
                      <td>
                        <p>SNS계정을 이용한 회원가입</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>회원정보 수정</p>
                      </td>
                      <td>
                        <p>[선택] 닉네임, 프로필 사진</p>
                      </td>
                      <td>
                        <p>
                          이용자 식별 및 이용자간 관계 형성, 커뮤니티 활성화
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>구매 시</p>
                      </td>
                      <td>
                        <p>
                          [필수] 수취인정보(이름, 휴대폰번호, 주소), 현금영수증
                          발행 정보(휴대폰번호)
                        </p>
                      </td>
                      <td>
                        <p>
                          주문/결제 및 상품 배송(교환, 반품) 서비스, 현금영수증
                          발급
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>(선택) 닉네임, 프로필 사진, SNS 계정 및 URL</p>
                      </td>
                      <td>
                        <p>
                          이용자 식별 및 이용자간 관계 형성, 커뮤니티 활성화
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
                <h4 className="BaseTypography__TextElement-sc-8ucuwh-0 bhViCI">
                  &lt;서비스 이용에 따른 자동 수집 및 생성 정보&gt;
                </h4>
                <table className="privacypolicy">
                  <thead>
                    <tr>
                      <th>
                        <p>수집항목</p>
                      </th>
                      <th>
                        <p>수집 및 이용목적</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>- 쿠키, IP, 방문일시, 서비스 이용기록</p>
                        <p>
                          - 기기정보(device_id, OS종류 및 버전, 디바이스 종류,
                          광고식별자
                        </p>
                        <p>- 앱 이용시 추가 모바일 기기정보(UUID, 푸쉬토큰)</p>
                      </td>
                      <td>
                        <p>
                          서비스 이용 통계, 접속관리, 이용자별 사용환경 제공,
                          활동정보 파악, 이벤트 및 프로모션 통계 확인, 맞춤형
                          정보 제공
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Policy;
