"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const status_enum_1 = __importDefault(require("../../../common/status.enum"));
const IdSchema = new mongoose_1.default.Schema({
    key: {
        type: String,
        required: true,
    },
    counter: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        enum: Object.values(status_enum_1.default),
        default: status_enum_1.default.ACTIVE,
    },
}, { timestamps: true, strict: true });
const idModel = mongoose_1.default.model('id', IdSchema);
exports.default = idModel;
