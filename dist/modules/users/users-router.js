"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = __importDefault(require("./controller/users-controller"));
const router = express_1.default.Router();
//create
router.post('/', users_controller_1.default.createUser);
//get all
router.get('/', users_controller_1.default.getAll);
//get by id
router.get('/:id', users_controller_1.default.getById);
//update 
router.put('/:id', users_controller_1.default.updateUser);
//delete
router.delete('/:id', users_controller_1.default.deleteUser);
exports.default = router;
