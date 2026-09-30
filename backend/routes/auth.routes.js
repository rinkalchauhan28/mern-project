import { Router } from "express";
import { register ,login} from "../controller/auth.controller.js";
const AuthRouter = Router()

AuthRouter.post('/register',register)
AuthRouter.post('/login',login)

export default AuthRouter