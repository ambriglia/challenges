export function diagonalDifference(arr: number[][]): number {
  const length = arr[0][0];
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < length; i++) {
    const num1 = arr[i + 1][i];
    sum1 += num1;
    const num2 = arr[i + 1][length - 1 - i];
    sum2 += num2;
  }

  return Math.abs(sum1 - sum2);
};
