import { Request, Response } from "express";
import { sendNotification, sendNotificationById } from "./notification.service";

export const notification = async (req: Request, res: Response) => {
  const { title, body } = req.body;
  const { code, data } = await sendNotification({ title, body });

  res.status(code).json({ data: data });
};

export const notificationById = async (req: Request, res: Response) => {
  const { title, body } = req.body;
  const { playerId } = req.params;
  const { code, data } = await sendNotificationById({ title, body, playerId });

  res.status(code).json({ data });
};