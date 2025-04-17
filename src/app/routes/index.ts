import express from 'express'
import { CustomerRoutes } from '../modules/Customer/customer.route';
import { BikeRoutes } from '../modules/Bike/bike.route';
import { ServiceRoutes } from '../modules/ServiceRecord/Servicerecord.route';

const router = express.Router();

const modulesRoutes = [
    {
        path: "/customers",
        routes: CustomerRoutes
    },
    {
        path: "/bikes",
        routes: BikeRoutes
    },
    {
        path: "/services",
        routes: ServiceRoutes
    }
]
modulesRoutes.forEach(({path, routes})=> [
    router.use(path, routes)
])

export default router
