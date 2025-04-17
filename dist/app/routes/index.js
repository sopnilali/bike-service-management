"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_route_1 = require("../modules/Customer/customer.route");
const bike_route_1 = require("../modules/Bike/bike.route");
const Servicerecord_route_1 = require("../modules/ServiceRecord/Servicerecord.route");
const router = express_1.default.Router();
const modulesRoutes = [
    {
        path: "/customers",
        routes: customer_route_1.CustomerRoutes
    },
    {
        path: "/bikes",
        routes: bike_route_1.BikeRoutes
    },
    {
        path: "/services",
        routes: Servicerecord_route_1.ServiceRoutes
    }
];
modulesRoutes.forEach(({ path, routes }) => [
    router.use(path, routes)
]);
exports.default = router;
