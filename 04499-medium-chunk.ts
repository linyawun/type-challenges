// link: https://github.com/type-challenges/type-challenges/blob/main/questions/04499-medium-chunk/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/14101
// use C to get current array, if C's length is equal to N, then return [C, ...Chunk<T, N>], else return Chunk<R, N, [...C, F]>
// C extends [] is for the case that T is empty array
type Chunk<T extends any, N extends number, C extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? C['length'] extends N
    ? [C, ...Chunk<T, N>]
    : Chunk<R, N, [...C, F]>
  : C extends []
  ? C
  : [C];
