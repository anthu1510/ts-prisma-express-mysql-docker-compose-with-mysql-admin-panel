import express, { Application } from "express";
import userRouter from "../routes/user.route"

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api/users", userRouter)

export default app;
