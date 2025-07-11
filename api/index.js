import { connectDB } from '../src/utils/database.js';
import app from '../src/api/app.js';

let isConnected = false;

export default async function handler(req, res) {
  if (!isConnected) {
    await connectDB(); // <--- conexión explícita
    isConnected = true;
  }

  return app(req, res);
}