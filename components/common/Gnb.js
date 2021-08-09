import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Gnb() {
  const router = useRouter();
  const menuLists = [
    { id: 1, link: "/", text: "홈", active: false },
    { id: 2, link: "/about", text: "심리상담센터소개", active: false },
    { id: 3, link: "/reservation", text: "심리상담예약", active: false },
    { id: 4, link: "/counselling", text: "심리상담신청작성", active: false },
    { id: 5, link: "/blog", text: "칼럼", active: false },
    { id: 6, link: "/notice", text: "새로운소식", active: false },
  ];
  return (
    <ul className="main-nav__list">
      {menuLists.map((menuItem) => {
        const { link, text } = menuItem;
        return (
          <li
            key={menuItem.id}
            className={router.pathname === link ? "active" : null}
          >
            <Link href={link}>
              <a>{text}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default React.memo(Gnb);
