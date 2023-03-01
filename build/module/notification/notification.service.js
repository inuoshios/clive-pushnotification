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
exports.sendNotification = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../../config"));
const sendNotification = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Basic " + config_1.default.appKey,
    };
    const url = "https://onesignal.com/api/v1/notifications";
    const body = {
        app_id: config_1.default.appId,
        headings: { en: payload.title },
        contents: { en: payload.body },
        included_segments: ["All"],
        content_available: true,
        small_icon: "ic_notification_icon",
        data: {
            PushTitle: payload.title
        }
    };
    try {
        const data = yield axios_1.default.post(url, body, { headers: headers });
        return { code: 200, data: data.data };
    }
    catch (e) {
        console.log(e);
        return { code: 404, data: e.message };
    }
});
exports.sendNotification = sendNotification;
