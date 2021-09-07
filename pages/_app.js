import React, { useState, useEffect } from "react";
import { CommonSeo } from "../components/common/seoData";
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

function FacebookPixel() {
  const router = useRouter();
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("438261934192177");
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

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
        <FacebookPixel />
        <CommonSeo />
        <Component {...pageProps} />
        {router.pathname !== "/signin" && <Footer />}
      </Provider>
    </ReduxProvider>
  );
}

export default MyApp;
