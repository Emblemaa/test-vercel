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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUsername = exports.getById = exports.create = void 0;
const models_1 = require("../models");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.Users.create(payload);
    return user;
});
exports.create = create;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.Users.findByPk(id);
    if (!user) {
        throw new Error("not found");
    }
    return user;
});
exports.getById = getById;
const getByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.Users.findOne({ where: { username: username } });
    if (!user) {
        throw new Error("not found");
    }
    return user;
});
exports.getByUsername = getByUsername;
//# sourceMappingURL=users_repository.js.map