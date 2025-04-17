"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const http_status_1 = __importDefault(require("http-status"));
const createServiceIntoDB = async (payload) => {
    const result = await prisma_1.default.serviceRecord.create({
        data: payload
    });
    return result;
};
const getAllServiceRecordIntoDB = async () => {
    const result = await prisma_1.default.serviceRecord.findMany();
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Service Record Data Not Found! Try Again");
    }
    return result;
};
const getServiceRecordByIdIntoDB = async (serviceId) => {
    const serviceRecord = await prisma_1.default.serviceRecord.findUnique({
        where: { serviceId }
    });
    if (!serviceRecord) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Service Record Not Found! Try Again! ");
    }
    return serviceRecord;
};
const geServiceRecordStatusIntoDB = async () => {
    try {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const services = await prisma_1.default.serviceRecord.findMany({
            where: {
                status: {
                    in: ['pending', 'in-progress'],
                },
                serviceDate: {
                    lt: sevenDaysAgo, // Checks if older than 7 days
                },
            },
        });
        if (!services || services.length === 0) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, "No matching service records found!");
        }
        return services;
    }
    catch (err) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Error fetching service records! ");
    }
};
const updateServiceRecordIntoDB = async (serviceId, payload) => {
    const serviceRecord = await prisma_1.default.$transaction(async (trnsactionClient) => {
        await trnsactionClient.serviceRecord.findFirstOrThrow({
            where: { serviceId }
        });
        payload.status = "done"; // when complete date asign then service status done
        const updateServiceRecord = await trnsactionClient.serviceRecord.update({
            where: { serviceId },
            data: payload
        });
        return updateServiceRecord;
    });
    return serviceRecord;
};
const deleteServiceRecordIntoDB = async (serviceId) => {
    const result = await prisma_1.default.serviceRecord.delete({
        where: { serviceId }
    });
    return result;
};
exports.RecordService = {
    createServiceIntoDB,
    getAllServiceRecordIntoDB,
    getServiceRecordByIdIntoDB,
    updateServiceRecordIntoDB,
    deleteServiceRecordIntoDB,
    geServiceRecordStatusIntoDB
};
