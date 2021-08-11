import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { RegisterSeo } from "../components/common/seoData";

import { useRouter } from "next/router";
import {
  providers,
  signIn,
  getSession,
  csrfToken,
  getProviders,
} from "next-auth/client";
import SocialLogin from "../components/common/SocialLogin";
import { Router } from "../node_modules/next/dist/client/router";

export default function Register({ providers, csrfToken }) {
  const {
    query: { callbackUrl },
  } = useRouter();

  const router = useRouter();

  const { register, watch, errors, handleSubmit } = useForm(); // useForm({ mode: "onChange" });
  // console.log(watch("email"));
  const userpwd = useRef();
  userpwd.current = watch("userpwd");

  const [loading, setLoading] = useState(false);

  const onSumit = async (data) => {
    setLoading(true);
    const { email, name, userpwd, phone } = data;
    try {
      const response = await axios.post("/api/user/user", {
        email,
        name,
        userpwd,
        phone,
      });
      if (response.statusText === "OK") {
        router.push("/");
      }
    } catch (error) {
      alert(error.response.data);
    }
    setLoading(false);
  };
  return (
    <>
      <RegisterSeo />
      <div className="wrap_register">
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit(onSumit)}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="홍길동"
            autoComplete="off"
            ref={register({
              required: true,
              pattern: /^[가-힣]{2,7}$/,
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <p>이름을 입력해주세요.</p>
          )}
          {errors.name && errors.name.type === "pattern" && (
            <p>
              이름 형식에 맞지 않습니다. 한글로 올바르게 이름을 입력해주세요.
            </p>
          )}
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="example@example.com"
            autoComplete="off"
            ref={register({
              required: true,
              pattern:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            })}
          />
          {errors.email && <p>이메일을 입력해주세요.</p>}
          <label>Phone</label>
          <input
            name="phone"
            type="number"
            placeholder="01012345678"
            autoComplete="off"
            ref={register({
              required: true,
              pattern: /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g,
            })}
          />
          {errors.phone && errors.phone.type === "required" && (
            <p>무료진단 및 상담진행을 위해 연락처가 필요합니다.</p>
          )}
          {errors.phone && errors.phone.type === "pattern" && (
            <p>연락처는 01012345678 처럼 숫자로만 입력해주세요.</p>
          )}
          <label>Password</label>
          <input
            name="userpwd"
            type="password"
            autoComplete="off"
            placeholder="영문 소문자 / 숫자 / 특수기호 중 2가지 이상 조합 8~16자"
            ref={register({
              required: true,
              minLength: 8,
              maxLength: 16,
              pattern:
                /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
            })}
          />
          {errors.userpwd && errors.userpwd.type === "required" && (
            <p>비밀번호를 입력해주세요.</p>
          )}
          {errors.userpwd && errors.userpwd.type === "pattern" && (
            <p>영문 소문자 / 숫자 / 특수기호 중 2가지 이상 조합 8~16자</p>
          )}

          <label>Password Confirm</label>
          <input
            name="userpwd_confirm"
            type="password"
            autoComplete="off"
            placeholder="비밀번호 확인을 위해 입력해주세요."
            ref={register({
              required: true,
              validate: (value) => value === userpwd.current,
            })}
          />
          {errors.userpwd_confirm &&
            errors.userpwd_confirm.type === "required" && (
              <p>비밀번 확인을 위해 입력하셔야합니다.</p>
            )}
          {errors.userpwd_confirm &&
            errors.userpwd_confirm.type === "validate" && (
              <p>비밀번호를 확인해주세요.</p>
            )}
          <input type="submit" disabled={loading} value="동의하고 회원가입" />
        </form>
        <div className="txt_read_yakawn">
          <a href="/yakwan" target="_blank" rel="noreferrer">
            이용약관
          </a>
          ,{" "}
          <a href="/policy2" target="_blank" rel="noreferrer">
            개인정보 수집 및 이용
          </a>
          , 내용을 확인하였고 동의합니다.
        </div>
        <SocialLogin providers={providers} csrfToken={csrfToken} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
