"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const status_enum_1 = __importDefault(require("../../../common/status.enum"));
const UsersSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: Object.values(status_enum_1.default),
        default: status_enum_1.default.ACTIVE,
    },
}, { timestamps: true, strict: true });
const UsersModel = mongoose_1.default.model('user', UsersSchema);
exports.default = UsersModel;
