import SuppliesModel from "../models/supplies"
import { validateSupply } from "../schemas/supplies"
import { validateUpdate } from "../schemas/update"
import {v4 as uuidv4} from "uuid"
import AuthService from "./auth"
import customError from "../utils/custom-error"

class SuppliesService {
    static async getAllWithQuery(where) {
        try {
          const { supplies } = await SuppliesModel.read()
    
          await AuthService.getByToken(where.token)

          return supplies
        } catch (error) {
          throw error;
        }
      }

      static async getAll() {
        try {
          const { supplies } = await SuppliesModel.read()
          
          const supplyFiltered = supplies.map((supply) => {
            const newSupply = {name: supply.name, description: supply.description}
            return newSupply
        })

        return supplyFiltered
        } catch (error) {
          throw error
        }
      }
    
      static async create(supply: {name: string, description: string, stock: number, update: string}) {
        try {
          const result = validateSupply(supply)
    
          if (!result.success) customError({message: "Por favor ingrese los datos necesarios para crear un nuevo suministro", status: 400})
    
          const db = await SuppliesModel.read()

          const id = uuidv4()

          const {name, description, stock, update} = result.data

          const findSupply = db.supplies.find((supply) => supply.name == name)

          if(findSupply) customError({message: "El suministro ya existe en la base de datos", status: 400})
    
          const newSupply = {
            id,
            name,
            description,
            stock,
            update,
          }
    
          db.supplies.push(newSupply)
    
          await SuppliesModel.write(db)
    
          return newSupply;
        } catch (error) {
          throw error;
        }
      }
    
      static async updateById(id: string, data: {stock: number, update: string}) {
        try {
          const result = validateUpdate(data)
    
          if (!result.success) customError({message: "Por favor ingrese los datos necesarios para crear un nuevo suministro", status: 400})
          
          const db = await SuppliesModel.read()
    
          const supplies = db.supplies.map((supply) => {
            if (supply.id == id) {
              return {...supply, ...data}
            } else return supply
          })

          db.supplies = supplies
    
          await SuppliesModel.write(db)
        } catch (error) {
          throw error
        }
      }
    
      static async deleteById(id: string) {
        try {
          const db = await SuppliesModel.read()
          
          const supplies = db.supplies.filter((supply) => supply.id != id)
    
          if (db.supplies.length == supplies.length) customError({message: "Suministro no encontrado", status: 404})
    
          db.supplies = supplies
    
          await SuppliesModel.write(db)
        } catch (error) {
          throw error
        }
      }
    
      static async getById(id: string, where) {
        try {
          const supplies = await SuppliesService.getAllWithQuery(where)
    
          const supply = supplies.find((supply) => supply.id == id)

          if (!supply) customError({message: "Suministro no encontrado", status: 404})
    
          return supply
        } catch (error) {
          throw error
        }
      }
}

export default SuppliesService