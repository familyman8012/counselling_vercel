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
    title: "최고의 심리상담을 제공하는 심리상담센터  - 마인드케어센터",
    description:
      "PTSD, 공황장애, 불명증, ADHD, 불안장애 등 내담자들의 힘든 마음을 행복으로 이끄는 심리상담을 진행하고 있습니다.",

    openGraph: {
      type: "website",
      title: "최고의 심리상담을 제공하는 심리상담센터 - 마인드케어센터",
      description: `PTSD, 공황장애, 불명증, ADHD, 불안장애 등 내담자들의 힘든 마음을 행복으로 이끄는 심리상담을 진행하고 있습니다.`,
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
    title: "최상의 변화를 위한 심리상담 - 마인드케어센터 소개",
    description:
      "스트레스, 우울, 불안, 가족관계, 부부, 연인관계 등, 여러가지 이유로 마음이 힘들어질 때가 있습니다. 진정한 행복 마인드케어센터에서는 누구나 행복을 배울 수 있음에 대한 과학적 근거와 데이터에 기반한 긍정심리학을 바탕으로한 심리상담을 제공하고 있습니다.",

    openGraph: {
      type: "website",
      title: "최상의 변화를 위한 심리상담 - 마인드케어센터 소개",
      description: `스트레스, 우울, 불안, 가족관계, 부부, 연인관계 등, 여러가지 이유로 마음이 힘들어질 때가 있습니다. 진정한 행복 마인드케어센터에서는 누구나 행복을 배울 수 있음에 대한 과학적 근거와 데이터에 기반한 긍정심리학을 바탕으로한 심리상담을 제공하고 있습니다.`,
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
    title: "오늘 심리검사 및 심리상담을 받고 싶다면? - 마인드케어 예약",
    description:
      "우리는 내담자들을 위해 최대한 신속하게 도움을 드리고 있습니다. 예약시스템을 확인 후 진행을 해주시면 최대한 당일 내에 상담이 이루어지도록 도와드리겠습니다.",
    openGraph: {
      type: "website",
      title: "오늘 심리검사 및 심리상담을 받고 싶다면? - 마인드케어 예약",
      description: `우리는 내담자들을 위해 최대한 신속하게 도움을 드리고 있습니다. 예약시스템을 확인 후 진행을 해주시면 최대한 당일 내에 상담이 이루어지도록 도와드리겠습니다.`,
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
    title: "철저한 맞춤 심리상담을 위한 상담신청작성 - 마인드케어센터",
    description:
      "마인드케어센터는 내담자 한 분, 한 분의 이야기를 주의깊게 듣고 철저한 맞춤형 상담이 이루어지고 있습니다. 상당 전 신청내용을 바탕으로 저희만의 MCI 진단을 통해 상담에 들어가게 됩니다.",

    openGraph: {
      type: "website",
      title: "철저한 맞춤 심리상담을 위한 상담신청작성 - 마인드케어센터",
      description: `마인드케어센터는 내담자 한 분, 한 분의 이야기를 주의깊게 듣고 철저한 맞춤형 상담이 이루어지고 있습니다. 상당 전 신청내용을 바탕으로 저희만의 MCI 진단을 통해 상담에 들어가게 됩니다.`,
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
    title: "심리상담센터 마인드케어센터 가입 - 인생의 터닝포인트",
    description:
      "다양한 원인과 이유로 마음이 힘들 때, 전문가의 도움을 필요로 할때 마인드케어센터로 오시면 인생의 전환점이 될 수 있는 심리상담을 받을 수 있습니다.",
    openGraph: {
      type: "website",
      title: "심리상담센터 마인드케어센터 가입 - 인생의 터닝포인트",
      description: `다양한 원인과 이유로 마음이 힘들 때, 전문가의 도움을 필요로 할때 마인드케어센터로 오시면 인생의 전환점이 될 수 있는 심리상담을 받을 수 있습니다.`,
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
    title: "심리상담센터 마인드케어센터 로그인 - 행복으로의 로그인",
    description:
      "심리상담센터 마인드케어센터에 오신 것을 환영합니다. 내담자들을 위한 최선을 위한 혁신과 최상의 상담을 제공하고 있습니다.",
    openGraph: {
      type: "website",
      title: "심리상담센터 마인드케어센터 로그인 - 행복으로의 로그인",
      description: `심리상담센터 마인드케어센터에 오신 것을 환영합니다. 내담자들을 위한 최선을 위한 혁신과 최상의 상담을 제공하고 있습니다.`,
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
    title: "합리적인 심리상담비용 - 마인드케어센터 결제",
    description:
      "최상의 심리상담을 진행하기 위해 최고의 선생님들을 모시고 있습니다. 저렴한 가격보다는 질높은 상담을 통해 최선의 변화와 만족감을 드리겠습니다.",

    openGraph: {
      type: "website",
      title: "합리적인 심리상담비용 - 마인드케어센터 결제",
      description: `최상의 심리상담을 진행하기 위해 최고의 선생님들을 모시고 있습니다. 저렴한 가격보다는 질높은 상담을 통해 최선의 변화와 만족감을 드리겠습니다.`,
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
