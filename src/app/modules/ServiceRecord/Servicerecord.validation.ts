import z from 'zod'

const createServiceRecordValidateSchema = z.object({
    body: z.object({
        bikeId: z.string({required_error: "bikeId is reqired", invalid_type_error: "bikeId must be string"}),
        serviceDate: z.string({required_error: "serviceDate is reqired", invalid_type_error: "serviceDate must be string"}),
        description: z.string({required_error: "description is reqired", invalid_type_error: "description must be string"}),
        status: z.string({required_error: "status is reqired", invalid_type_error: "status must be string"})
    })
})

const updateServiceRecordValidateSchema = z.object({
    body: z.object({
        completionDate: z.string({required_error: "completionDate is reqired", invalid_type_error: "completionDate must be string"}),
    })
})

export const ServiceRecordValidate = {
    createServiceRecordValidateSchema,
    updateServiceRecordValidateSchema
}