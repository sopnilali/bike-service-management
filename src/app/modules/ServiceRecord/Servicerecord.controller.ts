import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { RecordService } from "./Servicerecord.service";

const CreateServiceRecord  = catchAsync(async(req, res)=> {
    const result = await RecordService.createServiceIntoDB(req.body)
    sendResponse(res, {
        success: true,
        message: "Service record created successfully ✅",
        data: result
    })
})

const getAllServiceRecord = catchAsync(async(req, res)=> {
    const result = await RecordService.getAllServiceRecordIntoDB()
    sendResponse(res, {
        success: true,
        message: "Service records fetched successfully ✅",
        data: result
    })
})

const geServiceRecordStatus = catchAsync(async(req, res)=> {
    const result = await RecordService.geServiceRecordStatusIntoDB()
    sendResponse(res, {
        success: true,
        message: "Overdue or pending services fetched successfully ✅",
        data: result
    })
})

const getServiceRecordById = catchAsync(async(req, res)=> {
    const {id}= req.params
    const result = await RecordService.getServiceRecordByIdIntoDB(id)
    sendResponse(res, {
        success: true,
        message: "Service record fetched successfully ✅",
        data: result
    })
})

const updateServiceRecord = catchAsync(async(req, res)=> {
    const {id}= req.params
    const result = await RecordService.updateServiceRecordIntoDB(id, req.body)
    sendResponse(res, {
        success: true,
        message: "Service marked as completed ✅",
        data: result
    })
})

const deleteServiceRecord = catchAsync(async(req, res)=> {
    const {id}= req.params
    const result = await RecordService.deleteServiceRecordIntoDB(id)
    sendResponse(res, {
        success: true,
        message: "Service record delete successfully ✅",
    })
})

export const ServiceRecordController = {
    CreateServiceRecord,
    getAllServiceRecord,
    getServiceRecordById,
    updateServiceRecord,
    deleteServiceRecord,
    geServiceRecordStatus
}