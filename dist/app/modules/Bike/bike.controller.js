"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const bike_service_1 = require("./bike.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// Add a new bike
const createBike = (0, catchAsync_1.default)(async (req, res) => {
    const result = await bike_service_1.BikeService.createBikeIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Bike added successfully! 🏍",
        data: result
    });
});
// Get all bikes
const getAllBikes = (0, catchAsync_1.default)(async (req, res) => {
    const result = await bike_service_1.BikeService.getAllBikesIntoDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Bikes fetched successfully! 🏍",
        data: result
    });
});
// Get a specific bike by ID
const getBikeById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await bike_service_1.BikeService.getBikesByIdIntoDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Bike fetched successfully! 🏍",
        data: result
    });
});
// update bike by ID
const updateBike = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await bike_service_1.BikeService.updateBikeIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Bike update successfully! 🏍",
        data: result
    });
});
// delete bike by ID
const deleteBike = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await bike_service_1.BikeService.deleteBikeIntoDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Bike delete successfully! 🏍",
        data: result
    });
});
exports.BikeController = {
    createBike,
    getAllBikes,
    getBikeById,
    updateBike,
    deleteBike
};
