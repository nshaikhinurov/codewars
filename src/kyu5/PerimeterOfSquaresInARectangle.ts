// https://www.codewars.com/kata/559a28007caad2ac4e000083/train/typescript

// assuming F0 = 0, F1 = 1
const fibonacci = (n: number): number => {
  let [prev, next] = [0, 1];

  for (let i = 0; i < n - 1; i++) {
    [prev, next] = [next, prev + next];
  }

  return next;
};

const fiboSum = (n: number): number => fibonacci(n + 2) - 1;

export const perimeter = (n: number): number => {
  return 4 * fiboSum(n + 1);
};
