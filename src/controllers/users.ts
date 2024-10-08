import { NextFunction, Request, Response } from "express"
import UsersService from "../services/users"

class UsersController {
  static async getAll(request: Request, response: Response, next: NextFunction) {
    try {
        const data = await UsersService.getAll(request.query)

        response.status(200).json({data})
      
    } catch (error) {
      next(error)
    }
  }

    static async deleteById(request: Request, response: Response, next: NextFunction) {
        try {
          await UsersService.deleteById(request.params.id)
    
          response.status(200).json({message: "Usuario eliminado con exito"})
        } catch (error) {
          next(error)
        }
      }  
}

export default UsersController