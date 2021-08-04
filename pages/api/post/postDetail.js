import createHandler from "@/middleware";
import Post from "@/models/post";
import User from "@/models/user";

const handler = createHandler();

handler.get(async (req, res) => {
  const id = req.query._id;

  const posts = await Post.find({ _id: req.query._id });
  res.status(200).json(posts);
});

export default handler;
