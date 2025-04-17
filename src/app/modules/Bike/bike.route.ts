import express from 'express'
import { BikeController } from './bike.controller';


const router = express.Router();

router.post('/', BikeController.createBike) // create bike
router.get('/', BikeController.getAllBikes) // get all bikes
router.get('/:id', BikeController.getBikeById) // get single bike by bikeid
router.put('/:id', BikeController.updateBike) // update bike data
router.delete('/:id', BikeController.deleteBike) // delete bike data

export const BikeRoutes = router