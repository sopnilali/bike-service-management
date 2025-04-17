"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const customer_validation_1 = require("./customer.validation");
const customer_controller_1 = require("./customer.controller");
const router = express_1.default.Router();
router.post('/', (0, validationRequest_1.default)(customer_validation_1.CustomerValidate.createCustomerValidateSchema), customer_controller_1.CustomerController.createCustomer); // create customer
router.get('/', customer_controller_1.CustomerController.getAllCustomer); // get all customer
router.get('/:id', customer_controller_1.CustomerController.getCustomerById); // get customer by using customerId
router.put('/:id', (0, validationRequest_1.default)(customer_validation_1.CustomerValidate.updateCustomerValidateSchema), customer_controller_1.CustomerController.updateCustomer); // update customer using patch method
router.delete('/:id', customer_controller_1.CustomerController.deleteCustomer); // delete customer
exports.CustomerRoutes = router;
