import React, { useState, useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { Provider } from "next-auth/client";
import { Provider as ReduxProvider } from "react-redux";
import { useRouter } from "next/router";

import createStore from "../redux/app/store";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/slick.css";
import "../css/slick-theme.css";

import "../css/style.css";
import "../css/main.scss";
import "antd/dist/antd.css";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const store = createStore();

function MyApp({ Component, pageProps }) {
  const [showHeader, setShowHeader] = useState(true);
  const router = useRouter();

  return (
    <ReduxProvider store={store}>
      <Provider
        options={{
          clientMaxAge: 0,
          keepAlive: 0,
        }}
        session={pageProps.session}
      >
        {router.pathname !== "/signin" && <Header />}
        <DefaultSeo
          keywords="cake for a party, coffee"
          additionalLinkTags={[
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
          ]}
          additionalMetaTags={[
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
          ]}
          openGraph={{
            type: "website",
            locale: "ko_KR",
            site_name: "심리상담 마인드케어센터",
          }}
          twitter={{
            handle: "@handle",
            site: "mindcarecenter.org",
            cardType: "summary_large_image",
          }}
        />
        <Component {...pageProps} />
        {router.pathname !== "/signin" && <Footer />}
      </Provider>
    </ReduxProvider>
  );
}

export default MyApp;
