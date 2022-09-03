"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orders_controller_1 = __importDefault(require("./controller/orders-controller"));
const router = express_1.default.Router();
//create
// router.post('/', OrdersController.createOrders)
//get all
router.get('/', orders_controller_1.default.getAll);
//get one
router.get('/:service_id', orders_controller_1.default.getById);
exports.default = router;
