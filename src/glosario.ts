// 1. Tipo
let ejemploTipo: number = 10;
// Definición: indica qué tipo de dato puede tener una variable.

// 2. Union Type
let ejemploUnion: string | number = "ID001";
// Permite que una variable acepte más de un tipo.

// 3. Interface
interface User {
  name: string;
  age: number;
}
let userExample: User = { name: "Juan", age: 20 };
// Sirve para definir estructuras de objetos.

// 4. Enum
enum Role {
  Admin,
  User,
  Guest,
}
let rol: Role = Role.Admin;
// Conjunto de valores constantes.

// 5. Función tipada
function sumar(a: number, b: number): number {
  return a + b;
}
// Funciones donde se definen tipos para parámetros y retorno.

console.log("Glosario cargado correctamente");
