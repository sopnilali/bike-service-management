"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenHelper = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (jwtPayload, secret, expiresIn) => {
    const options = { expiresIn };
    return jsonwebtoken_1.default.sign(jwtPayload, secret, options);
};
const verifyToken = (token, secret) => {
    return jsonwebtoken_1.default.verify(token, secret);
};
exports.tokenHelper = {
    generateToken,
    verifyToken
};
