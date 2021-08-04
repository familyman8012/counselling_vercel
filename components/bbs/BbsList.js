import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { LockOutlined } from "@ant-design/icons";
import Pagination from "rc-pagination";

import "rc-pagination/assets/index.css";

function BbsList({ swrdata, category }) {
  // session
  const [session] = useSession();

  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [initData, setinitData] = useState(null);

  //useRouter
  const router = useRouter();

  // 페이징겸, 리스트 만들기.
  useEffect(() => {
    setTotalCount(swrdata?.length);
    setinitData(swrdata);
  }, [swrdata]);

  if (Array.isArray(swrdata) && swrdata.length > 0) {
    var swrdataList = swrdata?.filter(
      (_, index) =>
        (currentPage - 1) * pageSize <= index && index < currentPage * pageSize
    );
  }
  // const swrdataList = swrdata?.filter(
  //   (_, index) =>
  //     (currentPage - 1) * pageSize + 1 <= index &&
  //     index <= currentPage * pageSize
  // );

  // 글쓰기
  const post_write = () => {
    if (session === null) {
      alert("로그인 후 글등록을 하실 수 있습니다.");
      return;
    }
    router.push(`/bbs/write?category=${category}`, "/bbs/write");
  };

  // 글 자세히보기
  const detailMove = (p_id, writedid) => {
    if (
      category === "상담사연" &&
      (session === null ||
        (session?.user.uid !== writedid &&
          session?.user.email !== "master@master.com"))
    ) {
      alert("모든 상담 내용은 비밀로 저장되며, 자신이 쓴 글만 볼 수 있습니다.");
      return;
    }
    router.push(`/bbs/detail?p_id=${p_id}&category=${category}`, "/bbs/detail");
  };

  return (
    <>
      <div className="wrap_board">
        <ul className="board">
          <li>
            <span className="no">No</span>
            <span className="title">제목</span>
            <span className="username">글쓴이</span>
            <span className="time">작성시간</span>
          </li>
          {swrdataList?.map((x, i) => {
            return (
              <li key={x._id} onClick={() => detailMove(x._id, x.userid)}>
                <span className="no">
                  {totalCount - i - pageSize * (currentPage - 1)}
                </span>
                <span className="title">
                  {x.category === "상담사연" &&
                  session?.user.uid !== x.userid ? (
                    <LockOutlined />
                  ) : (
                    x.category === "상담사연" && (
                      <span className="badge_my">My</span>
                    )
                  )}
                  <span style={{ marginLeft: "15px" }}>{x.title}</span>
                </span>
                <span className="username">{x.username}</span>
                <span className="time">
                  <Moment format="YYYY/MM/DD">{x.createdAt}</Moment>
                </span>
              </li>
            );
          })}
        </ul>
        {category === "새로운소식" &&
        session?.user.email !== "master@master.com" ? null : (
          <button className="btn_write" onClick={post_write}>
            글쓰기
          </button>
        )}
      </div>
      <Pagination
        total={totalCount}
        current={currentPage}
        pageSize={pageSize}
        onChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default BbsList;
