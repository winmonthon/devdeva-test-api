"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("./controller/auth-controller"));
const router = express_1.default.Router();
//register
router.post('/register', auth_controller_1.default.register);
//signin
router.post('/signin', auth_controller_1.default.signin);
exports.default = router;
