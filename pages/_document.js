import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <script
            defer
            src="https://cdn.bootpay.co.kr/js/bootpay-3.3.1.min.js"
          ></script>
          <script defer src="js/channeltalk.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
