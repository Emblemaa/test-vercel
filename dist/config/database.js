"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const sequelize_1 = require("sequelize");
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER;
const dbPassword = process.env.DB_PASSWORD;
const sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
    dialectOptions: {
        ssl: {
            require: true,
        },
    },
});
exports.default = sequelize;
//# sourceMappingURL=database.js.map