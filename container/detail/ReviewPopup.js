import React, { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rate } from "antd";
import { useSession } from "next-auth/client";
import { chgRate } from "../../redux/rateSlice";
import useSwrFetch from "../../hook/useSwrFetch";
import useSwrCrud from "../../hook/useSwrCrud";

function ReviewPopup({
  name,
  content,
  id,
  modifyInit,
  onChange,
  setOpenModal,
}) {
  const detailInfo = useSelector((state) => state.product.detailInfo);
  const reviewTitle = detailInfo[0].title;

  const categoryId = detailInfo[0].id;
  //redux
  const { value, desc } = useSelector((state) => state.rate);
  const dispatch = useDispatch();

  // crud
  // 구매평작성
  const [session, loading] = useSession();
  const userid = session?.user.uid;

  const { swrdata, mutate } = useSwrFetch("/api/product/comment/");
  const commentUrl = "/api/product/comment";

  const createItem = useCallback(
    (e) => {
      if (name.trim() === "" || content.trim() === "") {
        alert("작성자란과 사연란을 모두 입력하셔야합니다.");
        return;
      }
      useSwrCrud(
        "post",
        commentUrl,
        { userid, name, content, value, categoryId, reviewTitle },
        swrdata,
        mutate
      );
      setCloseModal();
    },
    [name, content]
  );

  //수정
  const modifyItem = (id) => {
    useSwrCrud(
      "put",
      commentUrl,
      { id, name, content, value },
      swrdata,
      mutate
    );
    setCloseModal();
  };

  const setCloseModal = useCallback(() => {
    setOpenModal(false);
    dispatch(chgRate(5));
    modifyInit("", "", "");
  }, []);
  const rateChg = useCallback((value) => dispatch(chgRate(value)), [value]);

  return (
    <>
      <div className="pop_review_write">
        <h1 className="tit">
          상담리뷰 작성
          <span className="btn_close" onClick={setCloseModal}>
            <span className="blind">닫기</span>
          </span>
        </h1>
        <div className="wrap_pop_cont">
          <div className="box_category">
            <span className="thumb">
              <img src={detailInfo[0].imgUrl} alt={detailInfo[0].alt} />
            </span>
            <h2 className="txt">{detailInfo[0].title}</h2>
          </div>
          <div className="box_rate">
            <h3>상담 어떠셨나요?</h3>
            <div>
              <Rate onChange={rateChg} tooltips={desc} value={value} />
              <span className="ant-rate-text">{desc[value - 1]}</span>
            </div>
          </div>
          <div className="box_form">
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="작성자"
            />
            <textarea
              name="content"
              value={content}
              onChange={onChange}
              placeholder="어떤 점이 좋으셨나요?"
            ></textarea>
          </div>
        </div>
        {id === "" ? (
          <div className="btn_submit" onClick={createItem}>
            등록
          </div>
        ) : (
          <div className="btn_submit" onClick={() => modifyItem(id)}>
            수정
          </div>
        )}
      </div>
      <div className="dimm"></div>
    </>
  );
}

export default ReviewPopup;
