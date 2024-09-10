import { NextFunction, Request, Response } from "express"
import AuthService from "../services/auth"

class AuthController {
    static async register(request: Request, response: Response, next: NextFunction) {
        try {
          const token = await AuthService.register(request.body)

          response.status(201).json({ message: "Usuario registrado", token})
        } catch (error) {
          next(error)
        }
      }
    
      static async login(request: Request, response: Response, next: NextFunction) {
        try {
          const token = await AuthService.login(request.body)

          response.status(200).json({ message: "Bienvenido", token})
        } catch (error) {
          next(error)
        }
      }
    
      static async logout(request: Request, response: Response, next: NextFunction) {
        try {
          await AuthService.logout(request.query.token)

          response.status(200).json({ message: "Token eliminado correctamente" })
        } catch (error) {
          next(error)
        }
      }
}

export default AuthController