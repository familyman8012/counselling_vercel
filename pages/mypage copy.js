import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import axios from "axios";

function mypage() {
  const [session] = useSession();
  const [payInfo, setPayInfo] = useState([]);
  useEffect(() => {
    if (session !== undefined && session !== "") {
      axios
        .get(`/api/user/user?_id=${session?.user.uid}`)
        .then(function (resp) {
          console.log("resp resp resp", resp.data[0]);
          setPayInfo(resp.data[0]);
        });
      console.log(session?.user.uid);
    }
  }, [session]);

  return (
    <div className="wrap_payed_info">
      {payInfo.payments?.map((el, i) => {
        return (
          <div className="item" key={`payinfo${i}`}>
            <div className="top">
              <span className="txt_number">{el.data.order_id}</span>
              <span className="txt_pay_date">
                주문일자 {el.data.purchased_at}
              </span>
            </div>
            <div className="box_payment_info">
              <dl className="box box_counselling">
                <dt>결제한 상담</dt>
                <dd className="txt">{el.data.item_name}</dd>
                <dd className="price">{el.data.price}원</dd>
              </dl>
              <dl className="box box_user">
                <dt>주문자정보</dt>
                {/* <dd className="name">{payInfo.name}</dd>
                <dd className="tel">{payInfo.phone}</dd>
                <dd className="email">{payInfo.email}</dd> */}
              </dl>
              <dl className="box box_payment_method">
                <dt>결제정보</dt>
                <dd className="name">
                  {el.data.method === "card"
                    ? el.data.payment_data.card_name
                    : el.data.method}
                </dd>
                <dd className="tel">({el.data.payment_data.card_no})</dd>
              </dl>
              <div className="box_btns">
                <span
                  className="button cursor"
                  onClick={() => ChannelIO("show")}
                >
                  취소요청
                </span>
                <a
                  href={el.data.receipt_url}
                  className="button cursor"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  영수증
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default mypage;
