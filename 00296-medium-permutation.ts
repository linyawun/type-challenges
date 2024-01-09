// link: https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/614#issuecomment-790210311
// use [T] extends [never] to check if T is empty, use [] to avoid union distribution
type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never;
