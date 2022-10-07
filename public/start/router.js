"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DataController_1 = __importDefault(require("../app/controllers/DataController"));
const UserController_1 = __importDefault(require("../app/controllers/UserController"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => res.send('hello'));
router.get('/data', DataController_1.default.index);
router.post('/', DataController_1.default.store);
router.post('/user', UserController_1.default.store);
router.post('/login', UserController_1.default.login);
exports.default = router;
