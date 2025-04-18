import z from 'zod'

const createBikeValidateSchema = z.object({
    body: z.object({
        brand: z.string({required_error: "Name is reqired", invalid_type_error: "Name must be string"}),
        model: z.string({required_error: "model is reqired", invalid_type_error: "model must be string"}),
        year: z.string({required_error: "year is reqired", invalid_type_error: "year must be string"}),
        customerId: z.string({required_error: "Customer Id is reqired", invalid_type_error: "Customer Id must be string"})
    })
})

export const BikeValidateSchema = {
    createBikeValidateSchema
}