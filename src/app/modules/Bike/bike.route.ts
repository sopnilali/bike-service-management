import express from 'express'
import { BikeController } from './bike.controller';
import validationRequest from '../../middlewares/validationRequest';
import { BikeValidateSchema } from './bike.validation';


const router = express.Router();

router.post('/', validationRequest(BikeValidateSchema.createBikeValidateSchema), BikeController.createBike) // create bike
router.get('/', BikeController.getAllBikes) // get all bikes
router.get('/:id', BikeController.getBikeById) // get single bike by bikeid
router.put('/:id', BikeController.updateBike) // update bike data
router.delete('/:id', BikeController.deleteBike) // delete bike data

export const BikeRoutes = router