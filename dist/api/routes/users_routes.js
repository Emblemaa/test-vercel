"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (_, res) => {
    try {
        res.status(200).send("Accounts endpoint");
    }
    catch (err) {
        res.status(500).send(err);
    }
});
module.exports = router;
//# sourceMappingURL=users_routes.js.map