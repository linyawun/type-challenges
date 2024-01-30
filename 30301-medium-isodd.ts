// link: https://github.com/type-challenges/type-challenges/blob/main/questions/30301-medium-isodd/README.md

// use template literal type to split the number into single digits, and check if the last digit is odd
type IsOdd<T extends number> = `${T}` extends `${number | ''}${
  | 1
  | 3
  | 5
  | 7
  | 9}`
  ? true
  : false;
