import UsersModel from "../models/users"
import AuthService from "./auth"
import {v4 as uuidv4} from "uuid"
import customError from "../utils/custom-error"

class UsersService {
  static async getAllWithQuery(where) {
    try {
      const { users } = await UsersModel.read()

      await AuthService.getByToken(where.token)

      return users
    } catch (error) {
      throw error
    }
  }

  static async getAll() {
    try {
      const { users } = await UsersModel.read();
      
      const userFiltered = users.map((user) => {
        const newUser = {name: user.name, rol: user.rol}
        return newUser
    })

    return userFiltered
    } catch (error) {
      throw error;
    }
  }

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
          const userDb = await UsersModel.read()
          const users = userDb.users.filter((user) => user.id != id)
          const authDb = await AuthService.read()
          const newAuth = authDb.auth.filter((auth) => auth.userId != id)
    
          if (userDb.users.length == users.length) customError({message: "Usuario no encontrado", status: 404})
    
          userDb.users = users
          authDb.auth = newAuth
    
          await UsersModel.write(userDb)
          await AuthService.write(authDb)
        } catch (error) {
          throw error
        }
      }
}

export default UsersService