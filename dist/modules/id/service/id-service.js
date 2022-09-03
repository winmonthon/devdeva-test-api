"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const id_schema_1 = __importDefault(require("../model/id-schema"));
const status_enum_1 = __importDefault(require("../../../common/status.enum"));
const IdService = {
    create(payload) {
        return new id_schema_1.default(payload).save();
    },
    getOne(query) {
        return id_schema_1.default.findOne(Object.assign(Object.assign({}, query), { status: status_enum_1.default.ACTIVE }));
    },
    getAll(query) {
        return id_schema_1.default.find(Object.assign(Object.assign({}, query), { status: status_enum_1.default.ACTIVE }));
    },
    delete(query) {
        return id_schema_1.default.findOneAndUpdate(Object.assign({}, query), { status: status_enum_1.default.DELETED });
    },
    update(query, payload) {
        return id_schema_1.default.findOneAndUpdate(Object.assign(Object.assign({}, query), { status: status_enum_1.default.ACTIVE }), payload);
    },
    getAndUpdate(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield id_schema_1.default.findOneAndUpdate({ key }, { $inc: { counter: 1 } }, { new: true, upsert: true });
            return result.counter;
        });
    },
};
exports.default = IdService;
