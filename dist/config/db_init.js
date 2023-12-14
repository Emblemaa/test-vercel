"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const dbInit = () => {
    models_1.Users.sync({ force: true });
};
exports.default = dbInit;
//# sourceMappingURL=db_init.js.map