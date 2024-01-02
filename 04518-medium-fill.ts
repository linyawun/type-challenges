// link: https://github.com/type-challenges/type-challenges/blob/main/questions/04518-medium-fill/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/14102
// use Count to count length of array
// use Flag to check if need to fill
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Count extends any[] = [],
  Flag extends boolean = Count['length'] extends Start ? true : false
> = Count['length'] extends End
  ? T
  : T extends [infer R, ...infer U]
  ? Flag extends false
    ? [R, ...Fill<U, N, Start, End, [...Count, 0]>]
    : [N, ...Fill<U, N, Start, End, [...Count, 0], Flag>]
  : T;
