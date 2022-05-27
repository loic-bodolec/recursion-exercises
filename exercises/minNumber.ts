function minNumber(numbers: number[]): number {
  if (numbers.length == 1) {
    return numbers[0];
  }
  const prevMin = minNumber(numbers.slice(1));
  const currentNb = numbers[0];

  if (currentNb < prevMin) {
    return currentNb;
  } else return prevMin;
}

export default minNumber;
