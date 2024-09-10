import AuthModel from "../models/auth"
import { validateRegister } from "../schemas/register"
import { validateLogin } from "../schemas/login"
import createHash from "../utils/create-hash"
import {v4 as uuidv4} from "uuid"
import UsersService from "./users"
import customError from "../utils/custom-error"

class AuthService {
    static async register(data: {name: string, rol:string, email: string; password: string;}) {
      try {
        const result = validateRegister(data)
    
        if (!result.success) customError({message: "Por favor ingrese los datos necesarios para registrarse", status: 400})

        const {name, rol, email, password} = result.data

        const userId = await UsersService.create({name, rol, email})

        const authDb = await AuthModel.read()
    
        const token = createHash(uuidv4())

        const newAuth = {
          id: uuidv4(),
          userId,
          password: createHash(password),
          token
        }

        authDb.auth.push(newAuth)
    
        AuthModel.write(authDb)

        return token
        } catch (error) {
          throw error
        }
      }

      static async getByToken(token) {
        try {
          const authDb = await AuthModel.read()

          const auth = authDb.auth.find((auth) => auth.token == token)
    
          if (!auth) customError({message: "Token no encontrado", status: 404})

          return auth
        } catch (error) {
          throw error
        }
      }
    
      static async login(data: {email: string, password: string}) {
        try {
          const result = validateLogin(data)
          
          if (!result.success) customError({message: "Por favor ingrese los datos necesarios para iniciar sesion", status: 400})

          const {email, password} = result.data

          const user = await UsersService.getByEmail(email)

          const authDb = await AuthModel.read()

          const userAuth = authDb.auth.find((auth) => auth.userId == user.id)
    
          if (userAuth.password != createHash(password)) customError({message: "Contraseña incorrecta", status: 400})
    
          const token = createHash(uuidv4())

          userAuth.token = token;
    
          await AuthModel.write(authDb)
    
          return userAuth.token
        } catch (error) {
          throw error
        }
      }
    
      static async logout(token) {
        try {
          const authDb = await AuthModel.read()
          
          const auth = authDb.auth.find((auth) => auth.token == token)
    
          if (!auth) customError({message: "Token no encontrado", status: 404})
    
          auth.token = null
    
          await AuthModel.write(authDb)
        } catch (error) {
          throw error
        }
      }

      static async read() {
        try {
          const db = await AuthModel.read()
    
          return db
        } catch (error) {
          throw error
        }
      }  
      
      static async write(data) {
        try {
          const db = await AuthModel.write(data)
    
          return db
        } catch (error) {
          throw error
        }
      }  
}

export default AuthService