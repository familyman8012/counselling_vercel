import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { loadDetail, priceSelect, onisModal } from "../../redux/productSlice";
import ReviewList from "../../container/detail/ReviewList";
import { useSession } from "next-auth/client";

const PriceItem = ({ priceItem }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ul className="price">
        {priceItem.map((item, i) => (
          <li key={item.price} onClick={() => dispatch(priceSelect(i + 1))}>
            {item.title} :{" "}
            {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </li>
        ))}
      </ul>
    </>
  );
};

const Product = () => {
  const router = useRouter();
  const [session] = useSession();

  const { detailInfo, priceItem, selectPrice, isModal } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const { id } = router.query;

  useEffect(() => {
    {
      id ? dispatch(loadDetail(id)) : "";
    }
  }, [id]);

  useEffect(() => {
    dispatch(priceSelect(0));
  }, []);

  const linkPay = () => {
    if (session === null) {
      alert("로그인 후 결제 가능합니다.");
      return;
    }
    router.push("/payment?correctUrl=true", "/payment");
  };

  return (
    <>
      {detailInfo && (
        <div className="wrap_product_detail">
          <div className="top">
            <div className="box_product_img">
              <img src={detailInfo[0].imgUrl} alt={detailInfo[0].alt} />
            </div>
            <div className="wrap_detail_info">
              <div className="product_info">
                <div className="wrap_simple_info">
                  <div className="title">{detailInfo[0].title}</div>
                  <PriceItem priceItem={priceItem} />
                </div>
                <div className="desc">{detailInfo[0].text}</div>
                <div className="box_sel_price">
                  <p className="tit">상담선택*</p>
                  <div
                    className={"selected_info " + (isModal ? "on" : "")}
                    onClick={() => dispatch(onisModal())}
                  >
                    {selectPrice !== null
                      ? `${selectPrice[0].title} : ${selectPrice[0].price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
                      : "상담선택(필수)"}
                  </div>
                  {isModal && <PriceItem priceItem={priceItem} />}
                  <div className="box_btns">
                    {selectPrice !== null ? (
                      <span className="btn" onClick={linkPay}>
                        결제
                      </span>
                    ) : (
                      <span className="btn">상담을 선택해주세요</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="wrap_tab">
            <li className="on">구매평</li>
            <li onClick={() => alert("준비 중입니다. 채널톡으로 문의주세요.")}>
              Q&A
            </li>
          </ul>
          <ReviewList nowCategory={detailInfo[0].title} />
        </div>
      )}
    </>
  );
};

export default React.memo(Product);
