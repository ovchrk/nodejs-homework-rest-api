const express = require("express");

const authRouter = express.Router();
const authController = require("../../controllers/auth-controller");

const { isEmptyBody, validateBody, authenticate } = require("../../middleware");

const { isEmptyFavorite } = require("../../middleware/isEmptyBody");
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

authRouter.post("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logOut);

module.exports = authRouter;
