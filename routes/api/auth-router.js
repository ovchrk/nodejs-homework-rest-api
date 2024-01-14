const express = require("express");

const authRouter = express.Router();
const authController = require("../../controllers/auth-controller");

const {
  isEmptyBody,
  validateBody,
  authenticate,
  upload,
} = require("../../middleware");

const { userSignUpSchema, userSignInSchema } = require("../../models/User");

authRouter.post(
  "/register",
  isEmptyBody,
  validateBody(userSignUpSchema),
  authController.signup
);
authRouter.post(
  "/login",
  isEmptyBody,
  validateBody(userSignInSchema),
  authController.signin
);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logOut);
authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authController.avatarChange
);

module.exports = authRouter;
