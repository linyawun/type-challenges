// link: https://github.com/type-challenges/type-challenges/blob/main/questions/00090-hard-optional-keys/README.md

// check if T extends Required<Pick<T, K>>, if yes, then it's not optional
type OptionalKeys<T, K = keyof T> = K extends keyof T
  ? T extends Required<Pick<T, K>>
    ? never
    : K
  : never;
