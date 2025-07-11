import app from '../src/api/app.js';
import { expressToHandler } from 'vercel-express';

export default expressToHandler(app);