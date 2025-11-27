function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

const result = updateStock(10, -3);
console.log("Nuevo stock:", result);
