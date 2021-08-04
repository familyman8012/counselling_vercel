import createHandler from "@/middleware";
import User from "@/models/user";
import crypto from "crypto";

const handler = createHandler();

handler.get(async (req, res) => {
  const users = await User.find({});
  return res.status(200).json({ data: users });
});

handler.post(async (req, res) => {
  var t = req.body.email;
  const getSalt = await User.find({ email: t }, { _id: false, salt: true });

  if (getSalt.length === 0) {
    return res
      .status(200)
      .json({ data: { msg: "등록되지 않은 이메일입니다.", status: 0 } });
  } else {
    await crypto.randomBytes(64, (err, buf) => {
      crypto.pbkdf2(
        req.body.userpwd,
        String(getSalt[0].salt),
        100000,
        64,
        "sha512",
        async (err, key) => {
          var users = await User.find({ userpwd: key.toString("base64") });
          if (users.length === 0) {
            return res.status(200).json({
              data: { msg: "비밀번호를 잘못 입력하셨습니다.", status: 0 },
            });
          } else {
            return res.status(200).json({ data: users[0] });
          }
        }
      );
    });
  }

  //res.status(200).json(users);
});

export default handler;
