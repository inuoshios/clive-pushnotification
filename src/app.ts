import express, { Request, Response } from 'express';
import config from './config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ msg: "push notification test" });
});

app.listen(config.port, () => {
  console.info(`app is running on port: ${config.port}`);
});