"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const status_enum_1 = __importDefault(require("../../../common/status.enum"));
const AuthSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    updateBy: {
        type: String,
        default: 'system',
    },
    status: {
        type: String,
        enum: Object.values(status_enum_1.default),
        default: status_enum_1.default.ACTIVE,
    },
}, { timestamps: true, strict: true });
const AuthModel = mongoose_1.default.model('auth', AuthSchema);
exports.default = AuthModel;
