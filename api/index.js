import app from '../src/api/app.js';
import db from "../utils/database.js"

export default function handler(req, res) {
  return app(req, res);
}