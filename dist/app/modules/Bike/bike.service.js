"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const http_status_1 = __importDefault(require("http-status"));
const createBikeIntoDB = async (payload) => {
    const result = await prisma_1.default.bike.create({
        data: payload
    });
    return result;
};
const getAllBikesIntoDB = async () => {
    const bikes = await prisma_1.default.bike.findMany();
    return bikes;
};
const getBikesByIdIntoDB = async (bikeId) => {
    const verifyBike = await prisma_1.default.bike.findUnique({
        where: { bikeId }
    });
    if (!verifyBike) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Bike Not Found!");
    }
    const bike = await prisma_1.default.bike.findUnique({
        where: { bikeId }
    });
    return bike;
};
const updateBikeIntoDB = async (bikeId, payload) => {
    const bike = await prisma_1.default.$transaction(async (trnsactionClient) => {
        await trnsactionClient.bike.findFirstOrThrow({
            where: { bikeId }
        });
        const updateBike = await trnsactionClient.bike.update({
            where: { bikeId },
            data: payload
        });
        return updateBike;
    });
    return bike;
};
const deleteBikeIntoDB = async (bikeId) => {
    const result = await prisma_1.default.bike.delete({
        where: { bikeId }
    });
    return result;
};
exports.BikeService = {
    createBikeIntoDB,
    getAllBikesIntoDB,
    getBikesByIdIntoDB,
    updateBikeIntoDB,
    deleteBikeIntoDB
};
