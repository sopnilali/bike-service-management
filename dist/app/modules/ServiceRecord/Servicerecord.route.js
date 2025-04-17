"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Servicerecord_controller_1 = require("./Servicerecord.controller");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const Servicerecord_validation_1 = require("./Servicerecord.validation");
const router = express_1.default.Router();
router.get('/status', Servicerecord_controller_1.ServiceRecordController.geServiceRecordStatus);
router.post('/', (0, validationRequest_1.default)(Servicerecord_validation_1.ServiceRecordValidate.createServiceRecordValidateSchema), Servicerecord_controller_1.ServiceRecordController.CreateServiceRecord);
router.get('/', Servicerecord_controller_1.ServiceRecordController.getAllServiceRecord);
router.get('/:id', Servicerecord_controller_1.ServiceRecordController.getServiceRecordById);
router.put('/:id/complete', (0, validationRequest_1.default)(Servicerecord_validation_1.ServiceRecordValidate.updateServiceRecordValidateSchema), Servicerecord_controller_1.ServiceRecordController.updateServiceRecord);
router.delete('/:id', Servicerecord_controller_1.ServiceRecordController.deleteServiceRecord);
exports.ServiceRoutes = router;
