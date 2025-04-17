"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordValidate = void 0;
const zod_1 = __importDefault(require("zod"));
const createServiceRecordValidateSchema = zod_1.default.object({
    body: zod_1.default.object({
        bikeId: zod_1.default.string({ required_error: "bikeId is reqired", invalid_type_error: "bikeId must be string" }),
        serviceDate: zod_1.default.string({ required_error: "serviceDate is reqired", invalid_type_error: "serviceDate must be string" }),
        description: zod_1.default.string({ required_error: "description is reqired", invalid_type_error: "description must be string" }),
        status: zod_1.default.string({ required_error: "status is reqired", invalid_type_error: "status must be string" })
    })
});
const updateServiceRecordValidateSchema = zod_1.default.object({
    body: zod_1.default.object({
        completionDate: zod_1.default.string({ required_error: "completionDate is reqired", invalid_type_error: "completionDate must be string" }),
    })
});
exports.ServiceRecordValidate = {
    createServiceRecordValidateSchema,
    updateServiceRecordValidateSchema
};
