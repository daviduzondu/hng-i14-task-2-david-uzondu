import { env } from "@hng-i14-task-0-david-uzondu/env/server";
import express, { type Express } from "express";
import cors from "cors";


const app: Express = express();
app.use(
 cors({
  origin: env.CORS_ORIGIN,
  methods: ["GET", "POST", "OPTIONS"],
 }),
);

app.use(express.json());

app.get("/", (_req, res) => {
 res.status(200).send("OK");
});

export default app;