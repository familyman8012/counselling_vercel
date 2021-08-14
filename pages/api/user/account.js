import createHandler from "@/middleware";
import User from "@/models/user";
import Account from "@/models/account";
import Post from "@/models/post";

const handler = createHandler();

handler.delete(async (req, res) => {
  const { _id } = req.query;
  const posts = await Post.remove({ userid: _id });
  const accounts = await Account.remove({ userId: _id });
  const users = await User.remove({ _id });
  return res.status(200).json(accounts);
});

export default handler;
