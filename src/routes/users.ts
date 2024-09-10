import { Router } from "express"
import UsersController from "../controllers/users"

const usersRouter = Router()

usersRouter.delete("/:id", UsersController.deleteById)

export default usersRouter