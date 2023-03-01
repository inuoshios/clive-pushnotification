import express from "express";
import { notification } from "./notification.controller";

const router = express.Router();

router.post("/notification", notification);

export default router

