import express from 'express'
import validationRequest from '../../middlewares/validationRequest';
import { CustomerValidate } from './customer.validation';
import { CustomerController } from './customer.controller';

const router = express.Router();


router.post('/', validationRequest(CustomerValidate.createCustomerValidateSchema), CustomerController.createCustomer) // create customer
router.get('/', CustomerController.getAllCustomer) // get all customer
router.get('/:id', CustomerController.getCustomerById) // get customer by using customerId
router.patch('/:id', validationRequest(CustomerValidate.updateCustomerValidateSchema), CustomerController.updateCustomer) // update customer using patch method

router.delete('/:id', CustomerController.deleteCustomer) // delete customer

export const CustomerRoutes = router