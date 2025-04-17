"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    res.json({
        success: data.success,
        message: data.message,
        statusCode: data.statusCode,
        data: data.data || null || undefined,
    });
};
exports.default = sendResponse;
