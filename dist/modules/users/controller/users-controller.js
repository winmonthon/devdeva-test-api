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
const users_service_1 = __importDefault(require("../service/users-service"));
const id_controller_1 = __importDefault(require("../../id/controller/id-controller"));
const UsersController = {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { firstName, lastName, gender, } = req.body;
                const foundUser = yield users_service_1.default.getOne({
                    firstName,
                    lastName,
                });
                if (foundUser) {
                    throw 'Username has already used.';
                }
                const userId = yield id_controller_1.default.createStdId('user');
                yield users_service_1.default.create({
                    firstName,
                    lastName,
                    gender,
                    id: userId
                });
                res.status(200).json({
                    success: true,
                });
            }
            catch (err) {
                console.log(err);
                res.status(400).json(err);
            }
        });
    },
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const found = yield users_service_1.default.getAll({});
                res.status(200).json(found);
            }
            catch (err) {
                res.status(400).json({
                    success: false
                });
            }
        });
    },
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const found = yield users_service_1.default.getOne({ id });
                res.status(200).json(found);
            }
            catch (err) {
                res.status(400).json({
                    success: false
                });
            }
        });
    },
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { firstName, lastName, gender, } = req.body;
                yield users_service_1.default.update({ id }, {
                    firstName,
                    lastName,
                    gender,
                });
                res.status(200).json({
                    success: true
                });
            }
            catch (err) {
                res.status(400).json({
                    success: false
                });
            }
        });
    },
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield users_service_1.default.delete({ id });
                res.status(200).json({
                    success: true,
                });
            }
            catch (err) {
                console.log(err);
                res.status(400).json(err);
            }
        });
    }
};
exports.default = UsersController;
