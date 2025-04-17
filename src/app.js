import express from "express";
import { Message } from "./models/message.model.js";

const app = express();

app.use(express.json());

import userRouter from "./routes/user.route.js";
import messageRouter from "./routes/message.route.js";

app.use("/api/user/v1", userRouter);
app.use("/api/messages/v1", messageRouter);

export default app;
