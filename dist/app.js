"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_middleware_1 = __importDefault(require("./app-middleware"));
const app_router_1 = __importDefault(require("./app.router"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(app_middleware_1.default);
app.use(app_router_1.default);
const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => res.send({
    message: 'Hello',
    date: new Date(),
}));
try {
    mongoose_1.default.connect((_a = process.env.DATABASE_URI) !== null && _a !== void 0 ? _a : '');
    console.log('MONGO CONNECTION OPEN');
}
catch (error) {
    console.error('MONGO CONNECTION ERROR', error);
}
try {
    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`);
    });
}
catch (error) {
    console.log('error', error);
}
