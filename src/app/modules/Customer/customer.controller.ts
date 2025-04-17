import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CustomerService } from "./customer.service";

//  Add a new customer
const createCustomer = catchAsync(async (req, res) => {
    const result = await CustomerService.createCustomerIntoDB(req.body);
    sendResponse(res, {
        success: true,
        message: "Customer created successfully",
        data: result
    })
})
//  Get all customers
const getAllCustomer = catchAsync(async (req, res) => {
    const customers = await CustomerService.getAllCustomerIntoDB();
    sendResponse(res, {
        success: true,
        message: "Customers fetched successfully",
        data: customers
    })
})
// Get a specific customer by ID
const getCustomerById = catchAsync(async (req, res) => {
    const { id } = req.params

    const customer = await CustomerService.getCustomerByIdIntoDB(id);
    sendResponse(res, {
        success: true,
        message: "Customer fetched successfully",
        data: customer
    })

})
// update customer by ID
const updateCustomer = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await CustomerService.updateCustomerIntoDB(id, req.body);
    sendResponse(res, {
        success: true,
        message: "Customer updated successfully",
        data: result
    })

})
// delete customer by ID
const deleteCustomer = catchAsync(async (req, res) => {
    const { id } = req.params
    await CustomerService.deleteCustomerIntoDB(id);
    sendResponse(res, {
        success: true,
        message: "Customer deleted successfully",
    })

})

export const CustomerController = {
    createCustomer,
    getAllCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer
}