"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const status_enum_1 = __importDefault(require("../../../common/status.enum"));
const OrdersSchema = new mongoose_1.default.Schema({
    customer: {
        _id: {
            type: String,
            required: true
        },
        fullName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        }
    },
    service: {
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            default: 0
        },
        description: {
            type: String,
            default: ''
        }
    },
    status: {
        type: String,
        enum: Object.values(status_enum_1.default),
        default: status_enum_1.default.ACTIVE,
    },
}, { timestamps: true, strict: true });
const OrdersModel = mongoose_1.default.model('order', OrdersSchema);
exports.default = OrdersModel;
