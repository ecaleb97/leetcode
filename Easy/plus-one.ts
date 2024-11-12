function plusOne(digits: number[]): number[] {
  let number = "";
  digits.forEach((d) => {
    number += d;
  });
  let arraySum = BigInt(number) + 1n;
  let result: number[] = [];
  console.log(arraySum);
  arraySum
    .toString()
    .split("")
    .forEach((d) => result.push(Number(d)));

  console.log(result);
  return result;
}

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
