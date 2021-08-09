import React, { useState } from "react";
import Link from "next/link";
import Gnb from "./Gnb";
import { signIn, signOut, useSession } from "next-auth/client";

function Header() {
  const [session, loading] = useSession();

  return (
    <header className="wrapp-header">
      <div className="header-box-01">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 text-xs-center">
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
                      <a>Login</a>
                    </Link>
                  </>
                )}
                {session && (
                  <>
                    <span>{session.user.email}</span>
                    <span onClick={() => signOut()}>Sign out</span>
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
              <div className="main-nav">
                <div className="main-nav__btn">
                  <div className="icon-left"></div>
                  <div className="icon-right"></div>
                </div>
                <Gnb />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
