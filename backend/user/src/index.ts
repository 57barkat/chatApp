import Express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import { createClient } from "redis";

dotenv.config();
connectdb();
const redisUrl = process.env.REDIS_URL;
if (!redisUrl) {
  throw new Error("REDIS_URL is not defined");
}
export const redisClient = createClient({ url: redisUrl });
const app = Express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`User service is running on port ${port}`);
});
