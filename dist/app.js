"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
//middleware
app.use((0, cors_1.default)({
    origin: ['localhost:3000'],
    credentials: true
}));
// parser
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use('/api', routes_1.default); // all route
app.get('/', (req, res) => {
    res.json({
        status: true,
        message: "Bike Service Management API IS LIVE 👑 🛠"
    });
});
app.use(globalErrorHandler_1.default); // global error handler
app.use(notFound_1.default); // wrong api call without crash server
exports.default = app;
