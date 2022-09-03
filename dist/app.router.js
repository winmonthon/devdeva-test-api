"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_router_1 = __importDefault(require("./modules/users/users-router"));
const app = (0, express_1.default)();
//app.use('<-- /path -->', <-- Router -->)
app.use('/users', users_router_1.default);
exports.default = app;
