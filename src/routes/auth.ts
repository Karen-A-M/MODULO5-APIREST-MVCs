import { NextFunction, Request, Response, Router } from "express";

const authRouter = Router()

authRouter.get("/", (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json({message: "Pude entrar a auth..."})
})

export default authRouter