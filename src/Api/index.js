import http from 'http';
import app from './app.js';
import db from "../utils/database.js"

const PORT = 5000;

const server = http.createServer(app)

 .listen(PORT)
  .on("listening", () => console.log(`http://localhost:${PORT}`))
  .on("error", (error) => {
    console.log(error);
    process.exit(1);
  });
