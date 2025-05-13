// Se importa la dependecia de express para mejorar la creacion de rutas
import express from "express";
// Se importa la dependecia de morgan para mejorar la visualizacion de las peticiones
import morgan from "morgan";
// Se importa la dependecia de cors para mejorar la seguridad de las peticiones
import cors from "cors";
// Se importa la dependecia de dotenv para manejar variables de entorno
import env from "./config.js";
import productRoutes from "./routes/product.routes.js";

//Se crea una variable para el puerto del servidor que viene desde el archivo .env y si no existe se le asigna el valor 3000 por defecto
const port = env.port ?? 3000;

const app = express();

//Middlewares necesarios para el funcionamiento de la API REST

//Se usa este middleware para mejorar la seguridad de las peticiones
app.use(cors());

//Se usa este middleware para mejorar la visualizacion de las peticiones en la consola
app.use(morgan("dev"));

//Se usa este middleware para que el servidor pueda recibir datos en formato JSON
app.use(express.json());

app.use(productRoutes);

app.listen(port, () =>
    console.log(`Server is running on port ${port}`)
);
