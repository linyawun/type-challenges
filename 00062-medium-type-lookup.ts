// link: https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/149
// check if U extends { type: T }, if true, return U, otherwise return never
// this can make sure U has a property type with value T
type LookUp<U, T> = U extends { type: T } ? U : never;
