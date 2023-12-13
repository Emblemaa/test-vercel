"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const accountRoutes = require("./users_routes");
router.use("/accounts", accountRoutes);
router.get("/health", (_, res) => {
    try {
        res.status(200).send("TMR Backend okay");
    }
    catch (err) {
        res.status(500).send(err);
    }
});
module.exports = router;
//# sourceMappingURL=index.js.map