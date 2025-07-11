import app from '../src/Api/app.js';
import { expressToHandler } from 'vercel-express';

export default expressToHandler(app);