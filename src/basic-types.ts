// 1. Tipos fundamentales
let productName: string = "Mouse Gamer";
let productPrice: number = 15000;

// 2. Tipo unión
let productId: string | number = "ABC123";
productId = 500; 

// 3. Interfaz
interface Product {
  name: string;
  price: number;
}

let myProduct: Product = {
  name: "Teclado Mecánico",
  price: 35000,
};

console.log("Nombre:", productName);
console.log("Precio:", productPrice);
console.log("ID:", productId);
console.log("Producto:", myProduct);
