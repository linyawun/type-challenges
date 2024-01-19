// link: https://github.com/type-challenges/type-challenges/blob/main/questions/05360-medium-unique/README.md

// Includes<U, F>  checks if U includes F, if it does, remove F and keep recursing, else include F in U and keep recursing
type Unique<T extends unknown[], U extends unknown[] = []> = T extends [
  infer F,
  ...infer R
]
  ? Includes<U, F> extends true
    ? Unique<R, U>
    : Unique<R, [...U, F]>
  : U;

// keep checking if T includes U
type Includes<T extends unknown[], U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Includes<R, U>
  : false;
