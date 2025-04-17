"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const http_status_1 = __importDefault(require("http-status"));
const createCustomerIntoDB = async (payload) => {
    const result = await prisma_1.default.customer.create({
        data: payload
    });
    return result; // return creating result
};
const getAllCustomerIntoDB = async () => {
    const customers = await prisma_1.default.customer.findMany();
    return customers;
};
const getCustomerByIdIntoDB = async (customerId) => {
    const customer = await prisma_1.default.customer.findUnique({
        where: { customerId }
    });
    if (!customer) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Customer Not Found!");
    }
    return customer;
};
const updateCustomerIntoDB = async (customerId, payload) => {
    const customer = await prisma_1.default.$transaction(async (trnsactionClient) => {
        await trnsactionClient.customer.findFirstOrThrow({
            where: { customerId }
        });
        const updateCustomer = await trnsactionClient.customer.update({
            where: { customerId },
            data: payload
        });
        return updateCustomer;
    });
    return customer;
};
const deleteCustomerIntoDB = async (customerId) => {
    const result = await prisma_1.default.customer.delete({
        where: { customerId }
    });
    return result;
};
exports.CustomerService = {
    createCustomerIntoDB,
    getAllCustomerIntoDB,
    getCustomerByIdIntoDB,
    updateCustomerIntoDB,
    deleteCustomerIntoDB
};
