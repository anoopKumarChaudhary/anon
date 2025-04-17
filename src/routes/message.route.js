import { Router } from "express";
import { sendMessage } from "../controllers/message.controller.js";

const router = Router();

router.route("/message/:to").post(sendMessage);

export default router;
