import { Message } from "../models/message.model.js";

const sendMessage = async (req, res) => {
  const { to } = req.params;
  const { message } = req.body;
  const data = await Message.create({ to, message });
  res.json({ data: data });
  try {
  } catch (error) {
    res.json({ error: error });
  }
};

export { sendMessage };
