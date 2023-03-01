import { Request, Response } from "express";
import { sendNotification } from "./notification.service";

export const notification = async (req: Request, res: Response) => {
  const { title, body } = req.body;
  const { code, data } = await sendNotification({ title, body });

  res.status(code).json({ data: data });
};