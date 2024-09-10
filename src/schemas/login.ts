import {z} from "zod"

const loginSchema = z.object({
    email: z.string({
        invalid_type_error: "El email debe ser de tipo STRING",
        required_error: "El email es requerido"
    }).email().min(5, {message: "El email tiene que tener como MINIMO 5 caracteres"}),
    password: z.string({
        invalid_type_error: "La contraseña debe ser de tipo STRING",
        required_error: "La contraseña es requerida"
    }).min(8, {message: "La contraseña tiene que tener como MINIMO 8 caracteres"})
})

export function validateLogin(data) {
    return loginSchema.safeParse(data)
}