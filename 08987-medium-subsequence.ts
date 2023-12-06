// link: https://github.com/type-challenges/type-challenges/blob/main/questions/08987-medium-subsequence/README.md
// reference: https://github.com/type-challenges/type-challenges/issues/9091

// [F] to take the first element, [...Subsequence<R>] to take the rest subsequence of the array, [F, ...Subsequence<R>] to take the first element and the rest subsequence
// example: [1, ...Subsequence<[2]>] => Subsequence<[2]> will return [2] and [1, ...[2]] will return [1, 2]
type Subsequence<T extends any[]> = T extends [infer F, ...infer R]
  ? [F] | [...Subsequence<R>] | [F, ...Subsequence<R>]
  : [];
