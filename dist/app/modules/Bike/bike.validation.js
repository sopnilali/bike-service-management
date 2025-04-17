"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeValidateSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const createBikeValidateSchema = zod_1.default.object({
    body: zod_1.default.object({
        brand: zod_1.default.string({ required_error: "Name is reqired", invalid_type_error: "Name must be string" }),
        mobile: zod_1.default.string({ required_error: "mobile is reqired", invalid_type_error: "mobile must be string" }),
        model: zod_1.default.string({ required_error: "model is reqired", invalid_type_error: "model must be string" }),
        year: zod_1.default.string({ required_error: "year is reqired", invalid_type_error: "year must be string" }),
        customerId: zod_1.default.string({ required_error: "Customer Id is reqired", invalid_type_error: "Customer Id must be string" })
    })
});
exports.BikeValidateSchema = {
    createBikeValidateSchema
};
