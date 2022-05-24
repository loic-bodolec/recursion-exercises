function sumNumbersRecursive(n: number): number {
  // Condition d'arrêt : fondamental pour une fonction récursive,
  // sinon elle continue à s'appeler à l'infini
  if (n === 0) {
    return n;
  }
  return n + sumNumbersRecursive(n - 1);
}

console.log(sumNumbersRecursive(5)); // -> 15
console.log(sumNumbersRecursive(7)); // -> 28

export default sumNumbersRecursive;
