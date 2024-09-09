import { NextFunction, Request, Response, Router } from "express";

const usersRouter = Router()

usersRouter.get("/", (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json({message: "Pude entrar a users..."})
})

export default usersRouter