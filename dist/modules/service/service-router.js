"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_controller_1 = __importDefault(require("./controller/service-controller"));
const router = express_1.default.Router();
//create
router.post('/', service_controller_1.default.createService);
//get all
router.get('/', service_controller_1.default.getAll);
//booking
router.post('/:service_id/booking', service_controller_1.default.createBooking);
//get one
router.get('/:service_id', service_controller_1.default.getById);
exports.default = router;
