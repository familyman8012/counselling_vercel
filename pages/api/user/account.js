import createHandler from "@/middleware";
import User from "@/models/user";
import Account from "@/models/account";

const handler = createHandler();

handler.delete(async (req, res) => {
  const { _id } = req.query;
  const accounts = await Account.remove({ userId: _id });
  const users = await User.remove({ _id });
  return res.status(200).json(accounts);
});

export default handler;
