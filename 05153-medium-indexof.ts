// link: https://github.com/type-challenges/type-challenges/blob/main/questions/05153-medium-indexof/README.md

// use Equal to avoid test case of string, number. boolean
// use Count to store the index of U
type IndexOf<T, U, Count extends any[] = []> = T extends [infer L, ...infer R]
  ? Equal<L, U> extends true
    ? Count['length']
    : IndexOf<R, U, [...Count, 0]>
  : -1;
