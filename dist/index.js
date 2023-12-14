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
const database_1 = __importDefault(require("./config/database"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const routes = require("./routes/index");
// import dbInit from "./api/config/db_init";
var app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use("/api", routes);
app.listen(process.env.PORT || 8080, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Server starting!");
        yield database_1.default.authenticate();
        // dbInit();
        console.log("Server running!");
    }
    catch (err) {
        console.log(err);
    }
}));
exports.default = app;
//# sourceMappingURL=index.js.map