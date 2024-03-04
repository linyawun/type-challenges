// link: https://github.com/type-challenges/type-challenges/blob/main/questions/00300-hard-string-to-number/README.md

// use extends number to check if the string is a number
type ToNumber<S extends string> = S extends `${infer N extends number}`
  ? N
  : never;
