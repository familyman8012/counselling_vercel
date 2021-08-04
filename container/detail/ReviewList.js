import React, { useEffect, useState, useCallback } from "react";
import { Rate } from "antd";
import useSwrFetch from "../../hook/useSwrFetch";
import useSwrCrud from "../../hook/useSwrCrud";
import { useSession } from "next-auth/client";
import Moment from "../../node_modules/react-moment/dist/index";
import ReviewPopup from "../../container/detail/ReviewPopup";
import useInputs from "../../hook/useInputs";
import Pagination from "rc-pagination";

import "rc-pagination/assets/index.css";

export default function ReviewList() {
  const [session] = useSession();
  const userid = session?.user.uid;
  const { swrdata, mutate } = useSwrFetch("/api/product/comment/");
  const [activeId, setActiveId] = useState(0);

  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // 페이징겸, 리스트 만들기.
  useEffect(() => {
    setTotalCount(swrdata?.length);
  }, [swrdata]);

  if (Array.isArray(swrdata) && swrdata.length > 0) {
    var swrdataList = swrdata?.filter(
      (_, index) =>
        (currentPage - 1) * pageSize <= index && index < currentPage * pageSize
    );
  }

  // 인풋 수정
  const [state, onChange] = useInputs({
    name: "",
    content: "",
  });
  const { name, content } = state;
  const [id, setId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const inputChg = useCallback((e) => onChange(e.target), []);

  // 수정 init
  const modifyInit = useCallback(
    (name, content, id) => {
      const data = [
        ["name", name],
        ["content", content],
      ];
      data.forEach((current) =>
        onChange({ name: current[0], value: current[1] })
      );
      setId(id);
    },
    [name, content, id]
  );

  // crud
  const deleteItem = useCallback(
    (id) => {
      useSwrCrud(
        "delete",
        `/api/product/comment?id=${id}`,
        {},
        swrdata,
        mutate
      );
    },
    [swrdata]
  );

  const writeItem = useCallback(() => {
    session
      ? setOpenModal(true)
      : alert(
          "로그인 후 작성하실 수 있습니다. 구매평 작성시 다음 상담시 사용가능한 포인트적립해드리고 있어요."
        );
  }, [session]);

  return (
    <div className="wrap_review">
      <h2 className="tit">구매평 </h2>
      <p className="txt">상품을 구매하신 분들이 작성한 리뷰입니다.</p>
      <button onClick={writeItem}>구매평 작성</button>
      <ul className="wrap_review_list">
        {swrdataList?.map((x, i) => {
          return (
            <li
              key={x._id}
              onClick={() => setActiveId(x._id)}
              className={activeId === x._id ? "active" : ""}
            >
              <div className="wrap_left">
                <Rate disabled={true} tooltips={x.desc} value={x.value} />
                <div className="txt_area">
                  {x.content?.split("\n").map((line) => {
                    return (
                      <>
                        {line}
                        <br />
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="box_right">
                <div className="box_name">{x.name}</div>
                <div className="createAt">
                  <Moment format="YYYY/MM/DD">{x.createdAt}</Moment>
                </div>
                <div>{x.reviewTitle}</div>
                {userid == x.userid && (
                  <div className="box_btns">
                    <span
                      onClick={() => {
                        modifyInit(x.name, x.content, x._id);
                        setOpenModal(true);
                      }}
                    >
                      수정
                    </span>
                    <span onClick={() => deleteItem(x._id)}>삭제</span>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination
        total={totalCount}
        current={currentPage}
        pageSize={pageSize}
        onChange={(page) => setCurrentPage(page)}
      />
      {openModal && (
        <ReviewPopup
          name={name}
          content={content}
          id={id}
          modifyInit={modifyInit}
          onChange={inputChg}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
}
