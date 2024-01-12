// link: https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md

// check if T is never, use [T] to avoid distributive conditional types
// T extends B to check if T can be extended to B, if it can, then check if B can be extended to T, if it can, then T is not a union type, else T is a union type
// use [B] and [T] to avoid distributive conditional types
type IsUnion<T, B = T> = [T] extends [never]
  ? false
  : T extends B
  ? [B] extends [T]
    ? false
    : true
  : never;
