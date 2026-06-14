import { Router } from "express";
import accountController from "../controller/account.controller.js";
import validationMiddleware from "../middleware/validation.middleware.js";
import accountValidationSchema from "../validation/account.validation.js";
import authMiddleware from "../middleware/auth.middleware.js";

const accountRouter = Router();

// dang ky
accountRouter.post(
  "/register",
  validationMiddleware(accountValidationSchema.register),
  accountController.createAccount
);

// dang nhap
accountRouter.post(
  "/login",
  validationMiddleware(accountValidationSchema.login),
  accountController.login
);

// profile
accountRouter.get(
  "/profile",
  authMiddleware.authenticate,
  accountController.getProfile
);

// doi mat khau
accountRouter.put(
  "/password", 
  authMiddleware.authenticate, 
  accountController.changePassword
);

// quen mat khau
accountRouter.post("/verify-otp", accountController.verifyOTP);
accountRouter.post("/forgot-password", accountController.forgotPassword);
accountRouter.post("/reset-password", accountController.resetPassword);

// tao admin
accountRouter.post("/register-admin", accountController.createAdmin);

export default accountRouter;