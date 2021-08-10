import { getProviders, getCsrfToken } from "next-auth/client";
import SocialLogin from "../components/common/SocialLogin";
import { useRouter } from "next/router";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function SignIn({ providers, csrfToken }) {
  const router = useRouter();
  const { error } = router?.query;

  if (typeof window !== "undefined" && error === "CredentialsSignin") {
    alert("아이디와 비밀번호를 확인해주세요.");
  }
  return (
    <>
      <NextSeo
        canonical="https://mindcarecenter.org/signin"
        title="로그인 | 심리상담센터 마인드케어센터"
        description="심리상담센터 마인드케어센터에 오신 것을 환영합니다."
        openGraph={{
          type: "website",
          title: "로그인 | 심리상담센터 마인드케어센터",
          description: `심리상담센터 마인드케어센터에 로그인`,
          url: "https://mindcarecenter.org/signin",
          // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next
          images: [
            {
              url: "https://mindcarecenter.org/seo/images/img_box_04.jpg",
              width: 1200,
              height: 630,
              alt: "심리상담센터 마인드케어센터 소개 홍보이미지",
            },
          ],
          site_name: "심리상담센터 마인드케어센터",
        }}
      />
      <div className="login_wrapper">
        <div className="login_area">
          <div className="login_form">
            <h1>TURNING POINT</h1>
            <h2>로그인</h2>
            <div>
              <SocialLogin providers={providers} csrfToken={csrfToken} />
              <form method="post" action="/api/auth/callback/credentials">
                <input
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />
                <label>
                  <div className="tit">이메일</div>
                  <div>
                    <input
                      name="email"
                      type="text"
                      placeholder="example@example.com"
                    />
                  </div>
                </label>
                <label>
                  <div className="tit">비밀번호</div>
                  <div>
                    <input
                      name="userpwd"
                      type="password"
                      placeholder="********"
                    />
                  </div>
                </label>
                <div className="info_reg">
                  <span className="info forget_pwd">
                    비밀번호를 잊으셨다면, 채널톡으로 문의주세요.
                  </span>
                  <span className="info reg">
                    <Link href="/register">회원가입</Link>
                  </span>
                </div>
                <button type="submit" className="btn_submit_login">
                  로그인
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="login_mv"></div>
      </div>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      providers,
    },
  };
}
