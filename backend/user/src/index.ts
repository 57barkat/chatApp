import Express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import { createClient } from "redis";
import UserRoutes from "./routes/user.routes.js";
import { connectRabbitMQ } from "./config/rabbitmq.js";

dotenv.config();
connectdb();
connectRabbitMQ();
const redisUrl = process.env.REDIS_URL;
if (!redisUrl) {
  throw new Error("REDIS_URL is not defined");
}
export const redisClient = createClient({ url: redisUrl });
redisClient.on("error", (err) => console.log("Redis Client Error", err));
await redisClient
  .connect()
  .then(() => {
    console.log("👌🙌Connected to Redis successfully🤷‍♂️");
  })
  .catch((err) => {
    console.error("Error connecting to Redis:", err);
    process.exit(1);
  });
const app = Express();
app.use(Express.json());
app.use("/api/v1/users", UserRoutes);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`User service is running on port ${port}🫵🫵🫵🫵`);
});
