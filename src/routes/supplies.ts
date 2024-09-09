import { NextFunction, Request, Response, Router } from "express";

const suppliesRouter = Router()

suppliesRouter.get("/", (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json({message: "Pude entrar a supplies..."})
})

export default suppliesRouter