// link: https://github.com/type-challenges/type-challenges/blob/main/questions/27862-medium-cartesianproduct/README.md

// check if T extends T union, and U extends U union, if true, return [T, U], else return never
type CartesianProduct<T, U> = T extends T
  ? U extends U
    ? [T, U]
    : never
  : never;
