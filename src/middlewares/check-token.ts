import { NextFunction, Request, Response } from "express"
import AuthModel from "../models/auth"

async function checkToken(request: Request, response: Response, next: NextFunction) {
  const token = request.query.token

  if (!token)
    return response.status(400).json({message: "El token es obligatorio"})

  const authDb = await AuthModel.read();
  const user = authDb.auth.find((auth) => auth.token == token)

  if (!user) return response.status(401).json({message: "token inválido"})

  next()
}

export default checkToken