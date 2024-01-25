// link: https://github.com/type-challenges/type-challenges/blob/main/questions/21220-medium-permutations-of-tuple/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/29657
// split the tuple into two parts: [F, ...L] , use F first and use L first, and union two parts
type PermutationsOfTuple<
  T extends unknown[],
  Prev extends unknown[] = []
> = T extends [infer F, ...infer L]
  ?
      | [F, ...PermutationsOfTuple<[...Prev, ...L]>]
      | (L extends [] ? never : PermutationsOfTuple<L, [...Prev, F]>)
  : [];
