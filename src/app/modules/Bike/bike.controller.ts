import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status'
import { BikeService } from "./bike.service";
import sendResponse from "../../utils/sendResponse";


const createBike = catchAsync(async(req, res)=> {
    const result = await BikeService.createBikeIntoDB(req.body)
    sendResponse(res, {
        success: true,
        message: "Bike added successfully! 🏍",
        data: result
    })
})

const getAllBikes = catchAsync(async(req, res)=> {
    const result = await BikeService.getAllBikesIntoDB();
    sendResponse(res, {
        success: true,
        message: "Bikes fetched successfully! 🏍",
        data: result
    })
})

const getBikeById = catchAsync(async(req, res)=> {
    const {id}= req.params
    const result = await BikeService.getBikesByIdIntoDB(id);
    sendResponse(res, {
        success: true,
        message: "Bike fetched successfully! 🏍",
        data: result
    })
})

const updateBike = catchAsync(async(req, res)=> {
    const {id}= req.params
    const result = await BikeService.updateBikeIntoDB(id, req.body);
    sendResponse(res, {
        success: true,
        message: "Bike update successfully! 🏍",
        data: result
    })
})

const deleteBike = catchAsync(async(req, res)=> {
    const {id}= req.params
    const result = await BikeService.deleteBikeIntoDB(id);
    sendResponse(res, {
        success: true,
        message: "Bike delete successfully! 🏍",
        data: result
    })
})

export const BikeController = {
    createBike,
    getAllBikes,
    getBikeById,
    updateBike,
    deleteBike
}