// link: https://github.com/type-challenges/type-challenges/blob/main/questions/00089-hard-required-keys/README.md
// reference: https://github.com/type-challenges/type-challenges/issues/2664

// Required<Pick<T, K>> will return the required keys of T
type RequiredKeys<T, K = keyof T> = K extends keyof T
  ? T extends Required<Pick<T, K>>
    ? K
    : never
  : never;
