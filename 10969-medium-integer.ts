// link: https://github.com/type-challenges/type-challenges/blob/main/questions/10969-medium-integer/README.md

// number extends T checks if number is assignable to T, if T is a concrete number type (e.g. 42, 3.14), then number is child type of T, otherwise T is a generic number type (e.g. number, number | string), then number is not assignable to T
// when number extends T is true, means T is more generic type, so return never, because we can't sure T is integer
type Integer<T extends number | string> = number extends T
  ? never
  : `${T}` extends `${infer N}.${infer R}`
  ? never
  : T;
