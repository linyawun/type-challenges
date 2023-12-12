// link: https://github.com/type-challenges/type-challenges/blob/main/questions/08767-medium-combination/README.md
// reference: https://github.com/type-challenges/type-challenges/issues/11027

// use T[number] to get the union of all the elements in T
// use A to iterate all elements in T
// use Combination<[],Exclude<A,U>> to get the union of all the combinations of the rest elements in T, first parameter is an empty array because it's no use in this recursion
type Combination<T extends string[], A = T[number], U = A> = U extends string
  ? U | `${U} ${Combination<[], Exclude<A, U>>}`
  : never;
