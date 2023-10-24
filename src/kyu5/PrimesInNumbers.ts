// https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/typescript

export const primeFactors = (n: number): string => {
  const primeFactorsMap: Record<number, number> = {};

  for (let factor = 2; factor <= n; factor++) {
    while (n % factor === 0) {
      n /= factor;
      primeFactorsMap[factor] = (primeFactorsMap[factor] || 0) + 1;
    }
  }

  return Object.entries(primeFactorsMap)
    .map(([factor, power]) => `(${factor}${power > 1 ? `**${power}` : ``})`)
    .join('');
};
