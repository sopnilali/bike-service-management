"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const http_status_1 = __importDefault(require("http-status"));
const createCustomerIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.create({
        data: payload
    });
    return result; // return creating result
});
const getAllCustomerIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield prisma_1.default.customer.findMany();
    return customers;
});
const getCustomerByIdIntoDB = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyCustomer = yield prisma_1.default.customer.findUnique({
        where: { customerId }
    });
    if (!verifyCustomer) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Customer Not Found");
    }
    const customer = yield prisma_1.default.customer.findUnique({
        where: { customerId }
    });
    return customer;
});
const updateCustomerIntoDB = (customerId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.default.$transaction((trnsactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield trnsactionClient.customer.findFirstOrThrow({
            where: { customerId }
        });
        const updateCustomer = yield trnsactionClient.customer.update({
            where: { customerId },
            data: payload
        });
        return updateCustomer;
    }));
    return customer;
});
const deleteCustomerIntoDB = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.delete({
        where: { customerId }
    });
    return result;
});
exports.CustomerService = {
    createCustomerIntoDB,
    getAllCustomerIntoDB,
    getCustomerByIdIntoDB,
    updateCustomerIntoDB,
    deleteCustomerIntoDB
};
