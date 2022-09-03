"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_service_1 = __importDefault(require("../service/orders-service"));
const auth_controller_1 = __importDefault(require("../../auth/controller/auth-controller"));
const OrdersController = {
    getAll(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = ((_b = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1]) || null;
                if (!token) {
                    throw 'no token';
                }
                const user = yield auth_controller_1.default.decode(token);
                if (!user) {
                    throw 'User does not exit';
                }
                const found = yield orders_service_1.default.getAll({
                    'customer._id': user._id
                });
                res.status(201).json(found);
            }
            catch (err) {
                res.status(400).json(err);
            }
        });
    },
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { service_id } = req.params;
                const found = yield orders_service_1.default.getAll({ _id: service_id });
                res.status(201).json(found);
            }
            catch (err) {
                res.status(400).json(err);
            }
        });
    }
};
exports.default = OrdersController;
