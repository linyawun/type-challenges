// link: https://github.com/type-challenges/type-challenges/blob/main/questions/03243-medium-flattendepth/README.md

// use length of U to count current flatten depth, if U['length'] equals S, return T and end flatten
// if T extends [infer F, ...infer R], if F extends any[], flatten F and add 1 to U
type FlattenDepth<
  T extends any[],
  S extends number = 1,
  U extends any[] = []
> = U['length'] extends S
  ? T
  : T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...FlattenDepth<F, S, [...U, 1]>, ...FlattenDepth<R, S, U>]
    : [F, ...FlattenDepth<R, S, U>]
  : T;
