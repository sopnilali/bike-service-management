import express from 'express'
import { CustomerRoutes } from '../modules/Customer/customer.route';

const router = express.Router();

const modulesRoutes = [
    {
        path: "/customers",
        routes: CustomerRoutes
    }
]
modulesRoutes.forEach(({path, routes})=> [
    router.use(path, routes)
])

export default router
