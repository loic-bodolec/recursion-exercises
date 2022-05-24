function sumNumbers(n: number): number {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

console.log(sumNumbers(5)); // -> 15
console.log(sumNumbers(7)); // -> 28

export default sumNumbers;
