"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const notFound = (req, res, next) => {
    const error = new Error(`API Not Found! ${req.url}`);
    return res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: error.message,
        error: error.stack,
    });
};
exports.default = notFound;
