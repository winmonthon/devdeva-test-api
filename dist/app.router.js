"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_router_1 = __importDefault(require("./modules/auth/auth-router"));
const service_router_1 = __importDefault(require("./modules/service/service-router"));
const orders_router_1 = __importDefault(require("./modules/orders/orders-router"));
const app = (0, express_1.default)();
//app.use('<-- /path -->', <-- Router -->)
app.use('/v1/services', service_router_1.default);
app.use('/v1/auth', auth_router_1.default);
app.use('/v1/orders', orders_router_1.default);
exports.default = app;
