import {config} from "dotenv";
// Se importa la libreria dotenv para manejar variables de entorno
config()

// Se crea una variable de entorno para el puerto del servidor
const env = {
    port: process.env.PORT

};

export default env;

