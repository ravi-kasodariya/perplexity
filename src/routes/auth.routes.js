import { Router } from 'express';
import { loginValidator, registerValidator } from '../validators/auth.validator.js';
import { register, verifyEmail, login, getMe } from '../controller/auth.controller.js';
import {authUser} from "../middleware/auth.middleware.js"

const authRouter = Router();

authRouter.post("/register", registerValidator, register);

authRouter.post("/login", loginValidator, login)

authRouter.get("/get-me", authUser, getMe)

authRouter.get("/verify-email", verifyEmail )

export default authRouter;