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
const User_1 = __importDefault(require("../models/User"));
class UserController {
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.create({
                email: 'mamelia.bob@mackenzie.com',
                password: 'Dani'
            });
            return res.status(201).json(user);
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = yield User_1.default.findOne({ email });
            if (user.password === password) {
                return res.status(200).json({ user, token: 'eu amo o orlando' });
            }
            return res.status(400);
        });
    }
}
exports.default = new UserController();
