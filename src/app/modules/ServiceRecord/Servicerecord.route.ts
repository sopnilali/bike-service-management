import express from 'express'
import { ServiceRecordController } from './Servicerecord.controller';

const router = express.Router();
router.get('/status', ServiceRecordController.geServiceRecordStatus)
router.post('/', ServiceRecordController.CreateServiceRecord)
router.get('/', ServiceRecordController.getAllServiceRecord)
router.get('/:id', ServiceRecordController.getServiceRecordById)
router.put('/:id', ServiceRecordController.updateServiceRecord)
router.delete('/:id', ServiceRecordController.deleteServiceRecord )



export const ServiceRoutes = router