import {z} from "zod"

const updateSchema = z.object({
    stock: z.number({
        invalid_type_error: "El stock debe ser de tipo NUMBER",
        required_error: "El stock es requerido"
    }).int()
})

export function validateUpdate(data) {
    return updateSchema.safeParse(data)
}