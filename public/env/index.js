"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDatabaseName = exports.mongoUrl = void 0;
require("dotenv/config");
_a = process.env, exports.mongoUrl = _a.MONGO_URL, exports.mongoDatabaseName = _a.MONGO_DATABASE_NAME;
