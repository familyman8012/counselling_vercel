import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/client";
import axios from "axios";
import { PaymentSeo, PaymentCompleteSeo } from "../components/common/seoData";
import Link from "next/link";

function Payment() {
  const router = useRouter();
  const RouterCheck = useMemo(
    () => Object.keys(router?.query).length === 0,
    []
  );

  const { detailInfo, selectPrice } = useSelector((state) => state.product);
  const [session] = useSession();
  const [phone, setPhone] = useState(session?.user.phone);
  const [agree, setAgree] = useState(false);
  const [completeData, setcompleteData] = useState({
    data: { item_name: "", order_id: "", payment_data: "" },
  });
  const [payComplete, setpayComplete] = useState(false);

  useEffect(() => {
    if (RouterCheck) {
      alert("잘못된 경로로 접속하셨습니다.");
      router.push("/");
    }
    if (session === null) {
      alert("로그인 후 결제가 가능합니다.");
      router.push("/");
    }
  }, []);

  // componentdi

  const handleOnChage = (e) => {
    setPhone(e.target.value);
  };
  const handleCheck = (e) => {
    setAgree(!agree);
  };

  //결제 bootpay
  const payOption = {
    price: Array.isArray(selectPrice) && selectPrice[0].price,
    name: Array.isArray(detailInfo) && detailInfo[0].title,
    pg: "kcp",
    username: session?.user.name,
    email: session?.user.email,
    phone,
    userid: session?.user.uid,
  };
  const { price, name, pg, username, email, userid } = payOption;

  function onClickRequest() {
    if (phone === "" || phone === undefined) {
      alert("구매자 전화번호를 입력하셔야합니다.");
      return;
    }
    if (!agree) {
      alert("구매조건 확인 및 결제진행에 동의를 해주셔야 결제가 진행됩니다.");
      return;
    }
    window.BootPay.request({
      //실제 복사하여 사용시에는 모든 주석을 지운 후 사용하세요
      price, //실제 결제되는 가격
      application_id: "60d743385b29480021dc503c",
      name, //결제창에서 보여질 이름
      pg,
      method: "card", //결제수단, 입력하지 않으면 결제수단 선택부터 화면이 시작합니다.
      payment_name: "카드결제",
      show_agree_window: 1, // 부트페이 정보 동의 창 보이기 여부
      user_info: {
        username,
        email,
        phone,
      },
      order_id: Date.now(), //고유 주문번호로, 생성하신 값을 보내주셔야 합니다.
      params: {
        callback1: "payment1",
        callback2: "payment2",
        customvar1234: "payment3",
      },
    })
      .error(function (data) {
        //결제 진행시 에러가 발생하면 수행됩니다.
        console.log(data);
      })
      .cancel(function (data) {
        //결제가 취소되면 수행됩니다.
        console.log(data);
      })
      .ready(function (data) {
        // 가상계좌 입금 계좌번호가 발급되면 호출되는 함수입니다.
        console.log(data);
      })
      .confirm(function (data) {
        //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
        //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
        console.log(data);

        var t = { price: payOption.price, receipt_id: data.receipt_id };

        axios.post("/api/pay/payverify", t).then((response) => {
          if (response.data.status_en === "complete") {
            const variables = {
              data: response.data,
              userid,
            };
            setcompleteData(variables);
            setpayComplete(true);
            axios.post("/api/payment/payment", variables);
            BootPay.transactionConfirm(data);
          } else {
            BootPay.removePaymentWindow();
          }
        });
      })
      .close(function (data) {
        // 결제창이 닫힐때 수행됩니다. (성공,실패,취소에 상관없이 모두 수행됨)
        console.log(data);
      })
      .done(function (data) {
        //결제가 정상적으로 완료되면 수행됩니다
        //비즈니스 로직을 수행하기 전에 결제 유효성 검증을 하시길 추천합니다.
      });
  }

  const { item_name, order_id, payment_data } = completeData?.data;

  if (RouterCheck) {
    return <div></div>;
  }
  if (payComplete) {
    return (
      <>
        <PaymentCompleteSeo />
        <div className="wrap_pay_complete">
          <div className="txt_area">
            <p>{item_name} 결제가 완료되었습니다.</p>
            <p>
              결제내역은 마이페이지에서 조회가능하며,
              <br /> 환불을 원할시에는 채널톡으로 말씀주세요.
            </p>
          </div>
          <ul>
            <li>
              <span>주문번호</span>
              <span>{order_id}</span>
            </li>
            <li>
              <span>결제정보</span>
              <span>{payment_data.card_name}</span>
              <span>{payment_data.card_no}</span>
            </li>
            <li>
              <span>결제금액</span>
              <span>{completeData?.data.price}</span>
            </li>
          </ul>
          <div className="box_btns">
            <Link href="/">
              <a>홈으로</a>
            </Link>
            <Link href="/mypage">
              <a>마이페이지</a>
            </Link>
          </div>
        </div>
      </>
    );
  }
  if (payComplete) {
  }
  return (
    <>
      <PaymentSeo />
      <div className="wrap_payment">
        <h2>결제하기</h2>
        <div className="wrap_box_area">
          <div className="info">
            <div className="box box_product">
              <h3>주문 상품 정보</h3>
              <div className="cont">
                <div className="thumb">
                  <img
                    src={Array.isArray(detailInfo) && detailInfo[0].imgUrl}
                    alt=""
                  />
                </div>
                <dl>
                  <dt className="tit">
                    {Array.isArray(detailInfo) && detailInfo[0].title}
                  </dt>
                  <dd className="price">
                    {Array.isArray(selectPrice) &&
                      selectPrice[0].price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </dd>
                </dl>
              </div>
            </div>
            <div>
              <div className="box box_user">
                <h3>주문자 정보</h3>
                <dl>
                  <dt>{session?.user.name}</dt>
                  <dd>
                    <input
                      type="tel"
                      className="tel"
                      name="tel"
                      onChange={handleOnChage}
                      value={phone}
                      placeholder="구매자 전화번호 입력"
                    />
                  </dd>
                  <dd>{session?.user.email}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="priceInfo">
            <div className="box box_price">
              <h3>최종 결제금액</h3>
              <p>
                <span className="txt">총 결제금액</span>
                <span className="price">
                  {Array.isArray(selectPrice) &&
                    selectPrice[0].price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </span>
              </p>
            </div>
            <div className="box box_agree">
              <input
                type="checkbox"
                checked={agree}
                value={agree}
                onChange={handleCheck}
              />
              구매조건 확인 및 결제진행에 동의
            </div>
            <div className="btn_pay" onClick={onClickRequest}>
              결제하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
