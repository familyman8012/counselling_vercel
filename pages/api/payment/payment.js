import createHandler from "@/middleware";
import Payment from "@/models/payment";
import User from "@/models/user";

const handler = createHandler();

// handler.get(async (req, res) => {
//   const posts = await Post.find().sort({ _id: -1 }).exec();
//   res.status(200).json(posts);
// });

handler.post(async (req, res) => {
  var payments = new Payment(req.body);
  try {
    const result = await payments.save();
    const usersItem = await User.updateOne(
      { _id: req.body.userid },
      { $push: { payments: result._id } },
      { upsert: true }
    );
    return res.status(200).json({ payments });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

// handler.put(async (req, res) => {
//   console.log("req.body", req.body);
//   const { p_id, username, title, cont } = req.body;
//   console.log("cont cont", cont);
//   const modifyResult = await Post.update(
//     { _id: p_id },
//     {
//       $set: {
//         username,
//         title,
//         cont,
//       },
//     },
//     { upsert: true }
//   );
//   return res.status(200).json(modifyResult);
// });

// handler.delete(async (req, res) => {
//   const { id } = req.query;
//   var deleteResult = await Post.remove({ _id: id });
//   return res.status(200).json(deleteResult);
// });

export default handler;
