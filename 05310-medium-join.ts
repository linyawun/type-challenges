//link: https://github.com/type-challenges/type-challenges/blob/main/questions/05310-medium-join/README.md

//reference: https://github.com/type-challenges/type-challenges/issues/14125
//check if the rest array is empty, if it is, return the first element and don't add the separator
type Join<T extends any[], U extends string | number> = T extends [
  infer F extends string,
  ...infer R extends string[]
]
  ? R['length'] extends 0
    ? F
    : `${F}${U}${Join<R, U>}`
  : '';
