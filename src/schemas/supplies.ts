import {z} from "zod"

const suppliesSchema = z.object({
    name: z.string({
        invalid_type_error: "El nombre debe ser de tipo STRING",
        required_error: "El nombre es requerido"
    }),
    description: z.string({
        invalid_type_error: "La descripcion debe ser de tipo STRING",
        required_error: "La descripcion es requerida"
    }),
    stock: z.number({
        invalid_type_error: "El stock debe ser de tipo NUMBER",
        required_error: "El stock es requerido"
    }).int(),
    update: z.string({
        invalid_type_error: "La fecha debe ser de tipo STRING",
        required_error: "La fecha es requerida"
    })
})

export function validateSupply(data) {
    return suppliesSchema.safeParse(data)
}