import createHandler from "@/middleware";
import Comment from "@/models/comment";
import User from "@/models/user";

const handler = createHandler();

handler.get(async (req, res) => {
  const comments = await Comment.find().sort({ _id: -1 }).exec();
  res.status(200).json(comments);
});

handler.post(async (req, res) => {
  var comments = new Comment(req.body);
  try {
    const result = await comments.save();
    const usersItem = await User.updateOne(
      { _id: req.body.userid },
      { $push: { comments: result._id } },
      { upsert: true }
    );
    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

handler.put(async (req, res) => {
  const { id, name, value, content } = req.body;
  const modifyResult = await Comment.update(
    { _id: id },
    {
      $set: {
        name,
        value,
        content,
      },
    },
    { upsert: true }
  );
  return res.status(200).json(modifyResult);
});

handler.delete(async (req, res) => {
  const { id } = req.query;
  var deleteResult = await Comment.remove({ _id: id });
  return res.status(200).json(deleteResult);
});

export default handler;
