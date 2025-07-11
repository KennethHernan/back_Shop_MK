import app from '..';
import { expressToHandler } from 'vercel-express';

export default expressToHandler(app);