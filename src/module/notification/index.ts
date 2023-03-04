import express from "express";
import { notification, notificationById } from "./notification.controller";

const router = express.Router();

router.post("/notification", notification);
router.post("/notification/:playerId", notificationById);

export default router

