import React, { useState } from "react";
import Link from "next/link";
import Gnb from "./Gnb";
import { signIn, signOut, useSession } from "next-auth/client";

function Header() {
  const [session, loading] = useSession();
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <header className="wrapp-header">
      <div className="header-box-01">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 text-xs-center box_header_tool">
              <span
                className="btn_all_menu"
                onClick={() => setmenuOpen(!menuOpen)}
              >
                <img src="images/btn_allmenu.svg" alt="모든메뉴" />
              </span>
              <Link href="/">
                <a className="logo">
                  <h1>
                    <span className="blind">심리상담센터 마인드케어센터</span>
                  </h1>
                </a>
              </Link>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-8 text-xs-center text-right login-wrap">
              <div className="login_box">
                {!session && (
                  <>
                    <Link href="/signin">
                      <a>로그인</a>
                    </Link>
                  </>
                )}
                {session && (
                  <>
                    <span className="userinfo">{session.user.email}</span>
                    <span className="btn_logout" onClick={() => signOut()}>
                      로그아웃
                    </span>
                  </>
                )}
              </div>
              <a
                className="btn-app"
                href="http://pf.kakao.com/_aFQms/chat"
                target="_blank"
                rel="noopner noreferrer"
              >
                무료진단 &amp; 정규상담 문의
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Main navigation --> */}
      <div className="header-box-02">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Gnb open={menuOpen} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
