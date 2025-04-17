import z from 'zod'

const createCustomerValidateSchema = z.object({
    body: z.object({
        name: z.string({required_error: "Name is reqired", invalid_type_error: "Name must be string"}),
        email: z.string({required_error: "Email is reqired", invalid_type_error: "Email must be string"}),
        phone: z.string({required_error: "Phone is reqired", invalid_type_error: "Phone must be string"})
    })
})

const updateCustomerValidateSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().optional(),
        phone:  z.string().optional(),
    })
})

export const CustomerValidate = {
    createCustomerValidateSchema,
    updateCustomerValidateSchema
}