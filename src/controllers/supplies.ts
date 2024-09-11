import { NextFunction, Request, Response } from "express"
import SuppliesService from "../services/supplies"

class SuppliesController {
    static async getAll(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await SuppliesService.getAll(request.query)
    
            response.status(200).json({data})
          
        } catch (error) {
          next(error)
        }
      }
    
      static async getById(request: Request, response: Response, next: NextFunction) {
        try {
          const data = await SuppliesService.getById(request.params.id, request.query)
    
          response.status(200).json({data})
        } catch (error) {
          next(error)
        }
      }
    
      static async create(request: Request, response: Response, next: NextFunction) {
        try {
          const data = await SuppliesService.create(request.body)
    
          response.status(201).json({data})
        } catch (error) {
          next(error)
        }
      }
    
      static async updateById(request: Request, response: Response, next: NextFunction) {
        try {
          await SuppliesService.updateById(request.params.id, request.body)
    
          response.status(200).json({message: "Suministro modificado con exito"})
        } catch (error) {
          next(error)
        }
      }
    
      static async deleteById(request: Request, response: Response, next: NextFunction) {
        try {
          await SuppliesService.deleteById(request.params.id)
    
          response.status(200).json({message: "Suministro eliminado con exito"})
        } catch (error) {
          next(error)
        }
      }
}

export default SuppliesController