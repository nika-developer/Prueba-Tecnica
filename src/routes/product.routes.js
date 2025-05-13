// Se importa Router de express para crear rutas
import Router from 'express';
// Se importan los metodos desde el controlador de productos para manejar las peticiones
import {getAllProduct, getProductById, createProduct, deleteProduct, updateProduct} from '../controllers/product.controller.js';

const router = Router();

// Se crean las rutas para manejar las peticiones de productos
router.get("/productos", getAllProduct);

router.get("/productos/:id", getProductById);

router.post("/productos", createProduct);

router.delete("/productos/:id", deleteProduct);

router.put("/productos", updateProduct);

export default router;
