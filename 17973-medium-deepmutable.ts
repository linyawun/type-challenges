// link: https://github.com/type-challenges/type-challenges/blob/main/questions/17973-medium-deepmutable/README.md

// check if T is a function, if it is, return T, else, use -readonly to remove readonly from T, and recursively call DeepMutable on each value of T
type DeepMutable<T extends Record<keyof any, any>> = T extends (
  ...args: any[]
) => any
  ? T
  : { -readonly [K in keyof T]: DeepMutable<T[K]> };
