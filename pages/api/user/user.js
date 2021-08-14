import createHandler from "@/middleware";
import Payment from "@/models/payment";
import User from "@/models/user";
import crypto from "crypto";

const handler = createHandler();

handler.post(async (req, res) => {
  crypto.randomBytes(64, (err, buf) => {
    crypto.pbkdf2(
      req.body.userpwd,
      buf.toString("base64"),
      100000,
      64,
      "sha512",
      (err, key) => {
        req.body.userpwd = key.toString("base64");
        req.body.salt = buf.toString("base64");
        var users = new User(req.body);
        users
          .save()
          .then((user) => {
            return res.status(200).json({ data: users });
          })
          .catch((error) => {
            error.code === 11000
              ? res
                  .status(400)
                  .send(
                    "이미 사용자가 있는 이메일입니다. 메일은 고유해야합니다. 다른 메일을 등록해주세요."
                  )
              : res
                  .status(400)
                  .send(
                    "다시 한번 시도해주세요. 반복해서 이상이 생길 시 카톡으로 알려주세요."
                  );
          });
      }
    );
  });
});

handler.get(async (req, res) => {
  if (req.query._id !== "undefined") {
    const users = await User.find({ _id: req.query._id })
      .populate("payments")
      .exec();

    res.status(200).json(users);
  }
});

export default handler;
