import React, { useState, useEffect, useCallback } from "react";
import useSwrFetch from "../../hook/useSwrFetch";
import useSwrCrud from "../../hook/useSwrCrud";
import { useRouter } from "next/router";
import Moment from "react-moment";

function Bbsdetail() {
  //useRouter
  const router = useRouter();
  const { p_id, category } = router.query;
  const { swrdata, mutate } = useSwrFetch(
    `/api/post/post?category=${category}`
  );

  const categoryData = swrdata?.filter((el) => el._id === p_id);
  if (Array.isArray(categoryData) && categoryData.length !== 0) {
    var [{ _id, title, username, createdAt, cont }] = categoryData;
  } else {
    typeof window === "object" && (window.location.href = "/");
  }

  const goList = () => {
    router.back();
  };

  const DeleteItem = (p_id) => {
    useSwrCrud("delete", `/api/post/post?id=${p_id}`, {}, swrdata, mutate);
    router.back();
  };

  const modifyItem = useCallback((p_id) => {
    router.push(`/bbs/write?p_id=${p_id}&category=글수정`, "/bbs/write");
  }, []);

  if (categoryData && categoryData?.length > 0) {
    return (
      <div className="wrap_bbs_view">
        <div className="view_top">
          <h2 className="tit">{title}</h2>
          <div className="userName">{username}</div>
          <div className="etc_info">
            <span className="category">{category}</span>
            <span className="date">
              <Moment format="YYYY/MM/DD">{createdAt}</Moment>
            </span>
            <span className="modify" onClick={() => modifyItem(_id)}>
              수정
            </span>
            <span className="delete" onClick={() => DeleteItem(_id)}>
              지우기
            </span>
          </div>
        </div>
        <div
          className="view_cont"
          dangerouslySetInnerHTML={{ __html: cont }}
        ></div>
        <div className="view_bottm">
          <button onClick={goList}>목록</button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Bbsdetail;
