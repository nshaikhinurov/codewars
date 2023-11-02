// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/typescript
const isbnRegex = /^\d{9}[0-9X]$/;

export function validISBN10(isbn: string): boolean {
  if (!isbnRegex.test(isbn)) {
    return false;
  }

  let sum = 0;

  for (let i = 0; i < isbn.length; i++) {
    sum += (i + 1) * (isbn[i] === 'X' ? 10 : Number(isbn[i]));
  }

  return sum % 11 === 0;
}
