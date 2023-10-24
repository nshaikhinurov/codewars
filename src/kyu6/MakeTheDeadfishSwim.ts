// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript

const commands: Record<string, (v: number, result: number[]) => number> = {
  i: (v: number) => v + 1,
  d: (v: number) => v - 1,
  s: (v: number) => v * v,
  o: (v: number, result: number[]) => {
    result.push(v);

    return v;
  },
};

/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  let v = 0;
  const result: number[] = [];

  for (const command of data) {
    if (command in commands) {
      v = commands[command](v, result);
    }
  }

  return result;
}
