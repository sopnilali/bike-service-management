import AppError from "../../errors/AppError"
import prisma from "../../utils/prisma"
import { ICustomer } from "./customer.interface"
import httpStatus from 'http-status'


const createCustomerIntoDB = async(payload: ICustomer)=> { // create customer
    const result = await prisma.customer.create({
        data: payload
    })
    return result // return creating result
}

const getAllCustomerIntoDB = async()=> {

    const customers = await prisma.customer.findMany();
    return customers
}

const getCustomerByIdIntoDB = async(customerId: string)=> {


    const verifyCustomer = await prisma.customer.findUnique({
        where: {customerId}
    })
    if(!verifyCustomer){
        throw new AppError(httpStatus.NOT_FOUND, "Customer Not Found!")
    }

    const customer = await prisma.customer.findUnique({
        where: {customerId}
    })
    return customer
}

const updateCustomerIntoDB = async(customerId: string, payload: Partial<ICustomer>)=> {
    const customer = await prisma.$transaction(async(trnsactionClient)=> {
        await trnsactionClient.customer.findFirstOrThrow({
            where: {customerId}
        })

        const updateCustomer = await trnsactionClient.customer.update({
            where: {customerId},
            data: payload
        })
        return updateCustomer
        
    })
    return customer
}

const deleteCustomerIntoDB = async(customerId: string, )=> {
    const result = await prisma.customer.delete({
        where: {customerId}
    })
    return result
}

export const CustomerService = {
    createCustomerIntoDB,
    getAllCustomerIntoDB,
    getCustomerByIdIntoDB,
    updateCustomerIntoDB,
    deleteCustomerIntoDB
}