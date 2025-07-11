import app from '../src/api/app.js';

export default function handler(req, res) {
  return app(req, res);
}