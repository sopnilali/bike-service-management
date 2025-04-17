"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const customer_service_1 = require("./customer.service");
//  Add a new customer
const createCustomer = (0, catchAsync_1.default)(async (req, res) => {
    const result = await customer_service_1.CustomerService.createCustomerIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Customer created successfully",
        data: result
    });
});
//  Get all customers
const getAllCustomer = (0, catchAsync_1.default)(async (req, res) => {
    const customers = await customer_service_1.CustomerService.getAllCustomerIntoDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Customers fetched successfully",
        data: customers
    });
});
// Get a specific customer by ID
const getCustomerById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const customer = await customer_service_1.CustomerService.getCustomerByIdIntoDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Customer fetched successfully",
        data: customer
    });
});
// update customer by ID
const updateCustomer = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await customer_service_1.CustomerService.updateCustomerIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Customer updated successfully",
        data: result
    });
});
// delete customer by ID
const deleteCustomer = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    await customer_service_1.CustomerService.deleteCustomerIntoDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Customer deleted successfully",
    });
});
exports.CustomerController = {
    createCustomer,
    getAllCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};
