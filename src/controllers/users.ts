import { NextFunction, Request, Response } from "express"
import UsersService from "../services/users"

class UsersController {
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