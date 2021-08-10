import { DefaultSeo, NextSeo } from "next-seo";

export function CommonSeo() {
  const CommonSeoData = {
    keywords: `심리상담센터, PTSD, 심리상담, 공황장애, 공황장애증상, 우울증, 불면증, 성인ADHD, 조울증, 불안장애, 스트레스해소법, 강박증, 
    자존감높이는방법, 대인기피증, 분노조절장애, 부부상담클리닉, 데이트폭력, 도박중독치료센터, 피터팬증후군, 심리상담사, 심리학, 적성검사, 부부상담
    심리검사, 연애상담`,
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/images/seo/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/images/seo/apple-icon-76x76.png",
        sizes: "76x76",
      },
      {
        rel: "apple-touch-icon",
        href: "/images/seo/apple-icon-120x120.jpg",
        sizes: "120x120",
      },
    ],
    additionalMetaTags: [
      {
        name: "application-name",
        content: "심리상담 마인드케어센터",
      },
      {
        name: "msapplication-tooltip",
        content: "마인드케어센터",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],

    twitter: {
      handle: "@handle",
      site: "mindcarecenter.org",
      cardType: "summary_large_image",
    },
  };
  return <DefaultSeo {...CommonSeoData} />;
}

export function IndexSeo() {
  const indexSeoData = {
    canonical: "https://mindcarecenter.org",
    title:
      "심리상담센터 마인드케어센터 | 내담자들을 행복으로 이끄는 심리상담 진행",
    description:
      "자존감높이는방법, PTSD, 공황장애, 불명증, ADHD, 불안장애 등 내담자들의 힘든 마음을 행복으로 이끄는 긍정심리학 기반의 심리상담을 진행하고 있습니다.",

    openGraph: {
      type: "website",
      title:
        "심리상담센터 마인드케어센터 | 내담자들을 행복으로 이끄는 심리상담 진행",
      description: `자존감높이는방법, 스트레스해소법, PTSD, 공황장애, 불명증, 
          ADHD, 불안장애, 부부상담클리닉, 연애/재회등 내담자의 힘든 마음을 행복으로 이끄는 긍정심리학 기반의 심리상담센터 마인드케어센터로 오세요`,
      url: "https://mindcarecenter.org",
      images: [
        {
          url: "https://mindcarecenter.org/seo/images/img_box_04.jpg",
          width: 1200,
          height: 630,
          alt: "심리상담센터 마인드케어센터 홍보이미지",
        },
      ],
      site_name: "심리상담센터 마인드케어센터",
    },
  };
  return <NextSeo {...indexSeoData} />;
}

export function AboutSeo() {
  const aboutSeoData = {
    canonical: "https://mindcarecenter.org/about",
    title: "진정한 행복, 최상의 변화 | 심리상담센터 마인드케어센터 소개 ",
    description:
      "누구나 행복을 배울 수 있음에 대한 과학적 근거와 데이터에 기반한 긍정심리학을 바탕으로 올바른 심리상담을 통해 내담자분들의 최상의 변화를 돕고 있습니다.",

    openGraph: {
      type: "website",
      title:
        "스트레스, 우울, 불안, 강박 등에 힘들어 심리상담을 통해 진정한 행복, 최상의 변화를 원한다면? 마인드케어소개",
      description: `행복도 배울 수 있다는 것을 아시나요? 누구나 행복을 배울 수 있음에 대한 과학적 근거와 데이터에 기반한 긍정심리학. 최상의 변화를 가져다주는 마인드케어센터를 소개합니다.`,
      url: "https://mindcarecenter.org/about",
      images: [
        {
          url: "https://mindcarecenter.org/images/seo/tip014t012590.jpg",
          width: 1200,
          height: 630,
          alt: "심리상담센터 마인드케어센터 소개 홍보이미지",
        },
      ],
      site_name: "심리상담센터 마인드케어센터",
    },
  };
  return <NextSeo {...aboutSeoData} />;
}

export function ReservationSeo() {
  const ReservationSeoData = {
    canonical: "https://mindcarecenter.org/reservation",
    title: "심리상담 및 심리검사 예약 | 심리상담센터 마인드케어",
    description:
      "무료 심리진단 및 정식 심리상담까지 빠르게 예약하고, 당일 진행되는 마인드케어센터",
    openGraph: {
      type: "website",
      title:
        "심리상담 및 심리검사 예약, 빠르게 예약하고 당일 진행되는 마인드케어",
      description: `우리는 내담자들을 위해 최대한 신속하게 도움을 드리고 있습니다.`,
      url: "https://mindcarecenter.org/reservation",
      images: [
        {
          url: "https://mindcarecenter.org/images/seo/tip114t002503.jpg",
          width: 1200,
          height: 630,
          alt: "심리상담센터 마인드케어센터 소개 홍보이미지",
        },
      ],
      site_name: "심리상담센터 마인드케어센터",
    },
  };
  return <NextSeo {...ReservationSeoData} />;
}

export function CounsellingSeo() {
  const CounsellingSeoData = {
    canonical: "https://mindcarecenter.org/counselling",
    title: "심리상담 신청작성 | 심리상담센터 마인드케어센터",
    description:
      "무료 심리진단 및 정식 심리상담까지 빠르게 예약하고, 당일 진행되는 마인드케어센터",

    openGraph: {
      type: "website",
      title:
        "심리상담 및 심리검사 예약, 빠르게 예약하고 당일 진행되는 마인드케어",
      description: `우리는 내담자들을 위해 최대한 신속하게 도움을 드리고 있습니다.`,
      url: "https://mindcarecenter.org/counselling",
      images: [
        {
          url: "https://mindcarecenter.org/images/seo/tip114t002503.jpg",
          width: 1200,
          height: 630,
          alt: "심리상담센터 마인드케어센터 소개 홍보이미지",
        },
      ],
      site_name: "심리상담센터 마인드케어센터",
    },
  };
  return <NextSeo {...CounsellingSeoData} />;
}

export function NoticeSeo() {
  const NoticeSeoData = {
    canonical: "https://mindcarecenter.org/notice",
    title: "새로운 소식과 이야기 | 심리상담센터 마인드케어센터",
    description:
      "심리상담센터 마인드케어센터를 사랑해주시는 분들에게 전달하는 이야기",

    openGraph: {
      type: "website",
      title: "새로운 소식과 이야기 | 심리상담센터 마인드케어센터",
      description: `심리상담센터 마인드케어센터를 사랑해주시는 분들에게 전달하는 이야기`,
      url: "https://mindcarecenter.org/notice",
      images: [
        {
          url: "https://mindcarecenter.org/images/seo/123.jpg",
          width: 1200,
          height: 630,
          alt: "심리상담센터 마인드케어센터 소개 홍보이미지",
        },
      ],
      site_name: "심리상담센터 마인드케어센터",
    },
  };
  return <NextSeo {...NoticeSeoData} />;
}

export function RegisterSeo() {
  const RegisterSeoData = {
    canonical: "https://mindcarecenter.org/register",
    title: "회원가입 | 심리상담센터 마인드케어센터",
    description: "회원가입시 무료진단 및 포인트적립 등 다양한 혜택을 드립니다.",
    openGraph: {
      type: "website",
      title: "회원가입 | 심리상담센터 마인드케어센터",
      description: `회원가입시 무료진단 및 포인트적립 등 다양한 혜택을 드립니다.`,
      url: "https://mindcarecenter.org/register",
      images: [
        {
          url: "https://mindcarecenter.org/seo/images/img_box_04.jpg",
          width: 1200,
          height: 630,
          alt: "심리상담센터 마인드케어센터 소개 홍보이미지",
        },
      ],
      site_name: "심리상담센터 마인드케어센터",
    },
  };
  return <NextSeo {...RegisterSeoData} />;
}

export function SignInSeo() {
  const SignInSeoData = {
    canonical: "https://mindcarecenter.org/signin",
    title: "로그인 | 심리상담센터 마인드케어센터",
    description: "심리상담센터 마인드케어센터에 오신 것을 환영합니다.",
    openGraph: {
      type: "website",
      title: "로그인 | 심리상담센터 마인드케어센터",
      description: `심리상담센터 마인드케어센터에 로그인`,
      url: "https://mindcarecenter.org/signin",
      images: [
        {
          url: "https://mindcarecenter.org/seo/images/img_box_04.jpg",
          width: 1200,
          height: 630,
          alt: "심리상담센터 마인드케어센터 소개 홍보이미지",
        },
      ],
      site_name: "심리상담센터 마인드케어센터",
    },
  };
  return <NextSeo {...SignInSeoData} />;
}

export function PaymentSeo() {
  const PaymentSeoData = {
    canonical: "https://mindcarecenter.org/payment",
    title: "결제 | 심리상담센터 마인드케어센터",
    description:
      "행복으로 이끄는 마인드케어센터 심리상담 프로그램 결제페이지입니다.",

    openGraph: {
      type: "website",
      title: "결제 | 심리상담센터 마인드케어센터",
      description: `행복으로 이끄는 마인드케어센터 심리상담 프로그램 결제페이지입니다.`,
      url: "https://mindcarecenter.org/payment",
      images: [
        {
          url: "https://mindcarecenter.org/images/seo/tip114t002503.jpg",
          width: 1200,
          height: 630,
          alt: "심리상담센터 마인드케어센터 소개 홍보이미지",
        },
      ],
      site_name: "심리상담센터 마인드케어센터",
    },
  };
  return <NextSeo {...PaymentSeoData} />;
}

export function PaymentCompleteSeo() {
  const PaymentCompleteSeoData = {
    canonical: "https://mindcarecenter.org/payment",
    title: "결제완료 | 심리상담센터 마인드케어센터",
    description:
      "마인드케어심리상담 프로그램을 선택해주셔서 감사합니다. 최상의 변화, 더 나은 심리상담을 제공하기 위해 앞으로도 노력하겠습니다.",

    openGraph: {
      type: "website",
      title: "결제완료 | 심리상담센터 마인드케어센터",
      description: `마인드케어센터 결제완료페이지`,
      url: "https://mindcarecenter.org/payment",
      images: [
        {
          url: "https://mindcarecenter.org/images/seo/tip114t002503.jpg",
          width: 1200,
          height: 630,
          alt: "심리상담센터 마인드케어센터 소개 홍보이미지",
        },
      ],
      site_name: "심리상담센터 마인드케어센터",
    },
  };
  return <NextSeo {...PaymentCompleteSeoData} />;
}

export function YakwanSeo() {
  const YakwanSeoData = {
    canonical: "https://mindcarecenter.org/yakwan",
    title: "약관 | 심리상담센터 마인드케어센터",
    description: "심리상담센터 마인드케어센터 약관",
    openGraph: {
      type: "website",
      title: "약관 | 심리상담센터 마인드케어센터",
      description: `심리상담센터 마인드케어센터에 약관`,
      url: "https://mindcarecenter.org/yakwan",
      images: [
        {
          url: "https://mindcarecenter.org/seo/images/img_box_04.jpg",
          width: 1200,
          height: 630,
          alt: "심리상담센터 마인드케어센터 소개 홍보이미지",
        },
      ],
      site_name: "심리상담센터 마인드케어센터",
    },
  };
  return <NextSeo {...YakwanSeoData} />;
}

export function PolicySeo() {
  const PolicySeoData = {
    canonical: "https://mindcarecenter.org/policy",
    title: "개인정보처리방침 | 심리상담센터 마인드케어센터",
    description: "심리상담센터 마인드케어센터 개인정보처리방침",
    openGraph: {
      type: "website",
      title: "개인정보처리방침 | 심리상담센터 마인드케어센터",
      description: `심리상담센터 마인드케어센터에 개인정보처리방침`,
      url: "https://mindcarecenter.org/policy",
      images: [
        {
          url: "https://mindcarecenter.org/seo/images/img_box_04.jpg",
          width: 1200,
          height: 630,
          alt: "심리상담센터 마인드케어센터 소개 홍보이미지",
        },
      ],
      site_name: "심리상담센터 마인드케어센터",
    },
  };
  return <NextSeo {...PolicySeoData} />;
}
