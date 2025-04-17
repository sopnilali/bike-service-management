import AppError from "../../errors/AppError";
import prisma from "../../utils/prisma";
import { IService } from "./Servicerecord.interface";
import httpStatus from 'http-status'

const createServiceIntoDB = async (payload: IService) => {
    const result = await prisma.serviceRecord.create({
        data: payload
    })
    return result
}

const getAllServiceRecordIntoDB = async () => {
    const result = await prisma.serviceRecord.findMany();
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, "Service Record Data Not Found! Try Again")
    }
    return result
}

const getServiceRecordByIdIntoDB = async (serviceId: string) => {
    const serviceRecord = await prisma.serviceRecord.findUnique({
        where: {serviceId}
    })
    if (!serviceRecord) {
        throw new AppError(httpStatus.NOT_FOUND, "Service Record Not Found! Try Again! ")
    }
    return serviceRecord

}

const geServiceRecordStatusIntoDB = async () => {
    try {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const services = await prisma.serviceRecord.findMany({
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
            throw new AppError(httpStatus.NOT_FOUND, "No matching service records found!");
        }

        return services;
    } catch (err) {
        throw new AppError(httpStatus.BAD_REQUEST, "Error fetching service records! ")
    }
}

const updateServiceRecordIntoDB = async (serviceId: string, payload: Partial<IService>) => {
    const serviceRecord = await prisma.$transaction(async (trnsactionClient) => {
        await trnsactionClient.serviceRecord.findFirstOrThrow({
            where: { serviceId }
        })
        payload.status = "done" // when complete date asign then service status done
        const updateServiceRecord = await trnsactionClient.serviceRecord.update({
            where: { serviceId },
            data: payload
        })
        return updateServiceRecord
    })
    return serviceRecord
}

const deleteServiceRecordIntoDB = async (serviceId: string) => {
    const result = await prisma.serviceRecord.delete({
        where: { serviceId }
    })
    return result
}

export const RecordService = {
    createServiceIntoDB,
    getAllServiceRecordIntoDB,
    getServiceRecordByIdIntoDB,
    updateServiceRecordIntoDB,
    deleteServiceRecordIntoDB,
    geServiceRecordStatusIntoDB
}

