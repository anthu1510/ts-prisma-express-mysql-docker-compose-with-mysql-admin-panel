import dotEnv from "dotenv";
import http from "http";
import app from "./app"

dotEnv.config();
console.log(`Env: ${process.env.NODE_ENV}`);
const port = process.env.Port || 5000
const server = http.createServer(app);

server.listen(port, () => console.log(`server listeing port ${port}`))