import express from "express";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import env from "./config.js";
import productRoutes from "./routes/product.routes.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Se crea una variable para el puerto del servidor
const port = env.port ?? 3000;

const app = express();

// Middlewares necesarios para el funcionamiento de la API REST
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal para servir 'index.html'
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(productRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
