"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model");
const dbInit = () => {
    model_1.Users.sync({ force: true });
};
exports.default = dbInit;
//# sourceMappingURL=db_init.js.map