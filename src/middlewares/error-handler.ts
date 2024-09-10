import { NextFunction, Request, Response } from "express";

function errorHandler(error, request: Request, response: Response, next: NextFunction) {
    const { statusCode, message } = error

    response.status(statusCode || 500).json({ message: message })
}

export default errorHandler