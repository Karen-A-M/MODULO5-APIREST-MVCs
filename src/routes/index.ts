import { Router } from "express"
import authRouter from "./auth"
import usersRouter from "./users"
import suppliesRouter from "./supplies"
import checkToken from "../middlewares/check-token"

const indexRouter = Router()

indexRouter.use("/auth", authRouter)

indexRouter.use("/users", usersRouter)

indexRouter.use("/supplies", suppliesRouter)

export default indexRouter