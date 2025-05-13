//Se importa la libreria crypto para generar un id unico universal para cada producto
import crypto from "crypto";

// Se crea un array vacio para almacenar los productos como simulacion de una base de datos
let products = [{
    id: crypto.randomUUID(),
    name: "Producto 1",
    price: 100,
    onStock: true,
},
{
    id: crypto.randomUUID(),
    name: "Producto 2",
    price: 200,
    onStock: false,
},
{
    id: crypto.randomUUID(),
    name: "Producto 3",
    price: 300,
    onStock: true,
}];
//Ruta para obtener todos los productos
const getAllProduct = (req, res) => {
    res.json({
        status: "success",
        data: {
            Product: products,
        },
    });
};

// Ruta para obtener un producto por su id
const getProductById = (req, res) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({
            status: "error",
            message: "Producto no encontrado",
        });
    }

    res.json({
        status: "success",
        data: {
            Product: product,
        },
    });
};

// Ruta para crear un nuevo producto
const createProduct = (req, res) => {
    const { name, price,onStock } = req.body;

    const newProduct = {
        id: crypto.randomUUID(),
        name,
        price,
        onStock,
    };

    products.push(newProduct);

    res.json({
        status: "success",
        data: {
            Product: newProduct,
            message: "Producto creado exitosamente",
        },
    });
};

// Ruta para eliminar un producto por su id
const deleteProduct = (req, res) => {
    const { id } = req.params;
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: "error",
            message: "Producto no encontrado",
        });
    }

    products.splice(index, 1);

    res.json({
        status: "success",
        message: "Producto eliminado exitosamente",
    });
};

// Ruta para actualizar un producto por su id
const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name,price,onStock } = req.body;

    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({
            status: "error",
            message: "Producto no encontrado",
        });
    }

    product.name = name;
    product.price = price;
    product.onStock = onStock;


    res.json({
        status: "success",
        message: "Producto actualizado exitosamente",
    });
};

export {
    createProduct,
    deleteProduct,
    getAllProduct,
    getProductById,
    updateProduct,
};