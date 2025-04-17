import { Router } from "express";
import { getAllUser, register } from "../controllers/user.controller.js";

const router = Router();

const exapmle = (req, res, next) => {
  req.vishal = req.params.id;
  console.log("im middleware");
  next();
};

router.route("/register/:id/:id2").post(exapmle, register);
router.route("/getAllUsers").get(getAllUser);

export default router;
