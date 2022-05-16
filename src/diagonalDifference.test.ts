import { diagonalDifference } from "./diagonalDifference";

describe('diagonalDifference', () => {
  it('should calculate the diagonal difference', () => {
    const input = [
      [3],
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
    ];

    const result = diagonalDifference(input);

    expect(result).toEqual(15);
  })
})
