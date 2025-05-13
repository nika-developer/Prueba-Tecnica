//Se importa la funcion fetchProducts desde el archivo api.js para obtener los productos desde la API
import { fetchProducts } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
    const tableBody = document.querySelector("#product-table tbody");
    const products = await fetchProducts();

//Si no hay productos disponibles, se muestra un mensaje en la tabla
    if (products.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="3">No hay productos disponibles.</td></tr>`;
        return;
    }
//Si hay productos disponibles, se muestran en la tabla
    products.forEach((product) => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.onStock ? 'Si' : 'No'}</td>
    `;

        tableBody.appendChild(row);
    });
});
