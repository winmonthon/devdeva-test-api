"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_schema_1 = __importDefault(require("../model/service-schema"));
const status_enum_1 = __importDefault(require("../../../common/status.enum"));
const ServiceService = {
    create(payload) {
        return new service_schema_1.default(payload).save();
    },
    getOne(query) {
        return service_schema_1.default.findOne(Object.assign(Object.assign({}, query), { status: status_enum_1.default.ACTIVE }));
    },
    getAll(query) {
        return service_schema_1.default.find(Object.assign(Object.assign({}, query), { status: status_enum_1.default.ACTIVE }));
    },
    delete(query) {
        return service_schema_1.default.findOneAndUpdate(Object.assign({}, query), { status: status_enum_1.default.DELETED });
    },
    update(query, payload) {
        return service_schema_1.default.findOneAndUpdate(Object.assign({}, query), payload);
    },
};
exports.default = ServiceService;
