import express from "express";
import cors from "cors"
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import productoRoutes from "./product.js";
import { connectDB } from '../utils/database.js';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'OPTIONS', 'HEAD', 'CONNECT'],
}));
morgan.token('body', (req, res) => {
    if (res._body) {
        return JSON.stringify(res._body);
    }
    return '-';
})

(async () => {
  try {
    await connectDB();
    console.error('Conectado');
  } catch (e) {
    console.error('Error al conectar la base de datos en app.js');
  }
})();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

app.use("/api", productoRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Bienvenido al servicio Mayikh Style"
    })
})

export default app;