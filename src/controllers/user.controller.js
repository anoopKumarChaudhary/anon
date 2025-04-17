import { User } from "../models/user.model.js";

const register = async (req, res) => {
  const { name } = req.body;
  const { id, id2 } = req.params;
  console.log(req.body);
  console.log(req.params);
  console.log(req.vishal);
  const user = await User.create({
    username: name,
    email: id,
  });

  res.json({ data: user });
};

const getAllUser = async (req, res) => {
  const data = await User.find({});
  res.json({ data: data });
};

export { register, getAllUser };
