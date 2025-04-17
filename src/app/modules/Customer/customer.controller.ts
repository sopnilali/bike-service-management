import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CustomerService } from "./customer.service";


const createCustomer = catchAsync(async (req, res) => {
    const result = await CustomerService.createCustomerIntoDB(req.body);
    sendResponse(res, {
        success: true,
        message: "Customer created successfully",
        data: result
    })
})

const getAllCustomer = catchAsync(async (req, res) => {
    const customers = await CustomerService.getAllCustomerIntoDB();
    sendResponse(res, {
        success: true,
        message: "Customers fetched successfully",
        data: customers
    })
})

const getCustomerById = catchAsync(async (req, res) => {
    const { id } = req.params

    const customer = await CustomerService.getCustomerByIdIntoDB(id);
    sendResponse(res, {
        success: true,
        message: "Customers fetched successfully",
        data: customer
    })

})

const updateCustomer = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await CustomerService.updateCustomerIntoDB(id, req.body);
    sendResponse(res, {
        success: true,
        message: "Customer updated successfully",
        data: result
    })

})

const deleteCustomer = catchAsync(async (req, res) => {
    const { id } = req.params
    await CustomerService.deleteCustomerIntoDB(id);
    sendResponse(res, {
        success: true,
        message: "Customers deleted successfully",
    })

})

export const CustomerController = {
    createCustomer,
    getAllCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer
}