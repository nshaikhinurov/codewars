// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/typescript

export default function add(x: number): any {
  let sum = x;

  const fn = (x: number) => {
    sum += x;

    return fn;
  };

  fn.valueOf = () => sum;

  return fn;
}
