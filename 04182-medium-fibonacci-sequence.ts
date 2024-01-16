// link: https://github.com/type-challenges/type-challenges/blob/main/questions/04182-medium-fibonacci-sequence/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/4204
// use length to count number
// use [...Prev, ...Current] to accumulate the fibonacci sequence
type Fibonacci<
  T extends number,
  CurrentIndex extends any[] = [1],
  Prev extends any[] = [],
  Current extends any[] = [1]
> = CurrentIndex['length'] extends T
  ? Current['length']
  : Fibonacci<T, [...CurrentIndex, 1], Current, [...Prev, ...Current]>;
