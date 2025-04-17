"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_route_1 = require("../modules/Customer/customer.route");
const router = express_1.default.Router();
const modulesRoutes = [
    {
        path: "/customers",
        routes: customer_route_1.CustomerRoutes
    }
];
modulesRoutes.forEach(({ path, routes }) => [
    router.use(path, routes)
]);
exports.default = router;
