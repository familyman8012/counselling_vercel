import createHandler from "@/middleware";
import { RestClient } from "@bootpay/server-rest-client";

export default async function handler(req, res) {
  // Process a POST request

  const receiptId = req.body.receipt_id;

  await RestClient.setConfig(
    "60d743385b29480021dc503f",
    "anvgrwnFng62IgiFXGp5EBGqDx7to0BZG43jTnbokbI="
  );

  await RestClient.getAccessToken().then(function (tokenData) {
    // 부트페이로 부터 결제 토큰을 제대로 가져왔다면

    if (tokenData.status === 200) {
      RestClient.verify(receiptId).then(function (verify) {
        // 결제 금액이 요청금액과 같고 결제 상태 status가 2인 경우 ( 결제 승인 전 상태의 값은 2입니다. )

        if (
          verify.status === 200 &&
          verify.data.price == req.body.price &&
          verify.data.status === 2
        ) {
          // 결제 승인한다.
          RestClient.submit(verify.data.receipt_id).then(function (response) {
            // 서버에서 REST API로 승인 후 200 OK를 받았다면
            // 결제가 완료 처리를 한다.
            if (response.status === 200) {
              res.status(200).json(response.data);
            }
          });
        }
      });
    }
  });
}
