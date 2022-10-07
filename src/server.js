"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./database/config");
const app_1 = __importDefault(require("./start/app"));
app_1.default.listen(8080, () => {
    (0, config_1.connect)();
    console.log('server is running at http://localhost:8080 🔥');
});
