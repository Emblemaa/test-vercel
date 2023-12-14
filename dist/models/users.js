"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
var UserRole;
(function (UserRole) {
    UserRole[UserRole["ADMIN"] = 0] = "ADMIN";
    UserRole[UserRole["USER"] = 1] = "USER";
})(UserRole || (exports.UserRole = UserRole = {}));
class Users extends sequelize_1.Model {
}
Users.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    role: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    timestamps: true,
    sequelize: database_1.default,
    paranoid: true,
    hooks: {
        beforeCreate: (user, _) => {
            {
                user.password =
                    user.password && user.password != ""
                        ? bcrypt_1.default.hashSync(user.password, 10)
                        : "";
            }
        },
    },
});
exports.default = Users;
//# sourceMappingURL=users.js.map