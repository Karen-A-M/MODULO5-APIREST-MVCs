import {z} from "zod"

const registerSchema = z.object({
    name: z.string({
        invalid_type_error: "El nombre debe ser de tipo STRING",
        required_error: "El nombre es requerido"
    }).min(5, {message: "El nombre tiene que tener como MINIMO 5 caracteres"}),
    rol: z.string({
        invalid_type_error: "El rol debe ser de tipo STRING",
        required_error: "El rol es requerido"
    }),
    email: z.string({
        invalid_type_error: "El email debe ser de tipo STRING",
        required_error: "El email es requerido"
    }).email().min(5, {message: "El email tiene que tener como MINIMO 5 caracteres"}),
    password: z.string({
        invalid_type_error: "La contraseña debe ser de tipo STRING",
        required_error: "La contraseña es requerida"
    }).min(8, {message: "La contraseña tiene que tener como MINIMO 8 caracteres"})
})

export function validateRegister(data) {
    return registerSchema.safeParse(data)
}

