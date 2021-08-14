import React from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import useSwrFetch from "../hook/useSwrFetch";
import { signOut } from "next-auth/client";
import axios from "axios";
import _ from "lodash";

function Mypage() {
  const [session] = useSession();
  const router = useRouter();
  const { swrdata, isLoading } = useSwrFetch(
    `/api/user/user?_id=${session?.user.uid}`
  );

  const withdrawal = () => {
    axios
      .delete(`/api/user/account?_id=${session?.user.uid}`)
      .then(function (resp) {
        console.log("resp resp resp113213", resp);

        signOut();
      });

    router.push("/");
  };

  {
    swrdata && console.log(swrdata[0].payments);
  }

  return (
    <div className="wrap_payed_info">
      {swrdata && (
        <div className="userInfo">
          <div className="name">{swrdata[0].name}</div>
          <div className="email">{swrdata[0].email}</div>
          <div className="withdrawal cursor" onClick={() => withdrawal()}>
            탈퇴
          </div>
        </div>
      )}
      {swrdata && swrdata[0].payments.length == !0 ? (
        <div className="payed_list">
          {_.orderBy(swrdata[0].payments, ["updatedAt"], ["desc"])?.map(
            (el, i) => {
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
                      <dd className="name">{swrdata[0].name}</dd>
                      <dd className="tel">{swrdata[0].phone}</dd>
                      <dd className="email">{swrdata[0].email}</dd>
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
                      <a
                        href={el.data.receipt_url}
                        className="button cursor"
                        target="_blank"
                        rel="noopner noreferrer"
                      >
                        영수증
                      </a>
                      <span
                        className="button cursor"
                        onClick={() => ChannelIO("show")}
                      >
                        취소요청
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      ) : (
        <div className="payed_list no">구매내역이 없습니다.</div>
      )}
    </div>
  );
}

export default Mypage;
