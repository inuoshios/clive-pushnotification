import dotenv from 'dotenv';

dotenv.config();

export default {
  port: parseInt(process.env.PORT!),
  appId: process.env.APP_ID!,
  appKey: process.env.SECRET_KEY!
};
