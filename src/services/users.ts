import UsersModel from "../models/users"
import {v4 as uuidv4} from "uuid"
import customError from "../utils/custom-error"

class UsersService {
    static async create(data: { name: string, rol: string, email: string }) {
        try {
          const usersDb = await UsersModel.read()
          const id = uuidv4()
          const {name, rol, email} = data
          const newUser = {
            id,
            name,
            rol,
            email
          }

          const findEmail = usersDb.users.find((user) => user.email == email)

          if(findEmail) customError({message: "El email ya existe en la base de datos", status: 400})
          
          usersDb.users.push(newUser)

          await UsersModel.write(usersDb)
          return id
        } catch (error) {
          throw error
        }
      }
    
      static async read() {
        try {
          const db = await UsersModel.read()
    
          return db
        } catch (error) {
          throw error
        }
      }
    
      static async getByEmail(email) {
        try {
          const db = await UsersService.read()
    
          const user = db.users.find((user) => email == user.email)
          if (!user) customError({message: "Usuario no encontrado", status: 404})
          return user
        } catch (error) {
          throw error
        }
      }

      static async deleteById(id: string) {
        try {
          const db = await UsersModel.read();
          const users = db.users.filter((user) => user.id != id)
    
          if (db.users.length == users.length) customError({message: "Usuario no encontrado", status: 404})
    
          db.users = users
    
          await UsersModel.write(db)
        } catch (error) {
          throw error
        }
      }
}

export default UsersService