import createHandler from "@/middleware";
import Post from "@/models/post";
import User from "@/models/user";

const handler = createHandler();

handler.get(async (req, res) => {
  var category = String(req.query.category);
  // const start_index = Number(req.query.start_index);
  // const page_size = Number(req.query.page_size);

  // const postLength = await Post.find({ category }).count();
  const posts = await Post.find({ category }).sort({ _id: -1 });
  // .skip(start_index)
  // .limit(page_size)
  // .sort({ _id: -1 })
  // .exec();
  //res.status(200).json({ postLength, posts });
  res.status(200).json(posts);
});

handler.post(async (req, res) => {
  var posts = new Post(req.body);
  try {
    const result = await posts.save();
    const usersItem = await User.updateOne(
      { _id: req.body.userid },
      { $push: { posts: result._id } },
      { upsert: true }
    );
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

handler.put(async (req, res) => {
  const { p_id, username, title, cont } = req.body;
  const modifyResult = await Post.update(
    { _id: p_id },
    {
      $set: {
        username,
        title,
        cont,
      },
    },
    { upsert: true }
  );
  return res.status(200).json(modifyResult);
});

handler.delete(async (req, res) => {
  const { id } = req.query;
  var deleteResult = await Post.remove({ _id: id });
  return res.status(200).json(deleteResult);
});

export default handler;
