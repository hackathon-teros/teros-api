"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("../env");
console.log(env_1.mongoDatabaseName, env_1.mongoUrl);
const conn = mongoose_1.default.connection;
function connect() {
    mongoose_1.default.connect(env_1.mongoUrl, {
        dbName: env_1.mongoDatabaseName
    });
    conn.on('connected', () => {
        console.log('database is connected successfully 📦');
    });
    conn.on('disconnected', () => {
        console.log('database is disconnected successfully');
    });
    conn.on('error', console.error.bind(console, 'connection error:'));
}
exports.connect = connect;
