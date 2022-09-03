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
const auth_service_1 = __importDefault(require("../service/auth-service"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const SECRET_KEY = process.env.SECRET_KEY || '';
const AuthController = {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, fullName, password } = req.body;
                const foundUser = yield auth_service_1.default.getOne({ username });
                if (foundUser) {
                    throw 'Username has already used.';
                }
                const hash = yield bcrypt_1.default.hash(password, 12);
                const created = yield auth_service_1.default.create({
                    username,
                    fullName,
                    password: hash
                });
                const token = jsonwebtoken_1.default.sign({
                    username: created.username,
                    userId: created.id,
                }, SECRET_KEY, {
                    expiresIn: '7h',
                });
                res.status(200).json({
                    success: true,
                    data: created,
                    token
                });
            }
            catch (err) {
                console.log(err);
                res.status(400).json(err);
            }
        });
    },
    signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = req.body;
                const user = yield auth_service_1.default.getOne({ username });
                if (!user) {
                    throw 'username or password is invalid';
                }
                const checkPassword = yield bcrypt_1.default.compare(password, user.password);
                if (!checkPassword) {
                    throw 'username or password is invalid';
                }
                const token = jsonwebtoken_1.default.sign({
                    _id: user.id,
                    username: user.username,
                    fullName: user.fullName
                }, SECRET_KEY, {
                    expiresIn: '7h',
                });
                res.status(200).json({
                    success: true,
                    token,
                    data: user,
                });
            }
            catch (err) {
                console.log(err);
                res.status(400).json(err);
            }
        });
    },
    decode(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const decoded = (0, jwt_decode_1.default)(token);
            return decoded;
        });
    },
};
exports.default = AuthController;
