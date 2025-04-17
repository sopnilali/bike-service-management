"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerValidate = void 0;
const zod_1 = __importDefault(require("zod"));
const createCustomerValidateSchema = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string({ required_error: "Name is reqired", invalid_type_error: "Name must be string" }),
        email: zod_1.default.string({ required_error: "Email is reqired", invalid_type_error: "Email must be string" }),
        phone: zod_1.default.string({ required_error: "Phone is reqired", invalid_type_error: "Phone must be string" })
    })
});
const updateCustomerValidateSchema = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string().optional(),
        email: zod_1.default.string().optional(),
        phone: zod_1.default.string().optional(),
    })
});
exports.CustomerValidate = {
    createCustomerValidateSchema,
    updateCustomerValidateSchema
};
