// link: https://github.com/type-challenges/type-challenges/blob/main/questions/09896-medium-get-middle-element/README.md

// check if length of T is 0, 1, or 2, if true, return T, else check if T extends [any, ...infer M, any], if true, return GetMiddleElement<M>, else return never
type GetMiddleElement<T extends any[]> = T['length'] extends 0 | 1 | 2
  ? T
  : T extends [any, ...infer M, any]
  ? GetMiddleElement<M>
  : never;
