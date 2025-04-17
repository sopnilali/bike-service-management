import express from 'express'
import { ServiceRecordController } from './Servicerecord.controller';
import validationRequest from '../../middlewares/validationRequest';
import { ServiceRecordValidate } from './Servicerecord.validation';

const router = express.Router();
router.get('/status', ServiceRecordController.geServiceRecordStatus)
router.post('/', validationRequest(ServiceRecordValidate.createServiceRecordValidateSchema), ServiceRecordController.CreateServiceRecord)
router.get('/', ServiceRecordController.getAllServiceRecord)
router.get('/:id', ServiceRecordController.getServiceRecordById)
router.put('/:id/complete',validationRequest(ServiceRecordValidate.updateServiceRecordValidateSchema), ServiceRecordController.updateServiceRecord)
router.delete('/:id', ServiceRecordController.deleteServiceRecord )



export const ServiceRoutes = router