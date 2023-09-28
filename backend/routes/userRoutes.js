import express from "express";
import {
  authUser,
  RegisterUser,
  LogoutUser,
  GetUserProfile,
  UpdateUserProfile,
} from "../controller/userController.js";
const router = express.Router();

router.post("/auth", authUser);
router.post("/", RegisterUser);
router.post("/logout", LogoutUser);
router.route("/profile").get(GetUserProfile).put(UpdateUserProfile);

export default router;
