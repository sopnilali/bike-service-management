"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const Servicerecord_service_1 = require("./Servicerecord.service");
// Create a service record
const CreateServiceRecord = (0, catchAsync_1.default)(async (req, res) => {
    const result = await Servicerecord_service_1.RecordService.createServiceIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Service record created successfully ✅",
        data: result
    });
});
// Get all service records
const getAllServiceRecord = (0, catchAsync_1.default)(async (req, res) => {
    const result = await Servicerecord_service_1.RecordService.getAllServiceRecordIntoDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Service records fetched successfully ✅",
        data: result
    });
});
// Get a specific service record
const getServiceRecordById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await Servicerecord_service_1.RecordService.getServiceRecordByIdIntoDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Service record fetched successfully ✅",
        data: result
    });
});
// Mark a service as completed
const updateServiceRecord = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await Servicerecord_service_1.RecordService.updateServiceRecordIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Service marked as completed ✅",
        data: result
    });
});
const deleteServiceRecord = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await Servicerecord_service_1.RecordService.deleteServiceRecordIntoDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Service record delete successfully ✅",
    });
});
const geServiceRecordStatus = (0, catchAsync_1.default)(async (req, res) => {
    const result = await Servicerecord_service_1.RecordService.geServiceRecordStatusIntoDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Overdue or pending services fetched successfully ✅",
        data: result
    });
});
exports.ServiceRecordController = {
    CreateServiceRecord,
    getAllServiceRecord,
    getServiceRecordById,
    updateServiceRecord,
    deleteServiceRecord,
    geServiceRecordStatus
};
