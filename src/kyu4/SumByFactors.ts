// https://www.codewars.com/kata/54d496788776e49e6b00052f/train/typescript

export function sumOfDivided(I: number[]): number[][] {
  const maxAbs = maxAbsValueOf(I);
  const primes = primesUpTo(maxAbs);

  /* Declarative but less efficient solution:
  return primes
    .filter(p => I.some(i => i % p === 0))
    .map(p => [p, I.filter(i => i % p === 0).reduce((a, b) => a + b)]); */

  const result: number[][] = [];

  for (const p of primes) {
    let isAnyOfIsDividedByP = false;
    let sum = 0;

    for (const i of I) {
      if (i % p === 0) {
        sum += i;
        isAnyOfIsDividedByP = true;
      }
    }

    if (isAnyOfIsDividedByP) {
      result.push([p, sum]);
    }
  }

  return result;
}

const maxAbsValueOf = (I: number[]): number => {
  let maxAbs = 0;

  for (const i of I) {
    const abs_i = Math.abs(i);
    if (abs_i > maxAbs) {
      maxAbs = abs_i;
    }
  }
  return maxAbs;
};

const primesUpTo = (max: number) => {
  const primes = [2, 3];

  for (let candidate = 3; candidate <= max; candidate += 2) {
    if (primes.every(p => candidate % p !== 0)) {
      primes.push(candidate);
    }
  }

  return primes;
};
