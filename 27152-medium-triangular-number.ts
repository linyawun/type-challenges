// link: https://github.com/type-challenges/type-challenges/blob/main/questions/27152-medium-triangular-number/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/28553

// use length to get number
type CountArr<N extends number, R extends string[] = []> = R['length'] extends N
  ? R
  : CountArr<N, [...R, '']>;

type Triangular<
  N extends number,
  R extends any[] = [],
  Count extends string[] = []
> = Count['length'] extends N
  ? R['length']
  : Triangular<
      N,
      [...CountArr<[...Count, '']['length']>, ...R],
      [...Count, '']
    >;
