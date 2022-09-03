"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const status_enum_1 = __importDefault(require("../../../common/status.enum"));
const ServiceSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    picture: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    createdBy: {
        type: Object,
        default: { user: 'system' },
    },
    updateBy: {
        type: Object,
        default: { user: 'system' },
    },
    status: {
        type: String,
        enum: Object.values(status_enum_1.default),
        default: status_enum_1.default.ACTIVE,
    },
}, { timestamps: true, strict: true });
const ServiceModel = mongoose_1.default.model('service', ServiceSchema);
exports.default = ServiceModel;
