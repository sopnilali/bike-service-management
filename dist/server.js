"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
const server = async () => {
    try {
        app_1.default.listen(config_1.default.port, () => {
            console.log(`Bike Service Management Server port ${config_1.default.port}`);
        });
    }
    catch (err) {
        console.log(`Example app listening on port ${config_1.default.port}`);
    }
};
server();
