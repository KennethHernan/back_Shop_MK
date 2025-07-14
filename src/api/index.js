import http from "http";
import app from './app.js';
import { connectDB } from "../utils/database.js";

const PORT = 5000;
let isConnected = false;

if (!isConnected) {
  await connectDB(); // <--- conexión explícita
  isConnected = true;
}

const server = http
  .createServer(app)

  .listen(PORT)
  .on("listening", () => console.log(`http://localhost:${PORT}`))
  .on("error", (error) => {
    console.log(error);
    process.exit(1);
  });
