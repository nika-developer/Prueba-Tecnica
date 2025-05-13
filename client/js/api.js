// Se crea una variable para la URL de la API
const API_URL = "http://localhost:3000/productos";

// Se crea una funcion async await para obtener los productos desde la API 
//Se manejan los erroes con un try catch
export async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Error del servidor");
        }
        const result = await response.json();
        return result.data.Product;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return [];
    }
}
