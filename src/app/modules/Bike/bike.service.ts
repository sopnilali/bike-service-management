import AppError from "../../errors/AppError"
import prisma from "../../utils/prisma"
import { IBike } from "./bike.interface"
import httpStatus from 'http-status'


const createBikeIntoDB = async(payload: IBike)=> {
    const result = await prisma.bike.create({
        data: payload
    })
    return result
}

const getAllBikesIntoDB = async()=> {
    const bikes = await prisma.bike.findMany();
    return bikes
}

const getBikesByIdIntoDB = async(bikeId: string )=> {

    const verifyBike = await prisma.bike.findUnique({
        where: {bikeId}
    })
    if(!verifyBike){
        throw new AppError(httpStatus.NOT_FOUND, "Bike Not Found!")
    }

    const bike = await prisma.bike.findUnique({
        where: {bikeId}
    });
    return bike
}

const updateBikeIntoDB = async(bikeId: string, payload: Partial<IBike>)=> {
    const bike = await prisma.$transaction(async(trnsactionClient)=> {
        await trnsactionClient.bike.findFirstOrThrow({
            where: {bikeId}
        })

        const updateBike = await trnsactionClient.bike.update({
            where: {bikeId},
            data: payload
        })
        return updateBike
        
    })
    return bike
}

const deleteBikeIntoDB = async(bikeId: string, )=> {
    const result = await prisma.bike.delete({
        where: {bikeId}
    })
    return result
}



export const BikeService = {
    createBikeIntoDB,
    getAllBikesIntoDB,
    getBikesByIdIntoDB,
    updateBikeIntoDB,
    deleteBikeIntoDB
}