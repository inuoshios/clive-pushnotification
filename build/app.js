"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const notification_1 = __importDefault(require("./module/notification"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.status(200).json({ msg: "push notification test" });
});
app.use(notification_1.default);
app.listen(config_1.default.port, () => {
    console.info(`app is running on port: ${config_1.default.port}`);
});
