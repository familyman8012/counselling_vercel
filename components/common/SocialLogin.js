import React from "react";
import { useRouter } from "next/router";
import {
  providers,
  signIn,
  getSession,
  csrfToken,
  getProviders,
} from "next-auth/client";

export default function SocialLogin({ providers, csrfToken }) {
  const {
    query: { callbackUrl },
  } = useRouter();
  return (
    <div>
      {Object.values(providers).map((provider) => {
        if (provider.name === "Custom Provider") {
          return;
        }
        const providerList = () => {
          if (provider.name === "Kakao") {
            return "카카오";
          } else if (provider.name === "Google") {
            return "구글";
          }
        };
        const providerName = providerList();
        return (
          <div key={provider.name} className="box_login_social">
            <button
              className={provider.name}
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: "http://localhost:3000",
                })
              }
            >
              <span className="btn_inner">
                {providerName}로 1초 만에 로그인
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
